+++
title = "Repacking Stock"
description = "Repack Stock"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 207
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Viewing stock

In the navigation panel, Go to `Inventory` and tap on the `Stock` submenu:

![Stock: nav](/docs/inventory/images/stock_gotostock.png)


## Repacking stock

The repack feature gives us the ability to break down stock into smaller pack sizes, consolidate it into larger pack sizes or move part or all of a stock line to a new location.

In the top right corner of the stock line detail page, click the `Repack` button.

![Stock repack button](/docs/inventory/images/stock_repack.png)

To begin with, the stock line won't have any repacks showing, so you'll see a window like this:

![Repack window with no repacks](/docs/inventory/images/repack-no-repacks.png)

Click the `New` button to start a repack:

![Repack entry form](/docs/inventory/images/repack-enter.png)

From here, you can enter the number of packs which you'd like to repack, up to a maximum of the current number of packs in stock (represented by the number next to `Packs available`) - in this case there are 5779 packs available.

You can then enter a new pack size, and optionally, enter a location for the new stock. The `New number of packs` is calculated automatically.
Click `Save` to save the changes. Clicking `Print` will allow you to print details of this repack action.

The repacks made from this stock item are shown in a list:

![Repack list](/docs/inventory/images/repack-list.png)

Clicking on one of the lines will show details of the repack, and allow printing of it:

![View an existing repack](/docs/inventory/images/repack-view.png)

Click the `Cancel` button at any time to close the repack modal.
s