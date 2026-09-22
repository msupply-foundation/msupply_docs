+++
title = "API GraphQL"
description = " Integración con Open mSupply utilizando la API GraphQL"
date = 2024-06-27T18:20:00+00:00
updated = 2024-06-27T18:20:00+00:00
draft = false
weight = 7
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

<style>
    img.d { display: none }
    body.dark img.l { display: none }
    body.dark img.d { display: block }
    </style>

## GraphQL

Internamente, utilizamos [GraphQL](https://graphql.org/) como la capa de la API. Esto proporciona gran flexibilidad y permite a un desarrollador crear consultas específicas sin necesidad de modificar el código base del producto.

Para obtener detalles sobre GraphQL en sí, consulta el enlace anterior.

## Documentación

Nuestra API está documentada internamente. Puedes acceder a tu ambiente local del servidor con la URL `/graphql` para ver e interactuar con la API. Alternativamente, el [servidor de demostración](https://demo-open.msupply.org/graphql) está disponible para explorar si no tienes una instancia local.

Para abrir el panel de documentación, haz clic en el botón 'docs':

<p>
    <img alt="Docs button" src="images/api_docs_button_dark.png" class="d" />
    <img alt="Docs button"src="images/api_docs_button.png" class="l" />
</p>

Esto abrirá el panel, permitiéndote explorar más a fondo los puntos finales y estructuras disponibles:

<p>
    <img alt="Docs" src="images/api_docs_dark.png" class="d" />
    <img alt="Docs" src="images/api_docs.png" class="l" />
</p>

Usar el ambiente local utilizará una versión empaquetada del entorno GraphiQL. Puedes usar herramientas alternativas, como el [explorador graphiql en línea](https://graphiql-online.com/) ingresando la URL del servidor.

## Empezando

La API requiere que estés conectado. Este proceso ha sido simplificado para ti en el entorno de prueba. Puedes hacer clic en el botón de inicio de sesión:

<p>
    <img alt="Login button" src="images/api_login_button_dark.png" class="d" />
    <img alt="Login button" src="images/api_login_button.png" class="l" />
</p>

para mostrar el formulario de inicio de sesión:

<p>
    <img alt="Login form" src="images/api_login_form_dark.png" class="d" />
    <img alt="Login form" src="images/api_login_form.png" class="l" />
</p>

Una vez que hayas ingresado los detalles y iniciado sesión, podrás utilizar otros métodos de la API, limitados por los permisos del usuario con el que iniciaste sesión.

Para ayudarte, las consultas pueden ser creadas utilizando la función explorer. Haz clic en el botón del explorador para comenzar:

<p>
    <img alt="Explorer button" src="images/api_explorer_button_dark.png" class="d" />
    <img alt="Explorer button" src="images/api_explorer_button.png" class="l" />
</p>

Desde aquí, puedes agregar consultas y mutaciones e ingresar valores para crear y ejecutar en el servidor. ¡Pruébalo y empieza a explorar!
