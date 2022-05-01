<?php
/**
 * deploy_docs.php based on a gist from by Hayden Schiff (oxguy3)
 * Available at https://gist.github.com/oxguy3/70ea582d951d4b0f78edec282a2bebf9
 * 
 * No rights reserved. Dedicated to public domain via CC0 1.0 Universal.
 * See https://creativecommons.org/publicdomain/zero/1.0/ for terms.
 */
 
// random string of characters; must match the "Secret" defined in your GitHub webhook
define('GITHUB_SECRET', 'myopic8989old3332fool');
// name of the git branch that you're deploying
define('GITHUB_BRANCH', 'main');
// your email address, where you'll receive notices of deploy successes/failures
define('EMAIL_RECIPIENT', 'm2@msupply.foundation');
// domain of your website
define('SITE_DOMAIN', 'docs.msupply.foundation');

/**
 * Convenience function for sending emails
 */
function sendEmail($success, $message)
{
    $headers = 'Content-type: text/plain' . "\r\n" .
        'From: admin@'.SITE_DOMAIN;

    $subject = '['.SITE_DOMAIN.'] ';
    if ($success) {
        $subject .= 'Deploy success';
    } else {
        $subject .= 'Deploy failure';
        $headers .= "\r\n" .
            'X-Priority: 1 (Highest)' . "\r\n" .
            'X-MSMail-Priority: High' . "\r\n" .
            'Importance: High';
    }

    return mail(
        EMAIL_RECIPIENT,
        $subject,
        $message,
        $headers
    );
}

try {
    $signature = $_SERVER['HTTP_X_GITHUB_EVENT'];

    if (is_null($signature) || $signature != 'push') {
        header('HTTP/1.0 400 Bad Request');
        die('go away');
    }

    $payload = file_get_contents('php://input');

    // get the signature out of the headers and split it into parts
    $signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
    $sigParts  = explode('=', $signature);
    if (sizeof($sigParts) != 2) {
        throw new Exception('Bad signature: wrong number of \'=\' chars');
    }
    $sigAlgo = $sigParts[0];
    $sigHash = $sigParts[1];

    // verify that the signature is correct
    $hash = hash_hmac($sigAlgo, $payload, GITHUB_SECRET);
    if ($hash === false) {
        throw new Exception("Unknown signature algo: $sigAlgo");
    }
    if ($hash != $sigHash) {
        throw new Exception("Signatures didn't match. Ours: '$hash', theirs: '$sigHash'.");
    }

    // read the payload
    $data = json_decode($payload);
    if (is_null($data)) {
        throw new Exception('Failed to decode JSON payload');
    }

    // make sure it's the right branch
    $branchRef = $data->ref;
    if ($branchRef != 'refs/heads/'.GITHUB_BRANCH) {
        die("Ignoring push to '$branchRef'");
    }

    shell_exec('git pull');
//    - export DEPLOYPATH=/home/tmf/docs/
//    - /bin/cp -a /home/tmf/repositories/msupply_docs/public/. $DEPLOYPATH

    $mailBody = "GitHub payload:\r\n"
        . print_r($data, true)
        . "\r\n";

    $mailSuccess = sendEmail(true, $mailBody);

} catch (Exception $e) {
    $mailSuccess = sendEmail(false, strval($e));
}

if(!$mailSuccess) {
    header('HTTP/1.0 500 Internal Server Error');
    die('Failed to send email to admin!');
}

die("All good here!");

?>