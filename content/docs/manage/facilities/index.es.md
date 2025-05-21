+++
title = "Almacenes"
description = "Gestionar todos los almacenes"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 2
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

La lista de instalaciones está disponible únicamente en el [Servidor Central de Open mSupply](/docs/getting_started/central). Aquí puedes ver todos los almacenes y gestionar sus propiedades.

## Ver las Instalaciones

Selecciona `Administrar` > `Almacenes` en el panel de navegación.

![goto: facilities](/docs/manage/images/goto_facilities.png)

Se te presentará una lista de los almacenes en tu sistema

![facility list](/docs/manage/images/facilities.png)

La lista de almacenes se divide en 5 columnas:

| Columna       | Descripción                            |
| :------------ | :------------------------------------- |
| **Código**    | El código del almacén                  |
| **Nombre**    | Nombre del almacén                     |
| **Proveedor** | Indica si este almacén es un proveedor |
| **Cliente**   | Indica si este almacén es un cliente   |
| **Donante**   | Indica si este almacén es un donante   |

<div class="tip">
Puedes identificar si un cliente también usa Open mSupply en su almacén si tienen un ícono como este <img src="/docs/replenishment/images/is_msupplystoreicon.png" alt="Store" style="width:auto"> junto al código. 
</div>

La lista puede mostrar un número fijo de almacenes por página. En la esquina inferior izquierda, puedes ver cuántos almacenes se están mostrando actualmente en tu pantalla.

![Pagination: showing](../../images/list_showing.png)

Si tienes más almacenes de los que el límite actual permite, puedes navegar entre páginas haciendo clic en el número de página o utilizando las flechas izquierda y derecha (esquina inferior derecha).

![Pagination: navigating](../../images/list_pagenumbers.png)

También puedes seleccionar un número diferente de filas para mostrar por página usando la opción en la esquina inferior derecha de la página.

![Rows per page](../../images/rows-per-page-select.png)

### Buscar almacenes

Puedes filtrar la lista de almacenes por nombre o por código. Esto puede ser útil si estás buscando un almacén en particular.

En la barra de búsqueda ubicada en la esquina superior izquierda de tu pantalla, escribe parte (o todo) del nombre o código de un almacén. La lista mostrará ahora todos los almacenes que coincidan:

![Facilities filter](/docs/manage/images/facilities_filter.png)

## Editar las propiedades de los almacenes

Para editar las propiedades de un almacén en la lista, haz clic en él. Esto abrirá una nueva ventana llamada `Editar instalación`.

<div class='tip'>
Si ves un mensaje como este al abrir la ventana de Editar instalación, significa que no tienes configuradas propiedades de almacén. Para configurarlas, contacta al soporte técnico o <a href='/docs/settings/configuration/#gaps-store-properties'>habilita las Propiedades GAPS</a>.

![Facilities: no properties](/docs/manage/images/facilities-no-properties-defined.png)

</div>

Desde esta ventana, puedes editar las propiedades del almacén

![Edit facility](/docs/manage/images/edit_facility_properties.png)

- Haz clic en `OK` para guardar los cambios y cerrar la ventana
- Haz clic en `OK & Siguiente` para guardar los cambios y comenzar a editar el siguiente almacén
- Haz clic en `Cancelar` en cualquier momento para revertir los cambios y cerrar la ventana

### Editar las propiedades de tu almacén

Cualquier almacén puede ver y editar sus propias propiedades. Si las propiedades han sido configuradas, aparecerá un botón adicional de `Editar` en el pie de página de la aplicación, junto al nombre de tu almacén:

![Footer: store edit](/docs/manage/images/footer_store_edit.png)

Haz clic en el botón `Editar` para abrir una nueva ventana donde podrás editar las propiedades de tu almacén.

<div class='nota'>
Algunas propiedades pueden estar deshabilitadas aquí. Esto significa que solo se pueden editar en el servidor central de Open mSupply..
</div>

![Edit own store](/docs/manage/images/edit_remote_store.png)

Cuando estés satisfecho con tus cambios, haz clic en `OK` para guardar y cerrar la ventana.

Haz clic en `Cancelar` en cualquier momento para revertir tus cambios y cerrar la ventana.

## Permisos y restricciones

Los almacenes solo son visibles en el [Servidor Central de Open mSupply](/docs/getting_started/central).

Para editar almacenes de forma centralizada, necesitas el permiso Puedes `modificar datos centrales` habilitado en la [Pestaña de permisos de omSupply](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#omsupply_permissions_tab) en tu almacén central.

![Can Modify Central Data Permission](/docs/programs/images/can_modify_central.png)
