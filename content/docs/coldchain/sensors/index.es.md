+++
title = "Sensores"
description = "Management of temperature sensors"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 3
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

### Conectar Sensores

Open mSupply admite varios tipos de sensores de temperatura.

Los métodos para conectar cada uno se describen a continuación.

#### Sensores de temperatura mSupply

La Fundación mSupply fabrica sus propios [sensores de temperatura mSupply](https://msupply.foundation/open-msupply/cold-chain/#mSupplySensor).

Estos sensores pueden conectarse a Open mSupply mediante la integración con la aplicación [mSupply Cold Chain](/coldchain/introduction/) application.

Para configurar la integración, será necesario configurar un nuevo usuario de mSupply.

El usuario es un usuario estándar de mSupply, con la siguiente configuración:

- El almacén predeterminada asignada al usuario es el almacén con la que se asociarán los datos de temperatura.
- El almacén deberá ser parte del sitio con el que Open mSupply está sincronizando. Consulta la sección de [Configuraciones](/docs/settings/synchronisation/#viewing-the-synchronisation-settings) para ver con qué sitio se está sincronizando Open mSupply, y luego la pantalla de [Sincronización](https://docs.msupply.org.nz/synchronisation:sync_sites#viewing_sync_sites) para verificar que tu sitio incluya el almacén correcto.
- El usuario debe tener el permiso de Open Supply de `acceso a la API de Cold chain` (ver más abajo)

![Cold chain API permission](images/coldchain_permission.png)

A partir de aquí, sigue los pasos en la documentación de la aplicación mSupply Cold Chain para[Integrarse con mSupply Desktop](/coldchain/desktop-integration/#msupply-desktop-setup-steps) utilizando las credenciales del nuevo usuario de mSupply creadas anteriormente en lugar de las credenciales del almacén.

#### Fridge-tags y Q-tags

Si estás utilizando Fridge-tags de Berlinger, puedes importar los datos directamente a Open mSupply. Para hacerlo, inserta el USB del Fridge-tag en tu computadora.
Luego, haz clic en el botón `Importar Fridge-tag`:

![Import fridge tag](images/import_fridge_tag.png)

Esto abrirá una ventana de exploración de archivos, permitiéndote seleccionar el archivo `.txt` con los datos del Fridge-tag. Simplemente haz clic en el archivo y espera a que se complete la importación.

Así es como se ve el proceso (esta es la versión para escritorio en Mac):

![Import fridge tag](images/import_fridge_tag.gif)

<div class="nota">Es posible que debas esperar a que se genere el archivo de texto después de conectar el Fridge-tag a tu computadora.</div>

Los siguientes dispositivos de Berlinger son compatibles con Open mSupply:

| Dispositivo             | Datos de incumplimiento mostrados | Gráfica de temperatura generada |
| :---------------------- | :-------------------------------- | :------------------------------ |
| **Fridge-tag 2L**       | Si                                | Si                              |
| **Q-tag CLm doc**       | Si                                | Si                              |
| **Q-tag CLm doc D**     | Si                                | Si                              |
| **Q-tag CLm doc Ice**   | Si                                | Si                              |
| **Q-tag CLm doc Ice R** | Si                                | Si                              |
| **Q-tag CLm doc L**     | Si                                | Si                              |
| **Q-tag CLm doc LR**    | Si                                | Si                              |
| **Fridge-tag 2**        | Si                                | No\*                            |
| **Fridge-tag 2E**       | Si                                | No\*                            |
| **Fridge-tag UL**       | Si                                | Si                              |

\*El dispositivo registrador no captura registros individuales de temperatura

### Visualización de los Sensores

Selecciona `Cold chain` > `Sensores` en el panel de navegación.

![goto sensors](images/goto_sensors.png)

Se mostrará una lista de sensores (si no ves ninguno, puede que aún no hayas importado datos o integrado la aplicación mSupply Cold Chain).

Desde esta pantalla puedes ver una lista de sensores y editar un sensor.

### Lista de Sensores

![Sensor list](images/sensor_list.png)

1. La lista de sensores está dividida en 9 columnas:

| Columna                    | Descripción                                                                                   |
| :------------------------- | :-------------------------------------------------------------------------------------------- |
| **Nombre**                 | Nombre del sensor                                                                             |
| **CCE**                    | Número de activo del equipo de cadena de frío al que está asociado el sensor                  |
| **Ubicación**              | `Ubicación` actual de almacenamiento de inventario del sensor                                 |
| **Número de serie**        | Identificador único del sensor                                                                |
| **Nivel de batería**       | Lectura más reciente de la batería, en porcentaje                                             |
| **Última lectura**         | La temperatura más reciente reportada por el sensor                                           |
| **Fecha y Hora**           | Fecha y hora de la actividad más reciente del sensor                                          |
| **Tipo de sensor**         | Fabricante del sensor; las opciones compatibles actualmente son `mSupply` & `Berlinger`       |
| **Tipo de incumplimiento** | Si el sensor ha registrado un incumplimiento, muestra el tipo del incumplimiento más reciente |

1. La lista puede mostrar un número fijo de sensores por página. En la esquina inferior izquierda, puedes ver cuántos sensores se están mostrando actualmente en tu pantalla.

![Page](images/list_showing.png)

2. Si tienes más sensores que el límite actual, puedes navegar a otras páginas tocando el número de página o utilizando las flechas derecha o izquierda (esquina inferior derecha).

![Page](images/list_pagenumbers.png)

3. También puedes seleccionar un número diferente de filas para mostrar por página usando la opción en la esquina inferior derecha de la página.

![Rows per page](images/rows-per-page-select.png)

### Editar un sensor

Al hacer clic en una fila de la lista, se mostrarán los detalles de ese sensor.

![Sensor details](images/sensor_details.png)

En esta pantalla puedes:

- Editar el nombre del sensor.
- Vincular el sensor a una `Ubicación` de almacenamiento de inventario.

<div class="nota">Los nombres de los sensores de temperatura mSupply deben editarse en la aplicación mSupply Cold Chain</div>

En esta pantalla también se muestran otros detalles del sensor, como el nivel de batería y la última temperatura registrada.
