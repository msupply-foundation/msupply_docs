+++
title = "Artículos"
description = "Ver artículos."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 52
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Gestiona tu catálogo"
toc = true
top = false
+++

Un artículo en mSupply es generalmente un producto que se compra a un proveedor, se mantiene en stock y se suministra a un cliente. Desde el menú **Artículos**, puedes ver todos los artículos que actualmente son visibles en tu almacén. 

## Ver la lista de artículos

En el panel de navegación, haz clic en`Catálogo` > `Artículos` para mostrar la lista de artículos: 

![Items nav](/docs/catalogue/images/cat_gotoitems.png)

Puede ver todos los artículos que están disponibles para tu uso en el almacén: 

![Items list](/docs/catalogue/images/cat_itemslist.png)

## Ver los detalles de un artículo

Para ver los detalles de un artículo, simplemente toca uno. Se abrirá una nueva ventana: 

![Item detail](/docs/catalogue/images/cat_itemdetail.png)

En la parte superior de la pantalla, puedes ver la siguiente información:
* **Inventario disponible**: Cuánto stock está actualmente disponible en tu tienda.
* **AMC**: Consumo mensual promedio. Esto es cuánto stock consume tu tienda cada mes en promedio (basado en un número configurable de meses, el valor por defecto es 3 meses).
* **Meses de inventario**: Número de meses de consumo restantes con el stock actual. Esto se calcula como: `Inventario disponible / AMC`.

<div class="imagetitle">
En el siguiente ejemplo, tenemos 1542 unidades de amoxicilina disponibles en nuestro almacén. El consumo promedio es de 53,3 unidades por mes, lo que significa que hay el equivalente a 28,9 meses de stock en el inventario.
</div>

![Item detail headers](/docs/catalogue/images/cat_itemdetailsheaders.png)

En la parte inferior, los detalles del artículo se dividen en varias secciones:

### Details

* **Nombre**: Este es el nombre con el que mSupply se referirá al artículo
* **Código**: Este debe ser único para cada artículo y es un atajo útil para referirse a los artículos.
* **Unidad**: La unidad que usa para este artículo. Es útil distinguir los artículos que emite por paquete (por ejemplo, gotas para los ojos) de los artículos que emite por volumen (por ejemplo, líquidos orales).
* **Fuerza**: Para un medicamento, la concentración de sus ingredientes activos (por ejemplo, para Amoxillina 250 mg, la fuerza es 250 mg).
* **Dosis Diaria Definida**:  La dosis de mantenimiento promedio asumida por día para un medicamento utilizado para su indicación principal en adultos.
* **Dosis**: Para vacunas, el número de dosis por vial
* **Vacuna** (casilla de verificación): Si esta casilla está marcada, este artículo es una vacuna y se puede asignar un número de dosis.

### Categories

* **Categoría ATC**: ATC significa Anatómico, Terapéutico, Químico, y es un método de clasificación de entidades, e identificarlos por categoría
* **Nombre Universal**: si el artículo está vinculado a la base de datos de [códigos de drogas universales](https://codes.msupply.foundation/), esto muestra el nombre universal o genérico para el artículo dado
* **Código Universal**: similarmente, el código asignado al artículo de código de droga universal

### Empaque

* **Tamaño de paquete estándar**: Este es el tamaño de paquete estándar que se asignará al stock entrante a medida que se reciba.
* **Tamaño de paquete exterior**: El número de unidades en una caja (paquete exterior). No el número de paquetes de tamaño estándar en una caja (paquete exterior).
* **Volumen por paquete**: El volumen predeterminado por paquete de tamaño estándar. Este es el volumen que se utilizará de forma predeterminada al recibir mercancías. Le recomendamos que divida el volumen de un cartón por el número de paquetes de tamaño preferido en un cartón para obtener esta cifra. mSupply siempre almacena los volúmenes en m3 (metros cúbicos), pero puede ingresar un volumen como mililitros (ml) o litros (l) ingresando la abreviatura apropiada después del número que representa el volumen. Por ejemplo, ingrese "0.5l" para ingresar un volumen de 0.5 litros (= 0.0005 m3).
* **Volumen por paquete exterior**: El volumen predeterminado de un paquete exterior de este artículo.
* **Peso**: El peso de un paquete de tamaño estándar en kg.

### Precios

* **Margen**: Este es el margen predeterminado que se aplicará a este artículo en las entradas de inventario para calcular el precio de venta.