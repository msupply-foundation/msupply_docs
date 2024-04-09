+++
title = "Requisitos"
description = "Requirements for Open mSupply."
date = 2022-06-10T11:38:00+00:00
updated = 2022-06-10T11:38:00+00:00
draft = false
weight = 6
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = true
+++

## Requisitos de Open mSupply

Open mSupply se ejecuta en varias plataformas y para una instalación básica tiene requisitos de hardware muy modestos. El cliente puede ser un navegador web, una tableta Android o una PC con Windows o Mac OS. El servidor requiere un poco más de memoria y capacidad de procesamiento, dependiendo del número de usuarios. Puede ejecutarse en sistemas operativos Windows, Mac o Linux.

## Requisitos de hardware

### Recomendaciones generales de hardware 

- En entornos con cortes de energía regulares, se recomienda encarecidamente adquirir computadoras portátiles en lugar de computadoras de escritorio. Las computadoras portátiles serán casi siempre la mejor solución en términos de costo y eficacia por las siguientes razones::
  - En entornos con suministro eléctrico de baja calidad, las computadoras portátiles generalmente serán más confiables que las computadoras de escritorio con protección UPS. En tales entornos, las baterías UPS normalmente morirán dentro de los 2 años. Las baterías de las computadoras portátiles tienen un mejor manejo de energía y duran más.
  - Incluso cuando se agota la batería de una computadora portátil, la administración de energía normalmente hará que la máquina se apague correctamente.
  - Las computadoras portátiles tienen micrófono y cámara incorporados para proporcionar soporte.
  - Las computadoras portátiles tienen un adaptador Wi-Fi incorporado para la conexión de red.
  - Las computadoras portátiles son más pequeñas y livianas que las computadoras de escritorio, por lo que son menos costosas de enviar.

- No es absolutamente necesario tener una impresora conectada en todas las situaciones, pero en la mayoría de las situaciones es un requisito. Es preferible una impresora de inyección de tinta o láser.
- Adquiera hardware para el cual haya un buen soporte postventa disponible
- Adquiera marcas con reputación de calidad (incluso si significa comprar una máquina más lenta / antigua)

### Requisitos de hardware de Windows, Mac y Linux

Los requisitos de hardware varían ampliamente según para lo que desee usar Open mSupply. Aquí hay una guía aproximada:

| Máquina | Mínimo técnico | Recomendado |
| :---------- | :---------- | :---------- |
| Máquina cliente Windows para usar con servidor | Procesador de 64 bits<br/>Windows 10<br/>4 Gb de RAM, 300Mb de espacio en disco| Procesador de 64 bits<br/>Windows 10<br/>8 Gb de RAM, 500Mb de espacio en disco |
| Máquina cliente Mac para usar con servidor | 6Procesador de 64 bits<br/>macOS Mojave (10.14) - macOS Big Sur (11) (se requiere la última versión principal, como 10.14.6)<br/>4 Gb de RAM, 300Mb de espacio en disco	| Procesador de 64 bits<br/>Mac OS 10.14.6 o posterior<br/>8 Gb de RAM, 500Mb de espacio en disco |
| Servidor Windows| Procesador de 64 bits<br/>Windows 10 Pro o Win server 2019<br/>8 Gb de RAM<br/>50 GB de volumen HDD / SDD con copias| Procesador de 64 bits<br/>Windows Server 2019+<br/>8 Gb RAM<br/>4 x volúmenes HDD/SDD, 3 configurados como RAID1 o RAID5 con repuesto en caliente<br/>Copias de seguridad diarias al cuarto volumen más copias de seguridad diarias fuera del sitio<br/>Conectado a un Smart UPS (ver abajo)|
| Cliente o servidor Linux| Procesador de 64 bits<br/>Ubuntu 20+ o similar<br/>4 Gb de RAM<br/>256 Gb de almacenamiento | Procesador de 64 bits<br/>Ubuntu 20+ o similar<br/>8 Gb de RAM<br/>256 Gb de almacenamiento |
| Cliente o servidor Android | Procesador de 64 bits<br/>Android 10 o posterior<br/>4 Gb de RAM<br/>64 Gb de almacenamiento | Procesador de 64 bits<br/>Android 10 o posterior<br/>4 Gb de RAM<br/>64 Gb de almacenamiento|

<div class="nota">
La gestión de transacciones de inventario es una función fundamental en Open mSupply. Dado que la mayoría de los datos de estas transacciones son numéricos, contar con un teclado numérico puede resultar muy útil en aquellas máquinas donde se ingresa una gran cantidad de información.
</div>

### Requisitos para tabletas / móviles

Puedes usar un navegador en una tableta para conectarte a un servidor de Open mSupply, y el único requisito es una tableta lo suficientemente rápida con un navegador como Chrome o Firefox. 

Para una solución independiente y sin conexión, también está disponible una aplicación móvil para dispositivos Android.

Especificaciones recomendadas:
En resumen, Open mSupply Mobile funciona en tabletas Android (no en teléfonos, ya que hay demasiados datos para usar bien en pantallas pequeñas de teléfonos).
La aplicación requiere al menos Android 5.0 (Lollipop).

