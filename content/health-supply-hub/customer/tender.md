+++
title = "Tender"
description = "Health Supply Hub user documentation."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 4
template = "health-supply-hub/page.html"

[extra]
toc = true
top = false
+++

#### Creating a Tender on mSupply

Tenders are created on mSupply through the Tender module. For further information on how to do this, see the [mSupply Tender Module Training Guide 2023](https://drive.google.com/file/d/1aZOy6aDVvtKFRtG7SezpMOofSCoHrFD4/view?usp=drive_link)

#### Tender Process

After a tender has been created on mSupply and then uploaded to Health Supply Hub, this will appear in “Tenders” with the status “Draft” (1).

![image](/health-supply-hub/images/customer_tender_draft.png)

The uploaded tender displays an overview of supplier interest on the tender (2):

| Invited           | Amount of suppliers you have invited to bid/quote on your tender |
| ----------------- | ---------------------------------------------------------------- |
| Registered        | Amount of suppliers who have registered (given interest) to bid  |
| Confirmed         | Amount of suppliers who have sent in a bid/quote                 |
| Total quote lines | Amount of item lines in total quoted by suppliers                |

Draft tenders cannot be viewed by the supplier. Before publishing a draft tender, ensure all details are correct as changes cannot be made afterwards. Publishing the tender (3) will make it live for suppliers to see and place bids. Once the tender is published, the status will change to “Open” (4). If you would like to withdraw your published tender, select “Withdraw tender” (5). If you withdraw your tender, a prompt will appear to provide a reason which will be sent to suppliers for withdrawing the tender.

![image](/health-supply-hub/images/tender_process_open.png)

<div class="note">
	Tenders cannot be deleted once published for audit purposes. They cannonly be withdrawn
</div>

Reasons that are provided for withdrawn tenders are published in “Reason” (6). Once the tender is withdrawn this will also be removed for the supplier.

![image](/health-supply-hub/images/customer_tender_withdrawn.png)

The types of statuses a tender can have include:

| Draft     | Tender has not yet been published                                   |
| --------- | ------------------------------------------------------------------- |
| Open      | Tender is published and live for suppliers to bid                   |
| Closed    | Tender has exceeded the closing date and no more bids can be placed |
| Withdrawn | Tender has been withdrawn                                           |

#### Draft Tenders

To review a draft tender, select the tender name to open.

![image](/health-supply-hub/images/customer_draft_tender_summary.png)

On the tender, check “Incoterm” and “Closing Date” are correct. Then, review the “Tender Line Items”. Ensure item name, conditions, product specifications, required packs and pack size are correct. Once you have finished reviewing the tender, you may choose to invite more suppliers or add tender documents (discussed later).

<div class="note">
	Currently, if there are any errors in the draft version of the tender, a new corrected version of the tender will need to be created on the mSupply Tender Module and re-uploaded to Health Supply Hub.
</div>

<div class="success">
	Select “Publish Tender” to publish your new tender. All invited suppliers will automatically receive an email invitation to participate in your tender.
</div>

#### Inviting Suppliers

![image](/health-supply-hub/images/invite_supplier_button.png)

Suppliers can be invited during the draft and open stages of a tender. To invite a supplier, select “Invite Supplier” on the tender home page or in the tender.

You may then choose suppliers from the “Supplier List” if you have created any, or search for the supplier using the search bar. Once you have selected suppliers to invite, select “OK”.

![image](/health-supply-hub/images/invite_supplier_modal.png)

This will immediately send an email invitation to the supplier for your tender.

<div class="note">
	Check your tender invitations before sending as this will automatically send an invitation once you select “OK”. You will not be able to uninvite suppliers.
</div>

#### Add a list of Suppliers to a Tender

mSupply requires you to select at least one supplier before being able to upload a tender. However, you can still invite more suppliers on Health Supply Hub.

If you have set up supplier lists, to add bulk suppliers go to “Invite Supplier” and choose your supplier list. Select your suppliers for your tender, then select OK.

![image](/health-supply-hub/images/invite_supplier_list.png)

#### View Suppliers

To view suppliers invited to your tender, select your tender, then select “Invited Suppliers”

invite suppliers tab image
![image](/health-supply-hub/images/view_invited_suppliers.png)

Invited Suppliers statuses include:

| Invited   | Supplier has been sent an invitation to bid                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft     | Supplier has submitted a draft quote - this quote may still be withdrawn or modified until the tender closes                                |
| Confirmed | Supplier has registered (shown interest) in bidding                                                                                         |
| Withdrawn | Supplier has withdrawn the quote. Suppliers will also need to provide a reason when withdrawing a quote. This will appear below the status. |

#### Extend Closing Date of Tender

If you would like to extend your closing date for your tender, select “Extend closing date”. Give the new date and reason for extension. An email update will be sent to the invited suppliers.

![image](/health-supply-hub/images/extend_closing_date.png)

![image](/health-supply-hub/images/extend_closing_date_modal.png)

#### Viewing the Tender

Select your tender to view from the tender list to open the detail view.

![image](/health-supply-hub/images/customer_tender_detail_view.png)

##### Tenderline Items

This is your tender item line details that you have uploaded to HSH. Here we can see where the details have been pulled from on the mSupply Tender module.

Details for HSH tender item lines come from the mSupply Tender module:

![image](/health-supply-hub/images/customer_tenderline_items_vs_tender_module.png)

| 1   | Item list sorting      |
| --- | ---------------------- |
| 2   | Number of packs        |
| 3   | Pack size              |
| 4   | Product Specifications |
| 5   | Conditions             |

##### Questions

If a supplier has submitted an inquiry regarding your tender, you can access it through the "Questions" section of your tender interface. Additionally, you will receive an email notification whenever a question is submitted. You have the option to respond exclusively to the inquiring supplier by deselecting the "Publish a notice" checkbox. Alternatively, you can choose to reply and publish a notice, which will allow all registered suppliers to receive an email notification.

![image](/health-supply-hub/images/customer_questions.png)

| 1   | All vs unanswered question filter                                                                                                                                                                                                                                                                     |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | Question Search                                                                                                                                                                                                                                                                                       |
| 3   | Asking Organisation                                                                                                                                                                                                                                                                                   |
| 4   | Answer                                                                                                                                                                                                                                                                                                |
| 5   | Notices allow you to create a public message so that all suppliers can see. This can help to clear confusion about your tender and prevent other suppliers from asking the same question. Type in your “Title” for your notice. Type in your message you would like to attach for your public notice. |

|

##### Notices

When a tender is in the open stage, a notice can be created and sent to all suppliers invited to the tender. Notices are announcements that can be used for providing any updates or changes to the tender.

Publish a notice for suppliers about your tender. A record of published notices will appear at the bottom of the notice menu. Notices will be emailed to registered suppliers and will also appear for suppliers in the Notice section.

![image](/health-supply-hub/images/customer_notices.png)

##### Tender Documents

Upload tender documents to provide extra information to suppliers for your tender. These include documents such as contracts, specifications, conditions, etc. These documents become visible to the supplier once you have published your tender.
An email will be sent to the registered suppliers notifying them of your tender document upload.

| 1   | In your tender, select “Tender Documents”                              |
| --- | ---------------------------------------------------------------------- |
| 2   | Select the icon to search and choose file, or drag/drop file to upload |
| 3   | Your tender document will appear here for you to open                  |
| 4   | Select the bin icon to delete the tender document                      |

![image](/health-supply-hub/images/customer_tender_documents.png)

#### Publishing a Tender

Once you have added your suppliers to the tender and checked the tender is correct, you can select “Publish Tender”. This will send an email notification to the invited suppliers as a request to participate in the tender.

Before a tender has been published, suppliers will not be able to see or upload quotes to the tender.

![image](/health-supply-hub/images/publish_tender_button.png)

#### Closed Tenders

Once tender submissions have been closed, you will be able to retrieve and review these submissions through the mSupply Tender Module. Refer to the [mSupply Tender Module Training Guide 2023](https://drive.google.com/file/d/1aZOy6aDVvtKFRtG7SezpMOofSCoHrFD4/view?usp=drive_link) for further information on this.

![image](/health-supply-hub/images/customer_closed_tender.png)
