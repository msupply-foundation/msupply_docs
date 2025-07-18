+++
title = "Explicador de Terminología"
description = "Ayudándote a entender cómo los términos que usamos se mapean a otros sistemas"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"
ai_generated = true

[extra]
toc = true
top = true
+++

## Introducción

Hay una vieja broma de informática: "Hay 2 cosas que son difíciles en informática: invalidación de caché, errores off-by-1, y nombrar cosas"

Dejando de lado la parte cursi off-by-1 de la broma, la parte "nombrar cosas" es muy cierta.
¡Podríamos pasar todo nuestro tiempo discutiendo sobre nombrar cosas, y nunca entregar ningún sistema útil en absoluto!

Nuestro enfoque es tratar de combinar la nomenclatura estándar de la industria, lo que es costumbre en las cadenas de suministro de salud en diferentes países, todo con un guiño a los nombres históricos de mSupply para las cosas.
Es claramente imposible encontrar nombres que satisfagan todos esos criterios, así que esta página de guía de usuario debería, con suerte, aliviar el dolor.

#### Artículos, Productos, SKUs
Open mSupply es diferente a otros sistemas de gestión de inventario en que el concepto central para el inventario es un **artículo** - que es generalmente un medicamento o producto genérico con la unidad de medida especificada, pero sin tamaño de paquete. Hay una buena razón para esto:
* La mayoría de los sistemas de salud pública operan con nombres genéricos
* Los reportes generalmente quieren saber la cantidad total de artículo genérico, no solo de un producto/SKU[^1] particular que fue usado

Las **variantes de artículos** en Open mSupply son el equivalente de un SKU - tienen una marca, código de barras, tamaño de paquete, etc.

#### Instalaciones, Almacenes, Tiendas, Sitios, Unidades Organizacionales
Cada uno de los sistemas ERP principales usa terminología diferente para las unidades organizacionales a nivel de sitio que gestionan inventario:

En mSupply, tenemos los siguientes conceptos

| Concepto      | Explicación                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tienda**    | Una tienda (virtual) es una unidad que gestiona su propio inventario y transacciones. Tiene sus propios usuarios con su propio conjunto de permisos                                                                                                                                                                                                                         |
| **Sitio**     | Un sitio (remoto) tiene un servidor Open mSupply que se sincroniza con el servidor central Open mSupply.<br>Un sitio puede contener 1 o más tiendas (por ejemplo, podría tener una tienda de medicamentos esenciales, una tienda de artículos de laboratorio, y una tienda EPI, todas gestionadas por diferentes usuarios, pero todas conectándose [generalmente en la red wifi local] al mismo servidor) |
| **Instalación** | El complejo físico en una ubicación geográfica particular. Usualmente una instalación tendrá un solo sitio Open mSupply, incluso si tiene muchas tiendas físicas. La única razón para tener más de un sitio en una instalación es si las tiendas no pueden todas conectarse a la misma red local.                                                                           |
##### Comparación con otros sistemas ERP:
En **Odoo**, este concepto típicamente se refiere como un "Almacén." Cada almacén representa una ubicación física donde el inventario es almacenado y gestionado, mientras sigue siendo parte de la estructura más amplia de la empresa.

En **SAP**, esto sería llamado una "Planta" o "Ubicación de Almacenamiento" dependiendo del contexto exacto. Una Planta representa una instalación o sitio de fabricación separado que gestiona su propio inventario.

En **Microsoft Dynamics**, este concepto es llamado un "Sitio" o "Almacén" dependiendo de qué producto Dynamics estés usando (Dynamics 365 Business Central vs Dynamics 365 Supply Chain Management).

[^1]: SKU = Stock Keeping Unit - una marca particular, tamaño de paquete (y tal vez variación de empaquetado) de un artículo. 