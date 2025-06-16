# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|-------------|-----------------|
|RF-001| Desenvolver tela de Landing Page         		| Raissa | index.html |
|RF-002| Desenvolver tela de Tipo de Cadastro     		| Brenda | registrationType.html |
|RF-003| Desenvolver tela de Cadastro Doador     		| Camila | register.html |
|RF-004| Desenvolver tela de Cadastro ILPI 				| Camila | registrationILPI.html |
|RF-005| Desenvolver tela de Login                		| Camila | login.html |
|RF-006| Desenvolver tela de Esqueci a Senha      		| Camila | forgotPassword.html |
|RF-007| Desenvolver tela de Listagem das Instituições 	| Júlia  | listInstitutions.html |
|RF-008| Desenvolver tela de Histórico de Doações 		| Júlia  | donationHistory.html |
|RF-009| Desenvolver tela de Editar Cadastro Doador		| Júlia  | editRegistration.html |
|RF-010| Desenvolver tela de Perfil das Intituições 	| Brenda | profileInstitution.html |
|RF-011| Desenvolver tela de Pagamento 					| Camila | payment.html |
|RF-012| Desenvolver tela de Erro de Pagamento 			| Camila | paymentError.html |
|RF-013| Desenvolver tela de Sucesso de Pagamento 		| Brenda | paymentSuccess.html |
|RF-014| Desenvolver tela de Histórico de Recebimentos 	| Rafael | historyReceipts.html |
|RF-015| Desenvolver tela de Meus Planos 				| Brenda | plans.html |
|RF-016| Desenvolver tela de Cadastrar Novo Plano 		| Camila | registerPlans.html |
|RF-017| Desenvolver tela de Editar Plano 				| Brenda | editPlans.html |
|RF-018| Desenvolver tela de Editar Cadastro ILPI	 	| Rafael | editRegistration.html |
|RF-019| Desenvolver tela de Editar Perfil 				| Rafael | editProfile.html |
|RF-020| Desenvolver tela de Agradecimentos 			| Raissa | gratitude.html |
|RF-021| Desenvolver tela de Cadastrar Agradecimentos 	| Raissa | registerGratitude.html |
|RF-022| Desenvolver tela de Editar Agradecimentos 		| Raissa | editGratitude.html |
|RF-023| Desenvolver Drop Down					 		| Rafael | dropDownMenu.js |

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

## Tela de Escolha de Cadastro

Esta tela exibe duas opções para o usuário escolher qual tipo de cadastro ele deseja fazer na plataforma "Aconchego da Vovó". 

| **Nome**              | **Tipo**       | **Descrição**                                                        | **Exemplo**              |
|------------------------|----------------|------------------------------------------------------------------------|--------------------------|
| Título da página       | Texto           | Pergunta ao usuário qual cadastro ele deseja fazer                    | "Qual o tipo de cadastro?"   |
| Botão Doador           | Botão           | Botão para seleção de cadastro como doador                            | "Doador"                     |
| Botão Instituição	     | Botão           | Botão para seleção de cadastro como instituição                       | "Instituição"                |
|Imagem de fundo         |	Imagem	       |Imagem ilustrativa de um casal de idosos andando                       | "casal_idosos.svg"           | 


## Tela de Cadastro (Doador)

