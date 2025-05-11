# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|-------------|-----------------|
|RF-001| Desenvolver tela de Landing Page         		| Raissa | index.html |
|RF-002| Desenvolver tela de Tipo de Cadastro     		| Brenda | registrationType.html |
|RF-003| Desenvolver tela de Cadastro Doador     		| Júlia  | register.html |
|RF-004| Desenvolver tela de Cadastro ILPI Page 2  		| Júlia  | firstRegistration.html |
|RF-005| Desenvolver tela de Cadastro ILPI Page 2 		| Camila | secondRegistration.html |
|RF-006| Desenvolver tela de Cadastro ILPI Page 3 		| Brenda | thirdRegistration.html |
|RF-007| Desenvolver tela de Cadastro ILPI Page 4 		| Rafael | fourthRegistration.html |
|RF-008| Desenvolver tela de Login                		| Camila | login.html |
|RF-009| Desenvolver tela de Esqueci a Senha      		| Camila | forgotPassword.html |
|RF-010| Desenvolver tela de Listagem das Instituições 	| Júlia  | listInstitutions.html |
|RF-011| Desenvolver tela de Histórico de Doações 		| Júlia  | donationHistory.html |
|RF-012| Desenvolver tela de Editar Cadastro 			| Júlia  | editRegistration.html |
|RF-013| Desenvolver tela de Perfil das Intituições 	| Brenda | profileInstitution.html |
|RF-014| Desenvolver tela de Pagamento 					| Camila | payment.html |
|RF-015| Desenvolver tela de Erro de Pagamento 			| Camila | paymentError.html |
|RF-016| Desenvolver tela de Sucesso de Pagamento 		| Brenda | paymentSuccess.html |
|RF-017| Desenvolver tela de Histórico de Recebimentos 	| Rafael | historyReceipts.html |
|RF-018| Desenvolver tela de Meus Planos 				| Brenda | plans.html |
|RF-019| Desenvolver tela de Cadastrar novo Plano 		| Camila | registerPlans.html |
|RF-020| Desenvolver tela de Editar Plano 				| Brenda | editPlans.html |
|RF-021| Desenvolver tela de Editar Cadastro Page 1 	| Rafael | firstEditRegister.html |
|RF-022| Desenvolver tela de Editar Cadastro Page 2		| Rafael | secondEditRegistration.html |
|RF-023| Desenvolver tela de Editar Cadastro Page 3 	| Rafael | thirdEditRegistration.html |
|RF-024| Desenvolver tela de Editar Perfil 				| Rafael | editProfile.html |
|RF-025| Desenvolver tela de Agradecimentos 			| Raissa | gratitude.html |
|RF-026| Desenvolver tela de Cadastrar Agradecimentos 	| Raissa | registerGratitude.html |
|RF-027| Desenvolver tela de Editar Agradecimentos 		| Raissa | editGratitude.html |
|RF-028| Desenvolver Drop Down					 		| Rafael | dropDownMenu.js |

## Descrição das estruturas:

## Tela de Cadastrar Agradecimentos
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título do Agradecimento                   | Agradecemos pelas doações                                  |
| Texto     | Texto             | Descrição do agradecimento                 | Com muito carinho, agradecemos a todos os doadores que tornaram possível a reforma de um dos quartos do nosso lar.                            |
| Foto  | String | Foto do Agradecimento       |                foto.jpeg                           |

## Tela de Editar Agradecimentos
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título do Agradecimento                   | Agradecemos pelas doações                                  |
| Texto     | Texto             | Descrição do agradecimento                 | Com muito carinho, agradecemos a todos os doadores que tornaram possível a reforma de um dos quartos do nosso lar.                            |
| Foto  | String | Foto do Agradecimento       |                foto.jpeg                           |

## Tela de Cadastro (Doador)

Esta tela permite que novos usuários se cadastrem na plataforma "Aconchego da Vovó".

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| Nome completo      | Texto            | Campo para inserir o nome completo do usuário | João da Silva                        |
| CPF                | Texto            | Campo para inserir o CPF do usuário           | 123.456.789-00                       |
| Telefone           | Texto            | Campo para inserir o número de telefone       | (11) 91234-5678                      |
| Data de nascimento | Texto/Data       | Campo para inserir a data de nascimento       | 10/05/1985                           |
| E-mail             | Texto            | Campo para inserir o e-mail                   | joao@email.com                       |
| Senha              | Senha            | Campo para criar uma senha de acesso          | ********                             |
| Repita a senha     | Senha            | Campo para confirmar a senha                  | ********                             |
| Botão "Cadastrar"  | Botão            | Envia os dados preenchidos para o cadastro    | -                                    |

## Tela de Listagem de Instituições

Esta tela exibe as instituições de acolhimento de idosos disponíveis para doações e permite a busca por nome ou município.

