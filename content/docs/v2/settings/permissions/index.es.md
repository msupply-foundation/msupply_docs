+++
title = "Permisos"
description = "Configurar los permisos de usuario"
date = 2023-05-05
updated = 2023-05-05
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Configuración de permisos de usuario y cómo los permisos se relacionan con los usuarios del servidor central."
toc = true
top = false
+++

## Actualización de configuraciones

Los permisos se configuran de forma individual para cada usuario, y esto se realiza en el servidor central. Consulta la documentación del [servidor central](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) para obtener una explicación de cómo hacerlo.

## Configuraciones disponibles

La siguiente tabla enumera el área y el nombre de los permisos en el servidor central que son relevantes para Open mSupply. En la tabla, la descripción explica dónde se puede usar este permiso en Open mSupply y por qué puede ser necesario habilitarlo.

Además de estos permisos específicos, deberás asegurarte de que el usuario tenga acceso a las tiendas en las que trabajará.

| Pestaña                  | Área                        | Permiso                                           | Descripción                                                                                                        |
| -------------------- | --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Permisos          | Administrador                       | Acceso a la administración del servidor                         | Permite acceder a la página de `Ajustes`                                                                                |
|                      | Artículos                       | Gestionar ubicaciones                                     | Permite a un usuario mantener ubicaciones                                                                                |
|                      |                             | Editar artículos                                           | Permite editar artículos, necesario para guardar un código de barras                                                                 |
|                      |                             | Editar nombres, códigos y unidades de artículos                     | Puede mantener variantes de empaques                                                                                         |
|                      |                             | Ver inventario                                           | Permite ver las líneas de inventario                                                                                                   |
|                      |                             | Editar inventario                                           | Permite modificar las líneas de inventario                                                                                                |
|                      |                             | Crear reempaque o dividir inventario                         | Puede crear líneas de repempaque o dividir inventario                                                                             |
|                      |                             | Ingresar ajustes de inventario adjustments                                                                                 |
| Permisos (2)      | Facturas                    | Ver facturas de clientes                               | Permite ver salidas. También se usa para consultar estadísticas en el tablero de control                                        |
|                      |                             | Crear facturas de clientes                            | Puede mantener salidas                                                                                   |
|                      |                             | Editar facturas de clientes                               | Puede mantener salidas - si se otorgan permisos de editar o crear, el usuario puede editar                   |
|                      |                             | Devolver inventario de facturas de proveedores                  | Puede devolver inventario de entradas                                                                           |
|                      |                             | Ver facturas de proveedores                               | Permite ver entradas. También se usa para consultar estadísticas en el tablero de control                                         |
|                      |                             | Crear facturas de proveedores                             | Puede mantener entradas                                                                                     |
|                      |                             | Editar facturas de proveedores                               | Puede mantener entradas - si se otorgan permisos de editar o crear, el usuario puede editar                    |
|                      |                             | Devolver inventario de facturas de clientes                  | Puede devolver inventario de salidas Shipments                                                                           |
|                      | Informes                     | Ver informes                                         | Necesario para imprimir páginas, ya que utiliza el sistema de informes                                                         |
|                      | Pacientes                    | Ver pacientes                                        | Puede ver pacientes                                                                                                  |
|                      |                             | Agregar pacientes                                         | Puede mantener pacientes                                                                                              |
|                      |                             | Editar detalles de pacientes                                 | Puede mantener pacientes - si se otorgan permisos de agregar o editar, el usuario puede editar                                |
| Permissos (3)      | Administrador                       | Ver registro                                             | Puede ver los registros, estos se muestran como una pestaña en muchas ventanas                                                         |
|                      | Requisiciones                | Ver requisiciones                                    | Puede ver requisiciones y formularios R&R                                                                                |
|                      |                             | Crear y editar requisiciones                         | Puede mantener requisiciones y formularios R&R                                                                           |
|                      | Toma de inventario                  | Crear toma de inventario                                     | Puede crear tomas de inventario                                                                                              |
|                      |                             | Eliminar toma de inventario                                     | Puede eliminar tomas de inventario                                                                                              |
|                      |                             | Agregar líneas de inventario                                  | Puede agregar líneas de inventario                                                                                            |
|                      |                             | Ediar líneas de inventario                                 | Puede editar las líneas de inventario                                                                                           |
|                      | Vacunas                    | Ver detalles del sensor                                  | Puede ver detalles del sensor                                                                                            |
|                      |                             | Editar ubicación del sensor                                 | Puede editar la ubicación del sensor                                                                                           |
|                      | Activos                      | Ver activos                                          | Puede ver los activos                                                                                                    |
|                      |                             | Agregar, editar activos                                     | Puede mantener activos                                                                                                |
|                      |                             | Configurar activos                                         | Puede importar elementos del catálogo de activos                                                                                   |
| Permisos de omSupply | Orden interna              | Confirmar envío de orden interna                          | Puede confirmar ordenes internas como enviadas                                                                                |
|                      | Acceso API                   | Acceso a la API de Cold Chain                                | Puede acceder a la API de Cold Chain                                                                                      |
|                      | Servidor Central de Open mSupply | Puede modificar datos centrales (requiere mSupply v7.15.05+) | Puede modificar datos gestionados en el servidor central de Open mSupply (por ejemplo, Indicadores Demográficos, Programas de Inmunización) |
