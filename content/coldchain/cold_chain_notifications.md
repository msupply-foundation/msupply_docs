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

#### 1. Create a Telegram channel
A Telegram channel is the place where users will receive mSupply Cold Chain notifications. See <a href="https://docs.msupply.foundation/coldchain/cold-chain-notifications/#a-single-telegram-channel-receiving-notifications-from-all-cce-at-all-facilities
">above</a> for illustrative channel examples. 

More coming soon!

