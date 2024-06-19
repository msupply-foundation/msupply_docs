+++
title = "Support"
description = "Is something wrong? Here are some tools to help."
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The support section provides some tools for troubleshooting and supporting an Open mSupply installation.

## Viewing the server log

To view the server log, go to `Settings` in the lower section of the navigation panel:

![Admin: nav](/docs/settings/images/admin_nav.png)

You will see the `Support` section below the Synchronisation settings, click on this to view the options.

![Support: server log](/docs/settings/images/support_server_log.png)

The Support section allows you to view the server log files and download your database for support purposes.

Pressing the `View` button will open a new window which allows you to select the log file to view. The logs shown in the `Server log` drop down are all of the logs currently available on the server.

![Support: select log](/docs/settings/images/support_select_log.png)

<div class="note">Note that you will need to have logging enabled in order to view logs!</div>

To enable logging, the `logging` section is required in the `local.yaml` configuration file on the server. An example is shown below:

```
logging:
#   one of: All | Console | File
  mode: Console
#   one of:  Error | Warn | Info (default) | Debug | Trace
  level: Info
  directory: log
  filename: remote_server.log
  max_file_count: 10
  max_file_size: 1
```

After selecting a log file to view, the contents of the log is loaded. This make take a little time if the log is a large one!

![Support: select log](/docs/settings/images/support_log_loading.png)

When loaded, you'll see the text contents of the log:

![Support: select log](/docs/settings/images/support_log_contents.png)

To download the database, press the `Download` button. You can find this download in your download folder.

![Support: download database](/docs/settings/images/download_database.png)
