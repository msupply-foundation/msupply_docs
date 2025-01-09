+++
title = "Configuración"
description = "Configura propiedades dentro del sistema"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

La sección de configuración permite configurar datos personalizados para el sistema. Solo está disponible en el [Servidor Central de Open mSupply](/docs/getting_started/central).

## Ver la configuración de los ajustes

Para ver la configuración de los ajustes, ve a `Ajustes` en la sección inferior del panel de navegación:

![Settings: nav](/docs/settings/images/admin_nav.png)

Si estás en el Servidor Central de Open mSupply, verás esta lista de secciones de ajustes:

![Settings: collapsed](/docs/settings/images/settings_collapsed_central.png)

Haz clic en la sección `Configuración`  para comenzar.

## Propiedades de la tienda GAPS

Para operar completamente, la función GAPS requiere una serie de cambios de configuración y registros de datos que deben añadirse al sistema. Para facilitar este proceso, todos los pasos generales de configuración necesarios han sido automatizados para ti.

Para añadir los cambios de configuración de GAPS, simplemente haz clic en el botón `Inicializar`, que se muestra a continuación:

![GAPS: uninitialised](/docs/settings/images/gaps_unconfigured.png)

Una vez configurado, el botón `Inicializar` se desactivará:

![GAPS: initialised](/docs/settings/images/gaps_configured.png)

También aparecerá un botón `Editar` en el pie de página, donde podrás editar las propiedades del almacén para el almacén en la que estés registrado:

![Store properties edit](/docs/settings/images/store_properties_edit_footer.png)

Al hacer clic en ese botón `Editar` se abrirá una nueva ventana, donde podrás [ver y editar las propiedades de tu almacén](/docs/manage/facilities/#editing-your-store-properties).

Verás varios campos de propiedades en esta ventana. Si no los ves, puede haber un problema con la configuración; por favor contacta al soporte para investigarlo.

<div class='nota'>
¡La configuración de GAPS es un proceso irreversible que no se puede deshacer! Asegúrate de que deseas usar la función GAPS antes de inicializarla.
</div>
