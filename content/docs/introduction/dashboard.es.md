+++
title = "Tablero de Control"
description = "Open mSupply Introduction."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "The landing page"
toc = true
+++

## ¡Hay demasiados tableros de control!

Sí, el término _tablero de control_ se utiliza para más de una cosa. En el caso de Open mSupply, la plataforma cuenta con una página de inicio que muestra una visión general de algunas estadísticas y enlaces útiles, sobre los cuales hablamos aquí. Además, existe un tablero de control del sistema que utiliza Grafana y proporciona una vista general de todos los sitios en su país (u organización).

## ¿Qué se muestra?

![The dashboard!](/docs/introduction/images/dashboard.png)

Puedes ver algunas estadísticas para envíos e inventario:

- Entradas
  - **Hoy** Muestra el número de entradas creadas el día de hoy
  - **Esta semana** El número de entradas creadas esta semana.
- Salidas
  - **Hoy** El número de envíos a recoger el día de hoy, es decir, los envíos en el estado de `Asignado` 
- Inventario
  - **Caducado** El número de líneas de inventario en el almacén actual que han caducado
  - **Próximos a caducar** El número de líneas de inventario en el almacén actual que caducarán en los próximos tres meses
  - **Total de artículos** Un recuento del número de artículos en el almacén
  - **Artículos sin inventario** El artículo es visible en el almacén, pero no hay inventario registrado
  - **Menos de 3 meses de inventario** Basado en el consumo mensual promedio (AMC) para este artículo en el almacén actual

Además, hay botones hacia la parte inferior de la página que te permiten crear envíos y requisiciones.

