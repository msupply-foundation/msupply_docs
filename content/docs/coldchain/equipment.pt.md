+++
title = "Equipamentos"
description = "Gerenciamento de Equipamentos de Cadeia de Frios"
date = 2023-11-08T15:20:00+00:00
updated = 2023-11-08T15:20:00+00:00
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

O módulo de Equipamentos de Cadeia de Frios é um registo digital e inventário para a gestão de itens como refrigeradores, congeladores e dispositivos de monitoramento remoto de temperatura. Permite que os departamentos de saúde rastreem seus ativos de Cadeia de frios, incluindo sua localização e estado funcional.

No menu `Equipamentos` é possível ver todos os ativos disponíveis na unidade de saúde atual.

<!--
TODO: Add link to central server docs when they are created
-->

Os ativos de cadeia de frios de **todas**  as unidades de saúde são visíveis ao clicar no menu `Equipamentos` através do servidor central do Open mSupply.

![goto equipment](/docs/coldchain/images/equipment.png)

Aqui é possível ver os equipamentos de cadeia de frio disponíveis em sua unidade de saúde.

A lista de equipamentos se divide em 6 colunas:

| Columna                | Descripción                                                                                                       |
| :-------------------- | :---------------------------------------------------------------------------------------------------------------- |
| **Número do ativo**     | O número atrelado ao ativo                                                                                                  |
| **Tipo**                 | O tipo de ativo                                                                                                 |
| **Fabricante**           | O fabricante do ativo                                                                                    |
| **Modelo**               | O número de modelo do activo                                                                                     |
| **Estado funcional**     | O estado funcional do activo, por exemplo: `FUNCIONANDO`                                                              |
| **Número de série**      | O número de série do ativo                                                                                   |
| **Fora do catálogo**    | Indica se o ativo não foi criado a partir de um artigo do catálogo (ver [Catálogo > Ativos](/docs/catalogue/assets/)) |
| **Data de instalação** | A data em que o ativo foi instalado                                                                                  |
| **Notas**                | Notas sobre esse ativo                                                                                     |

![Equipment nav](/docs/coldchain/images/equipment_list.png)

#### Paginação de equipamentos

A lista mostra um número fixo de ativos por página. Do lado inferior esquerdo, podes ver quantos ativos estão a aparecer na por página.

![Page](/docs/distribution/images/os_list_showing.png)

Caso possua mais ativos do que o número atual, podes navegar até as outras páginas ao clicar no número de página desejado, ou ao utilizar as setas para direita/esquerda. 

![Page](/docs/distribution/images/os_list_pagenumbers.png)

También puedes seleccionar un número diferente de filas para mostrar por página usando la opción en la esquina inferior derecha de la página.

![Rows per page](/docs/introduction/images/rows-per-page-select.png)

#### Filtrar equipamentos

Para adicionar um filtro à página, selecioneo filtro desejado no menu colapsado. É possível selecionar múltiplos filtros.

![Equipment filters](/docs/coldchain/images/equipment_filter.png)

#### Excluir equipamentos

Os ativos pdoem ser selecionados e excluídos ao clicar nas ações disponíveis na barra de ferramentas.

![](/docs/coldchain/images/delete_rows.png)

### Importar y exportacexportar

#### Importar

Os activos da cadeia de fríos posem ser importados de um ficheiro de valores separados por comas (CSV) s utilizando o botão `Importar`

![](/docs/coldchain/images/equipment_import_button.png)

