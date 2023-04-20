+++
title = "Salidas"
description = "Proveyendo a tus clientes"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 23
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++


Las salidas se pueden utilizar para proveer de inventario a tu cliente.

Si has utilizado mSupply anteriormente, es posible que estés familiarizado con el término **Factura al Cliente** en lugar de Salida.
Una salida se puede utilizar para:
* Transferir stock a otro almacén que también utiliza mSupply
* Emitir stock a un cliente
* Cumplir con requisiciones (órdenes de cliente)

## Visualización de salidas

### Abrir el menú de salidas

Selecciona `Distribución` > `Salida` en el panel de navegación.

![gotooos](/docs/distribution/images/gotoos2.png)

Se mostrará una lista de sakidas(si no ves ninguna, es probable que estés comenzando). 

Desde esta pantalla puedes:
* Ver un listado de las salidas
* Crear una salida
* Exportar las salidas a un archivo `.csv`
* Imprimir una o varias salidas

### Lista de salidas

1. La lista de salidas se diviede en 7 columnas:

| Columna| Descripción |
| :---------- | :---------- |
| **Nombre** | Nombre del cliente | 
| **Estado** | Estado actual del envío | 
| **Número** | Número de referencia del envío | 
| **Creado** | Fecha de creación del envío | 
| **Referencia** | Referencia del cliente | 
| **Comentario** | Comentario del envío |
| **Total** | Total value of the shipment |

2. La lista puede mostrar un número fijo de envíos por página. En la esquina inferior izquierda, puedes ver cuántos envíos se muestran actualmente en tu pantalla.

![Page](/docs/distribution/images/os_list_showing.png)

3. Si tienes más envíos que el límite actual, puedes navegar a otras páginas haciendo clic en el número de página o utilizando las flechas izquierda o derecha (esquina inferior derecha).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

4. También puedes seleccionar un número diferente de filas para mostrar por página utilizando la opción en la esquina inferior derecha de la página.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Búsqueda por nombre de cliente

Puedes filtrar la lista de envíos por el nombre del cliente. ¡Esto puede ser útil si estás buscando un envío en particular!

Escribe el nombre de un cliente en el campo `Buscar por nombre` (a la izquierda, justo encima de los encabezados de la lista). Todos los envíos para este cliente aparecerán en la lista.

### Exportar salidas

La lista de salias se puede exportar a un archivo separado por comas (CSV). Simplemente haz clic en el botón de exportación (a la derecha, en la parte superior de la página).

![Export button](/docs/distribution/images/export.png)

y el archivo será descargado. La función de exportación descargará todos los envíos salientes, no sólo la página actual, si tienes más de 20 de ellos. Los envíos se exportan utilizando el orden de clasificación seleccionado en la tabla, aunque por supuesto puedes ordenar fácilmente la lista en Excel o en cualquier programa con el que abras el archivo CSV.

### Eliminar una salida

Puedes eliminar una salida del listado de salidas.

1. Selecciona la salida que deseas eliminar marcando la casilla en el extremo izquierdo de la lista. Puedes seleccionar más de una salida para eliminar. Incluso las puedes seleccionar todas utilizando el checkbox maestro en los encabezados de la lista.

2. Abre el menú desplegable `Seleccionar` (esquina superior derecha, encima de la lista) y selecciona `Eliminar líneas seleccionadas`. 
 
3. Una notificación confirma cuántas salidas fueron eliminadas (esquina inferior izquierda). 

<div class="nota">
Solo puedes eliminar salidas cuyo estado sea <code>NUEVO</code>.
</div>

![Outbound list: delete](/docs/distribution/images/os_list_deleteshipment.gif)

## Crear una salida


1. Ir a `Distribución` > `Salida`. 

2. Presionar el botón  `Nueva salida`, en la esquina superior derecha.

![New Shipment](/docs/distribution/images/clicknewshipment.png)

3. Se abrirá una nueva ventana llamada `Clientes`, la cual le invita a seleccionar un cliente. 

#### Seleccionar un cliente: 

1. En la ventana `Clientes`, se presentará una lista de clientes disponibles. Puede seleccionar su cliente de la lista o puede escribir parte del nombre del cliente.

