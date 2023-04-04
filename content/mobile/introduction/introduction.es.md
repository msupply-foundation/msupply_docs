+++
title = "Introducción"
description = "mSupply mobile- Open source Android application."
date = 2025-05-01T08:00:00+00:00
updated = 2021-05-01T08:00:00+00:00
sort_by = "weight"
weight = 301
template = "mobile/page.html"

[extra]
lead = "mSupply Mobile (Versión Antigua)"
toc = true
top = false
+++

<div class="note">
	Esta es la documentación para mSupply Mobile original. Para nuevas instalaciones, recomendamos <a href="content/docs/introduction/introduction.es.md"><strong>Open mSupply</strong></a>
</div>


### Configuración de mSupply Mobile en un dispositivo


mSupply Mobile se puede configurar en su dispositivo Android por el equipo de soporte de mSupply o por su equipo interno IT con nuestro soporte.

#### Selección del dispositivo

La preparación del dispositivo para mSupply depende mucho de factores como:

* La marca del dispositivo.
* La versión de Android que se está ejecutando en él.
* Los detalles de cómo la organización planea administrar los dispositivos y comunicarse con los usuarios.

Por favor, consulte sobre esto con el equipo de soporte de The mSupply Foundation (support@msupply.org.nz).

<div class="note">

* Por lo general, se asigna un dispositivo a las instalaciones físicas, NO a un usuario individual. Por lo tanto, TODAS las cuentas de usuario del sistema operativo (Android) configuradas en el dispositivo deben ser para aquel lugar, no para una persona en particular. De esta manera, si una persona se va y otra toma su lugar en la operación del dispositivo, no será necesario realizar cambios.

* Cada dispositivo que ejecuta mSupply Mobile corresponderá a un almacén de mSupply.
</div>

#### Inicializando el almacén

Después de instalar la aplicación móvil mSupply, debes inicializar los datos del almacén de mSupply en el que se utilizará el dispositivo. La mayoría del trabajo lo realiza mSupply, pero es necesario que configures las credenciales del almacén en el dispositivo.

Al sincronizar el dispositivo por primera vez, es posible que haya muchos registros que deban sincronizarse (alrededor de 50,000), lo que podría tomar varias horas, especialmente si la conexión a internet es deficiente. Por esta razón, es recomendable limitar el rango de fechas de las transacciones y los inventarios que se desean incluir. Si es necesario, se explica cómo hacerlo más adelante.

Al abrir mSupply Mobile, la primera pantalla que aparece es la siguiente:

![Setup screen!](/mobile/introduction/images/first_screen.jpg)


* **URL DEL SERVIDOR PRINCIPAL**: Por favor ingresa la URL correcta para tu Servidor mSupply, esta utiliza el protocolo HTTPS para seguridad. Por ejemplo: https://your-organisation.msupply.org
* **NOMBRE DEL SITIO DE CONFIGURACIÓN**: El nombre del sitio como está configurado en el servidor principal.
* **CONTRASEÑA DEL SITIO DE SINCRONIZACIÓN**: La contraseña para el sitio de sincronización como está configurado en el servidor principal.

Una vez que hayas ingresado la información, haz clic en **Connect** para iniciar la sincronización.

![Initialising screen](/mobile/introduction/images/initialising.jpg)

La inicialización puede tardar entre 1 y 15 minutos dependiendo del número de registros en el servidor relacionados con el sitio que se está sincronizando.

![Initialising screen](/mobile/introduction/images/pulling.jpg)

Después de que el servidor encuentre todos los registros para sincronizar, mSupply Mobile iniciará la extracción de 20 a 500 registros a la vez, en función de la velocidad de la conexión. Si se produce una interrupción de la conexión o se cierra la aplicación, podrás reanudar la sincronización desde el punto en que se detuvo ingresando los mismos detalles exactos. Sin embargo, es importante destacar que si se ingresan detalles diferentes, la sincronización se reiniciará por completo. ¡Tenlo en cuenta!

#### Inicio de sesión en el almacén

Una vez completado, serás llevado a la pantalla de inicio de sesión. Para obtener más orientación a partir de este punto, consulta la guía del usuario de mSupply Mobile.
#### Limita el rango de fechas de sincronización

Al sincronizar un dispositivo nuevo por primera vez, la cantidad de registros a sincronizar puede ser grande, alrededor de 50,000. Esto puede llevar horas para completarse, especialmente con una conexión a Internet deficiente. Por esta razón, es posible que limites la cantidad de meses de transacciones e inventarios que deseas incluir.

![Initialising screen!](/mobile/introduction/images/msupply_sync_months.jpg)

* Cambia el tipo de sincronización de la tienda de "collector" a "active" o "none" para desbloquear la edición de campos personalizados.
* Agrega una nueva línea configurando la etiqueta del campo como "syncMonths" y el valor del campo como el número de meses que deseas incluir.
* Para editar el campo personalizado, haz doble clic en la línea.
* Cambia el tipo de sincronización del almacén de vuelta a "collector".

A partir de ahora, cada vez que se realice una sincronización, el almacén solo sincronizará transacciones e inventarios de los X meses anteriores.
