# Teste de Software

Nessa sessão se encontra a avaliação e a conclusão dos testes elaborados para a etapa 4 referente ao projeto 'Aconchego da vovó'. 

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
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/ca4cbcc1-0d0a-407f-9779-f6e821ce0fa4 | 


|*Caso de Teste*                                 |*CT16 -  Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-020 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/cf4a9e15-1b38-46c7-9a31-68f824985faa | 


|*Caso de Teste*                                 |*CT17 -  Cadastrar Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-021 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/730277e5-b41f-4123-91e3-e9628a291423 | 

|*Caso de Teste*                                 |*CT18 -  Editar Agradecimentos - Instituição*                                        |
|---|---|
|Requisito Associado | RF-022 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | https://github.com/user-attachments/assets/d9855779-a25b-4d05-ab18-50a7424d82b4 | 


## Avaliação dos Testes de Software

Abaixo segue a análise e a conclusão feita com os usuarios levantando pontos positivos e negativos a respeito do projeto. 

# Testes de Usabilidade

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que gostaria de ajudar instituições de longa permanências para idosos, e econtrar um site cujo a finalidade é fornecer suporte financeiro para diversas instituições desse segmento. |
| 2             | Você é uma pessoa que coordena uma instituições de longa permanência de idosos e deseja receber doações financeiras para auxiliar nas despesas. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que gostaria de ajudar instituições de longa permanências para idosos, e econtrar um site cujo a finalidade é fornecer suporte financeiro para diversas instituições desse segmento.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 132   segundos                  |
| 2       | SIM             | 5                    | 150   segundos                  |
| 3       | SIM             | 5                    | 125   segundos                  |
|  |  |  |  |
| **Média**     | 100%      | 5                | 135,67 segundos                      |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 107 segundos |

    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.Site simples e direto, sendo bastante objetivo e atendendo seu propósito.


Cenário 2:Você é uma pessoa que coordena uma instituições de longa permanência de idosos e deseja receber doações financeiras para auxiliar nas despesas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 227   segundos                          |
| 2       | SIM             | 5                    | 215   segundos                          |
| 3       | SIM             | 4                    | 238   segundos                          |
| **Média**| 100%           | 4.67                 | 226,67  segundos                        |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 206 segundos                      |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade
Com base nos testes realizados em dois cenários distintos, foi possível identificar que a aplicação web atende bem aos objetivos propostos, apresentando 100% de taxa de sucesso por parte dos usuários em ambos os casos.

No Cenário 1, voltado ao público doador, os usuários demonstraram alta satisfação subjetiva (nota média 5) e conseguiram concluir as tarefas propostas com uma média de 135,67 segundos, tempo considerado adequado. Além disso, os comentários reforçam a boa experiência: os usuários classificaram o site como intuitivo, direto e objetivo.

Já no Cenário 2, destinado às instituições que desejam receber doações, também houve 100% de sucesso nas tarefas, mas a satisfação média foi ligeiramente menor (4,67). O tempo médio de conclusão das tarefas também foi maior, 226,67 segundos, indicando uma maior complexidade ou necessidade de melhorias na navegação para esse perfil de usuário. Os comentários dos participantes destacam pontos importantes como a ausência de redirecionamentos automáticos e a falta de filtros nas buscas.

Além disso, ao comparar os tempos dos usuários com o tempo do especialista (13,57 segundos no cenário 2 e 8,66 segundos no cenário 1), observa-se uma diferença significativa, o que é esperado pelo maior conhecimento prévio do desenvolvedor. No entanto, essa diferença também sugere possíveis oportunidades de otimização na experiência do usuário, especialmente para novos visitantes.

Em resumo, os testes indicam que a aplicação é funcional e bem recebida, mas há oportunidades de aprimoramento na usabilidade, especialmente no fluxo de navegação das instituições. Melhorias nos redirecionamentos automáticos e no uso de filtros podem elevar ainda mais a eficiência e a satisfação geral com o sistema.

