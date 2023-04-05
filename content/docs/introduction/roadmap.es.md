+++
title = "Plan de Trabajo Actual"
description = "Open mSupply Road Map."
date = 2022-11-10T18:20:00+00:00
updated = 2022-11-10T18:20:00+00:00
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

Este mapa de ruta se actualizará aproximadamente cada seis semanas y solo cubre nuestro flujo de trabajo comprometido inmediato. Nuestra lista de funciones planificadas es mucho más extensa.

### Plan de trabajo
{% mermaid ()%}
gantt
 title Plan de Trabajo Open mSupply
 dateFormat YY-MM-DD
 axisFormat %B
 section Versión 1.1
  Integración de Fridgetag :t1-1-1,23-02-21, 35d
  División de paquetes :t1-1-2,23-03-06, 35d
  Función de programas RC1 :t1-1-3,23-02-01, 30d
  Estabilización de Android :t1-1-4,23-02-01, 25d
 section Versión 1.2
  Preferencias: t1-2-3, after t1-1-2, 28d
  Integración de cadena de frío :t1-2-1, after t1-1-1, 56d
  Función de programas RC2: t1-2-2, after t1-1-3, 90d
 section Versión 2.0
  Dispensación: t2-0-1, after t1-2-2, 70d
  Funcionalidad mejorada de R&R: after t1-2-3, 56d
  Integración DHIS2: t2-0-3, after t1-2-2, 28d
  Integración HL7: t2-0-4, after t2-0-3, 28d
  Dispensación : milestone, m2, after t2-0-1, 
section Versión 2.1
  Devoluciones de clientes: t2-1-1, after t2-0-4, 32d
  Devoluciones de proveedores: t2-1-2, after t2-0-4, 32d
section Versión 2.2
  Propiedades de los productos: t3-0-1, after t2-1-1, 14d
  Serialización: t3-0-2, after t3-0-1, 21d
  Front-end Marco de complementos: after t2-1-1, 32d
{% end %} 


### Características planificadas

