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

- Solicitudes
- Pedidos
- Informes y Solicitudes
- I&R

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

- Existe una regla general en la industria que el _MOS Máximo_ debería ser establecido en 3 veces el ciclo de pedido
- El valor por defecto de _MOS Máximo_ es `3.0`, lo que se basa en un ciclo de pedido mensual
- Si por ejemplo, el ciclo de pedido es cada dos meses, entonces el _MOS Máximo_ debería ser establecido en 3 x 2 = `6.0`

<div class="imagetitle">
En el siguiente ejemplo, estableceremos nuestro MOS Máximo en 3 meses.  
</div>

![MaxMOS](/docs/replenishment/images/intord_maxmos.png)

Esto se puede hacer antes o después de agregar elementos a tu orden.

### Agregar un solo artículo

Selecciona `Agregar artículo` para añadir un solo artículo a tu pedido. Se abrirá una nueva ventana:

![Internal Order: add item](/docs/replenishment/images/intord_additem2.png)

Primero, selecciona el artículo que deseas agregar a tu pedido. Abre el menú desplegable `Detalles de inventario` y selecciona tu artículo de la lista. También puedes escribir parte o todo el nombre (o código) del artículo para buscar un artículo específico.

Una vez seleccionado el artículo, deberías ver la siguiente información en la ventana:

- **Código del artículo** y **Nombre del artículo**
- **Unidad**: la unidad por defecto utilizada para este artículo (por ejemplo, Tableta, Vial)
- **AMC**: Consumo Promedio Mensual. Cuánto stock utiliza tu almacén cada mes en promedio (basado en un número configurable de meses, el valor por defecto es de 3 meses)
- **Cantidad Sugerida**: cuánto inventario mSupply sugiere que pidas para alcanzar la cantidad objetivo
- **Cantidad de pedido**: la cantidad de unidades que solicitas a tu proveedor.

También deberías ver los siguientes gráficos:

- **Distribución de inventario**: En este gráfico, verás la siguiente información:
  - La _cantidad objetivo_ para este artículo. Esto se calcula como: MOS máximo x AMC.
  - Tu _Inventario a la mano_ actual (en gris).
  - La _cantidad sugerida_ calculada por mSupply.

<div class="imagetitle">
En el ejemplo siguiente, nuestra cantidad objetivo es de 600 unidades, lo que equivale a 3 meses de inventario (3 x 200 = 600 unidades). Nuestro inventario a la mano (en gris) es de 50, por lo que para alcanzar nuestra meta, mSupply sugiere pedir 550 unidades (600 - 50). 
</div>

![Stock Distribution](/docs/replenishment/images/intord_charts_stockdistri.png)

<div class="imagetitle">
En el ejemplo siguiente, la cantidad objetivo es de 62 unidades. Dado que ya tenemos 250 unidades en stock (en gris), la cantidad sugerida es cero. 
</div>

![Stock Distribution 2](/docs/replenishment/images/intord_charts_stockdistri2.png)

- **Historial de consumo (mensual)**: este gráfico muestra el consumo mensual hasta 12 meses en el pasado (en gris) y el AMC actual (en naranja):

![Consumption](/docs/replenishment/images/intord_charts_consumption.png)

- **Evolución de inventario**: este gráfico muestra el nivel de tu stock durante los últimos 30 días y tu inventario proyectado para los próximos 30 días. El inventario proyectado se actualizará en función de tus entradas en el campo `Cantidad de pedido`:

![Stock Evolution](/docs/replenishment/images/intord_charts_stockevolution.png)

### Añade artículos usando listas maestras

Si tu organización está utilizando Listas Maestras, puedes añadir múltiples artículos a la vez utilizando las listas maestras de tu almacén. Es especialmente útil cuando tienes muchos artículos en tu pedido y no quieres añadirlos uno por uno.

1. Toca el botón `Agregar desde lista maestra`
2. Selecciona una lista maestra
3. Se abrirá una ventana de diálogo que te preguntará si deseas agregar todos los artículos de esta lista maestra. Toca en `Aceptar` si deseas continuar.

