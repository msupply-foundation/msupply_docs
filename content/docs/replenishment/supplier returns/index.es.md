+++
title = "Devoluciones a Proveedores"
description = "Devolver inventario a tus proveedores"
date = 2022-03-19
updated = 2022-03-19
draft = false
weight = 45
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Las Devoluciones al Proveedor se pueden usar para devolver inventario a un proveedor.

Es importante poder devolver bienes a un proveedor sin que se contabilicen como bienes emitidos a un cliente. Si simplemente emites bienes a tu proveedor mediante una Salida, esos bienes se contarán como parte de las "emisiones" (consumo) de tu almacén. Una Devolución al Proveedor es la forma correcta de devolver bienes a un proveedor.

Si has usado mSupply en el pasado, es posible que estés familiarizado con el término **Crédito al proveedor** en lugar de Devolución al Proveedor.

## Ver las Devoluciones al Proveedor

### Abrir en Menú de Devoluciones al Proveedor

Selecciona `Reabastecimiento` > `Devoluciones al Proveedor` en el panel de navegación.

![gotooor](/docs/replenishment/images/gotoor.png)

Se mostrará una lista de Devoluciones al Proveedor (si no ves ninguna, ¡probablemente apenas estés comenzando!)

Desde esta pantalla puedes:

- Ver una lista de Devoluciones al Proveedor
- Crear una nueva Devolución al Proveedor
- Exportar Devoluciones al Proveedor a un archivo `.csv`

### Lista de Devoluciones al Proveedor

1. La lista de Devoluciones al Proveedor se divide en 6 columnas:

| Columna        | Descripción                           |
| :------------- | :------------------------------------ |
| **Nombre**     | Nombre del Proveedor                  |
| **Estado**     | Estado actual de la devolución        |
| **Número**     | Número de referencia de la devolución |
| **Creado**     | Fecha de creación de la devolución    |
| **Referencia** | Referencia del proveedor              |
| **Comentario** | Comentario sobre la devolución        |

2. La lista puede mostrar un número fijo de devoluciones por página. En la esquina inferior izquierda, puedes ver cuántas devoluciones se muestran actualmente en tu pantalla.

![Page](../../images/list_showing.png)

3. Si tienes más devoluciones que el límite actual, puedes navegar a otras páginas tocando el número de página o usando las flechas derecha o izquierda (esquina inferior derecha).

![Page](../../images/list_pagenumbers.png)

4. También puedes seleccionar un número diferente de filas para mostrar por página utilizando la opción en la esquina inferior derecha de la página.

![Rows per page](../../images/rows-per-page-select.png)

### Buscar por Nombre del Proveedor

Puedes filtrar la lista de devoluciones por nombre del proveedor o por estado. ¡Esto puede ser útil si buscas una devolución en particular!
Selecciona el filtro `Nombre` de la lista para filtrar por el nombre del proveedor:

![Supplier Return filter](/docs/replenishment/images/or_filter.png)

Escribe el nombre de un proveedor en el campo `Nombre`. Todas las devoluciones asociadas a este proveedor aparecerán en la lista.

### Exportar Devoluciones al Proveedor

La lista de devoluciones al proveedor se puede exportar a un archivo separado por comas (csv). Simplemente haz clic en el botón de exportar (ubicado a la derecha, en la parte superior de la página)

![Export button](/docs/distribution/images/export.png)

y el archivo se descargará. La función de exportación descargará todas las devoluciones al proveedor, no solo la página actual, si tienes más de 20 devoluciones.

### Eliminar una devolución al proveedor

Puedes eliminar una devolución desde la lista de devoluciones al proveedor.

1. Selecciona la devolución que deseas eliminar marcando la casilla al inicio de la lista. Puedes seleccionar más de una devolución para eliminar. Incluso puedes seleccionarlas todas usando la casilla maestra en los encabezados de la lista.

2. Abre el menú desplegable `Seleccionar` (en la esquina superior derecha, encima de la lista) y selecciona `Eliminar líneas seleccionadas`.

3. Se mostrará una notificación que confirma cuántas devoluciones fueron eliminadas (esquina inferior izquierda).

<div class="nota">
Solo puedes eliminar devoluciones al proveedor si no han sido marcadas como <code>ENVIADAS</code>.
</div>

