+++
title = "Inmunizaciones"
description = "Programas de inmunización"
date = 2022-05-17T16:20:00+00:00
updated = 2022-05-17T16:20:00+00:00
draft = false
weight = 61
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Configuración

Los Programas Básicos de Inmunización se configuran en el servidor central de mSupply.

Para la funcionalidad de GAPS, solo necesitas configurar una nueva Lista Maestra y marcarla como un Programa de Inmunización.

<div align="center">
    <img src="/docs/programs/images/og_immunisation_program.png" width="620">
</div>
<br />

Para los [Programas de Pacientes de Inmunización](/docs/programs/program-module), contacta a tu administrador para realizar la configuración.

Una vez creado el Programa Básico de Inmunización, se puede configurar más detalladamente en el <a href='/docs/getting_started/central'>Servidor Central de Open mSupply<<a>. Consulta la sección de <a href="#permissions-restrictions">Permisos y Restricciones</a> para más detalles.

## Ver los Programas de Inmunización

Selecciona `Programas` > `Inmunizaciones` en el panel de navegación.

![goto: immunizations](/docs/programs/images/goto_immunizations.png)

Se te mostrará una lista de Programas de Inmunización:

![immunizations list](/docs/programs/images/immunizations.png)

La lista de Programas de Inmunización está dividida en dos columnas:

| Columna                    | Descripción                                                               |
| :------------------------- | :------------------------------------------------------------------------ |
| **Nombre del Programa**    | El nombre del Programa de Inmunización                                    |
| **Cursos de Vacunacipn**   | Los Cursos de Vacunación que forman parte de ese Programa de Inmunización |

## Ver los Detalles del Programa de Inmunización

Para ver un Programa de Inmunización en detalle, haz clic sobre él. Esto te llevará a la página de detalles de ese programa.

![immunizations: detail](/docs/programs/images/immunizations_detail.png)

Puedes usar el botón `Cerrar` en la esquina inferior derecha para cerrar la vista de detalles y regresar a la lista de Programas de Inmunización.

### Programas de Vacunación

La vista detallada del Programa de Inmunización muestra una lista de los Programas de Vacunación que forman parte del programa.

La lista de Programas de Vacunación está dividida en 3 columnas:

| Columna                 | Descripción                                          |
| :---------------------- | :--------------------------------------------------- |
| **Nombre**              | El nombre del Programa de Vacunación                 |
| **Demografía Objetivo** | La demografía que recibirá el Programa de Vacunación |
| **Dosis**               | El número de dosis incluidas en el programa          |

### Añadir un nuevo Programa de Vacunación

Para añadir un nuevo Programa de Vacunación, haz clic en el botón `Añadir programa de vacunación` en la esquina superior derecha

![vaccine course: add button](/docs/programs/images/vaccine_course_add_button.png)

Esto abrirá una nueva ventana, donde podrás ingresar los detalles del nuevo Programa de Vacunación, por ejemplo, nombre del programa de vacunación, tasa de desperdicio, horario de dosis.

![vaccine course: create modal](/docs/programs/images/vaccine_course_add.png)

#### Dosis

Para agregar dosis al Programa de Vacunación, haz clic en el botón `(+) Dosis`. Esto añadirá una nueva fila a la tabla de `cronograma de dosis`, donde se pueden ingresar los detalles de la dosis, incluyendo cuándo se puede administrar la dosis.

![vaccine course: dose edit table](/docs/programs/images/vaccine_course_dose_edit.png)

La tabla de Cronograma de Dosis está dividida en 6 columnas:

| Columna                           | Descripción                                                                                                              |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **N° de dosis**                   | El número de la dosis en el cronograma                                                                                   |
| **Etiqueta**                      | La etiqueta de la dosis, que aparecerá en la [Tarjeta de Vacunación](/docs/programs/program-module#vaccination-cards)              |
| **Desde la edad**                 | Edad mínima recomendada para recibir la dosis (en años y meses)                                                        |
| **Hasta la edad**                 | Edad máxima recomendada para recibir la dosis (en años y meses)                                                        |
| **Etiqueta de edad ersonalizada** | Etiqueta de edad personalizada para mostrar en la Tarjeta de Vacunación. Si no se define, el valor predeterminado es la `Desde la edad` (por ejemplo, `6 años`) |
| **Intervalo mínimo (días)**       | Número mínimo de días que deben pasar antes de que el paciente reciba la siguiente dosis                                                   |

<div class="nota">
  Si se utilizan etiquetas de edad personalizadas, asegúrate de que esa etiqueta sea la misma para todas las dosis del Programa de Vacunación con la misma <code>Desde la edad</code>. Por ejemplo, si deseas reemplazar "0 meses" por "Nacimiento", todas las dosis de todos los Programas de Vacunación con una <code>Desde la edad</code> de 0 meses deberán tener la etiqueta personalizada de "Nacimiento". Esto asegura que las dosis se agrupen correctamente en la Tarjeta de Vacunación.
</div>

Una vez que estés satisfecho con los detalles del Programa de Vacunación, haz clic en OK para guardar el nuevo Programa de Vacunación.

Haz clic en `Cancelar` en cualquier momento para cerrar la ventana y descartar los cambios.

### Editar un Programa de Vacunación

Para ver o editar los detalles de un Programa de Vacunación, haz clic en la fila de la lista. Esto abrirá nuevamente la ventana de edición, donde podrás ver o cambiar cualquier detalle.

![vaccine course: edit modal](/docs/programs/images/vaccine_course_detail.png)

### Eliminar un Programa de Vacunación

Puedes eliminar Programas de Vacunación de la lista.

Selecciona el Programa de Vacunación que deseas eliminar marcando la casilla en el extremo derecho de la lista. Puedes seleccionar más de un Programa de Vacunación para eliminar a la vez. Incluso puedes seleccionarlos todos utilizando la casilla maestra en el encabezado de la tabla.

![vaccine courses: select to delete](/docs/programs/images/vaccine_courses_select.png)

Abre el menú desplegable de `Acciones` en la esquina superior derecha, sobre la lista, y selecciona `Eliminar las líneas seleccionadas`.

![vaccine courses: actions](/docs/programs/images/immunizations_actions.png)

Se te pedirá que confirmes si deseas eliminar los Programas de Vacunación seleccionados. Presiona `Cancelar` para evitar la eliminación, o `Ok` para confirmar.

![vaccine courses: confirm delete](/docs/programs/images/vaccine_courses_confirm_delete.png)

Una notificación en la esquina inferior izquierda confirmará cuántos programas fueron eliminados.

## Permisos y Restricciones

Los Programas de Vacunación solo pueden ser gestionados en el [Servidor Central de Open mSupply](/docs/getting_started/central) y requieren la preferencia de almacén [`mobile: Usa el módulo de vacunas`](https://docs.msupply.org.nz/cold_chain_equipment:mobile?s[]=vaccine#enable_the_vaccine_module_for_the_mobile_store).

![mSupply Store Preference Vaccine Module](/docs/programs/images/vaccine_module.png)

Para configurar Programas de Vacunación o Programas de Vacunas, necesitas tener habilitado el permiso `Puede modificar datos centrales` en la [Pestaña de Permisos de Open mSupply](https://docs.msupply.org.nz/admin:managing_users?s[]=permission#open_msupply_permissions_tab) en tu Tienda Central.

![Can Modify Central Data Permission](/docs/programs/images/can_modify_central.png)
