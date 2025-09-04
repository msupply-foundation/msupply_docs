+++
title = "Requirements"
description = "Requirements for Open mSupply."
date = 2022-06-10T11:38:00+00:00
updated = 2022-06-10T11:38:00+00:00
draft = false
weight = 30
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

## Open mSupply Requirements

Open mSupply runs on a number of platforms and for a basic installation has very modest hardware requirements.
The client can be a web browser, an android tablet or a PC running windows, linux or mac OS.
The server requires a little more memory and processing capability, depending on the number of users.

## Hardware Requirements

### General hardware recommendations

- In environments with regular power outages, it is highly recommended to procure laptop machines rather than desktop machines. Laptop machines will almost always be the best solution in terms of both cost and effectiveness for these reasons:
  - In environments with poor quality electricity supply, laptop computers will generally be more reliable than desktop computers with UPS protection. In such environments UPS batteries will normally die within 2 years. Laptop batteries have better power management and the batteries last longer
  - Even when the battery runs out on a laptop, the power management will normally cause the machine to shut down gracefully
  - Built-in microphone and camera for provision of support
  - Built-in Wi-Fi adaptor for network connection
  - Laptop computers are smaller and lighter than desktop computers, and so are less costly to ship
- A connected printer is not absolutely necessary in every situation, but for most situations it is a requirement. An ink-jet or laser is preferable
- Buy hardware for which good after sales support is available
- Buy brands with a reputation for quality (even if it means buying a older/slower machine)

### Desktop / laptop requirements

Hardware requirements vary widely depending on what you want to use Open mSupply for. Here's a rough guide:

| Machine                                    | Technical Minimum                                                                                                                                              | Recommended                                                                                                                                                                                                                               |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows Client machine for use with server | 64 bit processor<br/>Windows 10<br/>4 Gb RAM, 300Mb of disk space                                                                                              | 64 bit processor<br/>Windows 10<br/>8 Gb RAM, 500Mb of disk space                                                                                                                                                                         |
| Mac Client machine for use with server     | 64 bit processor<br/>macOS Mojave (10.14) – macOS Big Sur (11)(Latest release of major version is required, such as 10.14.6)<br/>4 Gb RAM, 300Mb of disk space | 64 bit processor<br/>Mac OS 10.14.6 or later<br/>8 Gb RAM, 500Mb of disk space                                                                                                                                                            |
| Windows server                             | 64 bit processor<br/>Windows 10 Pro or Win server 2019<br/>16 Gb RAM<br/>100 GB HDD/SDD volume with daily backups to an external volume                        | 64 bit processor<br/>Windows Server 2019+<br/>32 Gb RAM<br/>4 x HDD/SDD volumes, 3 configured as RAID1 or RAID5 with hot spare<br/>Daily backups to the fourth volume plus daily off-site backups<br/>Attached to a Smart UPS (see below) |
| Linux client or server                     | 64 bit processor<br/>Ubuntu 20+ or similar<br/>4 Gb RAM<br/>256 Gb storage                                                                                     | 64 bit processor<br/>Ubuntu 20+ or similar<br/>8 Gb RAM<br/>512 Gb storage                                                                                                                                                                |
| Windows single user                        | 64 bit processor<br/>Windows 10<br/>8 Gb RAM<br/>1 GB HDD/SDD volume with daily backups to an external volume                                                  | 64 bit processor<br/>Windows 10<br/>16 Gb RAM<br/> 1 GB HDD/SDD volume with daily backups to an external volume                                                                                                                           |

<div class="note">
Recording stock transactions is a core Open mSupply activity. Most stock transaction data is numeric. A numeric keypad is often helpful for machines that have a lot of data entry done on them.
</div>

### Mobile / tablet requirements

You are able to use a browser on a tablet to connect to an Open mSupply server, and the only requirement here is a suitably fast tablet with a browser such as chrome or firefox.

For a stand-alone, offline, solution a mobile application is also available for android devices.

Recommended Specifications:
In short, Open mSupply mobile runs on Android tablets (not on phones as there is too much data to use well on small phone screens).
The application requires at least Android 10

|                 | Minimum           | Recommended       |
| :-------------- | :---------------- | :---------------- |
| Display size    | 9.8 inches        | 10.1 inches       |
| Resolution      | 768 x 1024 pixels | 800 x 1200 pixels |
| Android version | 10                | 14                |
| Processor       | 64 bit            | 64 bit            |
| RAM             | 2 Gb              | 4 Gb              |
| Storage         | 32 Gb             | 64 Gb             |

<div class="note">If importing Fridge-tags you will require at least Android 12</div>

