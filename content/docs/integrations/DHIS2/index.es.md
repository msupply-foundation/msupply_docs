+++
title = "Integración con DHIS2"
description = "Open mSupply Integrations with DHIS2."
date = 2022-03-17
updated = 2022-03-17
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = ""
toc = true
+++

## DHIS2

DHIS2 se ha convertido en el sistema de información de salud predeterminado en países de ingresos medios y bajos.
Es un excelente software.

Nos integramos con DHIS2 de dos maneras:

### Envío de datos logísticos resumidos a DHIS2

mSupply contiene una gran cantidad de datos, pero no deberías (no deberías) intentar enviar todos los datos de mSupply a DHIS2, ya que podrías sobrecargar tu instancia de DHIS2 hasta el punto de que no sea agradable de usar.
Sugerimos enviar datos resumidos que muestren indicadores clave de desempeño (KPIs). Si es necesario realizar una investigación más detallada, esto puede hacerse utilizando el panel de control de Open mSupply.
Datos que podrías querer enviar:

- Inventario disponible para artículos clave (expresado como "meses de cobertura" es mejor)
- Datos de consumo de artículos clave
- Tasas de desperdicio
- Tasas de reporte de instalaciones de nivel inferior.

### Integración con la aplicación de gestión de inventario en tiempo real de DHIS2

La aplicación de gestión de inventario en tiempo real está diseñada para su uso en puntos de prestación de servicios. Si una instalación ya está usando DHIS2 y no Open mSupply, este paso intermedio es una solución viable.
Sin embargo, si estás realizando pedidos a través de la aplicación de gestión de inventario en tiempo real, necesitarás un sistema como Open mSupply para recibir el pedido, procesarlo y enviar actualizaciones a la instalación según sea necesario.
