+++
title = "Assets"
description = "Viewing assets."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 52
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Managing your assets"
toc = true
top = false
+++

Assets in Open mSupply is a digital register to manage the creation and maintenance of assets. It allows health departments to keep track of, manage and maintain their assets.

From the **Assets** menu, you can view all of the assets currently in your store.

### Viewing Asset List

In the navigation panel, tap on 'Catalogue' > 'Assets' to show the asset list:

![Assets nav](/docs/catalogue/images/assets.png)

You can see all the assets which are available in your store:

The asset list is divided into 6 columns:

| Column            | Description                                                |
| :---------------- | :--------------------------------------------------------- |
| **Sub catalogue** | The catalogue this asset belongs to                        |
| **Code**          | The code of the catalogue item which this asset belongs to |
| **Type**          | The type of asset                                          |
| **Manufacturer**  | The manufacturer of your asset                             |
| **Model**         | The model number of the asset                              |
| **Class**         | The class of asset. ie: `Cold chain equipment`             |
| **Category**      | The subcategory of the asset                               |

![Assets page](/docs/catalogue/images/assets_page.png)

To add a filter to the page, choose the required filter from the drop down. Multiple filters can be combined.

![Assets filter](/docs/catalogue/images/assets_filter.png)

Assets can be selected and deleted using the toolbar action:

![Assets nav](/docs/catalogue/images/assets_delete.png)

### Importing And Exporting

#### Import

Assets can be imported from a csv file using the 'Import' button

![Assets nav](/docs/catalogue/images/assets_import.png)

This will open an import modal.

![Assets nav](/docs/catalogue/images/assets_import_modal.png)

An example template comma-separated-value (csv) is available for download here:

![Assets nav](/docs/catalogue/images/asset_import_template.png)

Data will need to be converted into the format of the csv template provided in order for Open mSupply to be able to process and upload this data.

A csv file can be uploaded once it has been created in the example format.

#### Export

Asset can be exported as a csv using the 'Export' button

![Assets nav](/docs/catalogue/images/asset_export_button.png)

### Managing status log reasons

Status log reasons can be managed using this button

![Assets nav](/docs/catalogue/images/manage_reasons_button.png)

Status log reasons can be added and deleted for a particular status here. These reasons can be added to a status log for additional context for why there is a new functional status.

![Log Reasons page](/docs/catalogue/images/manage_log_reasons.png)

This page will allow

- New log reasons to be created
- Log reasons to be deleted
- Log reason list to be filtered

![Log Reasons functionality](/docs/catalogue/images/log_reasons_functionality.png)