<div class="imagetitle">
En el siguiente ejemplo, estamos emitiendo inventario al <b>Almacén Regional de Kamo</b>. 
</div>

![gif](/docs/distribution/images/os_select_customer.gif)

<div class="tip">
Puede saber si un cliente también está usando mSupply en su almacén. Si lo está haciendo, verá un ícono como este (<img src="/docs/replenishment/is_msupplystoreicon.png" alt="Store" style="width:auto">) junto al código del proveedor. 
</div>

2. Una vez que toque o presion `Enter`, su Salida se creará automáticamente

<div class=imagetitle>
Si todo salió bien, debería ver el nombre de su cliente en la esquina superior izquierda y el estado debería ser: <code>NUEVO</code> 
</div>

![Outbound shipment: created](/docs/distribution/images/os_created.png)

### Editar el nombre del cliente

Si ha seleccionado el cliente equivocado, puede cambiar el nombre del cliente en el campo `Nombre del cliente`  o seleccionar uno de la lista desplegable: 

![gif](/docs/distribution/images/os_change_customer.gif)

### Ingresar una referencia de client

Una vez que se ha creado su salida, puede ingresar una referencia del cliente en el campo  `Referencia del cliente`, si la tienen (por ejemplo, *PO#1234567*)

### Ver o editar el panel de información de la salida

El Panel de información le permite ver o editar información sobre la salida. Está dividido en varias secciones: 
* Información Adicional
* Documentos Relacionados
* Detalles de la Factura
* Detalles de transporte

Estamos planeando agregar más secciones en el futuro a medida que Open mSupply crezca. 

#### ¿Cómo abrir y cerrar el Panel de información?

Si está utilizando una pantalla grande, el panel de información se abrirá automáticamente para usted. Sin embargo, en una pantalla de tamaño promedio, el panel de información estará cerrado por defecto.

Para abrir el Panel de información, puede tocar el botón `Más`, ubicado en la esquina superior derecha de la vista de Envío saliente. 

Puede cerrarlo tocando el botón `X Cerrar`, en la esquina superior derecha del panel de información. 

![Open and close the Information Panel](/docs/distribution/images/os_infopanel_openclose.gif)

#### Información adicional

En la sección de **Información adicional**, puede:
* Ver quién creó el Envío saliente (nombre del usuario)
* Ver y editar el color de la salida. Para editar el color, toque el círculo de color y seleccione un color de la ventana emergente
* Escribir o editar un comentario

#### Documentos relacionados

En la sección de **Documentos relacionados**, puede ver otros documentos de transacción relacionados con la salida.

Si su salida fue creada para cumplir con una **Solicitud**, el número de referencia de la solicitud aparecería en esta sección. 

En el futuro, también incluiremos otros documentos como registros de temperatura, documentos de transporte o hojas de recogida. 

#### Invoice Details

En esta sección, verá por defecto el precio total de venta de los artículos listados en la salida. 

También puede agregar un **Cargo de servicio** si desea agregar otros cargos, como costos de flete. Para agregar un Cargo por servicio a los Detalles de la factura:

1. Toca el botón `Editar cargos de servicio`. Una nueva ventana se abrirá. 
2. Toca el botón `Agregar cargo` en la nueva ventana. Una nueva línea aparecerá en la lista de cargos. Toca en `Cancelar`  si no deseas agregar nada. 
3. **Nombre:** Selecciona un cargo de servicio en la lista desplegable. Puedes personalizar la lista de cargos disponibles. Contacta a tu administrador.
4. **Comentario:** Puedes agregar un comentario para proporcionar más detalles sobre el nuevo cargo.
5. **Cantidad:**  Ingresa la cantidad del cobro
6. **Impuesto:** Ingresa el % de impuesto para el cobro
7. **Total:** El campo de total se calcula automáticamente en función de la cantidad y el porcentaje de impuesto
8. **Eliminar:** Puedes tocar el icono `Eliminar` para eliminar el cobro

En esta sección, también puedes editar la tasa de impuesto (%) para el precio de venta de los artículos. Toca el icono de lápiz e ingresa un valor.

#### Detalles de transporte

En esta sección, puedes ver o editar el número de referencia de transporte (por ejemplo, un número de reserva o de seguimiento). 

### Secuencia del estado de la salida
La secuencia de estado se encuentra en la esquina inferior izquierda de la pantalla de la salida. 

Los estados pasados se resaltan en azul, los próximos estados aparecen en gris. 

<figure>
<img src="/docs/distribution/images/os_statussequence2.png" style="width:100%">
<figcaption align = "center">Secuencia de estado: el estado actual es <code>NUEVO</code>.</figcaption>
</figure>

<figure>
<img src="/docs/distribution/images/os_statussequence3.png" alt="Trulli" style="width:100%">
<figcaption align = "center">Secuencia de estado: el estado actual es </i><code>RECOGIDO</code>.</figcaption>
</figure>

There are 6 status for the Outbound Shipment: 

| Estado | Descripción |
| :--- | ---------- |
| **Nuevo** |  Este es el primer estado cuando se crea un envío. |
| **Asignado** | La asignación está confirmada. Los bienes ya no están disponibles para otros envíos pero todavía forman parte de su inventario.  |
| **Recogido** | El envío está recogido y listo para ser enviado. Los bienes todavía forman parte de su inventario. |
| **Enviado** | El envío ha sido enviado y los bienes ya no forman parte de su inventario. |
| **Entregado** | Su cliente ha recibido el envío. |
| **Verificado** | Su cliente ha verificado la cantidad del envío. Los bienes ahora forman parte de su inventario. |

Si pasas el cursor sobre la secuencia de estados, aparecerá una ventana de historial de envío. Podrás ver la fecha en que un envío se actualizó de un estado a otro. 


<div class="imagetitle">
Este envío ha sido creado, asignado y recogido el 29/03/2022
</div>

![Outbound status: hover](/docs/distribution/images/os_statussequence_hover.png)

### Casilla de retención

Se encuentra en la esquina inferior izquierda, a la izquierda de la secuencia de estados. 

Seleccionar la casilla `Retener` evita que la salida se actualice al siguiente estado. 

![Outbound checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Botones de Cancelar y Confirmar

#### Botón de Cancelar

Toca el botón `Cancelar` para salir de la vista de salida y volver a la listado de salidas. 

#### Botón de Confirmar

El botón `Confirmar` es el botón para actualizar el estado de un envío. El estado que puedes confirmar depende del estado actual del envío y sigue la secuencia que se muestra a continuación.

Cuando gestionas una Salida, solo puedes confirmar la asignación, la recogida y el envío. 

| Confirmaar... | Estado actual | Siguiente estado |
| :---------- | :---------- | :---------- |
| **Confirmar Asignado** | Nuevo | Asignado|
| **Confirmar Recogido** | Asignado | Recogido|
| **Confirmar Enviado** | Recogido | Enviado |

No es necesario actualizar un envío al siguiente estado en la secuencia. Puedes optar por saltarte algunos de ellos para ir directamente a `Confirmar Enviado` por ejemplo.

Como se muestra a continuación, toca la flecha hacia abajo del botón `Confirmar` y selecciona el estado al que deseas que se actualice el envío. 

![Skip Status](/docs/distribution/images/os_confirmbutton_skipstatuses.gif)

## Agregar líneas a una salida

Toca el botón `Agregar artículo` (esquina superior derecha). 

Se abrirá una nueva ventana llamada `Agregar artículo`. 

![Add Item button](/docs/distribution/images/additembutton.png)

### Seleccionar un ítem

En la ventana de `Agregar ítem`, puedes buscar un ítem de las siguientes maneras:
* Revisando la lista de ítems disponibles
* Escribiendo parte o todo el nombre del ítem
* Escribiendo parte o todo el código del ítem

Una vez que hayas resaltado el ítem, toca su nombre o presiona `Enter`.

![Alt Text](/docs/distribution/images/os_additem.gif)

Una vez que se selecciona el artículo, se pueden ver las siguientes información: 

#### Encabezados

* Código y nombre del artículo (por ejemplo, *030453 Amoxicillina 250 mg Tabletas*)
* la cantidad de stock disponible para este artículo (por ejemplo, *3527 unidades*)
* la unidad del artículo (por ejemplo, *Tab*)

<div class="imagetitle">
<b>Ejemplo:</b> Para el artículo *030453 - Amoxicillina 250mg tabletas*, hay 3527 pestañas disponibles. 
</div>

![add item headers](/docs/distribution/images/additem_headers.png)

#### Emitir [Cantidad] de unidades en paquetes de [Tamaño del paquete]

En el campo `Cantidad a enviar`, puedes ingresar la cantidad que deseas enviar a tu cliente. 

Por defecto, se te invita a emitir una cantidad de **unidades**. Sin embargo, tienes la posibilidad de emitir una cantidad de paquetes en su lugar cambiando el valor en el segundo menú desplegable (`Tamaño del PAquete`). 

El valor predeterminado es  `Cualquiera` cuando emites unidades. 

![Outbound Issue quantity](/docs/distribution/images/os_issuequantityinunits.png)


#### Lista de lotes disponibles:

Esta es una lista de números de lote que tienes en tu inventario para este artículo:

* **Lote**: Número de lote. Es una designación dada a los productos fabricados en la misma carrera de producción. 
* **Vencimiento**: Fecha de vencimiento del lote (formato: MM/AAAA)
* **Ubicación**: Si tu inventario se gestiona con ubicaciones de almacenamiento, el nombre de la ubicación donde se almacena el artículo
* **Tamaño del paquete**: Cantidad de unidades por paquete
* **Precio de venta por paquete**: Precio de venta por unidad del artículo
* **En espera**: Indica si un lote está en espera o no. No puedes emitir un lote que está en espera. 
* **En inventario (paquetes)**: Total de paquetes en tu inventario
* **Disponibles(paquetes)**: Número de paquetes disponibles (que no están asignados a otros envíos)
* **[Unidad] Cantidad emitida**: Cantidad total de unidades a emitir
* **Cantidad de paquetes emitidos**: Número de paquetes a emitir

También hay una última fila en la tabla que es una línea de marcador de posición, si el estado del envío de salida es`NUEVO`.
La línea de marcador de posición se utiliza cuando la cantidad que se emite es mayor que tu inventario disponible.

![List of available batch numbers](/docs/distribution/images/os_additem_listofbatches.png)

### Issue a quantity of units

By default, you are invited to issue a quantity of **units**, regardless of the pack size (number of units in a pack). 

When entering a number in the `Issue` field, after clicking the `Allocate` button, the system automatically chooses the batch number(s) with the shortest expiry date (First to Expire, First Out or FEFO logic). 

<div class="imagetitle">
In below example, we are issuing 10 units of the item. All 10 units will be taken from the same batch (third row). The first two batches were not selected because they are expired. 
</div>

![additem!](/docs/distribution/images/os_additem_issueunits.png)

<div class="imagetitle">
In this other example, we are issuing 100 units. System selects three batches with different pack sizes. 
</div>

![additem!](/docs/distribution/images/os_additem_issueunitsthreebatches.png)

Note that in this list, the batches which are available for selection are shown first and batches which are not (on hold or no stock available) are shown below and in a grey font.

### Issue a quantity of packs

You can decide to issue a quantity of **packs**. To do this, you can change the value in the `Pack Size` dropdown. 

<div class="imagetitle">
Let's imagine that your customer only wants pack size of 25 units. You can change the dropdown value from `Any` to `25`. 
</div>

![Alt Text](/docs/distribution/images/os_additem_switchtopack.gif)

You are now offered to issue a number of packs of 25 units. Only batch number(s) with a pack size of 25 units can be automatically issued.

<div class="imagetitle">
In below example, we are issuing 5 packs of 25 units:
</div>

![additem!](/docs/distribution/images/os_additem_issuepacks.png)

<div class="note">
<b></b> if you had previously entered a quantity of units and you switch to a quantity a packs, the quantity of units will automatically be converted into the correct quantity of packs.  
</div>

![Alt Text](/docs/distribution/images/os_issuepacks.gif)

When a pack size is selected, and stock lines which have a different pack size are not available for selection. As such, those rows are listed lower down in the table and are shown in a grey font, in the same way as other unavailable rows.

### Manual Allocation 

Regardless if you chose to issue a quantity of units or packs, you can always manually change the quantity at the batch number level directly before pressing on OK. 

You simply have to enter or edit the quantity in the `Packs Qty Issued` column. 

The values in the **Total** row will be automatically updated with the new quantity.  

<div class="note">
 <b></b> when allocating quantities at the batch number level, the quantity you enter is always a quantity of packs. 
</div>

<figure>
<img src="/docs/distribution/images/os_additem_manualallocation.gif" style="width:100%">
<figcaption align = "center"><i>Manual allocation at the batch number level.</i></figcaption>
</figure>

### Issuing when there is not enough stock (Placeholder Line)

If the amount to be issued is greater than the total stock available from all of the available lines, then the quantity to be issued will automatically be placed in the `placeholder` field, at the bottom of the list of available batch numbers. 

Placeholder lines can be allocated later when new stock arrives. However, all shipment lines must be allocated before confirming the allocation. 

<div class="imagetitle">
Since there is no stock available for <i>042744-Diazepam Injection 5mg/ml Amp/2ml</i>, system is issuing a 100 units in the placeholder field. 
</div>

![Alt Text](/docs/distribution/images/os_additem_placeholder.png)

When you look at an Outbound Shipment, you can see if a shipment line has not been allocated or has been partially allocated when it is higlighted in blue. 

![Alt Text](/docs/distribution/images/os_placeholderlines.png)

### Confirm Item and Quantity

When you are happy with the quantity, you can either press on:
* the `OK` button. You are redirected to the Outbound Shipment view and your item has been added to the list. 
* the `OK & Next` button to add another item right away
* the `Cancel` if you do not want to add the item to the Outbound Shipment anymore


## Adding lines to an Outbound Shipment using a Master List

Tap on the `Add from master list` button (top right corner). 

![Add Item button](/docs/distribution/images/os-add-from-master-list-button.png)

A new `Master Lists` window opens. This allows you to select the required master list. Simply click on one of the lists (if you have some available).
Note that the lists show are those which are visible to the customer of the shipment.

![Add Item button](/docs/distribution/images/os-add-item-master-lists.png)

Click `OK` on the prompt:
![Add Item button](/docs/distribution/images/os-add-item-master-list-prompt.png)

You will then have unallocated (placeholder) lines added to your shipment, which will then look like this:

![Add Item button](/docs/distribution/images/os-after-master-list.png)

As you can see - all of the quantities are zero. You can follow the steps for editing these lines, as detailed above.

## Editing an Outbound Shipment Line

To edit an shipment line, tap on it. You will be presented with the `Edit Item` window, which is identical to the `Add Item` window, except that the item is already chosen. 

### Edit a Shipment Line

<div class="note">
 <b></b> you can edit a shipment line if the shipment has a status lower than <code>Shipped</code>. 
</div>

1. Open the Outbound Shipment you want to edit. 
2. Tap on the line you want to edit. An identical window to `Add Item` appears. At this stage:

    *  Edit the main `Issue Quantity` field 
    *  or change the number of packs value at the batch number level

<div class="note">
 <b></b> When editing a shipment line, you cannot change the item. You would need to delete the shipment line and to create a new one. 
</div>

### Delete a Shipment line

1. Open the Outbound Shipment you want to edit.
2. Select the line(s) you want to delete by checking the box(es) on the right of the list. 
3. Go to the `Actions` dropdown menu (top right corner, above the list)
4. Select the action `Delete selected lines`

![Alt Text](/docs/distribution/images/os_actions_deleteselectedlines.png)

<div class="imagetitle">
In below example, we are deleting <i>item 030063 - Acetylsalicylic Acid 100mg tabs</i>
</div>

![Alt Text](/docs/distribution/images/os_deleteselectedlines.gif)

<div class="tip">
 <b></b> You can delete multiple lines at once. Be sure to review what is selected before performing the Delete action. 
</div>

## Processing an Outbound Shipment

### Allocating an Outbound Shipment

Allocation is the process of assigning one or multiple batch numbers from the inventory to a shipment line. In other words, you are assigning stock to your shipment. Once allocated, the stock is reserved for the shipment and thus for your customer. 

There are 2 main ways to allocate a shipment line: 

1. When adding items, system is automatically assigning stock to the new shipment line when you enter a quantity. If you don't have enough stock, system will add placeholder lines (unallocated lines). 

2. Bulk action `Allocate placeholder lines`: 
    * Select the lines that you want to allocate by checking boxes on the right on the list
    * In the `Actions` dropdown menu, select `Allocate placeholder lines`. System will check if there is available stock for each selected lines and allocate them using the First to Expire, First Out (FEFO) logic. A notification will let you know whether the operation is successful or not. 

<div class="note">
You won't be able to process your Outbound Shipment if you have unallocated lines (shipment lines without batch number(s) assigned to it) with a quantity greater than 0. You can wait for more stock to arrive or you can delete the placeholder lines. Any unallocated lines with a 0 quantity will automatically be removed for you when you allocate.
</div>

### Confirming an Outbound Shipment's allocation

Once you all your shipments lines have been allocated, you can **confirm the allocation**:
* Current status of the shipment has to be `NEW`
* Lines must be assigned with one or several batch numbers. You won't be able to confirm the allocation if your shipment contains lines without batch numbers assigned to it (placeholder lines). 

To confirm the allocation, press the `Confirm Allocated` button. 

![Alt Text](/docs/distribution/images/os_confirmallocated.gif)

Once the allocation is confirmed:

* Shipment status is `ALLOCATED`
* You are now invited to confirm the picking via the `Confirm Picked` button
* All the items and their quantities will be reserved, meaning that they are no longer available for allocation
* You can print a **pick slip** to be sent to your warehouse so they can start preparing the shipment

### Confirming Outbound Shipment picking

Picking refers to the process where individual items are picked from a fulfillment facility (usually a warehouse or a pharmacy store).

Once a shipment has been allocated, next step is to go get the items to prepare the actual shipment. To help with that, you are able to generate a **pick slip** document. A pickslip indicates:
* What are the items to be picked
* The quantity and batch numbers for each item
* If you manage your inventory with storage locations, where the items are located

Once all items are picked and packed. You can then confirm the picking of the shipment to indicate to indicate that it is ready to be dispatched. 

To confirm that a shipment has been picked, tap on the `Confirm Picked` button. 

![Alt Text](/docs/distribution/images/os_confirmpicked.gif)

Once picking is confirmed:

* Shipment status is now `PICKED`
* You are now invited to confirm the shipping via the `Confirm Shipped` button
* An **Inbound Shipment** has been generated and is now visible to your customer

At this stage, you are still able to edit shipment lines, to add items or to delete existing lines. However, if picking has been confirmed, you need to make sure to inform your fulfillment facility of any change so they can make sure that the shipment is still correct. 

### Confirming the Outbound Shipment shipping 

The last step to issue stock with an Outbound Shipment is to confirm that stock has been shipped. This a critical step cause when goods are confirmed as shipped, they are no longer part of your inventory records. 

To confirm that an Outbound Shipment has been shipped, tap on the `Confirm Shipped` button. 

Once shipping has been confirmed: 
* Shipment status is now `SHIPPED`
* Goods are  no longer part of your inventory
* You can no longer edit shipment lines
* You can no longer delete the shipment
* You can print a **delivery note** or an **invoice**

### Tracking Progress of Outbound Shipments

If your customer is also using mSupply, you wil be able to see when they'll receive your shipments:
* status will become `DELIVERED` when goods are received: your customer confirmed that they received your goods
* status will become `VERIFIED` when shipment has been verified by your customer. Goods are now part of their inventory

## Viewing an Outbound Shipment

When viewing a specific shipment, you can view the batches on that shipment grouped by item or with each batch listed separately.
To change the view mode, click the `Group by item` switch. 

When grouped by item, you can expand the item to see individual batches, or use the expand in the table header to expand all grouped rows. If you click on an item you will also see all selected batches, as shown in this example:

![Group by Item](/docs/distribution/images/os_group_by_item.gif)

If you do not have enough room on your screen, or simply aren't interested in some of the columns shown, you have the option of hiding which columns are shown in this view.

Click on the `Show / hide columns` button which is at the top right of the table. This gives a list of the columns available - you can check the columns you want to see. The options chosen are stored for the current browser, so next time you view an outbound shipment, you will see the selected columns only. If you have chosen which columns to show, then the button is shown in blue to remind you that there are more columns available.

![Hide columns](/docs/distribution/images/os_show_hide_columns.gif)