Esta tela permite que novos usuários se cadastrem na plataforma "Aconchego da Vovó".

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| Nome completo      | Texto            | Campo para inserir o nome completo do usuário | João da Silva                        |
| CPF                | Texto            | Campo para inserir o CPF do usuário           | 123.456.789-00                       |
| Telefone           | Texto            | Campo para inserir o número de telefone       | (11) 91234-5678                      |
| Data de nascimento | Texto/Data       | Campo para inserir a data de nascimento       | 10/05/1985                           |
| E-mail             | Texto            | Campo para inserir o e-mail                   | joao@email.com                       |
| Senha              | Senha            | Campo para criar uma senha de acesso          | Todos os caracteres                             |
| Repita a senha     | Senha            | Campo para confirmar a senha                  | Todos os caracteres                           |
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
|  Data                 | Data            | Data da doação                                                         | 10/05/2025               |
| Nome da Instituição | Texto           | Nome da instituição que recebeu a doação                               | Instituição São Gabriel  |
| Forma de pagamento   | Texto           | Método utilizado para a doação                                         | PIX                      |
| Valor                | Moeda           | Valor doado em reais                                                  | R$ 50,00                 |
| Ícone de configurações | Ícone           | Ícone de engrenagem para acessar o menu de configurações do usuário    | ⚙                        |

## Tela de Editar Cadastro (Doador)

Esta tela permite ao usuário atualizar suas informações pessoais cadastradas na plataforma "Aconchego da Vovó", além de ter acesso à opção de exclusão de conta.

| **Nome**               | **Tipo**   | **Descrição**                                          | **Exemplo**           |
|------------------------|------------|--------------------------------------------------------|------------------------|
| Menu lateral           | Menu       | Contém as opções de "Editar cadastro" e "Excluir conta"| -                      |
| Título da página       | Texto      | Indica que o usuário está na tela de edição de dados   | Editar Cadastro        |
| Nome completo          | Texto      | Campo para editar o nome completo                      | James                  |
| CPF                    | Texto      | Campo para editar o CPF                                | 763.054.076-02        |
| Telefone               | Texto      | Campo para editar o número de telefone                 | (00) 00000-0000        |
| Data de Nascimento     | Texto/Data | Campo para editar a data de nascimento                 | 01/01/1990             |
| E-mail                 | Texto      | Campo para editar o e-mail                             | email@gmail.com        |
| Senha                  | Senha      | Campo para alterar a senha                             | Todos os caracteres            |
| Botão "Cancelar"       | Botão      | Cancela a edição e retorna à tela anterior             | -                      |
| Botão "Atualizar"      | Botão      | Atualiza  as alterações feitas                             | -                      |

## Tela de Cadastro - Etapa Inicial (Instituição)

Esta é a primeira etapa do cadastro do usuário, onde são solicitadas informações básicas para criação da conta.

| **Nome**          | **Tipo** | **Descrição**                                                   | **Exemplo**           |
|-------------------|----------|------------------------------------------------------------------|------------------------|
| Título da página  | Texto    | Informa que o usuário está na etapa de cadastro                 | Cadastro                            |
| Subtítulo         | Texto    | Mensagem de incentivo para o usuário se cadastrar               | "Cadastre-se e faça a diferença..." |
| E-mail            | Texto    | Campo para inserir o e-mail do usuário                          | exemplo@email.com                   |
| Senha             | Senha    | Campo para criação de senha                                     | Todos os caracteres                              |
| Repetir senha     | Senha    | Campo para confirmar a senha                                    | Todos os caracteres                           |
| Botão "Próximo"   | Botão    | Avança para a próxima etapa do cadastro                         | -                                   |
| Imagem lateral    | Imagem   | Imagem ilustrativa para tornar a interface mais acolhedora      | Foto de idoso e cuidador            |

## Tela de Cadastro - Etapa Três (Instituição)

Esta é a terceira etapa do cadastro do usuário, onde são solicitadas informações de endereço para criação da conta.

