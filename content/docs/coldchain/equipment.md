+++
title = "Equipment"
description = "Management of Cold Chain Equipment"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Cold Chain Equipment is a digital register fpr the creation and management of cold chain assets. It allows health departments to manage, record functional status logs, and update locations of cold chain assets.

From the **Equipment** menu, all assets available in a store can be viewed.

All cold chain assets of all stores are visible when accessing the **Equipment** menu via Open mSupply central server.

<p align="center">
    <img src="/docs/coldchain/images/equipment.png" width="400" height="525">
</p>

You can see all cold chain equipment available in your store:

The equipment list is divided into 6 columns:

| Column                | Description                                                      |
| :-------------------- | :--------------------------------------------------------------- |
| **Asset Number**      | The asset number                                                 |
| **Type**              | The type of asset                                                |
| **Manufacturer**      | The manufacturer of your asset                                   |
| **Model**             | The model number of the asset                                    |
| **Functional Status** | The functional status of the asset                               |
| **Serial Number**     | The serial number of the asset                                   |
| **Non-catalogue**     | Designates if the asset is not part of the primary PQS catalogue |
| **Notes**             | Notes entered about the asset                                    |

![Equipment nav](/docs/coldchain/images/equipment_route.png)

#### Paginate Equipment

The list can display a fixed number of patients per page. On the bottom left corner, you can see how many assets are currently displayed on your screen.

![Page](/docs/distribution/images/os_list_showing.png)

If you have more assets than the current limit, you can navigate to the other pages by tapping on the page number or using the right of left arrows (bottom right corner).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

You can also select a different number of rows to show per page using the option at the bottom right of the page.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

#### Filter Equipment

To add a filter to the page, choose the required filter from the drop down. Multiple filters can be combined.

![Equipment filters](/docs/coldchain/images/equipment_filter.png)

Assets can be selected and deleted using the toolbar action:

![Equipment delete action](/docs/coldchain/images/delete_rows.png)

### Importing And Exporting

#### Import

Cold chain assets can be imported from a csv file using the 'Import' button

<p align="center">
    <img src="/docs/coldchain/images/equipment_import_button.png" width="550" height="280">
</p>

This will open an import modal.

<p align="center">
    <img src="/docs/coldchain/images/equipment_import_modal.png" width="750" height="420">
</p>

An example template comma-separated-value (csv) is available for download here:

<p align="center">
    <img src="/docs/coldchain/images/equipment_import_template_download.png" width="750" height="420">
</p>

When accessing the import modal from central server, cold chain assets can be imported for a number of stores at once. In this case there will be a store column on the template example, and this field will be required.

The code of the store should be entered in this field.

Data will need to be converted into the format of the csv template provided in order for Open mSupply to be able to process and upload this data.

A csv file can be uploaded once it has been created in the example format.

<p align="center">
    <img src="/docs/coldchain/images/equipment_import_upload.png" width="750" height="420">
</p>

#### Export

Asset can be exported as a csv using the 'Export' button

<p align="center">
    <img src="/docs/distribution/images/export.png" width="150" height="67">
</p>

### Create new asset

Cold chain assets can be created manually with the 'New Asset' button

<p align="center">
    <img src="/docs/coldchain/images/create_asset_button.png" width="150" height="55">
</p>

Clicking this button will open the 'Create Asset' modal

With this modal you can assign:

- the Asset Category
- the asset catalogue item the asset belongs to
- the Asset number
- notes about the asset

If the asset does not belong to a catalogue item, you can use the toggle to create an asset which does not belong to a catalogue.

<p align="center">
    <img src="/docs/coldchain/images/create_asset_modal.png" width="750" height="420">
</p>

### Managing cold chain assets

Clicking on a row in the list will show the details of that asset

![Asset detail view](/docs/coldchain/images/asset_detail_view.png)

There are 4 tabs available to manage the asset:

![Detail view tabs](/docs/coldchain/images/asset_detail_view_tabs.png)

#### Summary tab

The 'Summary' tab can

- edit the serial number
- assign an installation date
- assign a replacement date
- assign locations to the the asset

Multiple locations can be assigned to the asset.

You can also view the functional status and edit the notes of the status log

![Asset detail summary notes](/docs/coldchain/images/asset_detail_summary_notes.png)

#### Status Logs

The 'Status Logs' tab shows all of the status logs of the asset.

![Asset logs tab](/docs/coldchain/images/status_logs_tab.png)

#### Documents

The 'Documents' tab shows documents which have been uploaded for the asset catalogue item the asset belongs to, and the documents uploaded for this asset.

Additional documents can be uploaded for this asset.

![Asset documents tab](/docs/coldchain/images/documents_tab.png)

#### Log

The 'Log' tab shows the activity log of this asset.

This records all user actions which have been taken for this asset using the Open mSupply system.

### Toolbar

#### Update Status

Clicking on the 'Update Status' button allows the creation of a new status log.

<p align="center">
    <img src="/docs/coldchain/images/update_status_button.png" width="200" height="62">
</p>

This will open a new status log modal

<p align="center">
    <img src="/docs/coldchain/images/status_log_modal.png" width="700" height="420">
</p>

This includes

- A new functional status
- A reason for the new functional status
- Any observations or notes

Additional documents including photos can be uploaded for this status log

<p align="center">
    <img src="/docs/coldchain/images/status_log_document_upload.png" width="700" height="420">
</p>

These documents can be viewed in the 'Status Logs' tab

![Status log document](/docs/coldchain/images/status_log_document.png)