Isto abrirá uuma janela de importação. Clique em `Fazer download de uma planilha` para exportar uma p[lanilha modelo na qual pode utilizar como base para improtar seus próprios ativos.

![](/docs/coldchain/images/equipment_import_modal.png)

Ao importar ativos numa unidade de saúde, estás a designa1-los automaticamente à esta unidade.
<!--
TODO: Add link to central server docs when they are created
-->

Ao importar ativos no servidor central, um campo adicional será requerido, chamado  `unidade de saúde` que alocará os ativos às suas respectivas unidades de saúde.

O Open mSupply apenas aceitará ficheiros no formato CSV para carregar os dados. 

| Columna                 | Descripción                                                      |  Ejemplo            | Obligatorio         |
| :---------------------- | :--------------------------------------------------------------- | :----------------- | :---------------- |
| **Número do ativo**        | O número atrelado ao ativo, escolhido pelo utilizador            | 1                  | \*                |
| **Código do artigo do catálogo** | O código do catálogo de ativos, ou o tipo de artigo a importar | E003/002           | \*                |
| **Unidade de Saúde**               | O código da unidade de saúde na qual será alocado o ativo       | CMS                | \* (solo central) |
| **Notas**               | Notas generais sobre o ativo                                    | Guardado en oficina EPI |                   |
| **Número de série**       | O número de série desse ativo em particular                       | 123456789ABC       |                   |
| **Data de instalação**   | A data em que o ativo foi instalado na unidade de saúde              | 2024-01-14         |                   |



<p align="center">
    <img src="/docs/coldchain/images/equipment_import_upload.png" width="750" height="420">
</p>

#### Exportar

É possível exportar uma lista de ativos como u m ficheiro csv utilizando o botão `Exportar`.

<p align="center">
    <img src="/docs/distribution/images/export.png" width="150" height="67">
</p>

### Escaneio de códigos QR

Caso esteja utilizando o Open mSupply em um tablet ou na versão desktop , terás un botão adicional na barra de menú que permite escanear códigos QR. Este botão `Escanear` fica disponível como na foto abaixo:

![Scan button](/docs/coldchain/images/equipment_scan.png)

É possìvel que vveja esta notificação ao clicar no botão:

![Scan button](/docs/coldchain/images/equipment_scan_error.png)

Vá até a seção [Escáneres de códigos de barras](/docs/settings/devices/#barcode-scanners) da documentação de `Configuração` e configure um scaner antes de continuar.

Uma vez que tenha un escaner conectado, o botão `Escanear` estará disponi2vel e habilitado para escanear um código QR.
Caso encontre encuentre uma duplicata ao escanear, serás dirigido à página de detalhes do equipamento de cadeia de frio. Caso não encontre nenhuma correspondência, verás uma notificação que informa que nenhum resultado foi encontrado. 

<div class="nota">Podes imprimir uma etiqueta com um código QR para um equipamento. Consulte a seção <a href="/docs/coldchain/equipment/#printing-a-qr-code">Imprimir código QR</a> para mais detalhes</div>

### Criar novo ativo

Os equipamentos de cadeia de frio podem criar-se manualmente usando o botão `Novo Ativo`.

<p align="center">
    <img src="/docs/coldchain/images/create_asset_button.png" width="150" height="55">
</p>

Ao clicar nesse botão, se abrirá uma janela `Criar Ativo`

Nesta janela, pode-se definir:

- A unidade de saúde na qual o ativo pertence (apenas disponível no servidor central do Open mSupply)
- A categoria do ativo
- O artigo do catálogo em que se baseará ativo: isso vinculará a informaçãodo artigo do catálogo (como fabricante e modelo) a este novo ativo
- O número do ativo
- Notas sobre o ativo

Caso o ativo não contido nos catálogos `OMS PQS` ou `General`, podes utilizar o botão para pcriar um ativo que não é baseado em um artigo do catálogo.

![Create asset modal](/docs/coldchain/images/create_asset_modal.png)

### Gestão de ativos de cadeia de frío

Ao clicar numa lista, ficam disponíveis os detalhes do ativo. Caso o ativo pertença à categoría `Refrigeradores e congeladores`, verás informação adicional como a fonte de energia e o volume de armazenamento (capacidade do refrigerador ou congelador, classificada pela temperatura do artigo).

![Asset detail view](/docs/coldchain/images/asset_detail_view.png)

Existem 5 tabs dispondisponíveis para gerenciar o ativo:

![Detail view tabs](/docs/coldchain/images/asset_detail_view_tabs.png)

#### Aba resumo

Em `Resumo`, pode-se:

- Editar o número de série
- Adicionar unma darta de instalação
- Adicionar unma darta de substituição
- Vincular `Localizações` do armazenamento do ativo.

<div class="tip">Pode-se alocar múltiplas localizações de armazenamenot para um ativo</div>

Também é possível visualizar o estado funcional e editar notas.

#### Detalhes
A aba `Detalhes` mostra as propiedades do ativo.

![](/docs/coldchain/images/equipment_detail.png)

#### Histórico de Estado

A aba `Histórico de Estado` mostra o histo2rico funcional do ativo:

![Asset logs tab](/docs/coldchain/images/status_logs_tab.png)

#### Documentos

A aba `Documentos` mostra os documentos que foram adicionados para o artigo do catálogo a o qual pertence o artigo, bem como os documentos específicos daquele ativo.

Podem ser adicionados ficheiros adidiconais para esse artigo:

![Asset documents tab](/docs/coldchain/images/documents_tab.png)

<!--
TODO: Add link to central server docs when they are created
-->

Os documentos carregados aquí serão sincronizados com o servidor central, como parte do proceso habitual de sincronização. Os ficheirosso2 serão enviados quando houver a sincronização.

#### Registo

A aba `Registo` mostra o registo de atividades desse ativo.

Aquí se registram todas as ações realizadas pelos utilizadores para esse ativos existentes no Open mSupply.

### Toolbar

#### Atualizar estado


ao clicarn o botão `Atualizar estado`, spode-se criar uma nova entrada para o estado funcional.

![](/docs/coldchain/images/update_status_button.png)

Mais opções serão oferecidas:

![](/docs/coldchain/images/status_log_modal.png)

Aquí podes inserir:

- Um novo estado funcional
- Uma razão/motivo para o novo estado funcional
- Qualquer outra observação

Também é possîvel carregar documentios adicionais, incluindo fotos, manuais, etc, para esta entrada de estado funcional.

![](/docs/coldchain/images/status_log_document_upload.png)

Estos documentos ficam disponíveis no `Histórico de estados`

![Status History document](/docs/coldchain/images/status_log_document.png)

#### Imprimir um código QR

Para ajudar a identificar ativos, é possível imprimir uma etiqueta com un código QR para seu ativo. Este código pode ser escaneado (ver acima) para identificar fácilmente un ativo em seu sistema.

Simplemente clique no botão `Imprimir código QR`, caso tehha configurada uma impressora de etiquetas.

Para configurar una impresora de etiquetas, consulte a seção [Impressão de etiquetas](/docs/settings/devices/#label-printing)  nas páginas de configuração.

A etiqueta mostrará o código e o número de série, por exemplo:

![Sample QR](/docs/coldchain/images/sample_qr_label.jpg)
