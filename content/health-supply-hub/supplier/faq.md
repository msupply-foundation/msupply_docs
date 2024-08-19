+++
title = "Frequently Asked Questions"
description = "Health Supply Hub FAQ"
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 80
template = "health-supply-hub/page.html"

[extra]
toc = true
top = false
+++

## The Manufacturer I want to bid with is not available in the list. What should I do?

Please email health-supply-hub@msupply.foundation with the list of any manufacturers you want to use in your quote or fill out the request form [here](https://docs.google.com/forms/d/e/1FAIpQLScv8Mmin1SXuJwD7MDALEYb648Nrb_XvLpBUer8YIhdwR9NpA/viewform?usp=sf_link).

In the mean time, please enter "Manufacturer Not On List" in the manufacturer field and include the real manufacturer name in the comment field so the purchaser can update their records when the manufacturer is added.

## What user role should I assign to my team members?

There are two user roles that can be assigned to users.

- `OrganisationAccess` gives a user the right to login to your organisation, upload documents, and submit bids/quotes.
- `OrganisationAdmin` adds user administration rights such as the ability to invite other users to the organisation, reset passwords, update names etc.

## I manage two companies with different portfolios of products. How is this scenario managed in Health Supply Hub?

When submitting a quote you should submit under the legal entity /organisation that would be legally responsible for supplying that product.
Therefore each company/legal entity should be registered on HSH, you'll need to login with a different user account for each organisation.

A separate username and password is required for each organisation, if you'd like help setting this up, please contact `health-supply-hub@msupply.foundation` for assistance.

## My Personalised Link To Register Has Expired. What Do I Do?

Please note that the HSH invite link expires after a short period of time and you will get an error if you click the link after it has expired.

1. If an administrator of your organisation created the link for you in HSH, they can generate another by resetting your password.
2. If you are the only administrator of your organisation, you can contact HSH support to receive a new link.

## When I Try To Upload My Quote I Get An Error Message. What Do I Do?

HSH is designed to guide you through identifying where errors are in your quote template. HSH will tell you which row on the Excel spreadsheet contains the error:

![Error Message - Pack Size Not A Whole Number](/health-supply-hub/supplier/images/faq_import_error.png)

In the above example, on Row 9 of the imported excel sheet this supplier:
a. has submitted something other than a whole number eg ‘1 tube’; and
b. has not entered in the manufacturer details.

## Video Tutorial - How to fix import errors

{{ youtube(id="36oNjYMW33M", class="youtube") }}

## I Want To Offer More Than One Product For A Particular Quote Item. How Do I Do That?

1. To offer more than one product for a particular Quote line you will need to insert an additional line to your Quote. You can do this by inserting a new row directly below the Quote Item you want to offer more than one product for, or add it in at the bottom of the list.

![Right Click on Line, and copy it](/health-supply-hub/supplier/images/faq_duplicate_line_1.png)
![Paste Line](/health-supply-hub/supplier/images/faq_duplicate_line_2.png)

2. Whatever row you choose to use to add in your additional product be sure to copy over the information for that Quote line that has been prefilled by the mSupply Tender module. This is required for HSH to be able to read your quote. Without it you will get an error when trying to upload your Quote to HSH
3. Don’t drag the information down into the new row. A common error that can occur is that any cell value ending in a number will be increased by one as shown in the example below:
   ![Accidental increment](/health-supply-hub/supplier/images/faq_duplicate_line_3.png)
4. The best method is to copy and paste the information directly from the original Quote line into your new Quote line
   ![Paste New Line](/health-supply-hub/supplier/images/faq_duplicate_line_4.png)

## Video Tutorial - How to provide alternative quotes

{{ youtube(id="BaSt_wkFHxg", class="youtube") }}

## I Want To Offer To Supply A Product By Either Sea or Air Freight. How Do I Do That?

1. To propose supply via Sea Freight AND Air Freight for the same item you will need to enter in two separate Quotes for the same product.
2. See the section below for tips on how to provide alternative quotes for each transport type.

## I've been asked to quote for both air and sea freight, how can I do this efficiently?

Alternative quotes for different freight type currently need to be provided on separate lines.
Following a process like this may make help speed up this process:

1. In the Quote form fill in the required details for one mode of transport only
2. Upload into Health Supply Hub to confirm the system will accept all quotes (if system doesn't, fix as directed)
3. Download Quote template from HSH again (this should include all items already imported)

   ![Quote template with first quote](/health-supply-hub/supplier/images/air_sea_1.png)

4. Copy all, and then paste at the bottom of the item list
   > Tip: To help identify the copied cells you could colour the cells and delete any items where alternative shipping is not being proposed from the copied cells
5. Remove the pricing and method of delivery details from all the copied cells
6. Fill in the new delivery method details

   ![Quote template with new method inputted](/health-supply-hub/supplier/images/air_sea_3.png)

7. Add filter to spreadsheet and order the first column "Line#" from smallest to largest
8. Fill out the pricing for the alternative method
9. Upload into Health Supply Hub
10. Do any final checks (either by downloading the quote form, or viewing the quotes in the tender details section of HSH)

    ![Quote template with both quotes](/health-supply-hub/supplier/images/air_sea_4.png)

11. Submit to Purchaser in Health Supply Hub

## How do I know my data is secure?

We understand the data uploaded in HSH is sensitive and we take data security seriously by:

- Using secure https protocol for communication (icon in the corner of the address bar)
- Access provided only to verified user accounts
- Automatic timed logouts after periods of inactivity
- Data is stored on a secure server
- The [mSupply Foundation](https://msupply.foundation) is an impartial not-for-profit trust who has an organisational commitment to ensuring data privacy for our systems and provided services. If you have any questions or concerns please contact privacy.rights@msupply.foundation

## Will I be notified about tender opportunities then they are released?

The portal will generate an email notification to all registered users when your organisation is invited to bid on a tender.
It is up to the respective Purchaser to determine whether their Request for Supply is open or restricted.
If the purchaser decides to issue a restricted supply request it is up to the Purchaser to determine the supplier selection and the selection criteria used.
Health Supply Hub is intended to be used for both open/public procurement as well as closed/restricted procurement processes.

## Our company is registered on the HSH portal, does this provide our Company opportunities to bid for all the tenders from all the countries that are supported by the portal?

Your company only needs to register once with Health Supply Hub to access tenders from countries using the Health Supply Hub system.
It is the sole discretion of the Purchaser to determine whether its process is open or restricted, and if restricted which suppliers they invite.

## How do I submit bids/quotes via Health Supply Hub?

See the [Submitting Bids](/health-supply-hub/submitting-bids/) page for more information on how to submit a bid via Health Supply Hub.

It is important to note that Purchasers may also expect suppliers provide supplementary information for their Evaluation processes, this may be at the product level (eg User Manuals, GMP certificates) and company level (eg information about your company’s structure, performance and experience). Purchasers may indicate the additional information they require within the quote template and through their own supplementary documentation in the ‘Tender documents’ section.

## How should I use the 'Supplier Reference' field?

The Supplier Reference field is intended for suppliers to put information such as their own inventory codes, or their own internal product names. This can then be used for clarification purposes during evaluation and should the supplier’s quote be successful this information can be used when a Purchase Order is issued.

## How should I use the comments field?

The comments field is intended for important product information that the Purchaser can consider during their evaluation. Suppliers may wish to provide additional information about their product, such as:

- Manufacturer details (if not already provided in the manufacturer column)
- Key features of the product such as:
  - materials - e.g. nitrile gloves (latex free),
  - packaging information – e.g. blister pack (10 tablets per blister, 10 blisters),
  - country of origin – e.g. existing stock currently located in Australia.
- indicative freight costs (if freight has not been included in your quote)
- referencing documents you have attached with your quote
- any other information that the Purchaser has requested or that suppliers think may be useful for the Purchaser to know at evaluation time

![Comments field](/health-supply-hub/supplier/images/faq_comment_ref.jpg)

## Video Tutorial - How to use the comments & supplier reference fields

{{ youtube(id="BaSt_wkFHxg", class="youtube") }}

## Do we need to be prequalified by the respective government department that we would be tendering for?

This depends on the specific Purchaser/Agency, please contact the purchaser to determine what their respective process is.

## Does Health Supply Hub have a general draft contract to cover all tenders or a number of them depending on the type of products concerned?

Terms and Conditions for supply are at the discretion of the Purchaser, they may have a standard base contract, or product specific contracts. We are advising they attach their Standard Terms and Conditions along with other relevant documentation in each respective supply requests ‘Tender Documents’ section.

![Tender Documents](/health-supply-hub/supplier/images/faq_tender_documents.png)
