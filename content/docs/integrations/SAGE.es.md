+++
title = "Integración con SAGE"
description = "Integraciones de Open mSupply con SAGE."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 5
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Open mSupply Integration with SAGE accounting/inventory software"
toc = true
+++

## SAGE
El software de gestión financiera [Sage](https://www.sage.com) (también conocido como software de contabilidad) es ampliamente utilizado en almacenes médicos centrales, especialmente en países francófonos.

Open mSupply se integra con Sage mediante una aplicación personalizada de interoperabilidad que ha sido escrita y mantenida por la mSupply Foundation.

### Versiones de Sage compatibles
**Serie Sage 100** - Tiene una interfaz COM muy arcaica.

Nuestra integración utiliza una aplicación personalizada que se ejecuta en el servidor de SAGE y media entre la excelente API de Open mSupply y la pésima API de SAGE 100 ;-)

Es bidireccional: recibe órdenes de las instalaciones que usan mSupply y las pasa a SAGE para su cumplimiento, y una vez que la orden se envía desde SAGE, crea el correspondiente envío entrante en borrador para la instalación que realizó la orden, permitiendo que reciban los productos sin tediosos registros de datos.
El único trabajo a realizar es verificar el producto, lote, fecha de vencimiento y cantidad, además de cualquier ajuste antes de que los productos puedan ser recibidos en el inventario.
