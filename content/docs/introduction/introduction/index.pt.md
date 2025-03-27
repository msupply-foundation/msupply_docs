+++
title = "Introdução"
description = "Open mSupply Introduction."
date = 2024-10-17
updated = 2025-02-19
draft = false
weight = 1
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Welcome to Open mSupply for Desktop, Web & Android!"
toc = true
top = true
+++

## História

O Open mSupply baseia-se em mais de 20 anos de mSupply, período em que se tornou o Sistema de Informação de Gestão Logística (LMIS) mais utilizado nos países de baixo e médio rendimento.

## Quais as plataformas suportadas?

O Open mSupply é executado em desktops (Windows, Linux e Mac), como uma aplicação web no seu browser ou também como uma aplicação Android (para tablets, não para telemóveis neste momento).

## Onde posso descarregá-lo?

Disponibilizamos vários downloads na nossa [página de lançamentos](https://github.com/openmsupply/open-msupply/releases) alojada no nosso repositório GitHub.
A versão mais recente será apresentada no topo da lista de lançamentos. Geralmente, recomendamos a utilização da versão mais recente sempre que possível.

Dentro de cada versão, existe uma secção `Assets` que contém os ficheiros necessários para instalar o Open mSupply.

### Janelas

Existem instaladores criados para cada versão, disponibilizando:

- **Servidor**: que suporta SQLite ou PostgreSQL e é executado como um serviço do Windows. O nome do instalador para o servidor é `Open_mSupply_Server_[versão].exe`
- **Desktop**: Uma aplicação do Windows que permite ligar a um servidor em execução. O nome do instalador para o servidor é `Open_mSupply_Desktop_[versão].exe`
- **Trabalhador independente**: combina os dois anteriores; executa um servidor como um serviço do Windows e tem uma aplicação do Windows que se ligará a ele. O nome do instalador para o servidor é `Open_mSupply_Standalone_[versão].exe`
- **Demo**: Uma instalação de servidor pré-configurada que não requer um servidor central para ser executada. O nome do instalador para o servidor é `Open_mSupply_Demo_[versão].exe`

### Android

A versão para Android é distribuída como um ficheiro `. apk` que pode instalar. Este ficheiro tem o nome `open-msupply-[version]-release.apk`

### Mac OS

Para a versão desktop do Mac, disponibilizamos um ficheiro `. dmg`, que tem o nome `Open_mSupply_[version].dmg`.

## O que é que ele faz?

Em suma, o Open mSupply gere o seu inventário, registando cada receção e saída de mercadorias e, assim, fornecendo um saldo corrente do seu stock disponível para cada artigo.

O Open mSupply faz muito mais do que isso. Os recursos incluem:

- Gestão de inventário
 - Veja facilmente o stock disponível por lote
 - Gerir a localização das prateleiras da sua loja/armazém
 - Atribua locais ao stock recebido ou altere os locais à medida que reorganiza o stock no seu armazém
 - Realizar inventários e atribuir motivos para ajustes de inventário
 - Reembalar stock
- Receber e satisfazer pedidos de clientes (instalações que fornece)
- Faça encomendas à sua loja fornecedora
 - Quantificar quantidades necessárias com base em fórmulas simples ou complexas
 - Acompanhe o estado do pedido enquanto a sua loja fornecedora processa e envia o pedido!
 - Receber mercadorias em stock quando o pedido chega
- Seja alertado para os baixos níveis de stock no painel
- Realizar dispensa básica
 - Gerir registos de pacientes
 - Criar uma prescrição para um doente
- Gerir a cadeia de frio
 - Visualizar registos de sensores de temperatura
 - Carregar dados dos registadores de temperatura USB
 - Seja alertado para desvios e violações de temperatura
 - Ligue os dispositivos de monitorização de temperatura ao stock por meio de locais de stock
- Alargue a funcionalidade do sistema base com a utilização de plugins front-end. Permitem o desenvolvimento personalizado de tarefas simples, como adicionar campos a registos que podem ser apresentados em listas e editar formulários. Para mais detalhes, consulte o [leia-me do plugin](https://github.com/msupply-foundation/open-msupply/blob/main/client/packages/plugins/README.md).

## O que torna o Open mSupply especial?

Existem muitos sistemas que gerem o stock. O Open mSupply possui características únicas que o tornam ideal para utilização em cadeias de abastecimento de cuidados de saúde em ambientes de poucos recursos:

- **Offline first**: O Open mSupply foi concebido desde o início para funcionar sem internet. Sabemos, com 20 anos de experiência, que mesmo as ligações à internet mais fiáveis ​​por vezes falham ou ficam sobrecarregadas. O Open mSupply permite-lhe trabalhar sem ter de se preocupar com a qualidade da internet segundo a segundo. Claro que, quando precisar de fazer encomendas ou receber atualizações de outras instalações, precisará de internet durante alguns minutos.
- **Escalável**: Concebemos o Open mSupply para lidar com milhares de milhões de transações por ano, mas também para funcionar num tablet Android! Pode implementar o Open mSupply numa instalação, sabendo que, se mais tarde decidir implementar milhares de sites, o Open mSupply ainda será a ferramenta certa.

Para ter uma ideia de toda a amplitude da funcionalidade do Open mSupply, dê uma vista de olhos à documentação do software mSupply legado em [https://www.msupply.org.nz](https://www.msupply.org.nz) - são quase 1000 páginas se imprimir tudo (por isso talvez não o faça ☺️)

### Terminologia

A tabela seguinte descreve alguns dos termos comuns utilizados no Open mSupply e também orienta os utilizadores do mSupply antigo sobre as melhorias de terminologia que fizemos.

| Open mSupply           | Legacy mSupply            | Definição                                                                |
|:-----------------:|:---------------------:|:--------------------------------------------------------------------------------- |
| Saídas                 | Factura do Cliente        | A criação de um fornecimento de bens para um determinado cliente (instalação)|
| Entradas               | Factura do Fornecedor     | A receção de um fornecimento de mercadorias de um fornecedor específico      |
| Requisição             | Requisições de Beneficiários| Um pedido de fornecimento de bens feito por um cliente específico (instalação)|
| Ordens Internas        | |  | Um pedido de stock feito a um fornecedor específico (instalação)|
| Retorno de Fornecedor  |Crédito ao Fornecedor      | A devolução de mercadorias fornecidas a um fornecedor específico (instalação)
| Retorno de Cliente     | Customer Credit           | A receção de uma devolução de mercadorias de um cliente específico (instalação) |
 

Outros termos utilizados no Open mSupply (e no mSupply original):

| Termo | Definição |
| --------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Artigos | Produtos geridos no mSupply (inclui medicamentos, consumíveis, equipamento, artigos de laboratório/radiologia e ativos de maior dimensão, como veículos e mobiliário). |
| Unidades de Saúde | Departamentos dentro de uma instalação que podem ou não gerir o inventário independentemente de uma entidade maior. Por exemplo, pode haver duas lojas num hospital: uma farmácia para internamento e uma farmácia de ambulatório. |
| Localizações | Local específico dentro de uma loja onde os artigos são guardados. Por exemplo, um grande armazém central pode ter muitas localizações (por exemplo, A. 02.04, B. 01.03), enquanto as pequenas lojas podem ter menos (por exemplo, Sala 1, Sala 2). Os itens também podem ser armazenados sem atribuição de um local (ou seja, armazenados apenas por ordem alfabética). |
| Fornecedores | Os fornecedores são instalações das quais uma loja faz encomendas ou recebe stock. Os fornecedores podem ser externos (por exemplo, empresas farmacêuticas privadas ou grossistas) ou internos (por exemplo, loja médica central, armazéns provinciais). |
| Doadores | Entidades externas que pagam por ações doadas (por exemplo, UNICEF, USAID). Nenhum doador é introduzido quando o governo ou a loja médica está a pagar numa transação financeira normal. Quando o doador é registado, pode acompanhar os artigos doados através da cadeia de abastecimento e executar relatórios de transações e inventários do doador. |
| Clientes | Destinatários dos artigos, exceto doentes. Isto inclui centros de saúde, hospitais, enfermarias, clínicas e farmácias privadas, serviços de extensão e qualquer outra entidade para a qual uma loja mSupply emite stock. |

## Começando

Note que também estamos atualmente a trabalhar nos testes do processo de migração e da integração do Open mSupply com um sistema mSupply existente. Por isso, não recomendamos que faça o upgrade sem falar connosco primeiro.

### Instalação

#### Pré-condições

1.º Necessita de um sistema mSupply existente com um servidor mSupply legado com módulos de servidor web e de sincronização. Pode ler mais sobre os requisitos de hardware para o servidor Legacy mSupply [aqui](https://docs.msupply.org.nz/setting_up_msupply:requirements#requirements)
2.º A partir de dezembro de 2023, não será possível migrar uma loja mSupply Legacy (ou Mobile) existente para uma loja mSupply Open; apenas novas lojas podem ser criadas no Open mSupply

#### Procedimento:

1. Todas as lojas Open mSupply necessitam de ser criadas no servidor central Legacy mSupply, conforme detalhado em [Criar novas lojas](https://docs.msupply.org.nz/other_stuff:virtual_stores#creating_new_stores). Note que [transformar um cliente existente numa loja](https://docs.msupply.org.nz/other_stuff:virtual_stores#transition_a_customer_to_a_virtual_store) não é atualmente suportado nos sites Open mSupply.
2. Os utilizadores precisam de ser criados e configurados para as lojas no servidor central Legacy mSupply, conforme detalhado em [Gerir utilizadores](https://docs.msupply.org.nz/admin:managing_users)
3. O site Open mSupply necessita de ser criado no servidor central Legacy mSupply, conforme detalhado em [Criando novos sites de sincronização](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
4. A(s) loja(s) terão de ser adicionadas ao site Open mSupply no servidor central Legacy mSupply, conforme detalhado em [Add shops](https://docs.msupply.org.nz/synchronisation:sync_sites#adding_stores)
5.º Implemente o Open mSupply no seu dispositivo a partir do [repositório Open mSupply GitHub](https://github.com/msupply-foundation/open-msupply). Consulte o suporte do TMF para ter a certeza de que está a implementar a versão correta
6. Inicie o Open mSupply no dispositivo. Deverá ver algo como o ecrã abaixo.
 - URL: consulte o suporte da TMF para ter a certeza de que tem o URL correto
 - Nome do site: conforme introduzido em [Criando novos sites de sincronização](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)
 - Palavra-passe: Conforme inserido em [Criando novos sites de sincronização](https://docs.msupply.org.nz/synchronisation:sync_sites#creating_new_sync_sites)

![Inicialização](imagens-pt/inicialização. png)
