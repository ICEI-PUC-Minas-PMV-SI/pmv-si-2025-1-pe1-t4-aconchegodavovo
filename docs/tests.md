# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT001 - Criar conta do Doador**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço http://localhost:3000/index.html <br> 2) Clique em Entre / Cadastre-se <br> 3) Clique em Cadastrar <br> 4) Escolha a opção Doador <br> 5) Preencha todos os campos do formulário <br> 6) Clique no botão "Registrar".
**Requisitos associados** | RF-003
**Resultado esperado** | Doador cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT002 - Criar conta da Instituição**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Entre / Cadastre-se" <br> 2) Clique em "Cadastrar" <br> 3) Escolha a opção Instituição <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Registrar".
**Requisitos associados** | RF-004
**Resultado esperado** | Instituição cadastrada
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT003 - Login**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Entre / Cadastre-se" <br> 2) Preencha o email e senha <br> 3) Clique no botão "Login".
**Requisitos associados** | RF-005
**Resultado esperado** | Realizar o login
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Entrar na Main Page

**Caso de Teste** | **CT004 - Esqueci a Senha**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Entre / Cadastre-se" <br> 2) Clique em "Esqueceu a Senha?" <br> 3) Preencha o email <br> 4) Clique no botão "Enviar".
**Requisitos associados** | RF-006
**Resultado esperado** | Recuperar a senha
**Dados de entrada** | Inserção de email válido no formulário
**Resultado obtido** | Senha recuperada

**Caso de Teste** | **CT005 - Listagem das Instituições**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta do Doador <br> 2) Preencha o campo de pesquisa
**Requisitos associados** | RF-007
**Resultado esperado** | Filtrar por nome da Instituição
**Dados de entrada** | Inserção de nome da Instituição na barra de pesquisa
**Resultado obtido** | Filtragem realizada com sucesso

**Caso de Teste** | **CT006 - Histórico de Doações**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta do Doador <br> 2) Clique em "Histórico de Doações" <br> 3) Preencha o campo de pesquisa
**Requisitos associados** | RF-008
**Resultado esperado** | Filtrar por nome da Instituição, <br> por data da doação, <br> pelo valor da doação <br> ou forma de pagamento
**Dados de entrada** | Inserção de dados na barra de pesquisa
**Resultado obtido** | Filtragem realizada com sucesso

**Caso de Teste** | **CT007 - Editar Cadastro Doador**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta do Doador <br> 2) Clique no ícone cima direita <br> 3) Clique em "Configurações da Conta" <br> 4) Preencha os dados que deseja alterar <br> 5) Clique no botão "Atualizar"
**Requisitos associados** | RF-009
**Resultado esperado** | Dados de cadastro atualizados
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT008 - Pagamento**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta do Doador <br> 2) Clique no card de uma Instituição <br> 3) Clique no plano de doação deseja <br> 4) Escolha o tipo de pagamento <br> 5) Preencha todos os campos do formulário <br> 6) Clique no botão "Continuar"
**Requisitos associados** | RF-011
**Resultado esperado** | Doação realizada com sucesso
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT009 - Histórico de Recebimentos**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta da Instituição <br> 2) Preencha o campo de pesquisa
**Requisitos associados** | RF-014
**Resultado esperado** | Filtrar por valor da doação ou por data da doação
**Dados de entrada** | Inserção de dados na barra de pesquisa
**Resultado obtido** | Filtragem realizada com sucesso

**Caso de Teste** | **CT010 - Cadastrar Novo Plano**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta da Instituição <br> 2) Clique em "Planos" <br> 3) Clique no botão "Cadastrar planos +" <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Salvar"
**Requisitos associados** | RF-016
**Resultado esperado** | Novo plano de doação cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT011 - Editar Plano**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta da Instituição <br> 2) Clique em "Planos" <br> 3) Clique no ícone de lápis no plano desejado <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Salvar"
**Requisitos associados** | RF-017
**Resultado esperado** | Plano atualizado com sucesso
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT012 - Editar Cadastro ILPI**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta da Instituição <br> 2) Clique no ícone cima direita <br> 3) Clique em "Configurações da Conta" <br> 4) Preencha os dados que deseja alterar <br> 5) Clique no botão "Atualizar"
**Requisitos associados** | RF-018
**Resultado esperado** | Dados de cadastro atualizados
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT013 - Editar Perfil**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta da Instituição <br> 2) Clique no ícone cima direita <br> 3) Clique em "Configurações da Conta" <br> 4) Clique em "Editar Perfil" <br> 5) Preencha os dados que deseja alterar <br> 6) Clique no botão "Atualizar"
**Requisitos associados** | RF-019
**Resultado esperado** | Dados de perfil atualizados
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT014 - Cadastrar Agradecimentos**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta da Instituição <br> 2) Clique em "Agradecimentos" <br> 3) Clique no botão "Cadastrar agradecimentos +" <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Salvar"
**Requisitos associados** | RF-021
**Resultado esperado** | Novo agradecimento cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT015 - Editar Agradecimentos**
 :--------------: | ------------
**Procedimento**  | 1) Faça login na conta da Instituição <br> 2) Clique em "Agradecimentos" <br> 3) Clique no ícone de lápis no agradecimento desejado <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Salvar"
**Requisitos associados** | RF-022
**Resultado esperado** | Agradecimento atualizado com sucesso
**Dados de entrada** | Inserção de dados válidos no formulário
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta de Doador*                                         |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/dd1ae2b0-2f92-449b-b8f9-ddefae48bd66 | 


|*Caso de Teste*                                 |*CT02 - Criar conta de Instuição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT03 - Login*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT04 -  Esqueci a Senha*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT05 -  Listagem das Instituições - Doador*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT06 - Histórico de Doações - Doador*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT07 - Editar Cadastro - Doador*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT08 - Perfil das Intituições - Doador*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT09 - Pagamento - Doador*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT10 -  Histórico de Recebimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT11 -  Meus Planos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT12 -  Meus Planos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT13 -  Cadastrar Novo Plano - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT14 -  Editar Plano - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT15 -  Editar Plano - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT16 -  Editar Cadastro ILPI - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT17 -  Editar Perfil - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


|*Caso de Teste*                                 |*CT18 -  Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


|*Caso de Teste*                                 |*CT19 -  Cadastrar Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT20 -  Editar Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



