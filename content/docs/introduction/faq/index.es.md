+++
title = "Preguntas Frecuentes"
description = "aka FAQ."
date = 2023-02-01
updated = 2024-12-01
draft = false
weight = 40
sort_by = "weight"
template = "docs/page.html"
ai_generated = true

[extra]
lead = "Preguntas sobre Open mSupply"
toc = true
top = true
+++

#### ¿Funciona Open mSupply sin conexión?

¡Sí! Open mSupply está diseñado para ser 'offline first' lo que significa que los usuarios pueden continuar realizando sus operaciones diarias sin necesidad de una conexión a internet. Se requiere conectividad ocasional a internet para sincronizar datos desde sitios remotos al servidor central.

#### ¿Cuáles son los límites para el manejo de datos?

Hay tres aspectos a esta pregunta con Open mSupply:

- **Sitios Remotos** son donde haces el trabajo diario.
- **Sitios remotos alojados en la nube** pueden ser usados cuando tienes internet de alta calidad a tiempo completo.
- El **Servidor Central** es donde se gestionan los datos maestros, y donde todos los datos de los sitios remotos se agregan para reportes.

##### Sitios remotos

En un sitio remoto particular, la base de datos será SQLite si se ejecuta en Android, o usualmente Postgres si ejecutas un servidor desktop. Asumimos que si tienes un sitio ocupado, actualizarás a desktop (que es un proceso sin dolor), así que los límites de Android son menos relevantes.

| Tipo de registro |                                        Límite de registros |
| -------------- | --------------------------------------------------: |
| Productos       |                                         > 1,000,000 |
| Artículos comerciales    |                                     > 1,000,000,000 |
| Usuarios          | configurado centralmente - no hay límite práctico en un sitio |
| Proveedores      | configurado centralmente - no hay límite práctico en un sitio |
| Transacciones   |                                     > 1,000,000,000 |

##### Sitios remotos alojados en la nube

Si alojas tu sitio remoto en la nube, puede tener miles de usuarios conectados. Los límites de registros son como arriba, pero el rendimiento será determinado por el ancho de banda disponible tanto para el servidor como para la conexión de internet de cada usuario.

##### El Servidor Central

El Servidor Central usa Postgres, y agrega todos los datos de todos los sitios, así como siendo el servidor de datos maestros para Sitios, Productos (Artículos), Instalaciones, Proveedores y Usuarios.

| Tipo de registro |    Límite de registros |
| -------------- | --------------: |
| Productos       |     > 1,000,000 |
| Artículos comerciales    | > 1,000,000,000 |
| Usuarios          |       > 100,000 |
| Proveedores      |       > 100,000 |
| Sitios          |       > 100,000 |
| Transacciones   | > 1,000,000,000 |

(A partir de 2023 todavía tenemos que reescribir el servidor central como un proyecto de código abierto - los límites para el servidor central comercial mSupply son más bajos, pero todavía tenemos sitios con decenas de millones de transacciones, y creciendo rápidamente. No esperamos que ningún sitio se encuentre con límites antes de que hagamos la transición a un servidor central de código abierto).

#### ¿Puedes tener múltiples usuarios en una tablet Android con Open mSupply?

¡Sí!

Puedes tener múltiples usuarios conectados en una tablet.

#### ¿Puedes tener múltiples tiendas en una tablet con Open mSupply?

¡Sí!

Las tiendas visibles en cada tablet en cada sitio están configuradas centralmente.
Cuando te conectas verás todas las tiendas a las que tienes permiso para conectarte.
Si no ves una tienda que esperas, verifica los permisos en el servidor central y asegúrate de que el sitio remoto haya sincronizado después de actualizar los permisos.

#### ¿Puedes tener múltiples usuarios en múltiples tablets Open mSupply accediendo a la misma tienda concurrentemente?

¡Sí!

También puedes acceder a un servidor Open mSupply ejecutándose en una tablet Android desde una máquina ejecutando Open mSupply desktop o desde un navegador web en cualquier dispositivo.

Además, Open mSupply "publica" su disponibilidad en la red local, así que puedes conectarte al servidor sin tener que lidiar con direcciones IP y similares.

#### ¿Pueden múltiples personas ver/editar la misma expedición/inventario/requisición al mismo tiempo?

¡Sí! Aunque la última edición sobrescribirá las ediciones anteriores si ambos editan la misma línea al mismo tiempo. La integridad del stock se mantendrá sin embargo.

#### ¿Hay alguna restricción de licencia concurrente?

No hay restricciones en el número de usuarios conectados a un servidor.

#### ¿Hay soporte para mi moneda?

Puedes configurar el símbolo de moneda mostrado cuando se muestran precios. También puedes configurar monedas extranjeras que te permiten enviar y recibir expediciones en una moneda diferente a tu moneda principal. Para configurar monedas extranjeras sigue [estas instrucciones](https://docs.msupply.org.nz/other_stuff:currencies) en la documentación del servidor central. También necesitarás habilitar la preferencia de tienda `Store: Able to issue in foreign currency`. Esta preferencia es compatible con Open mSupply `v1.7.0+`.

![Preferencia de tienda](../../images/store-pref-issue-in-foreign-currencies.png)

Los siguientes códigos y símbolos de moneda son soportados:

| Código | Símbolo |
| ---- | ------ |
| COP  | $      |
| DJF  | DJF    |
| EUR  | €      |
| KMF  | FC     |
| NZD  | $      |
| PGK  | K      |
| QAR  | ر.ق.   |
| RUB  | ₽      |
| SBD  | SI$    |
| SSP  | SSP    |
| USD  | $      |
