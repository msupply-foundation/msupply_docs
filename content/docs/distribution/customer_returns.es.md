+++
title = "Devoluciones de Cliente"
description = "Recepción de mercancía devuelta por parte de los clientes"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 44
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++
Una Devolución de Cliente se utiliza para registrar el stock que un cliente devuelve.

Es importante poder recibir mercancía de un cliente sin que se cuente como mercancía que proviene de un proveedor. Si tu cliente te envía los productos en una Salida y luego los recibes a través de una Entrada, esos productos se contarán como parte del 'suministro' de tu tienda de los proveedores, lo cual no es correcto. Una Devolución de Cliente es la manera adecuada de recibir mercancía de un cliente.

Si has utilizado mSupply en el pasado, es posible que estés familiarizado con el término **Crédito de Cliente** en lugar de Devolución de Cliente.

Todos los productos devueltos por un cliente deben registrarse en mSupply mediante una Devolución de Cliente. Estas se crean automáticamente como resultado de una Devolución de Proveedor generada por otro almacén en Open mSupply, y también pueden ingresarse manualmente.

## Ver las Devoluciones de Cliente

### Abre el Menú de Devoluciones de Cliente

Elige `Distribución` > `Devoluciones de Cliente` en el panel de navegación.

![go to Customer Return](/docs/distribution/images/gotoir.png)

Se te mostrará una lista de Devoluciones de Cliente si algunas ya fueron creadas.

Desde esta pantalla puedes:

- Ver la lista de Devoluciónes de Clientes
- Crear una nueva Devolución de Cliente
- Exportar las Devoluciones de Cliente a un archivo `.csv`

### Lista de Devoluciones de Cliente

1. La lisya de Devoluciones de Cliente se divide en 6 columnas:

| Columna        | Descripción                           |
| :------------  | :-----------------------------------  |
| **Nombre**     | Nombre del Cliente                    |
| **Estado**     | Estado actual de la devolución        |
| **Número**     | Número de referencia de la devolución |
| **Creado**     | La feha de creación de la devolución  |
| **Comentario** | Comentarios sobre la devolución       |
| **Referencia** | Referencia del Cliente                |

1. La lista puede mostrar un número fijo de devolcuiones por página. En la esquina inferior izquierda, podrás ver cuántas devolucionesse están mostrando actualmente en la pantalla.

![Page](/docs/distribution/images/os_list_showing.png)

2. Si tienes más devoluciones que el límite actual, puedes navegar a otras páginas oprimiendo en el número de la página o usando las fechas izquierda o derecha (esquina inferior izquierda).

![Page](/docs/distribution/images/os_list_pagenumbers.png)

3. También puedes seleccionar un número diferente de filas para mostrar por página usando la opciónn en la esquina inferior derecha de la página.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

### Buscar por Nombre de Cliente

Puedes filtrar la lista de Devoluciones de Cliente por nombre o por estado. ¡Esto puede ser útil si estás buscando por una Devolución en particular! 

Por ejemplo: Selecciona el filtro de `Nombre` desde la lista para poder filtrar por el nombre del cliente. Escribe el nombre del cliente en el campo de `Nombre`. Todas las devoluciones de este cliente aparecerán en la lista.

![Customer Return filter](/docs/distribution/images/ir_filter.gif)

### Exportar Devoluciones de Cliente

La lista de Devoluciones de Cliente se puede exportar a un archivo separado por comas (csv). Simplemente haz clic en el botón de exportar (a la derecha, en la parte superior de la página)

![Export button](/docs/distribution/images/export.png)

y el archivo se descargará. La función de exportación descargará todas las Devoluciones de Cliente, no solo la página actual, si tienes más devoluciones que el límite de la página actual.

### Eliminar una Devolución de Cliente

Puedes eliminar una devolución desde la lista de Devoluciones de Cliente.

1. Selecciona la devolución que deseas eliminar marcando la casilla al lado izquierdo de la lista. Puedes seleccionar más de una devolución para eliminar. Incluso puedes seleccionarlas todas usando la casilla maestra en los encabezados de la lista.

2. Abre el menú desplegable `Seleccionar` (esquina superior derecha, encima de la lista) y selecciona `Eliminar líneas seleccionadas`.

3. Una notificación confirma cuántas devoluciones fueron eliminadas (esquina inferior izquierda).

