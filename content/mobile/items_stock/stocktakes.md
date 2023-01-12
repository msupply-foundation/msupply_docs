+++
title = "Stocktakes"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 1
template = "mobile/page.html"

[extra]
toc = true
top = false
+++

[<img src="/_media/banner_mobile_userguide.png?w=600&amp;tok=9b9def" class="media" loading="lazy" title="mSupply Mobile User Guide menu" alt="mSupply Mobile User Guide menu" width="600" />](/en:mobile:user_guide)

mSupply Mobile will automatically keep track of your stock levels for you, as you receive stock and give it out. 

But sometimes data gets entered incorrectly or stock goes out without anyone making an entry in the system. 

Of course, we try not to let that happen BUT, if it does happen, we can make corrections. The easiest way to correct mistakes is to do a **Stocktake**.

With mSupply Mobile, you can easily do a stocktake for:

  * The **full inventory**; or
  * A **limited range of items** (such as all your anti-malarials); or
  * A **single item** (if you notice that the quantity on your shelves is wrong) 
#### Stocktakes

You should already be doing stocktakes with your current ordering systems. 

Stocktakes are a very important way to ensure that the orders we are placing are accurate and that the stock will be correct if anyone checks!

Ideally, you should be doing a physical stocktake of each item **EVERY** time you place a main order but this depends on your local policies and procedures (and it may not be possible in larger facilities). 

Let's learn how to do a stocktake… Using mSupply Mobile makes doing stocktake a lot easier than before!

### Click on Stocktakes

[<img src="/_media/mobile:021stocktake.jpg?w=700&amp;tok=b28450" class="mediacenter" loading="lazy" alt="" width="700" />](/_detail/mobile:021stocktake.jpg?id=en%3Amobile%3Auser_guide%3Astocktakes) 

This brings up a list of all your previous stocktakes.

The description of each stocktake will be shown, with its **Date** and **Status**.

There are two stocktake statuses: **In Progress** (current) and **Finalised** (past).

An **In Progress** stocktake is one you are still working on. If you want to keep working on an In Progress stocktake, double click on it.
#### In Progress stocktakes

**In Progress** stocktakes are the stocktakes you are still working on and haven't finalised. 

We **strongly** recommend only having one In Progress stocktake at any time. This will prevent mistakes when moving between them.

**Finalise or delete old stocktakes before starting new ones!**
----
Let's start a new stocktake now…

### Click on New Stocktake

<img src="/_media/mobile:stktke2.jpg" class="mediacenter" loading="lazy" alt="" /> 

### Select the items you wish to count

