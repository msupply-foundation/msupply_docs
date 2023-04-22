+++
title = "Ordenes Internas"
description = "Solicitando stock a tus proveedores."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 42
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Las Órdenes Internas tienen otros nombres en algunos países o sistemas:
* Solicitudes
* Pedidos
* Informes y Solicitudes
* I&R

Las Órdenes Internas son una forma de ayudar a los usuarios a solicitar nuevos stocks desde otro almacén.

## Ver Ordenes Internas

Si deseas pedir inventario a tu proveedor: 
1. Ve al menú `Reabastecimiento`
2. Selecciona `Ordenes Internas`

![Internal Order: nav](/docs/replenishment/images/intord_access.png)

Verás una lista de todas las órdenes internas existentes: 

![Internal Order: list](/docs/replenishment/images/intord_list.png)

Puedes usar el campo `Buscar por comentario` para filtrar la lista por los comentarios de las órdenes internas: 

![Internal Order: filter by comment](/docs/replenishment/images/intord_filterlistbycomment.gif)

Puedes ordenar la lista utilizando los encabezados de las columnas:
1. Selecciona el encabezado de la columna que desea ordenar. La columna se ordenará en orden ascendente. 
2. Tap the column header again and column will be sorted in the opposite order.

## Crear una Orden Interna

### Seleccionar un proveedor

1. Haz clic en el botón `Nuevo Pedido` (esquina superior derecha): 

![Internal Order: new order](/docs/replenishment/images/intord_newreqbutton.png)

2. Se abrirá una nueva ventana que te invita a seleccionar un proveedor: 

![Internal Order: select supplier](/docs/replenishment/images/intord_selectsupplier2.png)

3. Selecciona un proveedor haciendo clic en su nombre. Verás una ventana como esta: 

![Internal Order: newly created order](/docs/replenishment/images/intord_newintord.png)

### Definir mes máximo de inventario (MOS Máximo)

Definir el MOS Máximo (Mes de Inventario) es crítico para el cálculo de la **Cantidad Sugerida** y puedes cambiarlo: 
* Existe una regla general en la industria que el *MOS Máximo* debería ser establecido en 3 veces el ciclo de pedido
* El valor por defecto de  *MOS Máximo* es `3.0`, lo que se basa en un ciclo de pedido mensual
* Si por ejemplo, el ciclo de pedido es cada dos meses, entonces el *MOS Máximo* debería ser establecido en 3 x 2 = `6.0` 

<div class="imagetitle">
En el siguiente ejemplo, estableceremos nuestro MOS Máximo en 3 meses.  
</div>


![MaxMOS](/docs/replenishment/images/intord_maxmos.png)

Esto se puede hacer antes o después de agregar elementos a tu orden.

### Adding a single item

Tap on `Add Item` to add a single item to your order. A new window opens: 

![Internal Order: add item](/docs/replenishment/images/intord_additem2.png)

First select the item you want to add to your order. Open the `Stock details` dropdown menu and select your item from the list. You can also type some or all of an item name (or code) to look for a specific item. 

Once item is selected, you should see the following information on the window:
* **Item Code** and **Item Name**
* **Unit**: the default unit used for this item (*eg. Tablet, Vial*)
* **AMC**: Average Monthly Consumption. How much stock your store uses each month on average (based on a configurable number of months, default is set to 3 months)
* **Suggested Quantity**: how much stock mSupply suggests that your order to reach your stock target quantity
* **Order quantity**: the quantity of units that you request from your supplier

You should also see the following charts: 
* **Stock distribution**: In this chart, you will see the following information:
    * The *Target Quantity* for the item. This is calculated as: Maximum MOS x AMC.
    * Your current *Stock on Hand* (in grey)
    * The *suggested quantity* calculated by mSupply

<div class="imagetitle">
In below example, our target quantity is 600 units which is the equivalent of 3 months of stock (3 x 200 = 600 units). Our stock on hand (in grey) is 50 so in order to reach my target, mSupply suggests to order 550 units (600 - 50). 
</div>

