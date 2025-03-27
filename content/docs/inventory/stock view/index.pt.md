+++
title = "Stock"
description = "Ver Stock"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 62
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Uma das tarefas mais importantes – mas mais fáceis – no mSupply é verificar quanto stock tem em mãos. Quando cria uma remessa de saída e adiciona um artigo, o mSupply irá dizer-lhe se tem stock suficiente. Mas em muitas outras ocasiões, pode querer verificar rapidamente, e é muito simples fazê-lo.

## Verificando stock

No painel de navegação, aceda a `Inventário` e toque no submenu `Stock`:

![Stock: nav](/docs/inventory/images/stock_gotostock.png)

Uma lista detalhada do seu inventário aparece:

![Stock: lista](/docs/inventory/images/stock_viewstock.png)

A lista está dividida em 9 colunas:

| Coluna | Descrição |
| :------------ | :------------------------------------------------------- |
| **Código** | Código atribuído a este item no mSupply |
| **Nome** | Este é o nome pelo qual o mSupply se referirá ao artigo |
| **Lote** | Número de lote da linha de stock |
| **Expiração** | Data de validade do lote |
| **Localização** | Onde o artigo está a ser armazenado nas suas instalações |
| **Unidade** | A unidade de medida do artigo |
| **Tamanho da embalagem** | O tamanho da embalagem do artigo |
| **Quantidade da embalagem** | Quantidade de embalagens disponíveis na sua loja |
| **SOH** | Quantidade total de stock disponível, em número de embalagens |
| **Fornecedor** | Mostra a origem deste artigo de stock |

### Busca de um item específico

Pode filtrar a lista por nome ou código do artigo, localização ou validade. Isto pode ser útil se estiver à procura de um item específico.

![Stock: filtro](/docs/inventory/images/stock_filter.png)

Clique em `Filtros` para mostrar os filtros disponíveis, seleccione uma opção, por exemplo `Código ou Nome`, e introduza o máximo de um nome de artigo ou código no campo `Código ou Nome`:

![Stock: pesquisa](/docs/inventory/images/stock_search.gif)

### Exportação de stock

A lista de ações pode ser exportada para um ficheiro separado por vírgulas (csv). Basta clicar no botão exportar (à direita, no topo da página) para descarregar o ficheiro:

![Botão Exportar](/docs/inventory/images/export.png)

A função de exportação irá descarregar todas as linhas de stock, e não apenas a página atual, se tiver mais de 20 delas.

## Criação de uma nova linha de stock

<div class="nota">
É raro que precise de criar uma nova linha de stock desta forma. O seu stock deve ser introduzido através de Remessas de Entrada ou ajustado através de um Inventário.
</div>

Para criar uma nova linha de stock, clique no botão `Novo stock' no canto superior direito do ecrã.

![Stock: novo](/docs/inventory/images/stock_new.png)

Aparecerá a janela `Detalhes da linha de stock`, onde poderá selecionar o artigo para o qual está a criar esta nova linha de stock.

![Nova linha de stock: select item](/docs/inventory/images/stock_new_item.png)

Pode procurar um item por:

- Leitura da lista de itens disponíveis
- Digitando parte ou todo o nome do item
- Introduzir parte ou todo o código de um artigo

Clique no nome ou utilize as teclas de seta para navegar até ao item pretendido e prima `Enter`.

Depois de selecionar um artigo, pode introduzir as informações para esta nova linha de stock. Deve fornecer pelo menos a quantidade e o tamanho do pacote.

![Nova linha de stock: inserir detalhes](/docs/inventory/images/stock_new_details.png)

Se tiver [motivos de ajuste de stock](https://docs.msupply.org.nz/preferences:options?s[]=reasons) configurados no seu servidor central, também terá de introduzir um motivo ao criar uma nova linha de stock.

Se este for o caso, a introdução do motivo será ativada conforme abaixo:

![Nova linha de stock: inserir o motivo](/docs/inventory/images/stock_new_reason.png)

Quando estiver satisfeito com a informação do lote, clique em `OK`. Isto irá guardar a sua nova linha de stock criando um `Ajuste de stock'. Será redirecionado para a página de detalhes da linha de stock.

## Visualização de detalhes da linha de stock