| **Nome**              | **Tipo**       | **Descrição**                                                        | **Exemplo**              |
|------------------------|----------------|------------------------------------------------------------------------|--------------------------|
| Título            | Texto    | Título principal da tela de cadastro                            | Cadastro                                                      |
| Subtítulo	        |Texto     | Mensagem motivacional para incentivar o cadastro                   | Cadastre-se e comece a fazer a diferença na vida de um idoso! |
| Endereço          |Campo 	   | Campo para digitar o endereço completo                             | Rua das Flores                                                |
|Cidade             |Campo     | Campo para digitar a cidade	                                    |São Paulo                                                      |
|Bairro             |Campo     | Campo para digitar o bairro	                                    |Centro                                                         |
|Logradouro         |Campo     | Campo para inserir o nome da rua ou avenida                        |Av. Brasil                                                     |
|Número	            |Campo     | Campo para inserir o número da residência                          |123                                                            |
|CEP                |Campo     | Campo para digitar o código postal	                                |01001-000                                                      |
|Botão Próximo	    |Botão	   | Avança para a próxima etapa do cadastro                            |Próximo                                                        |
|Botão Voltar	    |Botão	   | Retorna para a tela anterior                                       |Voltar                                                         |
|Imagem             |Imagem    | Imagem ilustrativa de cuidadora com idosa                          |cuidadora_idosa.jpg                                            |


## Tela Meus Planos (Instituições)

Esta tela é para descrever, editar e adicionar planos que as instituições desejam em seu perfil.

| **Nome**           | **Tipo** | **Descrição**                                      | **Exemplo**          |
|--------------------|----------|---------------------------------------------------|-----------------------|
| Título             | Texto    | Título principal da tela                          | Meus Planos           |
| Botão Cadastrar    | Botão    | Botão para adicionar um novo plano                | Cadastrar planos +    |
| Lista de Planos    | Lista    | Lista de planos cadastrados                       | Plano                 |
| Ícone Editar       | Ícone    | Ícone de lápis para editar um plano               | icone_lápis.svg       |
| Ícone Excluir      | Ícone    | Ícone de lixeira para excluir um plano            | icone_lixeira.svg     |
| Botão Voltar       | Ícone    | Ícone de seta para voltar à tela anterior         | icone_seta.svg        |

## Tela Editar Plano (Instituições)

Esta tela é para editar o plano após a seleção do lápis de edição na tela de "Meus Planos".

| **Nome**             | **Tipo**     | **Descrição**                                      | **Exemplo**            |
|----------------------|--------------|---------------------------------------------------|-------------------------|
| Título               | Texto        | Título da tela de edição de plano                 | Editar Plano            |
| Nome do Plano        | Campo texto  | Campo para inserir o nome do plano                | Plano Prata             |
| Descrição do Plano   | Campo texto  | Campo para descrever o plano                      | Descreva a sua LPI...   |
| Valor                | Campo texto  | Campo para inserir o valor do plano               | "R$ 150,00"             |
| Responsável Legal    | Campo texto  | Campo para inserir o nome do responsável legal    | "João da Silva"         |
| Periodicidade        | Campo texto  | Campo para indicar a periodicidade do plano       | Mensal / Anual          |
| Data de Início       | Campo data   | Campo para inserir a data de início               | "01/01/2024"            |
| Data de Término      | Campo data   | Campo para inserir a data de término              | "31/12/2024"            |
| Botão Salvar         | Botão        | Salva as alterações feitas no plano               | Salvar                  |
| Botão Excluir        | Botão        | Exclui o plano atual                              | Excluir                 |
| Botão Voltar         | Ícone        | Ícone de seta para voltar à tela anterior         | icone_seta.svg          |


## Tela Detalhes da Instituição
Esta tela é o perfil das instituições cadastradas na plataforma "Aconchego da Vovó".