| **Nome**                  | **Tipo**      | **Descrição**                                                             | **Exemplo**                    |
|---------------------------|---------------|---------------------------------------------------------------------------|--------------------------------|
| Banner informativo        | Imagem + Texto| Área superior com imagem e chamada para ação                              | "Ajude a transformar a vida..."|
| Campo de busca            | Texto         | Campo para filtrar instituições por nome ou município                     | "São Paulo", "Bem Viver"       |
| Cartão da instituição     | Componente    | Bloco com informações de cada instituição                                 |                                |
|Nome da instituição     | Texto         | Nome exibido no cartão                                                    | Residencial Bem Viver          |
| Foto da instituição     |Imagem     | Foto ilustrativa da instituição                                           | imagem.jpeg                    |
| Ícone da instituição    | Ícone         | Ícone que representa a categoria ou entidade                              | 🏠                             |
| Lista de instituições     | Grid/Listagem | Área que agrupa todos os cartões de instituições cadastradas              | -                              |

## Tela de Histórico de Doações

Esta tela exibe o histórico de doações realizadas pelo usuário, permitindo consultar data, instituição beneficiada, forma de pagamento e valor.

| **Nome**              | **Tipo**       | **Descrição**                                                        | **Exemplo**              |
|------------------------|----------------|------------------------------------------------------------------------|--------------------------|
| Título da página       | Texto           | Indica que a página mostra o histórico de doações                      | Histórico de Doações     |
| Campo de busca         | Texto           | Permite filtrar as doações por nome da instituição                     | "Instituição São Gabriel"|
| Lista de doações       | Tabela/Listagem | Tabela com as doações feitas pelo usuário                              | -                        |
|  Data                 | Data            | Data da doação                                                         | XX/XX/XXXX               |
| Nome da Instituição | Texto           | Nome da instituição que recebeu a doação                               | Instituição São Gabriel  |
| Forma de pagamento   | Texto           | Método utilizado para a doação                                         | PIX                      |
| Valor                | Moeda           | Valor doado em reais                                                  | R$ 50,00                 |
| Ícone de configurações | Ícone           | Ícone de engrenagem para acessar o menu de configurações do usuário    | ⚙                        |

## Tela de Editar Cadastro

Esta tela permite ao usuário atualizar suas informações pessoais cadastradas na plataforma "Aconchego da Vovó", além de ter acesso à opção de exclusão de conta.

| **Nome**               | **Tipo**   | **Descrição**                                          | **Exemplo**           |
|------------------------|------------|--------------------------------------------------------|------------------------|
| Menu lateral           | Menu       | Contém as opções de "Editar cadastro" e "Excluir conta"| -                      |
| Título da página       | Texto      | Indica que o usuário está na tela de edição de dados   | Editar Cadastro        |
| Nome completo          | Texto      | Campo para editar o nome completo                      | James                  |
| CPF                    | Texto      | Campo para editar o CPF                                | 000.000.000-00         |
| Telefone               | Texto      | Campo para editar o número de telefone                 | (00) 00000-0000        |
| Data de Nascimento     | Texto/Data | Campo para editar a data de nascimento                 | 01/01/1990             |
| E-mail                 | Texto      | Campo para editar o e-mail                             | email@gmail.com        |
| Senha                  | Senha      | Campo para alterar a senha                             | ********               |
| Repetir Senha          | Senha      | Campo para confirmar a nova senha                      | ********               |
| Botão "Cancelar"       | Botão      | Cancela a edição e retorna à tela anterior             | -                      |
| Botão "Salvar"         | Botão      | Salva as alterações feitas                             | -                      |

## Tela de Cadastro - Etapa Inicial (Instituição)

Esta é a primeira etapa do cadastro do usuário, onde são solicitadas informações básicas para criação da conta.

| **Nome**          | **Tipo** | **Descrição**                                                   | **Exemplo**           |
|-------------------|----------|------------------------------------------------------------------|------------------------|
| Título da página  | Texto    | Informa que o usuário está na etapa de cadastro                 | Cadastro               |
| Subtítulo         | Texto    | Mensagem de incentivo para o usuário se cadastrar               | "Cadastre-se e faça a diferença..." |
| E-mail            | Texto    | Campo para inserir o e-mail do usuário                          | exemplo@email.com      |
| Senha             | Senha    | Campo para criação de senha                                     | ********               |
| Repetir senha     | Senha    | Campo para confirmar a senha                                    | ********               |
| Botão "Próximo"   | Botão    | Avança para a próxima etapa do cadastro                         | -                      |
| Imagem lateral    | Imagem   | Imagem ilustrativa para tornar a interface mais acolhedora      | Foto de idoso e cuidador |

## Tela de Login

Esta tela usuários já cadastrados realizem o login em suas contas na plataforma "Aconchego da Vovó".

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| E-mail      		 | Texto            | Campo para inserir o E-mail		            | gatos@gmail.com                      |
| Senha              | Texto            | Campo para inserir a senha		            | **************                       |
| Foto               | String           | Foto de Login						            | img.svg						       |
| Botão "Login"      | Botão            | Logar na conta							    | -                                    |

