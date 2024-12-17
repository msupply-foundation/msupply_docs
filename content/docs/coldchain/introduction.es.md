+++
title = "Introducción"
description = "Funciones de monitoreo y reporte de temperaturas"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

## Resumen

Open mSupply ofrece las siguientes funcionalidades para la cadena de frío:

- **Monitoreo remoto de temperatura**
- **Gestión de inventario de equipos de cadena de frío (CCE)**
- **Identificación de inventario comprometido** 

#### Monitoreo remoto de temperatura

Open mSupply permite a los centros de salud:
- Ver registros de temperatura de refrigeradores y congeladores 
- Ver y responder a eventos de incumplimiento de temperatura
- Gestionar sensores de temperatura
- Recibir notificaciones en tiempo real sobre incumplimientos y excursiones de temperatura

Las autoridades de salud centralizadas pueden: 
- Ver datos de temperatura de todos los centros de salud a través de un portal web centralizado

Los datos de temperatura pueden ser importados a Open mSupply desde múltiples fuentes. 
Los métodos actualmente compatibles son:  
- Conectar los [sensores de temperaura de mSupply](https://msupply.foundation/open-msupply/cold-chain/#mSupplySensor) a Open mSupply mediante Bluetooth
- Importar datos de [Fridge-tags](https://www.berlinger.com/cold-chain-management/refrigerator-temperature-logger-solution-1) y [Q-tags](https://www.berlinger.com/shipment-monitoring-solutions) a través de USB (puedes leer más [aquí](https://www.berlinger.com/partnership-msupply)).

#### Gestión de inventario de equipos de cadena de frío

Open mSupply permite a los centros de salud:
- Registrar detalles de los activos de equipos de cadena de frío (CCE), como refrigeradores, congeladores y dispositivos de monitoreo remoto de temperatura
- Consultar manuales de operación y mantenimiento de los CCE
- Actualizar el estado funcional de los CCE
- Registrar logs de mantenimiento de los CCE

Las autoridades de salud centralizadas pueden: 
- Ver la ubicación de los activos de CCE en todos los centros de salud
- Distribuir CCE entre los diferentes centros de salud
- Ver datos agregados de los CCE, como el estado funcional, en un portal web centralizado

#### Identificación de inventario comprometido

Open mSupply permite a los centros de salud: 
- Vincular datos de temperatura con datos de inventario
- Ver las líneas de inventario que podrían haberse comprometido en un portal web centralizado

Los sensores pueden vincularse a una [Ubicación](/docs/inventory/locations/) de almacenamiento de inventario. 
Esta vinculación permite que Open mSupply asocie registros de temperatura y eventos de incumplimiento con líneas de inventario específicas. 
Los datos históricos están disponibles para verificar que los equipos de la cadena de frío estén funcionando correctamente y para determinar si el inventario pudo haberse visto afectado por variaciones de temperatura.

## Primeros pasos

Para comenzar a usar las funciones de la cadena de frío, habilita la [preferencia de almacén](https://docs.msupply.org.nz/other_stuff:virtual_stores#preferences_tab) llamada `mobile: Uses Vaccine Module`.

Cualquier usuario que necesite acceder a las funciones de la cadena de frío debe tener habilitados los siguientes [permisos de usuario](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs):

- Vacunas
  - `Ver detalles del sensor`
  - `Editar ubicación del sensor`

