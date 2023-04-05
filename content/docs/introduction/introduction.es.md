+++
title = "Introducción"
description = "Open mSupply Introduction."
date = 2022-03-17T18:20:00+00:00
updated = 2022-03-17T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Bienvenido a Open mSupply para Desktop, Web & Android!"
toc = true
top = true
+++

## Historia

Open mSupply se basa en más de 20 años de experiencia de mSupply, durante los cuales se ha convertido en el sistema de información de gestión logística (LMIS, por sus siglas en inglés) más utilizado en países con ingresos bajos y medios.

## ¿Qué plataformas son compatibles?

Open mSupply es compatible con distintas plataformas: se puede ejecutar en equipos de escritorio con Windows, Linux y Mac, como una aplicación web en tu navegador y como una aplicación de Android diseñada para tabletas (actualmente no compatible con teléfonos).

## ¿Qué hace?

En resumen, Open mSupply es un software que administra tu inventario, registrando cada entrada y salida de bienes y proporcionando un balance actualizado de tu stock disponible para cada artículo.

Pero las funcionalidades de Open mSupply van más allá, entre ellas:

- Gestión de inventario
  - Ver fácilmente el stock disponible por lote
  - Gestionar ubicaciones en tu tienda/almacén
  - Asignar ubicaciones a los productos entrantes, o cambiarlas a medida que reorganizas tu almacén
  - Realizar tomas de inventarios y asignar razones para ajustes de inventario
- Recibir y cumplir órdenes de clientes (almacenes a los que suministras)
- Realizar pedidos al proveedor
  - Calcular las cantidades requeridas en base a fórmulas simples o complejas
  - Hacer seguimiento del estado del pedido mientras el proveedor lo completa y lo envía!
  - Recibir los productos en el inventario cuando llegan los pedidos
- Recibir alertas de niveles de stock bajos desde el tablero de control

## ¿Qué hace especial a mSupply?

Hay muchos sistemas que gestionan inventarios. mSupply cuenta con características únicas que lo hacen ideal para su uso en cadenas de suministro de salud en entornos con pocos recursos:

- **Offline primero** mSupply está diseñado desde cero para trabajar sin internet. Sabemos por 20 años de experiencia que incluso las conexiones a internet más confiables a veces fallan o se sobrecargan. mSupply te permite trabajar sin tener que preocuparte por la calidad de internet segundo a segundo. Por supuesto, cuando necesitas realizar pedidos o recibir actualizaciones de otras instalaciones, necesitas internet por unos minutos.
- **Escalable** Hemos diseñado Open mSupply para manejar miles de millones de transacciones al año, ¡pero también para trabajar en una tablet Android! Puedes implementar mSupply en una instalación, sabiendo que si más tarde decides implementar miles de sitios, mSupply seguirá siendo la herramienta adecuada.

Para obtener una idea de toda la funcionalidad de mSupply, echa un vistazo a la documentación del software de mSupply Legacy [https://www.msupply.org.nz](https://www.msupply.org.nz) - Sin embargo, ten en cuenta que es una extensa guía de casi 1000 páginas (así que tal vez no sea conveniente imprimirla ☺️)

### Terminology

La siguiente tabla describe algunos de los términos comunes utilizados en mSupply, y también guía a los usuarios de mSupply Legacy sobre las mejoras terminológicas que hemos realizado.

| Término en Open mSupply  |  Término en mSupply Legacy  | Definición                                                            |
| :---------------: | :-------------------: | :--------------------------------------------------------------------- |
| Salidas|   Factura de cliente   | La acción de suministrar bienes a un cliente particular (almacén del cliente) |
| Entradas|   Factura de proveedor    | La acción de recibir un suministro de bienes de un proveedor particular        |
|    Requisición    | Requisiciones de cliente | Un pedido de suministro de bienes realizado por un cliente particular (almacén del cliente) |
|  Órdenes internas | Requisiciones de proveedor | Una solicitud de stock realizada a un proveedor particular (almacén del proveedor)        |

## Comenzando

Si estás ejecutando el servidor por primera vez, es posible que veas esta pantalla:

![Initialisation](/docs/introduction/images/initialisation.png)

¡No te preocupes! Esto simplemente significa que el servidor necesita saber cómo conectarse al servidor central de mSupply. Si no sabes qué ingresar, ponte en contacto con el soporte y te ayudarán.