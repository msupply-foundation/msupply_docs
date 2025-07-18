+++
title = "Explicador de Terminologia"
description = "Ajudá-lo a entender como os termos que usamos se mapeiam para outros sistemas"
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 4
sort_by = "weight"
template = "docs/page.html"
ai_generated = true

[extra]
toc = true
top = true
+++

## Introdução

Há uma velha piada de informática: "Há 2 coisas que são difíceis em informática: invalidação de cache, erros off-by-1, e nomear coisas"

Deixando de lado a parte piegas off-by-1 da piada, a parte "nomear coisas" é muito verdadeira.
Poderíamos passar todo o nosso tempo a discutir sobre nomear coisas, e nunca entregar nenhum sistema útil de todo!

A nossa abordagem é tentar combinar a nomenclatura padrão da indústria, o que é costume nas cadeias de abastecimento de saúde em diferentes países, tudo com um aceno aos nomes históricos do mSupply para as coisas.
É claramente impossível encontrar nomes que satisfaçam todos esses critérios, por isso esta página de guia do utilizador deve, esperançosamente, aliviar a dor.

#### Artigos, Produtos, SKUs
O Open mSupply é diferente de outros sistemas de gestão de inventário em que o conceito central para o inventário é um **artigo** - que é geralmente um medicamento ou produto genérico com a unidade de medida especificada, mas sem tamanho de embalagem. Há uma boa razão para isto:
* A maioria dos sistemas de saúde pública operam com nomes genéricos
* Os relatórios geralmente querem saber a quantidade total de artigo genérico, não apenas de um produto/SKU[^1] particular que foi usado

As **variantes de artigos** no Open mSupply são o equivalente de um SKU - têm uma marca, código de barras, tamanho de embalagem, etc.

#### Instalações, Armazéns, Lojas, Sites, Unidades Organizacionais
Cada um dos sistemas ERP principais usa terminologia diferente para as unidades organizacionais ao nível do site que gerem inventário:

No mSupply, temos os seguintes conceitos

| Conceito      | Explicação                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loja**    | Uma loja (virtual) é uma unidade que gere o seu próprio inventário e transações. Tem os seus próprios utilizadores com o seu próprio conjunto de permissões                                                                                                                                                                                                                         |
| **Site**     | Um site (remoto) tem um servidor Open mSupply que sincroniza com o servidor central Open mSupply.<br>Um site pode conter 1 ou mais lojas (por exemplo, pode ter uma loja de medicamentos essenciais, uma loja de artigos de laboratório, e uma loja EPI, todas geridas por diferentes utilizadores, mas todas a ligarem-se [geralmente na rede wifi local] ao mesmo servidor) |
| **Instalação** | O complexo físico numa localização geográfica particular. Geralmente uma instalação terá um único site Open mSupply, mesmo que tenha muitas lojas físicas. A única razão para ter mais de um site numa instalação é se as lojas não podem todas ligar-se à mesma rede local.                                                                           |
##### Comparação com outros sistemas ERP:
No **Odoo**, este conceito tipicamente é referido como um "Armazém." Cada armazém representa uma localização física onde o inventário é armazenado e gerido, enquanto ainda faz parte da estrutura mais ampla da empresa.

No **SAP**, isto seria chamado uma "Fábrica" ou "Localização de Armazenamento" dependendo do contexto exato. Uma Fábrica representa uma instalação ou site de fabrico separado que gere o seu próprio inventário.

No **Microsoft Dynamics**, este conceito é chamado um "Site" ou "Armazém" dependendo de qual produto Dynamics está a usar (Dynamics 365 Business Central vs Dynamics 365 Supply Chain Management).

[^1]: SKU = Stock Keeping Unit - uma marca particular, tamanho de embalagem (e talvez variação de embalagem) de um artigo. 