Para visualizar os detalhes de um lote específico, clique nessa linha na lista `Ver stock'. Será redirecionado para a página de detalhes do stock.

### Mais detalhes

Na sessão `Detalhes`, pode visualizar e alterar as propriedades deste lote.

![Guia de detalhes do stock](/docs/inventory/images/stock_detail_tab.png)

Quando estiver satisfeito com as suas alterações, prima o botão "Guardar" no canto inferior direito. Também pode utilizar o botão `Cancelar` para repor as suas alterações.

Irá reparar que não é possível editar `Quantidade do pacote` ou `Tamanho do pacote` nesta vista. Pode fazê-lo através de [Reempacotamento](#reempacotamento) e [ajustar o nível de stock](#ajustar-o-stock).

#### Atualizar código de barras

Esta funcionalidade está disponível ao executar as versões Android ou desktop do Open mSupply.
Existe um botão adicional apresentado ao editar uma linha de stock:

![Botão Digitalizar](/docs/inventory/images/stock-line-edit-scan.png)

Clicar aqui irá iniciar o leitor de código de barras, se houver um ligado, ao executar o ambiente de trabalho. Se estiver a ser executado no Android, a câmara do dispositivo será utilizada.
Se um código de barras for digitalizado com sucesso, o campo do código de barras será preenchido com o valor digitalizado. Se for digitalizado um código QR com informações de lote e validade, estes campos na janela de edição de stock também serão preenchidos com o código digitalizado.

<div class="tip">Também pode premir as teclas 'control (ctrl)' e 's' ao mesmo tempo para iniciar o leitor de código de barras</div>

Depois de atualizar o código de barras, esse código será associado ao artigo, para esse tamanho de pacote específico. Este item será agora detectado automaticamente ao adicionar itens a uma remessa de saída utilizando um leitor de código de barras.

Os códigos de barras atualizados desta forma também serão sincronizados com outras lojas, o que significa que os códigos que digitalizar aqui permitirão que outras lojas adicionem automaticamente estes artigos às Remessas de Saída utilizando um leitor de código de barras.

### Auditar registos

Para ver as alterações efetuadas nesta linha de stock, pode clicar no separador `Log`. A lista mostra os detalhes de cada alteração, juntamente com a data e hora da alteração e o utilizador que fez a alteração.

<div class="imagetitle" style="margin-bottom: 40px;">Registo, mostrando as alterações efectuadas neste lote</div>

![Registo de linha de stock](/docs/inventory/images/stock_line_edit_log.png)

### Auditar registos

O separador `Log` mostra as alterações relacionadas com o lote, como alterações de local ou de preço. O separador `Ledger` mostra os movimentos de stock para uma linha de stock específica. Podem ser o resultado de envios de entrada/saída, devoluções, reembalagens ou ajustes de stock.

<div class="imagetitle" style="margin-bottom: 40px;">Razão, mostrando os movimentos de stock deste lote</div>

![Razão de linha de stock](/docs/inventory/images/stock_ledger.png)

## Reempacotamento

A funcionalidade de reembalamento dá-nos a capacidade de dividir o stock em embalagens mais pequenas, consolidá-lo em embalagens maiores ou mover parte ou todo o stock para um novo local.

No canto superior direito da página de detalhes da linha de stock, clique no botão `Reembalar`.

![Botão de reembalagem de stock](/docs/inventory/images/stock_repack.png)

Para começar, a linha de stock não terá qualquer reembalagem apresentada, pelo que verá uma janela como esta:

![Janela de reempacotamento sem reembalagens](/docs/inventory/images/repack-no-repacks.png)

Clique no botão `Novo` para iniciar um reempacotamento:

![Formulário de entrada de reempacotamento](/docs/inventory/images/repack-enter.png)

A partir daqui, pode introduzir o número de embalagens que pretende reembalar, até ao máximo do número atual de embalagens em stock (representado pelo número ao lado de "Pacotes disponíveis") - neste caso, existem 5.779 embalagens disponíveis.

Pode então introduzir um novo tamanho de pacote e, opcionalmente, introduzir um local para o novo stock. O `Novo número de pacotes` é calculado automaticamente.
Clique em `Guardar` para guardar as alterações. Clicar em `Imprimir` permitirá imprimir detalhes desta ação de reembalamento.

As embalagens feitas a partir deste artigo de stock são apresentadas numa lista:

![Lista de reempacotamento](/docs/inventory/images/repack-list.png)

Clicar numa das linhas mostrará detalhes do reembalamento e permitirá a sua impressão:

![Ver um repack existente](/docs/inventory/images/repack-view.png)

Clique no botão `Cancelar` a qualquer momento para fechar o modal de reembalamento.

## Ajustar o stock

<div class="nota">
Normalmente, os ajustes de stock seriam feitos através de um inventário. O ajuste de uma linha de stock singular só deve acontecer em ocasiões únicas, como a redução do nível de stock se alguns frascos estiverem partidos.
</div>

A funcionalidade `Ajustar' dá-nos a capacidade de aumentar ou diminuir o nível de stock de um único lote, sem ter de passar pelo processo completo de inventário.

No canto superior direito da página de detalhes da linha de stock, clique no botão `Ajustar'.

![Botão de ajuste de stock](/docs/inventory/images/stock_adjust.png)

Será aberta uma nova janela, onde poderá informar se pretende aumentar ou diminuir a quantidade de pacotes e em quantos.

![Formulário de ajuste de stock](/docs/inventory/images/stock_adjust_form.png)

Se tiver [motivos de ajuste de inventário](https://docs.msupply.org.nz/preferences:options?s[]=reasons) configurados no seu servidor central, também terá de introduzir um motivo ao ajustar a quantidade do pacote.

Se este for o caso, a introdução do motivo será ativada conforme abaixo:

![Nova linha de stock: inserir o motivo](/docs/inventory/images/stock_new_reason.png)

Quando estiver pronto para ajustar o nível de stock, clique no botão `OK`. Verá então a quantidade atualizada do seu pacote no [separador Detalhes](#Mais-detalhes) e poderá rever o ajuste no [Auditar registos](#auditar-registos).

Clique no botão `Cancelar` a qualquer momento para fechar o modal de ajuste.