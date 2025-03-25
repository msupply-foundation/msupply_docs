+++
title = "Notification Alerts"
description = "Temperature breach / excursion notifications"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 20
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Open mSupply can notify users in real-time if a temperature breach occurs. 

A notification is displayed at the top of every page of Open mSupply as a warning to check potentially affected stock. Once a breach is acknowledged then the notification is no longer shown.

Notifications can also be sent to users' phones via the Telegram instant messaging app. 


## Breaches

Users can be notified when a temperature breach is recorded for a sensor. 

If the following conditions have all been met, then a notification bar will appear on all pages:

- The vaccine module has been enabled for the current store
- The currently logged in user has permission to view temperature logs
- One or more sensors have recorded a temperature breach
- One or more of those breaches has not been acknowledged

Here's how the bar appears, shown at the top of the dashboard page:

![notification bar](/docs/coldchain/images/notification_bar.png)

<div class="tip">If the store has the vaccine module enabled, and the user does not have permission to view logs, or some other error occurs, then you will see a notification when you first login or change stores: <p><img src="/docs/coldchain/images/notification_warning.png" alt="Notification permission warning" /></p>This is just to let you know that this user won't be notified if a breach occurs.</div>

<br/>

The notification panel shows:
1. How long ago the breach was recorded
2. The temperature reading
3. The name of the sensor which recorded the breach
4. The name of the Location which the sensor is assigned to, if one is assigned
5. A button which takes you to the breaches page, where you can see all the details of the breach, along with other breaches

If you want to dismiss the notification bar - you'll need to acknowledge the breach. You can do this from the [breach list view](/docs/coldchain/monitoring/#breaches)


## Excursions

You can also be notified when a temperature has temporarily exceeded a configured threshold. This is called an 'excursion'. Once the temperature has returned to be within the threshold range, the notification will no longer be shown.