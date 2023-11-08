+++
title = "Scheduled Notifications"
description = "Creating Scheduled Notifications"
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 110
template = "notify/page.html"

[extra]
toc = true
top = true
+++

It's often useful to be able to schedule a notification on a regular basis, for example you might want to get a summary of out of stock items from your store every monday morning, or a list of sites that haven't successfully synced in the last 24 hours.

The scheduled reports plugin allows you to create reports like this.

> Note: Right now, scheduled reports don't contain any conditional logic, so you can't create a report that only sends if there are out of stock items, or only sends if there are sites that haven't synced in the last 24 hours. This is something we may add in the future, or we may create another plugin that allows you to do this.

To configure a scheduled notification, go to `Notifications` and click `New Notification`.

Select `Scheduled` from dropdown, and assign a name to your notification.

![Creating a new scheduled notification](/notify/images/image.png)

After clicking `Create`, you'll be taken to the edit page for your notification.

![New Scheduled Notification](/notify/images/image-1.png)

## Selecting Recipients

The first thing you'll need to do is select the recipients for your notification.
Click the box under the `Recipients` label to select the recipients, you can search for and select recipients, recipient, lists or sql recipient lists.

![Selecting Recipients](/notify/images/image-2.png)

## Basic Templating

There are two templates for each scheduled report.
The first is the `Subject` template, currently is only used for the subject of the email that will be sent.

The second is the `Body` template, this is used for the body of the email and/or the text of the telegram message.

These templates are written using [Markdown](https://www.markdownguide.org/basic-syntax/), and [Tera](https://keats.github.io/tera/docs/) templates.

As a very simple example, you could use the following template for the body of your email:

```markdown
# Hello {{ recipient.name }}
```

![Basic Scheduled Templates](/notify/images/image-3.png)

The system will replace `{{ recipient.name }}` with the name of the recipient, when sending the email or telegram message.

![Example Telegram Message](/notify/images/image-5.png)

You can also use data from any associated queries in your templates, for example if you have a query called `out_of_stock_items` that returns a list of out of stock items, you could use a template like this to list them in the body of your email:

```
# Hello {{ recipient.name }}

Here are the items that are out of stock:
{% for item in out_of_stock_items %}
- {{ item.name }}
{% endfor %}
```

If your query returns only 1 row, you need to access the data using `query_name.0.column_name`, for example if you have a query with the number of sites that haven't syncd in teh last 24 hours, you would need to use a template like this:

```markdown
# Hello {{ recipient.name }}

{{ sites_not_synced.0.count }} sites have not synced in the last 24 hours!
```

## Scheduling the Notification

To schedule the notification, you need to set a Starting From date, and a Repeat Interval.

![Scheduling the notification](/notify/images/image-4.png)

The `Starting From` date and time that the first notification will be sent on.
The repeat interval can be set to `Daily`, `Weekly` or `Monthly`.

If `Monthly` is selected, and the `Starting From` date is the 31st of the month, the notification will be sent on the last day of every month, even if the month doesn't have 31 days.

To test the notification configuration, set the `Starting From` date 1 minute from now, Enable the configuration and click Save.
