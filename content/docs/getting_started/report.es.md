+++
title = "Reportes"
description = "Reportes ce Open mSupply."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 31
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

La página de reportes te muestra un resumen de todos los reportes disponibles en Open mSupply.
Para acceder a ella, simplemente haz clic en la opción `Reportes` del menú.
![goto_report](/docs/getting_started/images/goto_report.png)

Se te mostrará una lista de reportes que puedes generar. Los reportes que aparecen a continuación son los reportes estándar y ya estarán listos para usar. Si necesitas un reporte personalizado, contacta al soporte de mSupply en [support@msupply.foundation](mailto:support@msupply.foundation).

![report list](/docs/getting_started/images/report_list_view.png)

Los reportes se generan según las preferencias configuradas en el servidor central de mSupply. Para más información sobre estas preferencias y cómo configurarlas, visita [preferencias de reportes](https://docs.msupply.org.nz/other_stuff:virtual_stores?s[]=threshold&s[]=overstock#notification_preferences)

Puedes ver estas preferencias haciendo clic en el botón `Más`.

![report preferences](/docs/getting_started/images/report_preferences.gif)

## Generar reportes

Haz clic en el reporte que quieres generar. En este ejemplo, generaremos el reporte
`Estado de Inventario`.

Haz clic en el reporte `Estado de Inventario`.
![stock status](/docs/getting_started/images/goto_stock_status.png)

Se te mostrará un formulario donde podrás ajustar los criterios de filtro del reporte. Si prefieres mostrar todos los elementos, puedes dejarlo como está.

Para el reporte `Estado de Inventario` puedes filtrar según los siguientes criterios:

- `Nombre del Artículo`
- `Código del Artículo`

Si ingresas valores para el código y el nombre, los elementos que se mostrarán deben coincidir con **ambos** criterios. Por ejemplo, si pones un código de `01` y un nombre de `am`,  solo aparecerán los artículos que tengan un código que contenga `01` y un nombre que contenga `am`.

El formulario también muestra las preferencias en las que se basa el reporte

![stock status filter](/docs/getting_started/images/report_filter.png)

Haz clic en `Aceptar` para generar el reporte. Si quieres ajustar el reporte mientras lo estás viendo, puedes hacer clic en el botón `Filtrar` en la esquina superior derecha del reporte. Esto abrirá de nuevo el formulario de filtro.

![report detail](/docs/getting_started/images/report_detail.gif)

### Imprimir un reporte

Para imprimir un reporte, haz clic en el botón `Imprimir` que está en la esquina superior derecha del reporte.

![print button](/docs/getting_started/images/print_button.png)

Se abrirá una ventana de vista previa de impresión que te mostrará lo que se va a imprimir y te permitirá elegir la impresora. Para imprimir, puedes hacer clic en el botón de imprimir o usar las teclas `control`+`P` (si usas Windows) o  `cmd`+`P` (si usas Mac).

### Exportar un reporte

Para exportar un reporte a Excel, haz clic en el botón `Exportar` que está en la esquina superior derecha del reporte.

![export button](/docs/getting_started/images/export_button.png)

El reporte se descargará como un archivo de Excel.

### Traducciones de Reportes Estándar

Los reportes estándar se traducirán al idioma del usuario si hay traducciones disponibles al generarlos.

Si no hay traducciones en el idioma del usuario, se usará el inglés por defecto.