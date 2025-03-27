+++
title = "Perguntas Frequentes"
description = "mais conhecido como FAQ."
date = 2023-02-01
updated = 2024-12-01
draft = false
weight = 40
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Questões sobre o Open mSupply"
toc = true
top = true
+++

#### O Open mSupply funciona offline (sem internet)?

Sim! O Open mSupply foi concebido para ser “offline first”, o que significa que os utilizadores podem continuar a realizar as suas operações diárias sem necessitarem de uma ligação à Internet. É necessária uma ligação ocasional à Internet para sincronizar dados de locais remotos com o servidor central.

#### Quais são os limites do tratamento de dados?

Com o Open mSupply, esta questão tem três aspectos:

- **Sites remotos** são os locais onde se trabalha no dia a dia.
- Os **Sites remotos alojados na nuvem** podem ser utilizados quando se dispõe de Internet de alta qualidade a tempo inteiro.
- O **Servidor Central** é o local onde os dados principais são geridos e onde todos os dados dos locais remotos são agregados para a elaboração de relatórios.


##### Sites Remotos

Num determinado local remoto, a base de dados será SQLite se estiver a correr no Android, ou normalmente Postgres se estiver a correr num servidor de secretária. Partimos do princípio de que, se tiver um sítio ocupado, actualizará para o ambiente de trabalho (que é um processo simples), pelo que os limites do Android são menos relevantes.

| Tipo of dado             |                                     Limite de dados |
| -------------------------| --------------------------------------------------: |
| Produtos                 |                                         > 1,000,000 |
| Artigos comercializados  |                                     > 1,000,000,000 |
| Utilizadores             | configured centrally - no practical limit at a site |
| Fornecedores             | configured centrally - no practical limit at a site |
| Transações               |                                     > 1,000,000,000 |

##### Sites remotos hospedados na nuvem

Se alojar o seu sítio remoto na nuvem, este pode ter milhares de utilizadores ligados. Os limites de registo são os indicados acima, mas o desempenho será determinado pela largura de banda disponível tanto para o servidor como para a ligação à Internet de cada utilizador.

##### O Servidor Central

O Servidor Central usa Postgres e agrega todos os dados de todos os sites, além de ser o servidor de dados mestre para Sites, Produtos (Itens), Instalações, Fornecedores e Utilizadores.

| Tipo de dado            | Limite de dados |
| ----------------------- | --------------: |
| Produtos                |     > 1,000,000 |
| Artigos comercializados | > 1,000,000,000 |
| Utilizadores            |       > 100,000 |
| Fornecedores            |       > 100,000 |
| Sites                   |       > 100,000 |
| Transações              | > 1,000,000,000 |

(A partir de 2023, ainda vamos reescrever o servidor central como um projeto de código aberto - os limites para o servidor central comercial mSupply são mais baixos, mas ainda temos sítios com dezenas de milhões de transacções e em rápido crescimento. Não esperamos que nenhum sítio atinja os limites antes da transição para um servidor central de código aberto).

### É possível ter vários utilizadores num tablet Android com o Open mSupply?

Sim!

Pode ter vários utilizadores a iniciar sessão num único tablet.

#### É possível ter várias lojas num só tablet com o Open mSupply?

Sim!

As lojas visíveis em cada tablet em cada local são configuradas centralmente.
Quando inicia sessão, verá todas as lojas para as quais tem permissão para iniciar sessão.
Se não vir uma loja que espera, verifique as permissões no servidor central e certifique-se de que o local remoto foi sincronizado após a atualização das permissões.

#### É possível ter vários utilizadores em vários tablets Open mSupply a aceder à mesma loja em simultâneo?

Sim!

Também é possível aceder a um servidor Open mSupply num tablet Android a partir de uma máquina com o Open mSupply desktop ou a partir de um navegador web em qualquer dispositivo.

Além disso, o Open mSupply “publica” a sua disponibilidade na rede local, para que possa aceder ao servidor sem ter de se preocupar com endereços IP e afins.

#### Várias pessoas podem visualizar/editar a mesma remessa/estoque/requisição ao mesmo tempo?

Sim! Embora a última edição se sobreponha às edições anteriores se ambos editarem a mesma linha ao mesmo tempo. No entanto, a integridade do stock será mantida.

#### Existem restrições de licenças simultâneas?

Não existem restrições quanto ao número de utilizadores ligados a um servidor.

#### Existe suporte para a minha moeda?

É possível configurar o símbolo da moeda apresentado aquando da visualização dos preços. Também pode configurar moedas estrangeiras, o que lhe permite enviar e receber envios numa moeda diferente da sua moeda principal. Para configurar moedas estrangeiras, siga [estas instruções] (https://docs.msupply.org.nz/other_stuff:currencies) na documentação do servidor central. Terá também de ativar a preferência de loja `Store: Capaz de emitir em moeda estrangeira`. Esta preferência é compatível com o Open mSupply `v1.7.0+`.

![SPreferências da unidade de saúde](images-en/store-pref-issue-in-foreign-currencies.png)

São suportados os seguintes códigos e símbolos de moeda:

| Código | Símbolo|
| ----   | ------ |
| COP    | $      |
| DJF    | DJF    |
| EUR    | €      |
| KMF    | FC     |
| NZD    | $      |
| PGK    | K      |
| QAR    | ر.ق.   |
| RUB    | ₽      |
| SBD    | SI$    |
| SSP    | SSP    |
| USD    | $      |