| Área    | Transacción    | Característica / Capacidad     | 
|-----------------------------------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| CUANTIFICACIÓN | Planificación de la demanda  | Cálculo basado en reglas del volumen estimado de productos requeridos X por nivel de distribución y períodos de tiempo definidos por el usuario | 
| CUANTIFICACIÓN | Planificación de suministros  |   | 
| CUANTIFICACIÓN  | Planificación de la demanda  | Editar manualmente las previsiones    | 
| ADQUISICIONES  | Licitación/Solicitud de cotización   | Comprador: crear una nueva licitación   | 
| ADQUISICIONES   | Licitación/Solicitud de cotización    | Comprador: publicar la licitación en una lista de proveedores  | 
| ADQUISICIONES  | Licitación/Solicitud de cotización    | Comprador: crear una solicitud electrónica de cotización (EDI 840)   | 
| ADQUISICIONES   | Licitación/Solicitud de cotización     | Comprador: crear precios de referencia | 
| ADQUISICIONES   | Licitación/Solicitud de cotización     | Proveedores: pueden cargar sus respuestas en Open mSupply (portal web)  | 
| ADQUISICIONES   | Licitación/Solicitud de cotización     | Comprador: recibir manualmente las respuestas / cotizaciones del proveedor    | 
| ADQUISICIONES  | Licitación/Solicitud de cotización     | Comprador: recibir automáticamente las respuestas / cotizaciones del proveedor (portal web)  | 
| ADQUISICIONES   | Licitación/Solicitud de cotización    | Comprador: recibir una respuesta electrónica a una solicitud de cotización (EDI 843 / PEPPOL)    | 
| ADQUISICIONES   | Licitación/Solicitud de cotización     | Compradores: evaluatón de cotizaciones recibidas   | 
| ADQUISICIONES   | Licitación/Solicitud de cotización     | Compradores: seleccionar proveedores preferidos (adjudicación)  | 
| ADQUISICIONES   | Licitación/Solicitud de cotización     | Gestión de contratos y subvenciones  | 
| ADQUISICIONES   | Órdenes de compra  | Crear una orden de compra a partir de una licitación     | 
| ADQUISICIONES  | Órdenes de compra  | Crear una orden de compra calculada     | 
| ADQUISICIONES   | Órdenes de compra  | Crear una orden de compra en blanco   | 
| ADQUISICIONES   | Órdenes de compra   | Crear una orden de compra electrónica (EDI 850)   | 
| ADQUISICIONES   | Órdenes de compra  | Agregar elementos de la lista maestra    | 
| ADQUISICIONES   | Órdenes de compra   | Categorías de orden de compra   | 
| ADQUISICIONES  | Órdenes de compra  | Atributos de línea de orden de compra  | 
| ADQUISICIONES   | Gestión de proveedores  | Crear / Ver / Editar proveedores   | 
| ADQUISICIONES   | Aviso de Envío Avanzado | Crear un aviso de envío avanzado (ASN) manual a partir de una orden de compra (PO)   | 
| ADQUISICIONES   | Aviso de Envío Avanzado | Recibir un ASN electrónico (EDI 856)  | 
| ADQUISICIONES   | Recepción de bienes   | Imprimir un formulario de recepción de mercancías (PDF, CSV) de un envío entrante (cuando se confirma el estado VERIFICADO)  | 
| ADQUISICIONES   | Pagos | Imprimir un formulario de factura de proveedor (PDF, CSV) de un envío entrante (cuando se confirma el estado VERIFICADO) | 
| ADQUISICIONES   | Pagos| Registrar los pagos realizados a proveedores (a partir de una factura de proveedor)    | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Aceptar notificación de llegada del envío    | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Recibir automáticamente los datos del envío antes de la llegada  | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Registrar manualmente los datos del envío antes de la llegada    | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Mostrar cualquier diferencia entre las cantidades solicitadas (req o PO) y las cantidades notificadas | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Notificar a las partes correspondientes las discrepancias   | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Rechazar el pedido si es necesario   | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Mostrar los requisitos de almacenamiento en función de la cantidad enviada y el volumen bruto | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Mostrar la cantidad de espacio de almacenamiento disponible por tipo | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Marcar si no hay suficiente espacio de almacenamiento por tipo   | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Confirmar la llegada del envío entrante      | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Registrar manualmente los datos de la entrada al llegar  | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Escaneo de códigos de barras para la recepción de bienes     | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Indicar las discrepancias en comparación con el envío recibido    | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Registrar daños, discrepancias, no coincidencia de lotes, indicador e información de variación para cada línea de producto   | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores)| Registrar notas sobre las discrepancias y variaciones en los bienes recibidos | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Informar los daños y discrepancias a las personas correspondientes    | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Confirmar los bienes en el stock (actualizar los registros de inventario)    | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores) | Imprimir informes de recepción, formulario de liberación de stock, autorización de recepción, etc...   | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Asignar un operario a una entrada para ubicar el stock recibido   | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Aplicación de ubicación: carga la lista de artículos y las instrucciones de ubicación de ña entrada  | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Mostrar las condiciones de almacenamiento de los artículos (por ejemplo, control de temperatura)  | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores)| Mostrar la ubicación de almacenamiento predeterminada para cada artículo   | 
| RECEPCIÓN   | Entradas(excluyendo facturas de proveedores)| Proponer el espacio/posición para cada artículo en inventario basado en reglas definidas (por ejemplo, la disponibilidad actual de espacio, basado en la categoría ABC)   | 
| RECEPCIÓN  | Entradas(excluyendo facturas de proveedores) | Imprimir etiqueta de paleta/estante que especifique el estado de la mercancía, si es apropiado  | 
| GESTIÓN DE INVENTARIO     | Ubicaciones   | Crear/editar ubicaciones de almacenamiento de inventario (pasillo, bin, slot, etc.)  | 
| GESTIÓN DE INVENTARIO     | Ubicaciones   | Definir la jerarquía de las ubicaciones de almacenamiento  | 
| GESTIÓN DE INVENTARIO    | Ubicaciones    | Definir condiciones de almacenamiento (cadena de frío, volumen, restricciones de elementos, restricciones de uso, etc...)    | 
| GESTIÓN DE INVENTARIO     | Ubicaciones   | Registrar las temperaturas para las ubicaciones de almacenamiento (ver categoría CADENA DE FRÍO)  | 
| GESTIÓN DE INVENTARIO     | Artículos - Movimiento de stock y caducidad  | Registrar el estado VVM   | 
| GESTIÓN DE INVENTARIO     | Ubicaciones     | Registrar el estado de las condiciones de congelación   | 
| GESTIÓN DE INVENTARIO     | Artículos - Datos maestros  | Establecer condiciones de umbral de temperatura por producto, según corresponda  | 
| GESTIÓN DE INVENTARIO    | Artículos - Movimiento de stock y caducidad  | Condiciones de alerta fuera del umbral  | 
| GESTIÓN DE INVENTARIO    | Artículos - Movimiento de stock y caducidad  | Realizar seguimiento de lotes y fechas de caducidad    | 
| GESTIÓN DE INVENTARIO    | Artículos - Movimiento de stock y caducidad   | Transferir el stock de una ubicación a otra    | 
| GESTIÓN DE INVENTARIO    | Artículos - Movimiento de stock y caducidad  | Mostrar y transmitir alertas y notificaciones de caducidades pendientes  | 
| GESTIÓN DE INVENTARIO    | Artículos - Movimiento de stock y caducidad   | Mostrar y transmitir alertas y notificaciones de stock agotado, sobreestock, subestock  | 
| GESTIÓN DE INVENTARIO    | Artículos - Datos maestros  | Marcar artículos como peligrosos, según corresponda    | 
| GESTIÓN DE INVENTARIO    | Toma de inventario   | Crear/editar una toma de inventario para una lista de artículos    | 
| GESTIÓN DE INVENTARIO    | Toma de inventario    | iltrar el stock a incluir: por atributos de artículo (categoría, departamento, fecha de caducidad, etc...)   | 
| GESTIÓN DE INVENTARIO    | Toma de inventario   | Filtrar el stock a incluir: por ubicación  | 
| GESTIÓN DE INVENTARIO    | Toma de inventario    | Filtrar el stock a incluir: por lista maestra   | 
| GESTIÓN DE INVENTARIO     | Toma de inventario    | Imprimir hojas de toma de inventario (formato PDF)  | 
| GESTIÓN DE INVENTARIO     | Toma de inventario   | Imprimir hojas de toma de inventario (formato CSV)  | 
| GESTIÓN DE INVENTARIO    | Toma de inventario    |   | 
| GESTIÓN DE INVENTARIO     | Toma de inventario    | Aplicación de toma de inventario: cargar la hoja de toma de inventario en un dispositivo móvil    | 
| GESTIÓN DE INVENTARIO     | Toma de inventario    | Aplicación de toma de inventario: usa un escáner de código de barras o la cámara del dispositivo móvil para seleccionar el artículo que el operario está contando | 
| GESTIÓN DE INVENTARIO     | Toma de inventario    | Escaneo de código de barras para la toma de inventario | 
| GESTIÓN DE INVENTARIO     | Toma de inventario    | Crear ajustes de inventario (finalizar la toma de inventario)  | 
| GESTIÓN DE INVENTARIO    | Toma de inventario   | Agregar razones para los ajustes de inventario  | 
| GESTIÓN DE INVENTARIO    | Toma de inventario   | Conteo cíclico  | 
| GESTIÓN DE INVENTARIO    | Kits  |   | 
| GESTIÓN DE INVENTARIO    | Ajustes de inventario |   | 
| GESTIÓN DE INVENTARIO    | Reempacar |   | 
| GESTIÓN DE INVENTARIO    | Artículos - Movimiento de stock y caducidad   | Dividir línea de stock  | 
| GESTIÓN DE INVENTARIO     | Artículos - Movimiento de stock y caducidad   | Combinar línea de stock  | 
| GESTIÓN DE INVENTARIO     | Reposición de pickface (zona de alta rotación) |   | 
| GESTIÓN DE INVENTARIO     | Gestión de personal   | Crear/editar operarios de almacén  | 
| DESPACHOS  | Salidas  | Crear una hoja de recogida a partir de una salida asignada    | 
| DESPACHOS  | Salidas  | Hoja de recogida: mostrar la ubicación actual de los artículos requeridos   | 
| DESPACHOS   | Salidas  | Hoja de recogida: crear hoja de recogida ordenada por ubicaciones de almacenamiento     | 
| DESPACHOS  | Salidas | Hoja de recogida: mostrar la fecha de caducidad del stock    | 
| DESPACHOS  | Salidas  | Aplicación de hoja de recogida: cargar una hoja de recogida en un dispositivo móvil  | 
| DESPACHOS   | Salidas  | Escaneo de códigos de barras y recogida de pedidos  | 
| DESPACHOS  | Salidas  | Confirmar la salida como alistada | 
| DESPACHOS  | Salidas  | Empaque de pedido    | 
| DESPACHOS  | Salidas | Empaque de pedido: caja/cartonización  | 
| DESPACHOS  | Salidas | Imprimir documentos para la entrega: lista de embalaje, factura del cliente, nota de recepción de mercancías | 
| DESPACHOS  | Salidas | Confirmar la salida como enviada (actualización de los registros de inventario)  | 
| TRANSPORT   | Transport order/request | Draft transport order     | 
| TRANSPORT   | Transport order/request | Assign one or multiple "picked" outbound shipments to transport order (same trip or location)   | 
| TRANSPORTE   | Orden/Solicitud de transporte | Determinar la carga útil, volumen y dimensiones    | 
| TRANSPORTE   | Orden/Solicitud de transporte | Seleccionar el modo y tipo de transporte | 
| TRANSPORTE   | Orden/Solicitud de transporte| Determinar los requisitos de control de temperatura    | 
| TRANSPORTE   | Orden/Solicitud de transporte | Confirmar la orden de transporte   | 
| TRANSPORTE   | Orden/Solicitud de transporte| Programar los recursos de transporte  | 
| TRANSPORTE   | Orden/Solicitud de transporte | Registrar/Mostrar las instrucciones de entrega     | 
| TRANSPORTE   | Orden/Solicitud de transporte| Registrar/Mostrar el número de seguimiento, vehículo, conductor   | 
| TRANSPORTE   | Orden/Solicitud de transporte| Confirmar que se han cargado las salidas   | 
| TRANSPORTE   | Orden/Solicitud de transporte | Rastrear la ubicación y actualizar la hora estimada de llegada  | 
| TRANSPORTE   | Orden/Solicitud de transporte | Registrar el historial de transporte (ubicación, temperatura)  | 
| TRANSPORTE   | Orden/Solicitud de transporte | Confirmar la entrega / imprimir/enviar prueba de entrega   | 
| TRANSPORTE   | Transportista | Create/edit Carriers     | 
| TRANSPORTE   | Ruta | Crear/editar transportistas   | 
| TRANSPORTE   | Gestión de flotas   |   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Suggest order quantities based on past comsumption data (eg. AMC)  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Suggest order quantities based on minimum quantity threshold   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Suggest order quantities based on patient records / registry data  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs based on aggregating requisitions by intermediate levels   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs based on target populations  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs quantities based on statistical forecasts   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | estimate stock needs point based on user-defined criteria    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display past consumption data   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display current available and usable on-hand quantity of each stock item    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display open order and inbound shipments    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display open outbound orders and projected usage  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display current stock levels (SOH) at all relevant levels    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display expiry dates for on-hand stock     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Generate suggested order quantities (Requested - SOH) = Suggested Qty | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display lead time for order fulfillment     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Display item cost at time requisition is generated  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Calculate order cost at time requisition is generated     | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Submit requisition (electronically or manually)   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Provide approval/rejection mechanism at appropriate levels    | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Approver can modify the requisition, if needed   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Record requisition approval date  | 
| PER-PATIENT DISPENSING    | Dispensing    | Record dispensed medicines to an individual patient  | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit a prescription    | 
| PER-PATIENT DISPENSING    | Prescription    | Abbreviations   | 
| PER-PATIENT DISPENSING    | Prescription    | Drug Interactions Group     | 
| PER-PATIENT DISPENSING    | Prescription    | Payments and receipt / cash register     | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit patients     | 
| PER-PATIENT DISPENSING    | Prescription    | Create/edit prescribers     | 
| PER-PATIENT DISPENSING    | Prescription    | Repeats     | 
| PROCUREMENT   | Good receipt to verify stock on POs  | Create Goods Receipt / Inbound Shipment     | 
| PROCUREMENT   | Good receipt to verify stock on POs  | Add lines from a PO to an Inbound Shipment    | 
| COLD CHAIN   | Temperature monitoring | Display and transmits alerts for temperature breach (home screen dashboard), assign one or several temperature sensors to a storage location, define threshold per item | 
| COLD CHAIN   | Temperature monitoring | Sync of temperature records to the server to feed mSupply dashboard (via Cold Chain app)    | 
| COLD CHAIN   | Temperature monitoring | Integration with Berlinger temperature loggers and fridge tab   | 
| SYNC    | Sync Carry over   | https://github.com/openmsupply/open-msupply/issues/608     | 
| OVERALL SYSTEM  | User permission   | Build in variable user access   | 
| OVERALL SYSTEM  | Currency | Ability to support several currency and their exchange rate    | 
| OVERALL SYSTEM  | Any  | Upload scanned documents    | 
| PROCUREMENT   | Manage templates   | Ability to maintain templates   | 
| DASHBOARDS   | View data on dashboards | Reports on stock consumption   | 
| PROCUREMENT   | Purchase Orders   | All approvers can access system to approve procurement forms   | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Intuitive requisition template with pull-down menus  | 
| REQUISITIONS  | General Request Requisition (Int. Order) | Requested items can be routed for storage release or purchase   | 
| PROCUREMENT   | Add notes and process waivers   | Ability to document notes to file and procurement process waivers  | 
| OVERALL SYSTEM  | Any  | Ability to store contracts and Goods Received Note (GRN) in the system | 
| PROCUREMENT   | Referencing    | Facilitate 3-way matching for vendor payments (PO, GRN, invoice)  | 
| PROCUREMENT   | Purchase Orders   | Notify PO change in status to different users or when the full PO is not fulfilled  | 
| PROCUREMENT   | Matching information  | Procurement and inventory modules communicate data on received goods, POs, and master lists with each other    | 
| DISPATCH   | Outbound Shipment  | Send a notification of approved outbound shipment  | 
| DISPATCH   | Outbound Shipment  | Approval system of outbound shipment     | 
| PROCUREMENT   | Generate Delivery note | Generate Delivery note and Waybill/Packing List   | 
| TRANSPORT   | Vehicle data sheet  | Record for each vehicle with key parameters (VIN, model, plate, fuel type, model year, reg. data & number, insurance date & policy number, price, etc.) | 
| TRANSPORT   | Reporting    | Track key monthly vehicle data (# of days vehicle in use and under repair, km driven, odometer reading, fuel cost, liters of fuel consumed)    | 
| TRANSPORT   | Reporting    | "Track key monthly generator data (running hours, maintenance costs, fuel consumed) | 
| Add notifications when expected levels are not met" |   |   | 
| TRANSPORT   | Reporting    | "Track repairs per vehicle and generator (type, date, cost, spare parts & consumables used)    | 
| Add notifications when expected levels are not met" |   |   | 
| TRANSPORT   | Interoperability   | Can be integrated with vehicle tracking hardware to capture km traveled | 
| TRANSPORT   | General | Send notifications when key documents are soon to expire (insurance, registration, etc.)    | 
| OVERALL SYSTEM  | Comments | Users can communicate in the platform (i.e., leave comments during approvals process) | 
| TENDER    | General | Manage competitive bidding process  | 
| TENDER    | General | maintain fixed price list for preferred vendors   | 
| TENDER    | General | maintain standard list of products with estimated prices    | 
