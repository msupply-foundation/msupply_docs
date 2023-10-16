+++
title = "Cold Chain Notifications"
description = "mSupply Cold Chain notifications documentation."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 107
template = "coldchain/page.html"

[extra]
lead = ""
toc = true
top = true
+++

### Introduction
mSupply Cold Chain offers real-time instant message notifications straight to your phone. 

Notifications can be sent for hot and cold temperature breaches and an additional notification can be sent to warn users if the system is not currently receiving data from the temperature sensors. 

The instant message mediums currently supported are: 

- <a href="https://telegram.org/">Telegram Messenger</a>

### Telegram Messenger notifications for mSupply Cold Chain 

*Note: To enable Telegram Messenger notifications mSupply Cold Chain must be used in conjunction with mSupply Desktop or Open mSupply.* 

Telegram Messenger is a free application that can be used on Android or iOS phones and tablets. 
It can also be used on Windows, Linux and Mac computers. 

mSupply Cold Chain notifications are broadcast on dedicated <a href="https://telegram.org/faq_channels
">Telegram channels</a>. 

Channels are very configurable - they can broadcast notifications from a single facility or they can broadcast from multiple facilities. They can broadcast from a single piece of Cold Chain Equipment (CCE) within a facility or they can broadcast from multiple pieces of CCE within a facility. 

Users can subscribe to a single Telegram channel or they may subscribe to multiple Telegram channels, depending on their monitoring requirements. 

Here are some example configurations that are achieveable with mSupply Cold Chain: 

#### A single Telegram channel receiving notifications from all CCE at all facilities. 

This configuration allows for notifications for all CCE at all facilities to be broadcast to a single Telegram channel. 

All users in this scenario have subscribed to this single channel and so all users will see all notifications from all CCE at all facilities. 

![Telegram - Multi-facility, multi-CCE](/coldchain/images/multi-facility-telegram.png)

#### Multiple Telegram channels receiving notifications from all CCE at a single facility each. 

This configuration allows for separate Telegram channels for each facility. Users may subscribe to the facility that they are interested in monitoring. 

Here User 3 has subscribed to two channels. 

![Telegram - Single-facility, multi-CCE](/coldchain/images/single-facility-telegram.png)

### Setting up Telegram Messenger

#### 1. Install Telegram Messenger 
Users must install the <a href="https://telegram.org/">Telegram Messenger application</a> .

#### 2. Create a user account
Users must then create an account with Telegram. 

Once the user account is created users can then subscribe themselves, or can be subscribed by admin users, to the mSupply Cold Chain Telegram channels that they wish to monitor.

### Setting up Telegram Messenger notifications for mSupply Cold Chain 

The following steps describe how to set up Telegram notifications for mSupply Cold Chain.

#### 1. Create a Recipient Telegram channel
A Telegram channel is the place where users will receive mSupply Cold Chain notifications. See <a href="https://docs.msupply.foundation/coldchain/cold-chain-notifications/#a-single-telegram-channel-receiving-notifications-from-all-cce-at-all-facilities
">above</a> for illustrative channel examples. 

'Recipient' is the terminology used to describe someone or some thing that receives notifications. 

In our case we want to create a Telegram channel that will receive notifications - thus a 'Recipient Telegram channel'. 

1. Go to Create new message in Telegram
2. Select 'New Channel'
3. Give the channel an appropriate name, e.g. 'Cold chain alerts for Facility ABC'
4. Press the tick icon
5. Select 'Private Channel'
6. Press the arrow icon

The Recipient Telegram channel is now created.

#### 2. Add the mSupply notification bot to the Recipient Telegram channel

Each mSupply system has its own unique notification bot that serves to update the Recipient Telegram channel. 

*Note: If you do not know the name of the mSupply bot for your system please contact support@msupply.foundation*

Once the notification bot is added to the Recipient Telegram channel the channel is then linked to the mSupply system. 

The bot must be added as an administrator user. 

1. Click on the title of the Telegram channel
2. Select 'Administrators'
3. Select 'Add Admin'
4. Search for and select the mSupply bot
5. Grant the bot the default admin permissions
6. Press the tick icon

The Recipient Telegram channel will now be visible in the Recipients section of the notifications configuration page. 

#### 3. Create a Cold Chain Notification

This is where we set up each Cold Chain Notification. 

A notification can be for a single facility, or it can be for all facilities in the system. See <a href="https://docs.msupply.foundation/coldchain/cold-chain-notifications/#a-single-telegram-channel-receiving-notifications-from-all-cce-at-all-facilities
">above</a> for illustrative notification examples. 

1. In the notifications configuration page click on the 'New Notification' button. 
2. Select the type 'Cold Chain'
3. Give the notification a meaningful name, e.g. 'Cold chain alerts for all CCE in Facility ABC'
4. Select the required Recipient Telegram channel (or channels)
5. Check the types of alert required (high, low temperature, no data etc)
6. Check the preferences (reminders, confirmation messages)
7. Select the sensors to be alerted on. (Type a facility name to see all sensors in that facility)
8. Ensure the 'Enable' toggle is set to on. 
9. Save the notification

Notifications will now be sent to the Recipient Telegram channel. 

#### 4. Subscribe users to the Recipient Telegram channel

Admins can invite required users to the Telegram channel. 

Alternatively users may search for the channel and add themselves (only for Public channels). 

That's it! 

Notifications will now be sent to the Telegram channel and subscribed users will see them as they appear. 

