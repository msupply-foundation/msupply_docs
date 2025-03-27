+++
title = "Artigos"
description = "Ver artigos."
date = 2022-03-19T18:20:00+00:00
updated = 2022-03-19T18:20:00+00:00
draft = false
weight = 52
sort_by = "weight"
template = "docs/page.html"

[extra]
lead = "Gerencie seu catálogo"
toc = true
top = false
+++

Um artigo no mSupply é geralmente um produto que se compra de um fornecedor, se mantém em stock e se distribui a um cliente. A partid do menu **Artigos**, pode-se ver todos os artigos que atualmente são visíveis na sua unidade de saúde. 

## Ver a lista de artigos

No painel de navegação, clique em `Catálogo` > `Artigos` para mostrar a lista de artigos: 

![Items nav](/docs/catalogue/images/cat_gotoitems.png)

Pode-se ver todos os artigos que estão disponíveis para uso na sua unidade de saúde: 

![Items list](/docs/catalogue/images/cat_itemslist.png)

## Ver os detalhes de um artigo

Para ver los detalhes de un artigo, clique em uma linha. Uma nova janela ase abrirá: 

![Item detail](/docs/catalogue/images/cat_itemdetail.png)

Na parte superior da janela é possi2vel ver as seguintes informações:
* **Inventário disponível**: Quanto stock está atualmente disponível na sua unidade de saúde.
* **CMM**: Consumo Mensal Médio. Ou seja, quanto sua unidade de saúde consome em pédia por mês (basado em um número configurável de meses, o valor padrão é 3 meses).
* **Meses de inventário**: Número de meses de consumo restantes com o stock atual. Este se calcula como: `Inventário disponível / CMM`.

<div class="imagetitle">
No exemplo seguinte temos 1542 unidades de amoxicilina disponíveis em nossa unidade de saúde. O consumo médio é de 53,3 unidades por mês, o que significa que existe o equivalente a 28,9 meses de stock no inventário.
</div>

![Item detail headers](/docs/catalogue/images/cat_itemdetailsheaders.png)

Na parte parte inferior, los detalhes dos artigos se dividem emduas seções:

### Detalhes

* **Nome**: Este e2 o nome em que o artigo será identificado no mSupply
* **Código**: Este deve ser único para cada artigo e é um atalho útil para referir-se aos artigos.
* **Unidade**: A unidade utilizada para esse artigo. É útil distinguir os artigos que emitem por pacote (por exemplo, comprimidos) dos artigos que se emitem por volumen (por exemplo, líquidos orais).
* **Concentração**: Para un medicamento, a concentração de seus ingredientes ativos (por exemplo, para Amoxilina 250 mg, a concentração é de 250 mg).
* **Dose Diária Definida**:  A dose de manutenção assumida por dia para un medicamento utilizado para sua indicação principal em adultos.
* **Dose**: Para vacinas, o número de doses por vial
* **Vacina** (caixa de verificação): Se esta opção está marcada, este artigo é cosiderado uma vacina e pode ser indicado um número de doses.

### Categorias

* **Categoria ATC**: ATC significa Anatômico, Terapêutico e Químico, o que é un método de clasificação de entidades.
* **Nome Universal**: se o artigo está vinculado à base de dados de [códigos de drogas universais](https://codes.msupply.foundation/), esta mostra o nome universal ou genérico para o artigo escolhido.
* **Código Universal**: similarmente, o código definido ao artigo pela base de dados de drogas universais.

### Pacote

* **Tamanho de pacote padrão**: o tamanho de pacote padrão que será indicado ao stock à medida que receba remessas.  
* **Tamanho de pacote exterior**: o número de unidades em uma caixa (pacote exterior). 
* **Volume por pacote**: volume predeterminado por pacote de tamanho padrão. Este é o volume que se utilizará de forma pré-determinada alo receber mercadorias. Recomendamos que divida o volume de um pallet pelo número de pacotes de tamanho preferido em um pallet para obter este valor. O mSupply sempre armazena os volumes em m3 (metros cúbicos), mas é possível inserir um volume como mililitros (ml) ou litros (l). Para fazê-lo, insira a abreviação apropriada depois do número que representa o volume. Por exemplo, insira "0.5l" para um volume de 0.5 litros (= 0.0005 m3).
* **Volume por pacote exterior**: o volume predeterminado de un pacote exterior deste artigo.
* **Peso**: o peso de un pacote de tamaho padrão em kg.

### Preços

* **Margem**: a margem pré determinada que se aplicará a este artigo nas entradas de inventário para calcular o preço de venda.