Select items using the radio buttons in the **Selected** column. 
[<img src="/_media/en:mobile:user_guide:pasted:20220331-225047.png?w=700&amp;tok=364bc8" class="mediacenter" loading="lazy" alt="" width="700" />](/_detail/en:mobile:user_guide:pasted:20220331-225047.png?id=en%3Amobile%3Auser_guide%3Astocktakes)
If you want to include every item or most items, select **All Items Selected**.
[<img src="/_media/en:mobile:user_guide:pasted:20220331-225315.png?w=700&amp;tok=139f69" class="mediacenter" loading="lazy" alt="" width="700" />](/_detail/en:mobile:user_guide:pasted:20220331-225315.png?id=en%3Amobile%3Auser_guide%3Astocktakes)
To hide items with 0 stock, select the **Hide Stockouts** toggle.
[<img src="/_media/en:mobile:user_guide:pasted:20220331-225603.png?w=700&amp;tok=fdff20" class="mediacenter" loading="lazy" alt="" width="700" />](/_detail/en:mobile:user_guide:pasted:20220331-225603.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

### Give your stocktake a logical name

For example, 'April Full Stocktake'.

Then click **Create**. 

<img src="/_media/mobile:all_items2.jpg" class="mediacenter" loading="lazy" alt="" />

### This will bring up the Stocktake Editor

This lists each item (including **Item Code**, **Item Name** and **Unit** as set up in [mSupply Desktop](https://docs.msupply.org.nz/items:adding_a_new_item)), its **Snapshot Quantity** and its **Actual Quantity** (from the physical count). 

The **Snapshot Quantity** is what the system THINKS you have. If it is correct (when compared with your physical count), you don't need to do anything!

The **Actual Quantity** is what you have actually counted. You can change this by clicking in that column and typing in the correct quantity.

Note that **Quantity** in mSupply mobile currently refers to the actual quantity of an item (i.e. the number of units) and not the number of packs.

### For each item, compare your physical count with the Snapshot Quantity

Update incorrect item quantities by clicking in the **Actual Quantity** column.

If you change the amount of stock you have in the Actual Quantity column, this variation will now show in in the **Difference** column. 

This can take some time but remember - if the **Snapshot Quantity** is correct, you don't need to do anything! 

[<img src="/_media/en:mobile:user_guide:pasted:20210824-030928.png?w=600&amp;tok=d131ed" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:pasted:20210824-030928.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

### If prompted, enter a reason for inventory adjustments

If your stocktake screen shows a **Reason** column, you must enter a reason for any positive or negative inventory adjustments.

As of v5.0.0 of mSupply mobile, the reason column is only displayed for stocktake batches and will not appear on the stocktake screen

**[Options](https://docs.msupply.org.nz/preferences:options)** must be enabled for **Stocktake Line Adjustments** on the mSupply desktop server and synced to mSupply Mobile to enable reasons for inventory adjustments. 

If the **Actual Quantity** entered is different from the **Snapshot Quantity**, you will be prompted to select a **Reason** for the **Difference** from a standard list. You will not be able to continue until a reason is selected.

[<img src="/_media/en:mobile:user_guide:stocktake_options_list.png?w=600&amp;tok=5a6e08" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:stocktake_options_list.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

[<img src="/_media/en:mobile:user_guide:stocktake_difference_reason.png?w=600&amp;tok=4c1013" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:stocktake_difference_reason.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

To change the reason, click on the cell again.

### Edit batch-specific information

You can adjust batch-specific information or add new batches by clicking the item's **Batches** icon. 

[<img src="/_media/en:mobile:user_guide:stocktake_batches.png?w=600&amp;tok=e9d59c" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:stocktake_batches.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

In this example there is only one batch of paracetamol. 

[<img src="/_media/en:mobile:user_guide:stocktake_batches_paracetamol.png?w=600&amp;tok=b7200a" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:stocktake_batches_paracetamol.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

If there are multiple batches:

  * **Inventory adjustments will be automatically made to the batch that arrived first (i.e. first in - first out).**
    * In this example there are three batches of ibuprofen. The **Snapshot Quantity** was 300 and the **Actual Quantity** was 220. The **Difference** of 80 was automatically taken away from the batch that arrived first. However, this can be manually changed in this screen.

[<img src="/_media/en:mobile:user_guide:stocktakes_batches_ibuprofen.png?w=600&amp;tok=20293e" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:stocktakes_batches_ibuprofen.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

  * **The inventory adjustment reason selected will automatically apply to all batches.** 
    * However, separate reasons for different batches can be manually changed in this screen. In this example we have updated the inventory adjustment of 80 among the batches of ibuprofen, with separate reasons for each batch. 

[<img src="/_media/en:mobile:user_guide:stocktakes_batch_reason_manual.png?w=600&amp;tok=a126d3" class="mediacenter" loading="lazy" alt="" width="600" />](/_detail/en:mobile:user_guide:stocktakes_batch_reason_manual.png?id=en%3Amobile%3Auser_guide%3Astocktakes)

When you are finished making changes in the **Batches** screen, click **OK**. 

Note: The main stocktake screen will only show the most common reason among the batches for an item's inventory adjustment.

### When you are finished...

Click **Finalise**.

<img src="/_media/mobile:finalise.png" class="mediacenter" loading="lazy" alt="" />

This will update all your stock levels to match the quantities you have entered in the **Actual Quantity** column.

Like always with mSupply Mobile, you don't need to be connected to the internet to do this - the information will sync in the background when internet becomes available.

|  *  Previous:  **[Current Stock](/en:mobile:user_guide:current_stock)** | | Next: **[Stocktakes (Program)](/en:mobile:user_guide:stocktakes_program)** *  