![Outbound list: delete](/docs/replenishment/images/or_delete.gif)

## Crear una devolución al proveedor

### Crear desde una entrada

A menudo, devolverás mercancías que recibiste mediante una entrada. En este caso, puedes [crear una devolución al proveedor desde la entrada](../inbound-shipments/#returning-stock-from-an-inbound-shipment) itself.

### Crear manualmente

1. Ve a `Reabastecimiento` > `Devolución al Proveedor`.

2. Pulsa el botón `Nueva Devolución`, en la esquina superior derecha

![New Return](/docs/replenishment/images/clicknewreturn.png)

3. Se abrirá una nueva ventana `Proveedores`, invitándote a seleccionar un proveedor.

#### Seleccionar un Proveedor

1. En la ventana `Proveedores`, se mostrará una lista de los proveedores disponibles. Puedes seleccionar tu proveedor de la lista o escribir parte del nombre del proveedor que desees.

<div class="imagetitle">
En el siguiente ejemplo, queremos devolver inventario al  <b>Almacén Regional de Kamo</b>. 
</div>

![Search supplier list](/docs/replenishment/images/or_select_supplier.png)

<div class="tip">
Puedes saber si un proveedor también utiliza Open mSupply en su almacén. Si lo hace, verás un ícono como este  <img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="ALmacén" style="width:auto"> junto al código del proveedor. 
</div>

2. Una vez que toques, presiones `Enter`, o hagas clic en un proveedor, tu Devolución al Proveedor se creará automáticamente.

<div class=imagetitle>
Si todo salió bien, deberías ver el nombre de tu proveedor en la esquina superior izquierda y el estado debería ser <code>NUEVO</code> 
</div>

![Supplier Return: created](/docs/replenishment/images/or_created.png)

### Ingresa una referencia del proveedor

Una vez que se haya creado tu Devolución al Proveedor, puedes ingresar una referencia del proveedor en el campo `Referencia` si tienen una (por ejemplo, PO#1234567).

### Ver o editar el panel de información de la devolución al proveedor

El panel de información te permite ver o editar la información sobre la devolución al proveedor. Está dividido en varias secciones:

- Información adicional
- Documentos relacionados
- Detalles de transporte

Planeamos agregar más secciones en el futuro a medida que Open mSupply crezca.

#### ¿Cómo abrir y cerrar el panel de información?

Si estás usando una pantalla grande, el panel de información se abrirá automáticamente. Sin embargo, en una pantalla de tamaño promedio, el panel de información estará cerrado por defecto.

Puedes cerrarlo haciendo clic en el botón `Más`, ubicado en la esquina superior derecha de la vista de la devolución al proveedor.

You can close by tapping on the `X Cerrar`, en la esquina superior derecha del panel de información.

![Open and close the Information Panel](/docs/replenishment/images/or_sidepanel.gif)

#### Información adiciona

En la sección de **Información adicional**, puedes.

- Ver quién creó la devolución al proveedor (nombre del usuario)
- Ver y editar el color de la devolución al proveedor. Para editar el color, haz clic en el círculo de color y selecciona un color del menú emergente
- Escribir o editar un comentario

#### Documentos relacionados

En la selección de **Documentos relacionados**, puedes ver otros documentos de transacción relacionados con la devolución al proveedor.

Si tu devolución al proveedor fue creada a partir de una **Entrada**, el número de referencia de la entrada aparecerá en esta sección.

En el futuro, también se incluirán otros documentos, como documentos de transporte o notas de listas de recogida.

#### Detalles de transporte

En esta sección, puedes ver o editar un número de referencia de transporte (por ejemplo, un número de reserva o un número de seguimiento).

#### Acciones

1. **Eliminar:** Puedes pulsar el botón `Eliminar` para borrar la devolución. Solo puedes eliminar las devoluciones de proveedor si no han sido <code>ENVIADAS</code>.
2. **Copiar al portapapeles**: Puedes pulsar el botón `Copiar al portapapeles` para copiar los detalles de la factura al portapapeles.

### Secuencia de Estados de la Devolución de Proveedor

La secuencia de estados se encuentra en la esquina inferior izquierda de la pantalla de Devolución de Proveedor.

Los estados completados están resaltados en azul, mientras que los próximos estados aparecen en gris.

<figure>
<img src="/docs/replenishment/images/or_statussequence2.png" alt="Supplier Return Status Sequence (New)" style="width:100%">
<figcaption align = "center">Secuencia de Estado: el estado actual es <code>NUEVO</code>.</figcaption>
</figure>

<figure>
<img src="/docs/replenishment/images/or_statussequence.png" alt="Supplier Return Status Sequence (Shipped)" style="width:100%">
<figcaption align = "center">Secuencia de Estado: el estado actual es </i><code>ENVIADO</code>.</figcaption>
</figure>

Hay 5 estados para la Devolución de Proveedor:

| Estado         | Descripción                                                                                                                                                            |
| :------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nuevo**      | Este es el primer estado cuando se crea una devolución. Los productos se reservan (ya no están disponibles para otros envíos), pero aún forman parte de tu inventario. |
| **Recogido**   | La devolución ha sido recogida y ahora está lista para enviarse. Los productos ya no forman parte de tu inventario.                                                    |
| **Enviado**    | La devolución ha sido enviada.                                                                                                                                         |
| **Entregado**  | Tu proveedor ha recibido la devolución.                                                                                                                                |
| **Verificado** | Tu proveedor ha verificado la cantidad de la devolución. Los productos ahora forman parte de su inventario.                                                            |

Si colocas el cursor sobre la secuencia de estados, aparece una ventana con el historial de la devolución. Podrás ver la fecha en que se actualizó la devolución de un estado a otro.

<div class="imagetitle">
Esta devolución fue creada el 03/03/2022, recogida el 04/03/2022 y enviada el 07/03/2022.
</div>

![Outbound status: hover](/docs/replenishment/images/is_statussequence_hover.png)

### Casilla de verificación "En espera"

Ubicada en la esquina inferior izquierda, a la izquierda de la secuencia de estados.

Marcar la casilla de verificación `En espera` impide que la Devolución de Proveedor se actualice al siguiente estado.

![Outbound checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Botón Cerrar y Confirmar

#### Botón Cerrar

Toca el botón `Cerrar` para salir de la vista de Devolución de Proveedor y regresar a la lista de Devoluciones de Proveedor.

#### Botón Confirmar

El botón `Confirmar` actualiza el estado de una devolución. El estado que puedes confirmar depende del estado actual de la devolución y sigue la secuencia mostrada a continuación.

Cuando gestionas una Devolución de Proveedor, solo puedes confirmar los estados Recogido y Enviado.

| Confirmar...           | Estado Actual | Estado Siguiente |
| :--------------------- | :------------ | :--------------- |
| **Confirmar Recogido** | Nuevo         | Recogido         |
| **Confirmar Enviado**  | Recogido      | Enviado          |

No es necesario actualizar una devolución al siguiente estado en la secuencia. Puedes optar por saltarte el estado `Recogido` y pasar directamente a `Enviado` por ejemplo.

Como se muestra a continuación, toca la flecha hacia abajo del botón `Confirmar` y selecciona el estado al que deseas actualizar la devolución.

![Skip Status](/docs/replenishment/images/or_confirm_skip_status.gif)

## Agregar líneas a una devolución de proveedor

Toca el botón `Agregar Artículo` (en la esquina superior derecha).

Se abrirá una nueva ventana de `Agregar Artículo`.

![Add Item button](/docs/replenishment/images/or_additembutton.png)

### Seleccionar un artículo

En la ventana de `Agregar un artículo`, puedes buscar un artículo de las siguientes maneras:

- Recorriendo la lista de artículos disponibles
- Escribiendo parte o todo el nombre del artículo
- Escribiendo parte o todo el código del artículo

Una vez que el artículo esté resaltado, toca el nombre o presiona `Enter`.

![Select an item](/docs/replenishment/images/or_additem.gif)

#### Lista de lotes disponibles:

Esta es una lista de números de lote que tienes en inventario para este artículo:

- **Código**: Código del artículo
- **Nombre**: Nombre del artículo
- **Lote**: Número de lote. Es una designación dada a los productos fabricados en la misma producción.
- **Vencimiento**: Fecha de vencimiento del lote (formato: MM/AAAA)
- **Empaque**: Número de unidades por empaque
- **Cantidad Disponible para Devolución**: Número de empaques disponibles (que no han sido asignados a otros envíos o devoluciones)
- **Cantidad a Devolver**: Número de empaques a devolver

![List of available batch numbers](/docs/replenishment/images/or_additem_listofbatches.png)

### Devolver una cantidad de empaques

Como se puede ver arriba, inicialmente la cantidad de empaques a devolver de cada lote será 0. Puedes ajustar esta cantidad para devolver algunos o todos los productos disponibles de ese lote.

<div class="imagetitle">
En el ejemplo a continuación, estamos devolviendo todos los 17 empaques del primer lote en la lista, y solo 5 empaques del segundo lote. 
</div>

![Set quantities to return](/docs/replenishment/images/or_addquantities.png)

#### Advertencias

Es posible que veas uno o más mensajes de advertencia en esta pantalla:

![return quantity warning!](/docs/replenishment/images/or_addquantities_warning.png)

Si olvidas ingresar una cantidad a devolver para algún lote y haces clic en `Siguiente paso`, verás este mensaje de advertencia. Necesitarás agregar una cantidad a devolver de al menos un lote. Puedes hacer clic en `Cancelar` si ya no deseas devolver ninguno de estos productos.

### Proveer razones

<div class="note">

Las razones de devolución se configuran en el servidor central de mSupply a través de **[opciones](https://docs.msupply.org.nz/preferences:options)**

</div>

Cuando estés satisfecho con las cantidades, puedes presionar el botón `Siguiente paso`. La lista de lotes se filtrará para incluir solo aquellos lotes a los que hayas asignado una cantidad a devolver. En esta vista, puedes proporcionar una razón para devolver cada lote, así como un comentario adicional.

![Provide return reasons](/docs/replenishment/images/or_additem_returnstep.png)

### Confirmar

Cuando estés satisfecho con las cantidades y las razones, puedes presionar:

- el botón `OK` Tu artículo será añadido a la Devolución de Proveedor. Las cantidades de cada lote serán reservadas para esta devolución.
- el botón `OK & Siguiente` para añadir otro artículo de inmediato.
- el botón `Atrás`, para regresar al paso de `Seleccionar cantidad`.

## Editar una línea de devolución de proveedor

Para editar una línea de devolución, tócala. Se abrirá la ventana `Editar Artículo`, que es idéntica a la ventana `Añadir Artículo`, excepto que el artículo ya está seleccionado.

### Editar una línea de devolución

<div class="nota">
 <b></b> Puedes editar una línea de devolución si la devolución tiene un estado inferior a <code>ENVIADO</code>. 
</div>

1. Abre la devolución de proveedor que deseas editar.
2. Toca la línea que quieres editar. Aparecerá una ventana idéntica a `Agregar Artículo`. En esta etapa, puedes:

   - Editar la cantidad a devolver para cada lote
   - Hacer clic en `Sgiente paso` para ver o ajustar las razones y comentarios.

Si estableces la cantidad a devolver en `0`, esa línea será eliminada de la devolución.

Si configuras todas las cantidades de devolución `0`, y haces clic en `Sguiente paso` aparecerá este mensaje de advertencia. Informa que no se han proporcionado cantidades para la devolución; desde aquí, puedes hacer clic en `OK` nuevamente para confirmar. En ese caso, la ventana se cerrará y todas las líneas para ese artículo serán eliminadas.

![no quantities warning!](/docs/replenishment/images/or_edit_noquantities.png)

<div class="nota">
 <b></b> Al editar una línea de devolución, no puedes cambiar el artículo. Necesitarías eliminar la línea de devolución y crear una nueva. 
</div>

### Eliminar una Línea de Devolución

1. Abre la devolución de proveedor que deseas editar.
2. Selecciona la(s) línea(s) que quieres eliminar marcando la(s) casilla(s) a la derecha de la lista.
3. Ve al menú desplegable `Acciones` (esquina superior derecha, encima de la lista).
4. Selecciona la acción `Eliminar líneas seleccionadas`

![Supplier Return actions dropdown](/docs/replenishment/images/or_actions_deletelines.png)

<div class="imagetitle">
En el ejemplo a continuación, estamos eliminando 2 artículos, con los códigos 030453 y 201116
</div>

![Alt Text](/docs/replenishment/images/or_deleteselectedlines.gif)

<div class="tip">
 <b></b> Puedes eliminar varias líneas a la vez. Asegúrate de revisar qué líneas están seleccionadas antes de proceder con la eliminación.  
</div>

## Procesando una Devolución al Proveedor

### Confirmar el alistamiento de la Devolución al Proveedor

El alistamiento se refiere al proceso donde los artículos individuales se recogen de una centro de cumplimiento (generalmente un almacén o una farmacia).

Una vez que se ha creado una devolución, el siguiente paso es ir a buscar los artículos para preparar la devolución real. Para ayudar con esto, puedes generar una **lista de recogida** una lista de recogida indica:

- Los artículos que se deben recoger
- La cantidad y los números de lote de cada artículo
- Si gestionas tu inventario con centros de almacenamiento, dónde se encuentran los artículos.

Una vez que todos los artículos están recogidos y embalados, puedes confirmar el alistamiento de la devolución para indicar que está lista para ser despachada.

Para confirmar que una devolución ha sido alistada, pulsa el botón `Confirmar recogida`.

![Alt Text](/docs/replenishment/images/or_confirmpicked.gif)

Una vez que se confirma el alistamiento:

- Una vez que se confirma la `RECOGIDA`
- Los bienes ya no forman parte de tu inventario
- Ahora se te invita a confirmar el envío mediante el botón `Confirmar enviado`
- Si tu proveedor también utiliza mSupply, se habrá generado una **Devolución de Cliente**, que ahora será visible para tu proveedor.

En esta etapa, aún puedes editar las líneas de la devolución, añadir artículos o eliminar líneas existentes. Sin embargo, si se ha confirmado la recogida, debes asegurarte de informar a tu centro de almacenamiento sobre cualquier cambio para que puedan garantizar que la devolución siga siendo correcta.

### Confirmar el envío de la Devolución al Proveedor

El último paso para devolver inventario mediante una Devolución al Proveedor es confirmar que el inventario ha sido enviado.

Para confirmar que una Devolución al Proveedor ha sido enviada, pulsa el botón `Confirmar Envío`.

Una vez que el envío se ha confirmado:

- El estado de la devolución será `ENVIADO`
- Ya no podrás editar las líneas de devolución
- Ya no podrás eliminar la devolución
- Tu proveedor podrá marcar la devolución como `ENTREGADO` una vez que la reciba

### Seguimiento del progreso de las Devoluciones al Proveedor

Si tu proveedor también utiliza mSupply, podrás ver cuándo reciben tus devoluciones:

- El estado cambiará a `ENTREGADO` cuando los bienes sean recibidos: tu proveedor confirmará que recibió tu devolución
- El estado cambiará a `VERIFICADO` cuando la devolución haya sido verificada por tu proveedor. Los bienes ahora formarán parte de su inventario

## Ver una Devolución al Proveedor

Al ver una devolución específica, puedes ver los lotes de esa devolución agrupados por artículo o con cada lote listado por separado.
Para cambiar el modo de vista, haz clic en el switch `Agrupar por artículo`.

Cuando se agrupa por artículo, puedes expandir el artículo para ver los lotes individuales o usar la opción de expansión en el encabezado de la tabla para expandir todas las filas agrupadas. Si haces clic en un artículo, también verás todos los lotes seleccionados, como se muestra en este ejemplo:

![Group by Item](/docs/replenishment/images/or_group_by_item.gif)

Si no tienes suficiente espacio en tu pantalla, o simplemente no estás interesado en algunas de las columnas mostradas, tienes la opción de ocultar las columnas que deseas no mostrar en esta vista.

Haz clic en el botón `Mostrar / ocultar columnas` que está en la parte superior derecha de la tabla. Esto te dará una lista de las columnas disponibles, y podrás marcar las columnas que deseas ver. Las opciones elegidas se guardan para el navegador actual, por lo que la próxima vez que veas una Devolución al Proveedor, solo verás las columnas seleccionadas. Si has elegido qué columnas mostrar, el botón se mostrará en azul para recordarte que hay más columnas disponibles.

<div class="imagetitle">
En el siguiente ejemplo, estamos ocultando las columnas de precios
</div>

![Hide columns](/docs/replenishment/images/or_filter_columns.gif)
