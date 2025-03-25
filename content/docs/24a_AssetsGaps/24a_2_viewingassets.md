+++
title = "Viewing Assets"
description = "Assets"
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 206
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

### Viewing Asset List

In the navigation panel, tap on `Catalogue` > `Assets` to show the asset list

![Assets nav](/docs/catalogue/images/assets.png)

Here you can see all the assets which are available in your store.

The asset list is divided into 6 columns:

| Column            | Description                                                                                               |
| :---------------- | :-------------------------------------------------------------------------------------------------------- |
| **Sub catalogue** | The catalogue this asset belongs to                                                                       |
| **Code**          | The code of the catalogue item which this asset belongs to                                                |
| **Type**          | The type of asset                                                                                         |
| **Manufacturer**  | The manufacturer of your asset                                                                            |
| **Model**         | The model number of the asset                                                                             |
| **Class**         | The class of the asset. ie: `Cold chain equipment`                                                        |
| **Category**      | The subcategory of the asset e.g. section E003 in the PQS catalogue which is `Refrigerators and freezers` |

![Assets page](/docs/catalogue/images/assets_page.png)

The list can display a fixed number of assets per page. On the bottom left corner, you can see how many assets are currently displayed on your screen.

![Page](/docs/distribution/images/os_list_showing.png)

If you have more assets than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

#### Filter Assets

To add a filter to the page, choose the required filter from the drop down. Multiple filters can be combined.

![Asset filter](/docs/catalogue/images/assets_filter.png)

### Importing And Exporting

Importing and deleting of asset catalogue items can only be done on the [Open mSupply Central Server](/docs/5a_clientserver/5a-2-omscentral/).

#### Import

Assets can be imported from a comma-separated-file (csv) file using the `Import` button.

![Import assets](/docs/catalogue/images/assets_import.png)

This will open an import modal.

![Import assets modal](/docs/catalogue/images/assets_import_modal.png)

An example template (in csv format) is available for download here:

![Download template](/docs/catalogue/images/asset_import_template.png)

Data will need to be converted into the format of the csv template provided in order for Open mSupply to be able to process and upload this data.

A csv file can be uploaded once it has been created in the example format.

#### Export

A list of assets can be exported as a csv file using the `Export` button.

![Assets nav](/docs/catalogue/images/asset_export_button.png)

#### Delete

On the Open mSupply Central Server, there is the option to select and delete asset catalogue items. The `Actions` footer will display at the bottom of the screen when an asset row is selected:

![Assets delete](/docs/catalogue/images/delete-assets.png)