|           | Mínimo | Recomendado | 
| :-------- | :------ | :---------- |
| Tamaño de pantalla | 9.8 pulgadas | 10.1 pulgadas |
| Resolución  | 768 x 1024 pixeles | 800 x 1200 pixeles |
| Versión de Android | 5.0 | 8.1 |
| Procesador| | Quad-core 1.3GHz |
| Memoria | | 1.5 Gb de RAM |

Para proporcionar soporte, el dispositivo también debe ser compatible con el software de gestión de dispositivos móviles (MDM) y admitir los servicios de Google. Comunícate con [mSupply Foundation](https://msupply.foundation/#contact) para obtener más detalles.


Por favor, contáctanos para pruebas y / o consejos antes de realizar una gran compra de hardware.


#### UPS inteligente
Una 'UPS inteligente' (Sistema de Alimentación Ininterrumpida)  ([Uninterruptible Power Supply](https://en.wikipedia.org/wiki/Uninterruptible_power_supply)) detecta cuándo la batería está a punto de agotarse y envía una notificación al software del servidor que desencadena un cierre adecuado del ordenador. Para ello, debe haber una conexión por cable (normalmente USB) entre el UPS y el ordenador, combinado con un software que se ejecute en el ordenador.

En nuestra experiencia, la principal causa de fallos en el hardware del ordenador es la corrupción de datos debido a los apagones inesperados. Esto ocurre cuando se corta instantáneamente la alimentación del ordenador sin ninguna notificación para que se apague correctamente. Si la máquina está 'protegida' por un UPS normal, esto aún puede suceder cuando se agota la energía de la batería. Incluso si la máquina está protegida por un UPS 'inteligente', hay varias circunstancias en las que esta protección falla:

- La conexión por cable y el software pueden fallar.
  - El cable se desconecta
  - El software no está configurado correctamente
  - El software no se inicia
- Las baterías del UPS se degradan (normalmente en un plazo de 2 años desde la instalación en entornos con cortes de energía regulares) y hay muy poca capacidad para ejecutar el tiempo suficiente para que el ordenador se apague correctamente después de recibir la notificación del UPS.

Los ordenadores portátiles tienden a ser mucho más resistentes a los fallos de energía:

- El UPS 'inteligente' integrado en un portátil es muy fiable
- Las baterías internas duran mucho más que las del UPS
- Incluso si la batería interna del portátil se degrada, la función 'inteligente' parece funcionar de manera mucho más fiable que una UPS independiente que se comunica con un ordenador de escritorio

Aquí hay algunas ventajas adicionales de los portátiles frente a los ordenadores de escritorio:

- Menor costo de envío:
  - Para enviar la máquina al lugar
  - Para enviar piezas de repuesto para la reparación en el lugar
  - Para recuperar la máquina del lugar en caso de reparaciones que no se puedan realizar en el lugar
- Es habitual que los portátiles tengan características como Wi-Fi, Bluetooth y cámara incluidas por defecto, lo que puede no ser el caso de los ordenadores de escritorio.

Una preocupación con los ordenadores portátiles es la seguridad. Es más fácil robar un portátil de una oficina que un ordenador de escritorio. Por esta razón, los portátiles suelen estar configurados con una característica de bloqueo físico como [Kensington lock slot](https://en.wikipedia.org/wiki/Kensington_Security_Slot).

Debido a que Open mSupply está tratando con muchos números (cantidades de stock), <strong>es muy recomendable tener un teclado con un teclado numérico</strong>. Los portátiles más pequeños (pantalla de 14 "o menos) no tendrán esto. Los portátiles más pequeños suelen tener una pantalla imprácticamente pequeña. Por lo tanto, se recomienda adquirir un portátil con un teclado que incluya un teclado numérico, lo que necesariamente implicará una pantalla más grande.

Accesorios útiles para aumentar la productividad en computadoras portátiles incluyen:

- Ratón externo (no inalámbrico - la sustitución de baterías es costosa y problemática para el medio ambiente)
- Teclado externo (no inalámbrico - la sustitución de baterías es costosa y problemática para el medio ambiente)
- Pantalla externa

### Sistema de copia de seguridad

Una vez que empieces a utilizar Open mSupply, es crucial tener un método para realizar copias de seguridad de tus datos. En una instalación por defecto, Open mSupply almacena todos sus datos en un archivo que rápidamente se vuelve grande. Por lo tanto, es necesario tener un dispositivo de almacenamiento extraíble de alta capacidad. Recomendamos encarecidamente el uso de un disco duro externo utilizando Firewire (IEEE 1394) o USB2 para facilitar el almacenamiento externo de copias de seguridad.

- Si no se utiliza nuestro servicio de copia de seguridad en línea, es necesario poder almacenar los datos de copia de seguridad en un lugar externo para evitar el riesgo de pérdida por incendio, robo, etc.


### Antivirus
Los sistemas operativos basados en Windows son particularmente propensos a los malware si no se toman precauciones. Recomendamos las siguientes precauciones:

- Instalar un programa antivirus confiable, incluyendo protección web si la computadora tiene acceso a internet
- Desactivar los puertos USB - consulta [este sitio](http://www.thewindowsclub.com/disable-enable-usb-windowunlock-pen-drive-at-office-or-school-computer) para conocer métodos sugeridos.

Asegúrate de mantener seguras las contraseñas para permitir excepciones a las dos medidas anteriores.