| **Nome**              | **Tipo**   | **Descrição**                                                                 | **Exemplo**                                                       |
|-----------------------|------------|------------------------------------------------------------------------------|--------------------------------------------------------------------|
| Título da Instituição | Texto      | Nome da instituição de cuidado                                               | Residencial Bem Viver                                              |
| Descrição             | Texto      | Breve apresentação sobre a instituição e sua missão                          | Oferecemos um ambiente seguro, acolhedor e adaptado para o público idoso. |
| Imagem da Instituição | Imagem     | Imagem da fachada ou ambiente da instituição                                 | foto_residencial.svg                                               |
| Título Planos         | Texto      | Título da seção com os planos disponíveis                                    | Planos                                                             |
| Plano Básico          | Cartão     | Plano com itens essenciais                                                   | Itens essenciais com fraldas, produtos de higiene e cuidados básicos - R$29,90 |
| Plano Intermediário   | Cartão     | Plano com medicamentos e acompanhamento especializado                        | Medicamentos, materiais terapêuticos e cuidado especializado - R$99,90 |
| Plano Premium         | Cartão     | Plano com serviços completos                                                 | Funcionamento da casa, refeições e monitoramento 24h - R$199,90   |
| Título Agradecimento  | Texto      | Título da seção de agradecimentos                                            | Agradecimento                                                     |
| Texto Agradecimento   | Texto      | Texto de gratidão personalizado                                              | Com muito carinho, agradecemos a todos os doadores...             |
| Imagem Agradecimento  | Imagem     | Foto ilustrativa relacionada ao agradecimento                                | quarto_reformado.svg                                              |
| Botão Voltar          | Ícone      | Ícone de seta para retornar à tela anterior                                  | icone_seta.svg                                                       |

## Tela de Login

Esta tela usuários já cadastrados realizem o login em suas contas na plataforma "Aconchego da Vovó".

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| E-mail      		 | Texto            | Campo para inserir o E-mail		            | gatos@gmail.com                      |
| Senha              | Texto            | Campo para inserir a senha		            | Todos os caracteres                     |
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

## Tela Confirmação de Doação (Doador)

Esta tela doadores ficam cientes de que a forma de pagamento escolhida foi autorizada e concluída com sucesso. 

| **Nome**                 | **Tipo**   | **Descrição**                                                  | **Exemplo**                                 |
|--------------------------|------------|----------------------------------------------------------------|---------------------------------------------|
| Ícone de Sucesso         | Ícone      | Ícone visual indicando que a ação foi concluída com sucesso    | img_check.svg                                       |
| Mensagem Principal       | Texto      | Mensagem de confirmação da doação                              | Doação realizada com sucesso!                       |
| Mensagem Secundária      | Texto      | Agradecimento pela contribuição                                | Obrigado por fazer a diferença na vida de um idoso! |
| Botão Voltar             | Botão      | Retorna para a tela anterior ou inicial                        | Voltar                                              |
| Imagem de Fundo (esquerda)| Imagem     | Foto ilustrativa de idosos felizes, representando gratidão    | idosos_abraço.svg                                   |


## Tela de Erro de Pagamento (Doador)

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
| Data de Início	 | Data	            | Campo para inserir a data de Início do Plano    	| 10/03/2025                           |
| Data de Término    | Data	            | Campo para inserir a data de Término do Plano    	| 10/03/2025                            |

## Tela de Cadastro ILPI 2

Esta tela usuários que escolheram se cadastrar como Instituição podem inserir os dados da empresa.

| **Nome**           | **Tipo**         | **Descrição**                                 | **Exemplo**                          |
|--------------------|------------------|-----------------------------------------------|--------------------------------------|
| CNPJ      		 	 | Texto            | Campo para inserir o CNPJ		            | 00.623.904/0001-73                   |
| Telefone           	 | Texto            | Campo para inserir o Telefone		        | (31) 995312092                  |
| Tipo de Instituição	 | Texto            | Campo para inserir o Tipo de Instituição  | Instituição de Longa Permanência     |
| Cargo Responsável	 	 | Texto            | Campo para inserir o Nome do Responsável  | Cleide da Silva                      |
| Data da Fundação	 	 | Texto            | Campo para inserir a Data da Fundação		| 10/03/2025                        |
| Foto               	 | String           | Foto de Cadastro					        | img.svg                              |
| Botão "Próximo"      	 | Botão            | Ir para a próxima página de cadastro		| -                                    |
| Botão "Voltar"      	 | Botão            | Voltar para a página de cadastro anterior	| -                                    |