Ahora todos los artículos de la lista maestra aparecerán en tu pedido. Si habías agregado previamente algún artículo individualmente, se agregarán los artículos que no estén ya incluidos.

Para cambiar la **Cantidad del pedido** toca en la línea del pedido correspondiente o toca en el botón `Sugerido a Pedido`

![Internal Order: add from master list](/docs/replenishment/images/intord_addfromml.gif)

<div class="nota"> 
Las listas maestras se definen y asignan a los almacenes a nivel del servidor central. Solo podrás ver las listas maestras que son visibles para tu almacén. 
<br> <br>
Si no encuentras la lista maestra que estás buscando y deseas crear una nueva, por favor contacta a tu administrador.
</div>

<div class="consejo">
You can create Internal Orders from multiple master lists by repeating above actions with another master list. 
</div>

### Reading the Internal Order's list

Puedes crear órdenes internas a partir de múltiples listas maestras repitiendo las mismas acciones con otra lista maestra.

| Estado                      | Descripción                                                                                                                                                 |
| :-------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**                  | Código del artículo                                                                                                                                         |
| **Nombre**                  | Nopmbre del artículo                                                                                                                                        |
| **SoH (Restante estimado)** | Cantidad de stock disponible actualmente en tu almacén para este artículo                                                                                   |
| **AMC**                     | Consumo mensual promedio: cantidad de stock que tu tienda utiliza cada mes en promedio (basado en un número configurable de meses, por defecto son 3 meses) |
| **Stock objetivo**          | Este es el stock que estás buscando alcanzar. Calculado como: AMC x MOS Máximo                                                                              |
| **Cantidad sugerida**       | Cantidad de stock que mSupply sugiere que pidas. Esto se calcula como: AMC x MOS Máximo - SoH                                                               |
| **Solicitado**              | Esto se establece en cero por defecto. Esta es la cantidad de unidades que estás solicitando a tu proveedor.                                                |
| **Comentario**              | Un comentario para la línea de pedido. Los comentarios serán visibles para tu proveedor.                                                                    |

### Uso de cantidades sugeridas

Si pulsas `Usar Cantidades Sugeridas` en la cabecera de la requisición, mSupply copiará automáticamente los valores de la columna **Cantidad Sugerida** en la columna **Cantidad Solicitada**.

Siempre puedes editar manualmente la cantidad de cada línea de pedido pulsando en ella.

![Use Suggested Quantities](/docs/replenishment/images/intord_reqtosug.png)

### Imprimir una Orden Interna

Al ver una Orden Interna específica, simplemente haz clic en el botón `Imprimir` que está en la parte superior derecha de la página.
Al imprimir, se generará un archivo PDF que se abrirá en una nueva pestaña de tu navegador. Luego puedes imprimirlo usando tu navegador haciendo clic en imprimir o usando las teclas `control`+`P` (si usas windows) o `cmd`+`P` en tu teclado (si usas una Mac).

![Print button](//docs/introduction/images//print_button.png)

Esto hará que

- Muestre un menú de posibles informes para que seleccione antes de crear un PDF. Esto sucederá si hay más de un informe definido para el tipo de informe `Requisición`.
- Cree un PDF de inmediato, si solo hay un informe para seleccionar.

![Print menu](/docs/distribution/images/os_print_menu.png)

### Enviar una Orden Interna

Para enviar la orden a tu proveedor:

1. Haz clic en el botón `Confirm Envío` (Esquina inferior derecha)
2. Se abrirá una ventana de diálogo que te preguntará si estás seguro de querer enviar la orden. Haz clic en `Aceptar` para continuar
3. El estado de tu orden ahora es `ENVIADO` y la orden ya no es editable

<div class="aviso">
Asegúrate de que tu orden sea correcta antes de enviarla a tu proveedor. Una vez enviada, no se pueden realizar más cambios en órdenes finalizadas.
</div>
