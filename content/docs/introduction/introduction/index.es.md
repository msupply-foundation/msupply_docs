+++
title = "Introducción"
description = "Open mSupply Introduction."
date = 2024-10-17
updated = 2025-02-19
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"
ai_generated = true

[extra]
lead = "¡Bienvenido a Open mSupply para Desktop, Web y Android!"
toc = true
top = true
+++

## Historia

Open mSupply se basa en más de 20 años de mSupply, durante los cuales se ha convertido en el Sistema de Información de Gestión Logística (LMIS) más utilizado en países de ingresos bajos y medios.

## ¿Qué plataformas son compatibles?

Open mSupply se ejecuta en Desktop (Windows, Linux y Mac), como una aplicación web en tu navegador, o también como una aplicación Android (para tablets, no para teléfonos en esta etapa).

## ¿Dónde puedo descargarlo?

Proporcionamos varios descargables en nuestra [página de lanzamientos](https://github.com/openmsupply/open-msupply/releases) alojada en nuestro repositorio GitHub.
La versión más reciente se mostrará en la parte superior de la lista de lanzamientos - generalmente recomendamos usar la versión más reciente cuando sea posible.

Dentro de cada lanzamiento hay una sección `Assets` que tiene los archivos que necesitas para instalar Open mSupply.

### Windows

Hay instaladores construidos para cada lanzamiento, proporcionando:

- **Servidor**: que soporta SQLite o PostgreSQL y se ejecuta como un servicio de Windows. El nombre del instalador para el servidor es `Open_mSupply_Server_[version].exe`
- **Desktop**: Una aplicación de Windows que te permite conectarte a un servidor en ejecución. El nombre del instalador para el servidor es `Open_mSupply_Desktop_[version].exe`
- **Standalone**: combina los dos anteriores; ejecuta un servidor como un servicio de Windows y tiene una aplicación de Windows que se conectará a él. El nombre del instalador para el servidor es `Open_mSupply_Standalone_[version].exe`
- **Demo**: Una instalación de servidor preconfigurada que no requiere un servidor central para ejecutarse. El nombre del instalador para el servidor es `Open_mSupply_Demo_[version].exe`

### Android

La versión de Android se distribuye como un archivo `.apk` que puedes instalar. Este archivo tiene el nombre `open-msupply-[version]-release.apk`

### MacOS

Para la versión de desktop de Mac, proporcionamos un archivo `.dmg`, que tiene el nombre `Open_mSupply_[version].dmg`.

## ¿Qué hace?

En resumen, Open mSupply gestiona tu inventario, registrando cada recepción y salida de bienes, y proporcionando así un balance actualizado de tu stock disponible para cada artículo.

Open mSupply hace mucho más que eso. Las características incluyen:

- Gestión de inventario
  - Ver fácilmente el stock disponible por lote
  - Gestionar ubicaciones de estanterías para tu tienda/almacén
  - Asignar ubicaciones al stock entrante, o cambiar ubicaciones mientras reorganizas el stock en tu almacén
  - Realizar inventarios, y asignar razones para ajustes de inventario
  - Reempaquetar stock
- Recibir y cumplir órdenes de clientes (instalaciones que suministras)
- Hacer pedidos a tu tienda suministradora
  - Cuantificar cantidades requeridas basadas en fórmulas simples o complejas
  - Rastrear el estado del pedido mientras tu tienda suministradora cumple y envía el pedido!
  - Recibir bienes en stock cuando llega el pedido
- Ser alertado de niveles bajos de stock desde el dashboard
- Realizar dispensación básica
  - Gestionar registros de pacientes
  - Crear una prescripción para un paciente
- Gestionar cadena de frío
  - Ver logs de sensores de temperatura
  - Subir datos de registradores de temperatura USB
  - Ser alertado de excursiones de temperatura y violaciones
  - Conectar dispositivos de monitoreo de temperatura al stock a través de ubicaciones de stock
- Extender funcionalidad del sistema base con el uso de plugins front-end. Estos permiten desarrollo personalizado de tareas simples como agregar campos a registros que luego pueden ser mostrados en listas y formularios de edición. Para más detalles, ver el [readme del plugin](https://github.com/msupply-foundation/open-msupply/blob/main/client/packages/plugins/README.md).

## ¿Qué hace especial a Open mSupply?

Hay muchos sistemas que gestionan inventario. Open mSupply tiene características únicas que lo hacen ideal para usar en cadenas de suministro de salud en entornos de bajos recursos:

- **Offline first**: Open mSupply está diseñado desde cero para trabajar sin internet. Sabemos por 20 años de experiencia que incluso las conexiones de internet más confiables a veces fallan o se sobrecargan. Open mSupply te permite trabajar sin tener que preocuparte por la calidad de internet segundo a segundo. Por supuesto, cuando necesitas hacer pedidos o recibir actualizaciones de otras instalaciones, necesitas internet por unos minutos entonces.
- **Escalable**: Hemos diseñado Open mSupply para manejar miles de millones de transacciones al año, ¡pero también para trabajar en una tablet Android! Puedes implementar Open mSupply en una instalación, sabiendo que si más tarde decides desplegar miles de sitios, Open mSupply seguirá siendo la herramienta correcta.

Para obtener una idea de toda la amplitud de la funcionalidad de Open mSupply, echa un vistazo a la documentación del software mSupply legacy en [https://www.msupply.org.nz](https://www.msupply.org.nz) - son casi 1000 páginas si lo imprimes todo (así que tal vez no ☺️)

### Terminología

La siguiente tabla describe algunos de los términos comunes utilizados en Open mSupply, y también guía a los usuarios de mSupply legacy sobre las mejoras de terminología que hemos hecho.

| Término Open mSupply | Término mSupply Legacy | Definición                                                               |
|:-----------------:|:---------------------:|:------------------------------------------------------------------------ |
| Expedición de Salida | Factura de Cliente      | La creación de un suministro de bienes a un cliente particular (instalación)    |
| Expedición de Entrada  | Factura de Proveedor      | La recepción de un suministro de bienes de un proveedor particular            |
| Requisición       | Requisiciones de Cliente | Una orden de suministro de bienes hecha por un cliente particular (instalación)    |
| Órdenes Internas   | Requisiciones de Proveedor | Una solicitud de stock hecha a un proveedor particular (instalación)             |
| Retorno de Proveedor   | Crédito de Proveedor       | El retorno de bienes suministrados a un proveedor particular (instalación)         |
| Retorno de Cliente   | Crédito de Cliente       | La recepción de un retorno de bienes de un cliente particular (instalación) |

Otros términos utilizados en Open mSupply (y mSupply original):

| Término      | Definición                                                                                                                                                                                                                                                                                                 |
| --------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Artículos     | Productos gestionados en mSupply (incluye medicamentos, consumibles, equipamiento, artículos de laboratorio/radiología y activos más grandes como vehículos y mobiliario).                                                                                                                                                     |
| Tiendas    | Departamentos dentro de una instalación que pueden o no gestionar inventario independientemente de una entidad más grande. Por ejemplo, puede haber dos tiendas en un hospital - una tienda de farmacia de pacientes internos y una tienda de farmacia de pacientes externos.                                                                                 |
| Ubicaciones | Lugar específico dentro de una tienda donde se guardan los artículos. Por ejemplo, un gran almacén central puede tener muchas ubicaciones (ej. A.02.04, B.01.03), mientras que las tiendas pequeñas pueden tener menos (ej. Habitación 1, Habitación 2). Los artículos también pueden ser almacenados sin asignar una ubicación (es decir, solo almacenados alfabéticamente).             |
| Proveedores | Los proveedores son instalaciones de las que una tienda hace pedidos o recibe stock. Los proveedores pueden ser externos (ej. empresas farmacéuticas privadas o mayoristas) o internos (ej. tienda médica central, almacenes provinciales).                                                                                               |
| Donantes    | Entidades externas que pagan por stock donado (ej. UNICEF, USAID). No se ingresa ningún donante cuando el gobierno o la tienda médica está pagando en una transacción financiera normal. Cuando se registra el donante, puedes rastrear artículos donados a través de la cadena de suministro y ejecutar reportes de transacciones de donantes e inventarios. |
| Clientes | Receptores de artículos, excluyendo pacientes. Esto incluye centros de salud, hospitales, salas, clínicas y farmacias privadas, servicios de extensión y cualquier otra entidad a la que una tienda mSupply emita stock.                                                                                                     |

## Comenzando

Nota que también estamos actualmente trabajando en probar el proceso de migración y la integración de Open mSupply con un sistema mSupply existente. Como tal, no recomendamos que hagas el upgrade sin hablar con nosotros primero.

### Instalación

#### Precondiciones

1. Necesitas un sistema mSupply existente con un servidor mSupply Legacy con módulos de servidor web y sync. Puedes leer más sobre los requisitos de hardware para el servidor Legacy mSupply [aquí](https://docs.msupply.org.nz/setting_up_msupply:requirements#requirements)
2. A partir de diciembre de 2023, no es posible migrar una tienda mSupply Legacy (o Mobile) existente a una tienda Open mSupply; solo se pueden crear nuevas tiendas en Open mSupply

#### Procedimiento:

1. Cualquier tienda Open mSupply necesita ser creada en el servidor central Legacy mSupply como se detalla en [Crear nuevas tiendas](https://docs.msupply.org.nz/other_stuff:virtual_stores#creating_new_stores). Nota que [convertir un cliente existente en una tienda](https://docs.msupply.org.nz/other_stuff:virtual_stores#transition_a_customer_to_a_virtual_store) no está actualmente soportado para sitios Open mSupply.
2. Los usuarios necesitan ser creados y configurados para la(s) tienda(s) en el servidor central Legacy mSupply como se detalla en [Gestionar Usuarios](https://docs.msupply.org.nz/admin:managing_users)
3. El sitio Open mSupply necesita ser creado en el servidor central Legacy mSupply como se detalla en [Crear Nuevos Sitios de Sync](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
4. La(s) tienda(s) necesitarán ser agregadas al sitio Open mSupply en el servidor central Legacy mSupply como se detalla en [Agregar tiendas](https://docs.msupply.org.nz/synchronisation:sync_sites#adding_stores)
5. Despliega Open mSupply a tu dispositivo desde el [repositorio GitHub Open mSupply](https://github.com/msupply-foundation/open-msupply). Consulta con el soporte TMF para asegurarte de que estás desplegando la versión correcta
6. Inicia Open mSupply en el dispositivo. Deberías ver algo como la pantalla de abajo.
   - URL: Consulta con el soporte TMF para asegurarte de que tienes la URL correcta
   - Nombre del sitio: Como ingresado en [Crear Nuevos Sitios de Sync](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
   - Contraseña: Como ingresado en [Crear Nuevos Sitios de Sync](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)

![Inicialización](images/initialisation.png)