# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|-------------|-----------------|
|RF-001| Desenvolver tela de Landing Page         		| Raissa | index.html |
|RF-002| Desenvolver tela de Tipo de Cadastro     		| Brenda | typeOfRegistration.html |
|RF-003| Desenvolver tela de Cadastro Page 1      		| Júlia  | registrationILPIPage1.html |
|RF-004| Desenvolver tela de Cadastro ILPI Page 2 		| Camila | registrationILPIPage2.html |
|RF-005| Desenvolver tela de Cadastro ILPI Page 3 		| Brenda | registrationILPIPage3.html |
|RF-006| Desenvolver tela de Cadastro ILPI Page 4 		| Rafael | registrationILPIPage4.html |
|RF-007| Desenvolver tela de Login                		| Camila | login.html |
|RF-008| Desenvolver tela de Esqueci a Senha      		| Camila | forgot-password.html |
|RF-009| Desenvolver tela de Listagem das Instituições 	| Júlia  | listInstitutions.html |
|RF-010| Desenvolver tela de Histórico de Doações 		| Júlia  | donationHistory.html |
|RF-011| Desenvolver tela de Editar Cadastro 			| Júlia  | editRegistration.html |
|RF-012| Desenvolver tela de Perfil das Intituições 	| Brenda | profileOfInstitutions.html |
|RF-013| Desenvolver tela de Pagamento 					| Camila | payment.html |
|RF-014| Desenvolver tela de Erro de Pagamento 			| Camila | payment-error.html |
|RF-015| Desenvolver tela de Sucesso de Pagamento 		| Brenda | success.html |
|RF-016| Desenvolver tela de Histórico de Recebimentos 	| Rafael | receiptsHistory.html |
|RF-017| Desenvolver tela de Meus Planos 				| Brenda | ... |
|RF-018| Desenvolver tela de Cadastrar novo Plano 		| Camila | new-plan.html |
|RF-019| Desenvolver tela de Editar Plano 				| Brenda | ... |
|RF-020| Desenvolver tela de Editar Cadastro Page 1 	| Rafael | editingRegistrationPage1.html |
|RF-021| Desenvolver tela de Editar Cadastro Page 2		| Rafael | editingRegistrationPage2.html |
|RF-022| Desenvolver tela de Editar Cadastro Page 3 	| Rafael | editingRegistrationPage3.html |
|RF-023| Desenvolver tela de Editar Perfil 				| Rafael | editingProfile.html |
|RF-024| Desenvolver tela de Agradecimentos 			| Raissa | gratitude.html |
|RF-025| Desenvolver tela de Cadastrar Agradecimentos 	| Raissa | registerGratitude.html |
|RF-026| Desenvolver tela de Editar Agradecimentos 		| Raissa | editGratitude.html |
|RF-027| Desenvolver Drop Down					 		| Rafael | dropDownMenu.js |

## Descrição das estruturas:

## Tela de Cadastrar Agradecimentos
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título do Agradecimento                   | Agradecemos pelas doações                                  |
| Texto     | Texto             | Descrição do agradecimento                 | Com muito carinho, agradecemos a todos os doadores que tornaram possível a reforma de um dos quartos do nosso lar.                            |
| Foto  | Texto(Base64) | Foto do Agradecimento       |                foto.jpeg                           |

## Tela de Editar Agradecimentos
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Título         | Texto             | Título do Agradecimento                   | Agradecemos pelas doações                                  |
| Texto     | Texto             | Descrição do agradecimento                 | Com muito carinho, agradecemos a todos os doadores que tornaram possível a reforma de um dos quartos do nosso lar.                            |
| Foto  | Texto(Base64) | Foto do Agradecimento       |                foto.jpeg                           |

# Tela de Cadastro (Doador)

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

# Tela de Listagem de Instituições

Esta tela exibe as instituições de acolhimento de idosos disponíveis para doações e permite a busca por nome ou município.

| **Nome**                  | **Tipo**      | **Descrição**                                                             | **Exemplo**                    |
|---------------------------|---------------|---------------------------------------------------------------------------|--------------------------------|
| Banner informativo        | Imagem + Texto| Área superior com imagem e chamada para ação                              | "Ajude a transformar a vida..."|
| Campo de busca            | Texto         | Campo para filtrar instituições por nome ou município                     | "São Paulo", "Bem Viver"       |
| Cartão da instituição     | Componente    | Bloco com informações de cada instituição                                 |                                |
| → Nome da instituição     | Texto         | Nome exibido no cartão                                                    | Residencial Bem Viver          |
| → Foto da instituição     | Imagem        | Foto ilustrativa da instituição                                           | imagem.jpeg                    |
| → Ícone da instituição    | Ícone         | Ícone que representa a categoria ou entidade                              | 🏠                             |
| Lista de instituições     | Grid/Listagem | Área que agrupa todos os cartões de instituições cadastradas              | -                              |

