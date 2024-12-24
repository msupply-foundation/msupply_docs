+++
title = "Requisiciones"
description = "Requisiciones basadas en programas"
date = 2023-05-19T00:00:00+00:00
updated = 2023-05-19T00:00:00+00:00
draft = false
weight = 61
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Requisiciones basadas en programas"
toc = true
top = false
+++

Puedes gestionar Órdenes Internas por programa dentro de Open mSupply. Esto implica el uso de configuraciones especiales para las listas maestras. En este método, un programa es una extensión de una lista maestra. Un programa incluye una lista estándar de artículos, así como:

- **Tipo de órdenes**:  categorías definidas que establecen el número máximo de órdenes y la cantidad de inventario que se puede solicitar por período
- **Horarios de períodos**: intervalos de tiempo definidos en los que se pueden realizar órdenes; los horarios y períodos deben configurarse antes de crear programas
- **Datos de régimen**: una lista definida de información adicional que puede necesitar ser proporcionada por un cliente al realizar una requisición de programa

Ejemplos de artículos comúnmente gestionados mediante programas incluyen medicamentos y suministros médicos para Malaria, VIH y Tuberculosis.

Los cambios de configuración necesarios para establecer un programa se realizan en el servidor central. Consulta la documentación a continuación para más detalles:

- [Crear un programa](https://docs.msupply.org.nz/items:programs#creating_a_program)

## Crear una Orden Interna por programa

Vamos a crear una Orden Interna basada en un programa.

1. Haz clic en el botón `Nueva Orden` (esquina superior derecha):

![Internal Order: new order](/docs/replenishment/images/intord_newreqbutton.png)

2. Si tienes programas configurados, verás un cuadro de diálogo diferente al habitual:

![Internal Order: new program order](/docs/programs/images/new_internal_order.png)

Aquí puedes seleccionar:

- Programa
- Proveedor
- Tipo de orden
- Periodo

Los programas y períodos de orden que veas estarán afectados por las etiquetas del almacén y las preferencias del programa. [Haz clic aquí para saber cómo conectar un programa de un almacén](https://docs.msupply.org.nz/items:programs#connecting_a_program_to_a_store).

3. Solo después de seleccionar todos los campos anteriores, podrás hacer clic en `Crear` y continuar.

<div class="nota">El programa que selecciones afectará los proveedores, tipos de órdenes y períodos disponibles para elegir</div>

## Diferencias al usar requisiciones por programa

### Órdenes Internas

Existen varias áreas donde verás información adicional al usar una Orden Interna basada en un programa.

![Internal Order: program order](/docs/programs/images/internal_order_detail.png)

1. Los botones `Agregar artículo` y `Agregar desde la lista maestra` están deshabilitados. Los artículos en una Orden Interna basada en un programa están configurados por el programa.
2. Un mensaje que explica que tampoco puedes editar los valores de MOS objetivo y umbral de reorden en una Orden Interna basada en un programa. Estos valores están configurados por el programa.
3. Información adicional que indica a qué programa, tipo de orden y período pertenece esta Orden Interna. Este panel de detalles se puede abrir haciendo clic en el botón `Más` en la esquina superior derecha de la página.

### Requisiciones

La vista de lista ha añadido algunas columnas adicionales que muestran datos relacionados con el programa:

![Requisition: list](/docs/programs/images/requisition-list.png)

- **Programa**: el nombre del programa para el cual se creó esta Orden Interna
- **Tipo de orden**: el nombre del tipo de orden (típicamente, una orden normal o de emergencia)
- **Periodo**: el nombre del período seleccionado

#### Requisiciones Manuales de Programas

Las requisiciones de programas también se pueden crear manualmente. Esto se haría típicamente para clientes que no usan mSupply o, en circunstancias excepcionales, para otros almacenes de mSupply. Se **recomienda encarecidamente** no hacerlo para clientes que sean almacenes de mSupply, a menos que su dispositivo esté destruido o mSupply no sea operable. El riesgo radica en crear requisiciones duplicadas y datos de indicadores para períodos y cronogramas si los usuarios del almacén del cliente también ingresan los mismos datos en mSupply.

Consulta los pasos de configuración mencionados anteriormente, así como la documentación de la [Etiquetas del Cliente](https://docs.msupply.org.nz/names:adding_and_editing#tags_tab)
para aprender cómo configurar programas y agregar etiquetas a los clientes.

En la página de Requisiciones, haz clic en el botón `Nueva Requisición`  (en la esquina superior derecha).

![New Requisition](/docs/programs/images/add_requisition_button.png)

Si tienes programas configurados, verás un modal diferente al habitual:

![New Program Requisition](/docs/programs/images/add_program_requisition.png)

Desde la pestaña `Programa`, puedes crear una Requisición de Programa seleccionando:

- Programa
- Cliente
- Tipo de orden
- Periodo

Solo después de haber seleccionado todos los campos anteriores podrás hacer clic en `Crear`.

Serás redirigido a la página de detalles de la requisición. Las líneas estarán pre-pobladas con los artículos del programa, lo que significa que no podrás agregar artículos manualmente a la requisición.

#### Requisiciones Manuales de Programas

En las requisiciones manuales es posible recopilar muchas columnas adicionales de datos para fines de reporte y pronóstico. Para habilitar estas columnas, necesitas configurar las preferencias del almacén para activar estos campos adicionales, como se describe en la [documentación de mSupply Desktop](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab).

Para referencia rápida, esta es la preferencia que requiere tu almacén conectado:
![Show extra fields on requisitions preference](/docs/programs/images/show_extra_fields_on_requisitions.png)

Así es como se ven las columnas adicionales dentro de una requisición:

![Program Requisition Detail
View](/docs/programs/images/program_requisition_detail_view.gif)

La página de edición de líneas también incluirá estas columnas adicionales:

| Columna                      | Descripción                                                                                                  |
| :------------------------ | :----------------------------------------------------------------------------------------------------------- |
| **Stock inicial disponible** | Stock disponible del cliente al inicio del período del programa                                              |
| **Entradas**                 | Stock entrante del cliente en unidades para este artículo                                                         |
| **Salidas**                  | Stock saliente del cliente en unidades para este artículo                                                         |
| **Pérdidas**                 | Ajuste de inventario                                                                                         |
| **Adiciones**                | Ajuste de inventario                                                                                         |
| **Disponible**               | Stock inicial disponible + entradas de stock +/- ajustes de inventario - salidas de stock                             |
| **Cercano a vencer**         | Suma del stock disponible para el artículo que tiene una fecha de caducidad posterior a la fecha de fin del programa                      |
| **Días sin stock**           | (MOS objetivo \* AMC) -  stock disponible                                                                        |
| **AMC**                      | Consumo mensual promedio del cliente para este artículo                                                     |
| **MOS**                      | Meses de stock para el artículo                                                                                 |
| **Razón**                    | Se proporcionará una razón si hay una diferencia entre la cantidad sugerida y la cantidad solicitada |

![Program Requisition Line
Edit](/docs/programs/images/program_requisition_line_edit.png)

Una sección adicional será visible en el panel lateral mostrando la información del programa.

![Requisition: detail](/docs/programs/images/requisition-detail.png)
