+++
title = "Relatórios"
description = "Relatórios Open mSupply"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 31
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

A página de relatórios fornece uma visão geral dos relatórios disponíveis no Open mSupply.
Pode aceder à página de relatórios clicando no item de menu `Relatórios`.
![goto_report](/docs/getting_started/images/goto_report.png)

Será apresentada uma lista de relatórios que pode gerar. Os relatórios
Abaixo estão listados os relatórios padrão que já estarão configurados para si. Se
Se precisar de um relatório personalizado, contacte o suporte da mSupply através do e-mail [support@msupply.foundation](mailto:support@msupply.foundation).

![lista de relatórios](/docs/getting_started/images/report_list_view.png)

Os relatórios são gerados com base nas preferências configuradas no mSupply
servidor central. Ver [relatório
preferências](https://docs.msupply.org.nz/other_stuff:virtual_stores?s[]=threshold&s[]=overstock#notification_preferences)
para obter mais informações sobre o que são estas preferências e como configurá-las.

Pode visualizar estas preferências clicando no botão `Mais`.

![preferências de relatório](/docs/getting_started/images/report_preferences.gif)

## Gerando relatórios

Clique no relatório que pretende gerar. Para este exemplo, iremos gerar o
Relatório `Estado do stock`.

Clique no relatório `Estado do stock`.
![stock_state](/docs/getting_started/images/goto_stock_status.png)

Será apresentado um formulário onde poderá editar os critérios de filtro utilizados pelo relatório. Deixe inalterado para apresentar todos os itens do relatório.

Para o relatório `Estado do inventário`, pode filtrar o relatório com base nos seguintes critérios:

- `Nome do artigo`
- `Código do artigo`

Se introduzir valores para o código e o nome, os itens apresentados terão de corresponder a **ambos** os critérios, ou seja, a introdução de um código `01` e de um nome `am` apenas mostrará os itens com um código que contenha `01` e um nome que contenha `am`.

O formulário também apresenta em que preferências se baseia o relatório.

<p alinhar="centro">
 <img src="/docs/getting_started/images/report_filter.png" alt="filtro de estado de stock" width="560" height="486">
</p>

Clique em `Ok` para gerar o relatório. Se achar que gostaria de restringir
para baixo no relatório enquanto o visualiza, pode clicar no botão `Filtrar` na
canto superior direito do relatório, que abrirá novamente o formulário de filtro.

![detalhe do relatório](/docs/getting_started/images/report_detail.gif)

### Imprimir um relatório

Para imprimir um relatório, clique no botão `Imprimir` no canto superior direito do ecrã.
relatório.

![botão de impressão](/docs/getting_started/images/print_button.png)

Será aberta uma janela de pré-visualização de impressão, mostrando o que será impresso e permitindo
que selecione a impressora. Este pode ser impresso utilizando o seu navegador clicando em imprimir ou
utilizando as teclas `control`+`P` (se estiver a utilizar o Windows) ou `cmd`+`P` no seu teclado (se estiver a utilizar o Windows)
utilizando um Mac).

### Exportar um relatório

Para exportar um relatório para Excel, clique no botão `Exportar` no canto superior direito do relatório.

![botão de exportação](/docs/getting_started/images/export_button.png)

O relatório será descarregado como um ficheiro Excel.

### Traduções de relatórios padrão

Os relatórios padrão serão traduzidos para o idioma do utilizador, se disponível no momento da geração do relatório.

O inglês será utilizado por defeito em locais onde não estejam disponíveis traduções para o idioma do utilizador.

## Relatórios Padrão

A versão 2.3.0+ incluirá relatórios padrão por defeito em todas as instâncias do Open mSupply:

- Paisagem de fatura
- Utilização do item
- Detalhe do stock
- Estado do estoque
- Itens expirados