In order to provide support, the device must also be compatible with MDM (Mobile Device Management) software and support google services. Please contact [mSupply Foundation](https://msupply.foundation/#contact) for details.

Please contact us for testing and/or advice before making a large hardware purchase.

### Smart UPS

A 'smart' UPS ([Uninterruptible Power Supply](https://en.wikipedia.org/wiki/Uninterruptible_power_supply)) detects when the battery power is about to run out and sends a notification to software on the server which triggers a graceful shut down of the computer. To enable this, there needs to be a cable connection (normally USB) between the UPS and the computer combined with software running on the computer.

In our experience, the primary cause of computer hardware failure is data corruption due to ungraceful shutdowns. This happens when power to the computer is cut instantly, without any notification to the computer to shut down gracefully. If the machine is 'protected' by a normal UPS, then this can still happen when the battery power runs out. Even if the machine is notionally protected by a 'smart' UPS, there are a number of circumstances where this UPS protection fails:

- Cable connection and software can fail.
  - Cable becomes disconnected
  - Software isn't configured correctly
  - Software doesn't start up
- UPS batteries degrade (normally within 2 years of installation in environments with regular power cuts) and there is too little capacity to run long enough for the computer to shut down gracefully after receiving the notification from the UPS

Laptop computers tend to be much more resilient to power failure:

- A laptop's built-in 'smart' UPS is very reliable
- The internal batteries last much longer than UPS batteries
- Even if the laptop's internal battery degrades, the 'smart' function appears to work much more reliably than a standalone UPS communicating with a 'tower' computer.

Here are some additional advantages of laptops vs. desktop machines:

- Lower cost of freight:
  - To send the machine to site
  - To send spare parts for repair on-site
  - To retrieve the machine from site for any repairs that cannot be undertaken on site
- It is standard to have features such as Wi-Fi, Bluetooth and camera included by default and this may not be the case with desktops

A concern with laptop computers is security. It is easier to steal a laptop computer from an office than it is to steal a desktop computer. For this reason, laptops are normally configured with a physical locking feature such as [Kensington lock slot](https://en.wikipedia.org/wiki/Kensington_Security_Slot).

Because Open mSupply is dealing with lots of numbers (quantities of stock), <strong>it is highly recommended to have a keyboard with a numeric keypad</strong>. Smaller laptop computers (14“ screen or less) will not have this. Smaller laptop computers normally have an impractically small screen. It is therefore recommended to procure a laptop computer with a keyboard that includes a numeric keypad - which will necessarily entail a larger screen.

Useful productivity accessories for laptop computers include

- External mouse (not wireless - batteries replacement is expensive and environmentally problematic)
- External keyboard (not wireless - batteries replacement is expensive and environmentally problematic)
- External screen

## Bandwidth and Latency requirements

Firstly, this is a good time to mention our synchronisation system, which has saved many countries from a failed installation!

#### Offline (Sync) mode

- 128kbps bandwidth
- high latency (e.g. satellite) is OK, and users will not notice it in day-to-day operations, as sync is running in the background, and requests for data is fulfilled from the local database, not over the internet.
- intermittent (say only once a week) is OK

#### Cloud hosted (Online) mode

- The initial download of Javascript code is around 1 Mb, so a 512kbps connection or faster is best (loads in 10 seconds or so)
- You need an internet connection on to use Open mSupply in this mode.
- high latency (e.g. a satellite or overloaded connection) will result in slower performance

## Backup system

Once you start using Open mSupply, it's important that you have a method of backing up your data. In a default installation, Open mSupply stores all its data in a file that rapidly becomes large. You need, therefore, to have a high capacity removable storage device. We strongly recommend the use of an external hard disk using either firewire (IEEE 1394) or USB2 to facilitate off-site storage of backups.

- If not using our internet backup service, you need to be able to store backed up data off-site to prevent the risk of loss by fire, theft, etc.

## Antivirus

Windows based operating systems are particularly prone to malware if precautions are not taken. We recommend the following precautions:

- Install a reputable anti-virus program, including web protection if the computer has access to the internet
- Disable USB ports - refer to [this site](http://www.thewindowsclub.com/disable-enable-usb-windowunlock-pen-drive-at-office-or-school-computer) for suggested methods

Ensure that access to passwords which allow exceptions to the above two measures are kept secure.

## Database

Open mSupply supports both SQLite and PostgreSQL as database servers, with the selection made at time of installation.
We recommend using PostgreSQL when running a centralised or high-use server as it can provide greater performance than SQLite does. PostgreSQL does require a separate installation - you can use an existing installation, install separately to Open mSupply, or select the checkbox which is part of the server installation.

There is a minimum version for PostgreSQL of version 12.

## Central Servers

An installation of mSupply is currently required when running Open mSupply. This is used to manage a number of centralised aspects of the system.

From v2.0.00, the Open mSupply central server is also required for successful synchronisation. See the [Open mSupply central server](/docs/getting_started/central-server/) and [Open mSupply central server site configuration in mSupply](https://docs.msupply.org.nz/synchronisation:sync_sites#open_msupply_central_server_settings) for more details.

You will get the following error message if the Open mSupply central server is not configured:

![v6 not configured!](images-en/v6_not_configured.png)

The versions of both central servers and your Open mSupply remote site are important, as not all versions of each are compatible with each other.

The table below shows which versions of mSupply and Open mSupply Central you will require when running as an Open mSupply remote site:

| Open mSupply Remote | mSupply Central | Open mSupply Central |
| :------------------ | :-------------- | -------------------- |
| 1.1.00 - 1.1.16     | 7.04.01+        | N/A                  |
| 1.2.00+             | 7.05.05+        | N/A                  |
| 1.4.00+             | 7.09.00+        | N/A                  |
| 2.0.00+             | 7.14.04+        | 2.0.00+              |
| 2.1.00+             | 7.14.04+        | 2.1.00+              |
| 2.2.00+             | 7.14.04+        | 2.2.00+              |
| 2.3.00+             | 7.17.01+        | 2.3.00+              |
| 2.7.00+             | 8.01.03+        | 2.7.00+              |
| 2.8.00+             | 8.02.00+        | 2.7.00+              |
| 2.9.00+             | 8.03.04+        | 2.7.00+              |
| 2.9.02+             | 8.03.12+        | 2.9.02+              |
| 2.10.00+            | 8.04.04+        | 2.10.00+             |

If you attempt to connect to an incompatible server you'll get an error message like this:

![server version mismatch!](images-en/version_mismatch.png)