## Tela de Esqueci a Senha

Esta tela usuários já cadastrados podem fazer o requerimento de recuperar a senha perdida.

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| E-mail      		 | Texto            | Campo para inserir o E-mail		            | gatos@gmail.com                      |
| Senha              | Texto            | Descrição de recuperação de senha             | Digite seu e-mail e enviaremos um e-mail para você informando como recuperá-la.   |
| Foto               | String           | Foto de Esqueci a Senha			            | img.svg				    		   |
| Botão "Enviar"     | Botão            | Enviar e-mail de recuperação de senha		    | -                                    |

## Tela de Pagamento

Esta tela doadores podem realizar a doação para a Instituição de Longa Permanência escolhida.

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| Pix   			 | String           | Bloco com ícone do Pix	 		            | img.svg						       |
| Cartão de Crédito	 | String           | Bloco com ícone de Cartão de Crédito	        | img.svg						       |
| Débito Online      | String           | Bloco com ícone de Cartão			            | img.svg						       |
| Boleto		     | String           | Bloco com ícone de Código de Barras           | img.svg						       |
| Qr-Code		     | String           | Qr-Code da ILPI para o realizar o pagamento   | img.svg						       |
| Nome da ILPI 		 | Texto            | Nome da ILPI escolhida			            | Cantinho da Paz                      |
| Plano      		 | Texto            | Tipo de Plano escolhido para pagamento        | Plano Básico		                   |
| Total      		 | Texto         	| Total da Doação					            | R$ 150,00		                       |
| Guia do Qr-Code 1  | Texto            | Descrição de pagamento com Qr-code            | Abra seu app PagBank ou da instituição financeira de sua preferência   |
| Guia do Qr-Code 2	 | Texto            | Descrição de pagamento com Qr-code            | Aponte a câmera do seu celular para o QR Code Pix   |
| Botão "Cancelar"   | Botão            | Cancelar o Pagamento              		    | -                                    |
| Botão "Continuar"  | Botão            | Ir para tela de sucesso de pagamento		    | -                                    |

## Tela de Erro de Pagamento

Esta tela doadores ficam cientes de que a forma de pagamento escolhida não foi autorizada ou os dados bancários foram preenchidos incorretamente.

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| Título      		 | Texto            | Texto Pagamento não autorizado      			| Oops! Seu pagamento não foi autorizado!		    |
| Plano      		 | Texto            | Texto Revise os Dados					        | Revise os dados ou altere a forma de pagamento!	|
| Foto               | String           | Foto de círculo vermelho com X no meio		| img.svg						   				    |
| Foto               | String           | Foto de Erro de Pagamento			            | img.svg						   				    |
| Botão "Voltar"     | Botão            | Voltar para pagamento						    | -                                				    |

## Tela de Cadastro de Novo Plano

Esta tela Instituições podem criar um novo plano para receber doações.

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| Nome do Plano      | Texto            | Campo para inserir o nome do plano            	| Premiun		                       |
| Descrição do Plano | Texto            | Campo para inserir a descrição do plano			| Itens essenciais como fraldas, produtos de higiene e lanches saudáveis.                       |
| Valor              | Texto            | Campo para inserir o valor do plano          		| R$ 150,00						       |
| Responsável Legal  | Texto            | Campo para inserir o nome do Responsável Legal	| Cleide da Silva                      |
| Periodicidade		 | Texto            | Campo para inserir se o Plano será Anul ou Mensal	| Mensal                               |
| Data de Início	 | Data	            | Campo para inserir a data de Início do Plano    	| 00/00/00                             |
| Data de Término    | Data	            | Campo para inserir a data de Término do Plano    	| 00/00/00                             |

## Tela de Cadastro ILPI 2

Esta tela usuários que escolheram se cadastrar como Instituição podem inserir os dados da empresa.

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| CNPJ      		 	 | Texto            | Campo para inserir o CNPJ		            | 00.623.904/0001-73                   |
| Telefone           	 | Texto            | Campo para inserir o Telefone		        | (00) 00000-0000                      |
| Tipo de Instituição	 | Texto            | Campo para inserir o Tipo de Instituição  | Instituição de Longa Permanência     |
| Cargo Responsável	 	 | Texto            | Campo para inserir o Nome do Responsável  | Cleide da Silva                      |
| Data da Fundação	 	 | Texto            | Campo para inserir a Data da Fundação		| 00/00/00                             |
| Foto               	 | String           | Foto de Cadastro					        | img.svg						       |
| Botão "Próximo"      	 | Botão            | Ir para a próxima página de cadastro		| -                                    |
| Botão "Voltar"      	 | Botão            | Voltar para a página de cadastro anterior	| -                                    |

