+++
title = "Managing Plugins"
description = "Install, configure and uninstall plugins from within Open mSupply"
date = 2026-06-29
updated = 2026-06-29
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

You can manage plugins using the **Plugins** management screen. From this one screen you can:

- see all of the plugins that are currently installed
- install a new plugin
- configure a plugins which support configuration
- uninstall a plugin

## Accessing the plugin management screen

To open the screen, go to `Manage` in the navigation panel and select `Plugins`.

<div class="note">The <code>Plugins</code> management screen is only available on the <a href="/docs/getting-started/central-server/">Open mSupply Central Server</a>, and only to users who have the <code>Access server administration</code> permission (see the <a href="/docs/settings/permissions/">Permissions</a> page).</div>

<!-- TODO: add screenshot of the Plugins management screen, e.g. images/plugins_list.png -->

## The plugins list

The main screen shows a table of every plugin currently installed on the central server. For each plugin you will see the following columns:

| Column      | Description                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| **Code**    | The plugin's unique identifier (its name)                                                     |
| **Version** | The version of the plugin that is installed                                                   |
| **Kind**    | Whether this is a `Backend` or `Frontend` plugin. A single plugin may add a row of each kind. |
| **Types**   | The categories of functionality the plugin provides (for example forecasting)                 |

At the end of each row there are two actions:

- a **settings** (cog) icon — opens the plugin's configuration screen. This is only shown for plugins that have configurable settings.
- a **delete** (trash) icon — uninstalls the plugin.

If no plugins are installed yet, the screen displays the message _"There are no plugins installed"_.

## Installing a plugin

Plugins are distributed as a **plugin bundle**, which is a single `.json` file generated with the open-mSupply command line tools. To install one:

1. Click the **Upload plugin** button in the top right of the screen. The _Upload plugin_ window opens.
2. Select the plugin bundle (`.json`) file to install. You can select more than one file to install several plugins at once.
3. Click **OK** to upload and install the selected plugin(s)

<div class="tip">The upload window will only accept <code>.json</code> files. If you select a different type of file you will see the error <i>"Invalid file type. Plugin bundles must be .json files."</i> &mdash; make sure you are selecting the plugin bundle and not, for example, a zipped folder or the plugin's source code.</div>

When the install completes successfully you will see the message _"Plugin installed successfully"_, the window closes, and the new plugin appears in the list.

<!-- TODO: add screenshot of the Upload plugin dialog, e.g. images/plugins_upload.png -->

## Configuring a plugin

Some plugins expose their own settings, which you can edit from the management screen instead of editing files by hand.

1. For a plugin that supports configuration, click the **settings** (cog) icon on its row (or click the row itself)
2. The _Configure plugin_ window opens, showing the form provided by that plugin
3. Make your changes and then either:
   - click **Save** to save your changes and keep the window open for further editing, or
   - click **OK** to save your changes and close the window

When the configuration is saved you will see the message _"Plugin configuration saved"_.

<div class="note">Plugin configuration is stored centrally and synchronised to all sites, so the settings you enter here apply across your whole system. For this reason, configuration can only be edited from the central server.</div>

## Uninstalling a plugin

To remove a plugin:

1. Click the **delete** (trash) icon on the plugin's row.
2. A confirmation window appears asking _"Are you sure you want to delete plugin '...'? It will stay active until the server is restarted."_
3. Confirm to remove the plugin.

When the plugin is removed you will see the message _"Plugin deleted. It will stay active until the server is restarted."_

<div class="warning">Uninstalling a plugin does not take effect immediately. The plugin will continue to run until the server is next restarted. Plan to restart the server after uninstalling a plugin if you need it to stop working straight away.</div>

## Managing plugins from the command line

The same install, list and uninstall actions are available on the server for administrators who prefer to work on the command line, using the `yarn plugin` helper commands. These are intended for developers and server administrators, and are documented in the [Front-End Plugins developer documentation](/docs/developer/front-end-plugins/).
