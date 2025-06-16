# Testes

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT001 - Criar conta do Doador**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço http://localhost:3000/index.html <br> 2) Clique em Entre / Cadastre-se <br> 3) Clique em Cadastrar <br> 4) Escolha a opção Doador <br> 5) Preencha todos os campos do formulário <br> 6) Clique no botão "Registrar"
**Requisitos associados** | RF-003
**Resultado esperado** | Doador cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT002 - Criar conta da Instituição**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Entre / Cadastre-se" <br> 2) Clique em "Cadastrar" <br> 3) Escolha a opção Instituição <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Registrar"
**Requisitos associados** | RF-004
**Resultado esperado** | Instituição cadastrada
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT003 - Login**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Entre / Cadastre-se" <br> 2) Preencha o email e senha <br> 3) Clique no botão "Login"
**Requisitos associados** | RF-005
**Resultado esperado** | Realizar o login
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Entrar na Main Page

**Caso de Teste** | **CT004 - Esqueci a Senha**
 :--------------: | ------------
**Procedimento**  | 1) Clique em "Entre / Cadastre-se" <br> 2) Clique em "Esqueceu a Senha?" <br> 3) Preencha o email <br> 4) Clique no botão "Enviar"
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
|Requisito Associado | RF-003 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/de0bae3b-0909-422a-8195-b01c3370e431 | 


|*Caso de Teste*                                 |*CT02 - Criar conta de Instuição*                                        |
|---|---|
|Requisito Associado | RF-004 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/cff0c549-e238-4e03-837c-db4831d9ec49 | 


|*Caso de Teste*                                 |*CT03 - Login*                                        |
|---|---|
|Requisito Associado | RF-005 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado doador: | https://github.com/user-attachments/assets/faba9306-280b-46dd-a2ab-f266769a582c| 
|Link do vídeo do teste realizado instituição: |https://github.com/user-attachments/assets/b45d3e15-7684-4908-beed-0fec2a8865f4 |

|*Caso de Teste*                                 |*CT04 -  Esqueci a Senha*                                        |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/307fbd27-0d95-46bf-9b44-ea96f15c107d | 

|*Caso de Teste*                                 |*CT05 -  Listagem das Instituições - Doador*                                        |
|---|---|
|Requisito Associado | RF-007 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/b563f5a5-81d0-4139-b9cf-96493dd91440 | 

|*Caso de Teste*                                 |*CT06 - Histórico de Doações - Doador*                                        |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/8b03cb33-ee06-4e48-9d7b-4b21b1ee8ec2 | 

|*Caso de Teste*                                 |*CT07 - Editar Cadastro - Doador*                                        |
|---|---|
|Requisito Associado | RF-009 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/dc4bd04c-7b8a-4c89-8556-d4aedb52d04e | 

|*Caso de Teste*                                 |*CT08 - Perfil das Intituições - Doador*                                        |
|---|---|
|Requisito Associado | RF-010 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: |  https://github.com/user-attachments/assets/b563f5a5-81d0-4139-b9cf-96493dd91440 | 

|*Caso de Teste*                                 |*CT09 - Doação - Doador*                                        |
|---|---|
|Requisito Associado | RF-011 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/f20a0dca-02e9-4e2d-bc72-9439030f6055 | 

|*Caso de Teste*                                 |*CT10 -  Histórico de Recebimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-014 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: |https://github.com/user-attachments/assets/f86655d4-b665-4b87-8c68-b54a0e6cc920 | 

|*Caso de Teste*                                 |*CT11 -  Meus Planos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-015 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/29ea6856-21bf-4827-9aa4-9abff7b6839e | 


|*Caso de Teste*                                 |*CT12 -  Cadastrar Novo Plano - Instituição*                                        |
|---|---|
|Requisito Associado | RF-016 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: |https://github.com/user-attachments/assets/523c5265-b182-44db-918c-3e78f6fa1a7c | 

|*Caso de Teste*                                 |*CT13 -  Editar Plano - Instituição*                                        |
|---|---|
|Requisito Associado | RF-017 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/c9603689-da0f-4582-be48-8bd5df8da1be | 


|*Caso de Teste*                                 |*CT14 -  Editar Cadastro ILPI - Instituição*                                        |
|---|---|
|Requisito Associado | RF-018 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/0ace1462-1fc2-48fc-988a-3348ca6e5b27 | 

|*Caso de Teste*                                 |*CT15 -  Editar Perfil - Instituição*                                        |
|---|---|
|Requisito Associado | RF-019 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


|*Caso de Teste*                                 |*CT16 -  Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-020 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


|*Caso de Teste*                                 |*CT17 -  Cadastrar Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-021 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 

|*Caso de Teste*                                 |*CT28 -  Editar Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-022 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

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
| 1             | Você é uma pessoa que gostaria de ajudar instituições de longa permanências para idosos, e econtrar um site cujo a finalidade é fornecer suporte financeiro para diversas instituições desse segmento. |
| 2             | Você é uma pessoa que coordena uma instituições de longa permanência de idosos e deseja receber doações financeiras para auxiliar nas despesas. |



## Registro de Testes de Usabilidade


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que gostaria de ajudar instituições de longa permanências para idosos, e econtrar um site cujo a finalidade é fornecer suporte financeiro para diversas instituições desse segmento.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 132   segundos                  |
| 2       | SIM             | 5                    | 150   segundos                  |
| 3       | SIM             | 5                    | 125   segundos                  |
|  |  |  |  |
| **Média**     | 100%      | 5                | 135,67 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |

    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.Site simples e direto, sendo bastante objetivo e atendendo seu propósito.


Cenário 2:Você é uma pessoa que coordena uma instituições de longa permanência de idosos e deseja receber doações financeiras para auxiliar nas despesas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.06 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