<div class="nota">
Solo puedes eliminar Devoluciones de Cliente si tienen un estado de <code>NUEVO</code>.
</div>

![Inbound list: delete](/docs/distribution/images/ir_delete.gif)

## Crear una Devolución de Cliente

Las Devoluciones de Cliente se crean automáticamente cuando otro almacén crea una Devolución al Proveedor. Si es necesario, también se pueden crear manualmente, como se explica a continuación.

### Crear desde una Salida

A menudo, procesarás la devolución de producto que enviaste mediante una Salida. En este caso, puedes [crear una Devolución de Cliente desde la propia salida](../outbound-shipments/#process-return-of-stock-from-an-outbound-shipment).

### Crear manualmente

1. Ve a `Distribución` > `Devolución de Cliente`.

2. Presiona el botón de `Nueva Devolución`, en la esquina superior derecha

![New Return](/docs/distribution/images/ir_newreturn.png)

3. Una nueva ventana de `Clientes` se abrirá, invitándote a seleccionar un cliente.

#### Seleccionar al Cliente

1. En la ventana de `Clientes`, se te mostrará una lista de clientes disponibles. Puedes seleccionar a tu cliente de la lista o filtrar escribiendo el nombre del cliente.

<div class="imagetitle">
En el siguiente ejemplo, queremos recibir stock devuelto de <b>Tamaki Central Medical Store</b>. 
</div>

![Create Customer Return](/docs/distribution/images/ir_create.gif)

<div class="tip">
Puedes saber si un cliente también está utilizando Open mSupply en su almacén. Si lo hacen, verás un ícono como este <img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto"> junto al código del cliente. 
</div>

2. Una vez que presiones `Enter`, o hagas clic en un cliente, tu Devolución de Cliente se creará automáticamente.

Si todo salió bien, deberías ver el nombre de tu cliente en la esquina superior izquierda y el estado debería ser <code>NUEVO</code>

### Ingresar una Referencia del Cliente

Una vez que se ha creado tu Devolución de Cliente, puedes ingresar una referencia del cliente en el campo `Referencia de Cliente`, si la tienen (por ejemplo, PO#1234567).

### Panel de Información de Devolución de Cliente

El Panel de Información te permite ver o editar información sobre la Devolución de Cliente. Está dividido en múltiples secciones:

- Información Adicional
- Documentos Relacionados
- Detalles de Transporte

Planeamos agregar más secciones en el futuro a medida que Open mSupply crezca.

#### ¿Cómo abrir y cerrar el Panel de Información?

Si estás utilizando una pantalla grande, el panel de información se abrirá automáticamente para ti. Sin embargo, en una pantalla de tamaño promedio, el panel de información estará cerrado por defecto.

Para abrir el Panel de Información, puedes presionar el botón `Más`, ubicado en la esquina superior derecha de la vista de Devolución de Cliente.

Puedes cerrarlo presionando el botón `X Cerrar`, en la esquina superior derecha del panel de información.

![Open and close the Information Panel](/docs/distribution/images/ir_sidepanel.gif)

#### Información Adicional

En la sección de **Información Adicional**, puedes:

- Ver quién creó la Devolución de Cliente (nombre del usuario)
- Ver y editar el color de la Devolución de Cliente. Para editar el color, toca el círculo de color y selecciona un color del menú emergente
- Escribir o editar un comentario

#### Documentos Relacionados

En la sección de **Documentos Relacionados**, puedes ver otros documentos de transacción relacionados con la Devolución de Cliente.

Si tu Devolución de Cliente fue creada a partir de una **Salida**, el número de referencia de la Salida aparecerá en esta sección.

En el futuro, también incluiremos otros documentos, como documentos de transporte o albaranes.

#### Detalles de Transporte

Si tu Devolución de Cliente fue creada automáticamente, a través de una Devolución al Proveedor de otro almacén, verás una sección de Detalles de Transporte. Aquí, puedes ver una referencia de transporte (por ejemplo, un número de reserva o de seguimiento).

#### Acciones

1. **Eliminar:** Puedes hacer clic en el botón `Eliminar`. Solamente puedes eliminar las Devoluciones de Cliente mientras estén con el estado de <code>NUEVO</code>.
2. **Copiar al Portapapeles**: Puedes hacer clic en el botón  `Copiar al Portapapeles` para copiar los detalles de la factura al portapapeles.

### Secuencia de Estados de la Devolución de Cliente

La secuencia de estados se encuentra en la esquina inferior izquierda de la pantalla de Devolución de Cliente.

Los estados completados se resaltan en azul; los próximos estados aparecen en gris.

<figure>
<img src="/docs/distribution/images/ir_statussequence.png" alt="Customer Return Status Sequence (New)" style="width:100%">
<figcaption align = "center">Secuencia de Estado: el estado actual es <code>NUEVO</code>.</figcaption>
</figure>

<figure>
<img src="/docs/distribution/images/ir_statussequence2.png" alt="Customer Return Status Sequence (Shipped)" style="width:100%">
<figcaption align = "center">Secuencia de Estado: el estado actual es </i><code>ENVIADO</code>.</figcaption>
</figure>

Hay 5 estados para una Devolución de Cliente:

| Estado         | Descripción                                                                                                                        |
| :------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Nuevo**      | Este es el primer estado cuando creas una nueva Devolución de Cliente manual                                                       |
| **Alistado**   | El cliente ha confirmado que la devolución está preparada y lista para enviar (solo aplica a devoluciones creadas automáticamente) |
| **Enviado**    | La devolución ha sido enviada y los productos están en tránsito (aplica solo a devoluciones creadas automáticamente)               |
| **Entregado**  | Cuando confirmas que la devolución ha sido entregada                                                                               |
| **Verificado** | Cuando has verificado la Devolución de Cliente                                                                                     |

Probablemente notaste que dos de los valores de estado solo aplican a envíos creados automáticamente. Estos son creados por el sistema cuando otro almacén en el sistema crea una Devolución al Proveedor para devolver stock a tu almacén. Si este es el caso, verás un mensaje cerca de la parte superior de la página:

![Automatic IS message](/docs/distribution/images/ir_message_automatic.png)

Ten en cuenta que este mensaje aparece de forma diferente si el estado es `Entregado` o `Verificado`

![Automatic IS message: delivered](/docs/distribution/images/ir_message_automatic_delivered.png)

Sin embargo, si has creado una Entrada manualmente, entonces se mostrará el siguiente mensaje:

![Manual IS message](/docs/distribution/images/ir_message_manual.png)

y verás que la barra de estado tiene solo los valores de estado que se aplican a este tipo de envío.

<figure align="center">
    <img src="/docs/distribution/images/ir_statussequence_manual.png" alt="Inbound Shipment Status Sequence (New & manual)" style="width:60%">
    <figcaption align="center">Secuencia de Estado: el estado actual es </i><code>Nuevo</code>.</figcaption>
</figure>


Si pasas el cursor sobre la secuencia de estados, aparecerá una ventana de historial de devoluciones. Podrás ver la fecha en que una devolución se actualizó de un estado a otro.

<div class="imagetitle">
Esta devolución manual ha sido creada el 28/03/2024
</div>

![Inbound status: hover 2](/docs/distribution/images/ir_status_sequence_hover_manual.png)

<div class="imagetitle">
Esta devolución automática ha sido creada, alistada y enviada el 26/03/24
</div>

![Inbound status: hover](/docs/distribution/images/ir_status_sequence_hover_auto.png)

### Casilla de Retención

Ubicada en la esquina inferior izquierda, a la izquierda de la secuencia de estado.

Marcar la casilla de `Retención` evita que la Devolución de Cliente se actualice al siguiente estado..

![Inbound checkbox](/docs/distribution/images/os_holdcheckbox.png)

### Botón de Cerrar y Confirmar

#### Botón de Cerrar

Toca el botón `Cerrar` para salir de la vista de Devolución de Cliente y volver a la lista de Devoluciones de Cliente.

#### Botón de Confirmar

El botón `Confirmar` actualiza el estado de una devolución. El estado que puedes confirmar depende del estado actual de la devolución y sigue la secuencia que se muestra a continuación.

Al gestionar una Devolución de Cliente, solo puedes confirmarla como Entregada o Verificada.

| Confirmar...               | Estado Actual   | Siguiente Estado |
| :------------------------- | :-------------- | :--------------- |
| **Confirmar Entregado**    | Enviado         | Entregado        |
| **Confirmar Verrificado**  | Entregado       | Verificado       |

Para las Devoluciones de Cliente manuales, no es necesario actualizar al siguiente estado en la secuencia. Puedes optar por omitir `Entregado` para ir directamente a `Confirmar Verificado`.

Como se muestra a continuación, toca la flecha hacia abajo del botón `Confirmar` y selecciona el estado al que deseas actualizar la devolución.

![Skip Status](/docs/distribution/images/ir_confirm_skip_status.gif)

## Agregar líneas a una Devolución de Cliente

Toca el botón `Agregar Artículo` (esquina superior derecha).

![Add Item button](/docs/distribution/images/ir_additembutton.png)

### Seleccionar un Artículo

Se abrirá una nueva ventana `Agregar Artículo`. En esta ventana puedes buscar un artículo de las siguientes maneras:

- Revisando la lista de artículos disponibles
- Escribiendo parte o todo el nombre del artículo
- Escribiendo parte o todo el código de un artículo

Una vez que tu ítem esté resaltado, toca el nombre o presiona `Enter`.

![Select an item](/docs/distribution/images/ir_additem.gif)

#### Paso de Selección de Cantidades

En el paso `Selectar Cantidades`, puedes ingresar los siguientes campos:

- **Código**: Código del Artículo
- **Nombre**: Nombre del Artículo
- **Lote**: Número de lote, una designación para productos fabricados en la misma producción
- **Vencimiento**: Fecha de vencimiento del lote (formato: MM/AAAA)
- **Tamaño de Paquete**: Fecha de vencimiento del lote (formato: MM/AAAA)
- **Cantidad de Paquetes Emitidos**: Número de paquetes emitidos en la Salida
- **Cantidad Devuelta**: Número de paquetes a devolver

Si estás recibiendo más de un número de lote para el mismo artículo, puedes agregar líneas con el botón  `Agregar Lote`.

![List of batches](/docs/distribution/images/ir_list_of_batches.png)

#### Advertencias

Es posible que veas uno o más mensajes de advertencia en esta pantalla.

Si olvidas ingresar una `Cantidad Devuelta` para algún lote y haces clic en `Siguiente Paso`, yverás un mensaje de advertencia. Deberás agregar una cantidad devuelta para al menos un lote. Puedes hacer clic en `Cancelar` si ya no deseas procesar la devolución de este stock.

![return quantity warning!](/docs/distribution/images/ir_addquantities_warning.png)

### Proporcionar Razones

<div class="nota">

Las razones de devolución se configuran en el servidor central de mSupply mediante **[opciones](https://docs.msupply.org.nz/preferences:options)**

</div>

Cuando estés conforme con la información del lote y las cantidades de devolución, puedes presionar el botón `Siguiente Paso`. La lista de lotes se filtrará para incluir solo aquellos a los que les hayas asignado una cantidad de devolución. En esta vista, puedes ingresar una razón para la devolución de cada lote y un comentario adicional.

![Provide return reasons](/docs/distribution/images/ir_additem_returnstep.png)

### Confirmar

Cuando estés conforme con las cantidades y razones, puedes presionar:

- el botón `OK`. Tu artículo se agregará a la Devolución de Cliente
- el botón`OK & Siguiente` para agregar otro artículo de inmediato
- el botón de `Atrás`, para regresar al paso `Seleccionar Cantidad`

## Editar una línea de Devolución de Cliente

Para editar una línea de devolución, tócala. Se abrirá la ventana `Editar Artículo`, que es idéntica a la ventana `Agregar Artículo`, excepto que el artículo ya está seleccionado.

### Editar una Línea de Devolución

<div class="nota">
 <b></b> Puedes editar una línea de devolución si la devolución aún no está <code>VERIFICADA</code>. 
</div>

1. Abre la Devolución de Cliente que deseas editar.
2. Toca la línea que deseas modificar. Aparecerá una ventana idéntica a la de `Agregar Artículo`. En esta etapa puedes:

   - Editar la información del lote
   - Editar la cantidad devuelta para cada lote
   - Hacer clic en `Siguiente Paso` para ver/ajustar los motivos y comentarios

Si estableces la Cantidad Devuelta en `0`, esa línea se eliminará de la devolución.

Si estableces todas las cantidades de devolución en `0`, y haces clic en `Siguiente Paso` verás este mensaje de advertencia. Te informa que no se proporcionaron cantidades de devolución; desde aquí puedes hacer clic en `OK` nuevamente para confirmar, en cuyo caso la ventana se cerrará y todas las líneas para ese artículo serán eliminadas.

![no quantities warning!](/docs/distribution/images/ir_edit_noquantities.png)

<div class="nota">
 <b></b> Al editar una línea de devolución, no puedes cambiar el artículo. Necesitarías eliminar la línea de devolución y crear una nueva. 
</div>

### Eliminar una Línea de Devolución

1. Abre la Devolución de Cliente que deseas editar.
2. Selecciona la(s) línea(s) que deseas eliminar marcando la(s) casilla(s) a la derecha de la lista.
3. Ve al menú desplegable `Acciones` (en la esquina superior derecha, sobre la lista).
4. Selecciona la acción `Eliminar líneas seleccionadas`

![Delete lines actions dropdown](/docs/replenishment/images/or_actions_deletelines.png)

<div class="imagetitle">
En el ejemplo a continuación, estamos eliminando <i>artículo 030063 - Ácido Acetilsalicílico 100 mg tabletas</i>
</div>

![Alt Text](/docs/distribution/images/ir_deleteselectedlines.gif)

<div class="tip">
 <b></b> Puedes eliminar múltiples líneas a la vez. Asegúrate de revisar lo que está seleccionado antes de realizar la acción de Eliminar. 
</div>

## Recibir una Devolución de Cliente

### Confirmar la entrega de la devolución

Ya sea que tu Devolución de Cliente sea **manual** o **automática**, el primer paso para recibir los bienes devueltos es confirmar la entrega.

En esta etapa, no es necesario verificar si las cantidades u otra información son correctas; solo debes reconocer que has recibido los bienes devueltos de tu cliente.

Para confirmar que una Devolución de Cliente ha sido entregada, haz clic en el botón `Confirmar Entrega`.

Una vez que hayas hecho esto:

- Los bienes ahora forman parte de tu inventario
- El estado de la devolución ahora es `ENTREGADO`

<div class="nota">
En caso de que tu Devolución de Cliente sea <b>automática</b>, no podrás confirmar su entrega a menos que el cliente haya confirmado su envío. En otras palabras, el estado de tu envío debe ser <code>ENVIADO</code> antes de que puedas confirmar que has recibido los bienes devueltos. 
</div>

![Alt Text](/docs/distribution/images/ir_confirmdelivered.gif)

### Verifica tu Devolución de Cliente

La verificación es el último paso para recibir los bienes devueltos en mSupply. En esta etapa, puedes revisar lo que has recibido y asegurarte de que la información en mSupply sea correcta.

Tienes la posibilidad de verificar la siguiente información:

- Números de lote y sus fechas de caducidad
- Cantidad de paquetes y tamaño del paquete
- Razones de la devolución

Una vez que toda la información haya sido capturada o verificada, puedes confirmar la Devolución de Cliente como `VERIFICADA` by tapping on the `Confirma Verificado`.

Una vez que hayas hecho esto:

- El estado de la Devolución de Cliente ahora es `VERIFICADA`
- Ya no podrás editar las líneas de devolución
- Ya no podrás eliminar la devolución

## Visualizar una Devolución de Cliente

Al ver una devolución específica, puedes ver los lotes de esa devolución agrupados por artículo o con cada lote listado por separado. Para cambiar el modo de vista, haz clic en el botón `Agrupar por Artículo`.

Cuando están agrupados por artículo, puedes expandir el artículo para ver los lotes individuales o utilizar la opción de expandir en el encabezado de la tabla para expandir todas las filas agrupadas.

![Group by Item](/docs/distribution/images/ir_group_by_item.gif)

Si no tienes suficiente espacio en tu pantalla o simplemente no estás interesado en algunas de las columnas mostradas, tienes la opción de ocultar las columnas que se muestran en esta vista.

Haz clic en el botón `Mostrar / ocultar columnas` que se encuentra en la parte superior derecha de la tabla. Esto te dará una lista de las columnas disponibles; puedes seleccionar las columnas que deseas ver. Las opciones elegidas se almacenan para el navegador actual, por lo que la próxima vez que visualices una Devolución de Cliente, verás solo las columnas seleccionadas. Si has elegido qué columnas mostrar, entonces el botón se mostrará en azul para recordarte que hay más columnas disponibles.

<div class="imagetitle">
En el siguiente ejemplo, ocultamos las columnas de lote, fecha de caducidad y cantidad por unidad.
</div>

![Hide columns](/docs/distribution/images/ir_filter_columns.gif)
