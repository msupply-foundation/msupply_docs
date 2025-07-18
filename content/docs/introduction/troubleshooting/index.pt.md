+++
title = "Resolução de Problemas"
description = "Resolução de Problemas numa Instalação Open mSupply"
date = 2023-11-10T16:20:00+00:00
updated = 2023-11-10T16:20:00+00:00
draft = false
weight = 50
sort_by = "weight"
template = "docs/page.html"
ai_generated = true

[extra]
lead = "Se está a ter problemas a configurar ou trabalhar com uma instalação Open mSupply, considere estas atualizações e correções."
toc = true
top = false
+++

## Se não conseguir ligar ao servidor na sua máquina

Se instalou o cliente Open mSupply ou standalone na sua máquina, mas não consegue ligar ao servidor, tente os seguintes passos:

1. Verifique o nome do computador. Se estiver numa máquina Windows, isto pode geralmente ser encontrado indo através do Painel de Controlo > Sistema e Segurança > Sistema. Altere o nome do PC para garantir que tem 15 caracteres ou menos. O nome pode conter letras, números ou hífens, mas não pode ser muito longo. Reinicie o computador e tente ligar novamente.
2. Se o passo acima não funcionar, pode precisar de instalar um adaptador de loopback de rede no seu computador usando [estas instruções](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/install-microsoft-loopback-adapter#method-2).

## No Windows, se o serviço não iniciar

Se o serviço não iniciar no Windows, isto pode ser frustrante! É difícil saber o que alterar se o serviço falhar silenciosamente.
Aqui estão algumas coisas para tentar:

1. Verifique o registo de eventos do Windows Application log
2. Certifique-se de que o registo está ativado e verifique o ficheiro de registo Open mSupply
3. Verifique que os binários postgreSQL estão disponíveis, se usados
4. Tente alterar o login usado pelo serviço

Quaisquer erros encontrados enquanto o serviço está a iniciar são registados no registo de eventos do Windows, verifique sob o Application log para ver se há entradas do Open mSupply. Após isto, o registo padrão é iniciado; configure o registo de nível de ficheiro, como mostrado no ficheiro `example.yaml` e tente iniciar o serviço. Quaisquer erros serão registados lá.

**Visualizador de eventos do Windows:**

![Event viewer](images/event_viewer.png)

Outra possibilidade é que o serviço não consegue iniciar devido a permissões. Pode tentar definir os detalhes de login do serviço para uma conta que tenha direitos administrativos.

![Service login](images/service_login.png)

Se estiver a executar a versão postgreSQL, pode haver um problema com o serviço não conseguir encontrar os ficheiros binários postgreSQL. Certifique-se de que tem o caminho postgreSQL adicionado à variável de ambiente `path`: ex.

```
C:\Program Files\PostgreSQL\14\lib;
```

## Não consegue fazer login

Se criou um utilizador, configurou permissões, e ainda está a obter um erro ao tentar fazer login, aqui estão alguns passos para tentar:

- Certifique-se de que o utilizador tem uma loja marcada como 'Loja padrão' no [ecrã de administração de utilizadores](https://docs.msupply.org.nz/admin:managing_users#login_rights_tab) do mSupply
- Verifique que o utilizador também tem `Login como utilizador Desktop` marcado
- Verifique que o utilizador [tem permissão](https://docs.msupply.org.nz/admin:managing_users#permissions_tabs) para fazer login a uma loja que faz parte do site de sincronização
- Edite o utilizador no mSupply e verifique que o utilizador não está bloqueado ( verá um erro específico relacionado com isto no Open mSupply )
- Tente atualizar a página se estiver a usar a versão web

<div class="note">Os nomes de utilizador não são sensíveis a maiúsculas/minúsculas, mas as palavras-passe são!</div> 