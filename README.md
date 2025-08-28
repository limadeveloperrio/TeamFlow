🔎 Assim, o sistema responde a perguntas como:
•	Quais projetos estão em andamento?
•	Quais posições ainda estão abertas ou já preenchidas?
•	Quais recursos estão disponíveis ou já alocados?
•	Qual o histórico de alocação de um recurso?
•	Quem está superalocado (em mais de um projeto ao mesmo tempo)?
________________________________________
👉 Esse é basicamente um sistema de gestão de projetos com controle de vagas e alocação de pessoas.
Ele poderia ser usado em consultorias, fábricas de software, empresas de TI, PMOs ou até em empresas de engenharia.



modelo de banco de dados relacional com quatro tabelas:
________________________________________
1. Tabela projects
•	id (UUID, PK) → Identificador único do projeto.
•	name (varchar) → Nome do projeto.
•	description (varchar) → Descrição do projeto.
•	start_date, end_date (date) → Datas de início e término.
•	status (varchar) → Status do projeto.
•	created_by, modified_by (varchar) → Quem criou/modificou.
•	created_on, modified_on (timestamp) → Quando foi criado/modificado.
•	is_deleted (boolean, NN) → Indica exclusão lógica.
________________________________________
2. Tabela positions
•	id (UUID, PK).
•	projectId (UUID, FK → projects.id).
•	title (varchar) → Título da posição.
•	description (text) → Descrição da posição.
•	role (varchar) → Papel/função.
•	numberOfResources (integer) → Quantos recursos são necessários.
•	start_date, end_date (date).
•	created_by, modified_by, created_on, modified_on, is_deleted.
🔗 Relação:
•	Um projeto pode ter várias posições.
(projects.id → positions.projectId).
________________________________________
3. Tabela allocations
•	positionId (UUID, FK → positions.id).
•	resourceId (UUID, FK → resources.id).
•	status (varchar).
•	start_date, end_date (date).
•	created_by, modified_by, created_on, modified_on, is_deleted.
🔗 Relação:
•	É uma tabela de junção (N:N).
•	Uma posição pode ter vários recursos.
•	Um recurso pode estar em várias posições.
________________________________________
4. Tabela resources
•	id (UUID, PK).
•	first_name, last_name (varchar).
•	birth_date (date).
•	role (varchar).
•	availability (varchar) → Disponibilidade do recurso.
•	cv_uri (varchar), cv_modified_on (timestamp).
•	created_by, modified_by, created_on, modified_on, is_deleted.
🔗 Relação:
•	Relaciona-se com positions através da tabela allocations.
________________________________________
🔗 Resumindo as relações:
1.	projects (1) → (N) positions
Um projeto pode ter várias posições abertas.
2.	positions (N) ↔ (N) resources (via allocations)
Uma posição pode ser preenchida por vários recursos e um recurso pode estar alocado em várias posições.
________________________________________