![Stock Distribution](/docs/replenishment/images/intord_charts_stockdistri.png)

<div class="imagetitle">
In below example, the target quantity is 62 units. Since we already have 250 units in stock (in grey), the suggested quantity is zero. 
</div>

![Stock Distribution 2](/docs/replenishment/images/intord_charts_stockdistri2.png)

* **Consumption History (monthly)**: this chart shows the monthly consumption up to 12 months in the past (in grey) and the current AMC (in orange):

![Consumption](/docs/replenishment/images/intord_charts_consumption.png)

* **Stock Evolution**: this chart shows you your stock level for the last 30 days and your projected inventory for the next 30 days. The projected stock will be updated based on your inputs in the `Order quantity` field:

![Stock Evolution](/docs/replenishment/images/intord_charts_stockevolution.png)

### Adding items using a master list

If your organisation is using Master Lists, you can add multiple items at once using your store's master lists. It is particularly useful when you have a lot of items in your order and you don't want to add them all one by one.  

1. Tap on the `Add from master list` button
2. Select a master list
3. A dialog window opens asking you whether you want to add all of the items from this master list. Tap `OK` if you wish to proceed. 

All the items of the master list are now listed in your order. If you had previously added single item, it will add items that are not already there. 

Tap on an order line to change the **Order Quantity** or tap on the button `Requested to Suggested` button 

![Internal Order: add from master list](/docs/replenishment/images/intord_addfromml.gif)

<div class="note"> 
Master Lists are defined and assigned to stores at the central server level. You can only see the master lists that are visible to your store. 
<br> <br>
If you don't find the master list you are looking for and if you want to create a new one, please contact your administrator.
</div>

<div class="tip">
You can create internal orders from multiple master lists by repeating above actions with another master list. 
</div>

### Reading the Internal Order's list

When you add items (using a master list or not), the item is added to the order's table. The following information is provided for each order line:

| Status | Description |
| :--- | ---------- |
| **Code** | Code of the item |
| **Name** | Name of the item |
| **SoH (Est. remaining)** | How much stock currently available in your store for this store |
| **AMC** | Average Monthly Consumption: how much stock your store uses each month on average (based on a configurable number of months, defaults to 3 months)   |
| **Target Stock** | This is the stock you are aiming for. Calculated as: AMC x Maximum MOS |
| **Suggested Quantity** | How much stock mSupply suggests that your order. This is calculated as: AMC x Maximum MOS - SoH |
| **Requested** | This is set to zero by default. This is the quantity of units you are ordering from your supplier. |
| **Comment** | A comment for the order line. Comments will be visible to your supplier. |

### Using Suggested Quantities 

If you tap on the `Use Suggested Quantities` on the requisition header, mSupply will automatically copy the values in the **Suggested Quantity** column into the **Requested Quantity** column. 

You can always manually edit the order quantity for each by tapping on an order line. 

![Use Suggested Quantities](/docs/replenishment/images/intord_reqtosug.png)

### Printing an Internal Order

When viewing a specific Internal Order, simply click the `Print` button which is on the top right of the page.
When printing, a PDF file is generated for you, which will then open in a new browser tab. This can then be printed using your browser by clicking print or using `control`+`P` (if using windows) or `cmd`+`P` keys on your keyboard (if using a mac).

![Print button](//docs/introduction/images//print_button.png)

This will either
* Show a menu of possible reports for you to select from before creating a PDF. This will happen if there are more than one report defined for the `Requisition` report type.
* Create a PDF immediately, if there is only one report to select from

![Print menu](/docs/distribution/images/os_print_menu.png)


### Sending an Internal Order

To send the order to your supplier:
1. Tap on the `Confirm Sent` button (bottom right corner)
2. A dialog window opens asking you whether you are sure to want to send the order. Tap on `OK` to proceed
3. Status of your order is now `SENT` and the order is no longer editable

<div class="warning">
Ensure that your order is correct before sending it to your supplier. Once sent, no further changes can be made to finalised orders. 
</div>


