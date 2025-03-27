+++
title = "Introdução"
description = "Funcionalidades de monitoramento de temperaturas"
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

## Resumo

Open mSupply oferece as seguintes funcionalidades para a cadeia de frios:

- **Monitoramento remoto de temperatura**
- **Gestão de inventário de equipamentos de cadeia de frios (CCE)**
- **Identificação de inventário comprometido** 

#### Monitoramento remoto de temperatura

Open mSupply permite aos centros de saúde:
- Ver registros de temperatura de refrigeradores e congeladores 
- Ver e responder a eventos de brecha de temperatura
- Gesrenciar sensores de temperatura
- Receber notificações em tempo real sobre brechas de temperatura

As autoridades de saúde centralizadas podem: 
- Ver dados de temperatura de todos os centros de saúde através de um portal web centralizado

Os datos de temperatura podem ser importados no Open mSupply desde múltiples fuentes. 
Os métodos actualmente compatibles son:  
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

