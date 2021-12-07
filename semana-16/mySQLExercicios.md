<!-- USE `maryam-magdiel-silva`; -->

 <!-- -- EXERCICIO 1 -->
 
CREATE TABLE Actor(
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR (6) NOT NULL
);
-- A) Além do "FLOAT" TEMOS OS COMANDOS "CREATE TABLE", responsável 
--    por criar a tabela; o comando "VARCHAR", responsável por restringir 
--    a quantidade máxima de caracteres (255 nesse caso) e se caso essa quantidade
--    não seja atingida ele armazenará a quantidade inserida pelo usuário, o comando
--    "PRIMARY KEY" para identificar o id como chave primária; por fim, co comando 
--    "NOT NULL" torna obrigatório o preenchimento do dado.

-- B) 
SHOW DATABASES; 
-- O comando SHOW DATABASES retornou o meu banco de dados "maryam-magdiel-silva"

SHOW TABLES;
-- O comando SHOW TABLES retornou minhas tabelas criadas.

-- C)
DESCRIBE Actor;
-- Esse comando retornou a tabela Actor.


 <!-- -- EXERCICIO 2 -->
 
 INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES
 ("001",
 "Tony Ramos", 
 400000, 
 "1948-08-25", 
 "male" );
 
 -- A)
 
 INSERT INTO Actor
 VALUES
 ("002",
 "Glória Pires",
 1200000, 
 "1963-08-23",
 "female");

-- B)
INSERT INTO Actor 
VALUES
("002",
"Magdiel Silva",
5000, 
"1992-10-25",
"male");
-- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY', a mensagem de erro
-- indica que houve uma duplicação da chave primária "002".

-- C)
INSERT INTO Actor (id, name, salary)
VALUES
(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female");
-- Error Code: 1136. Column count doesn't match value count at row 1, a mensagem de erro 
-- informa que a contagem de colunas não coincide com a contagem de valores informados.

-- D)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- Error Code: 1364. Field 'name' doesn't have a default value, a mensagem
-- informa que o campo "name" não foi preenchido

-- E)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- A mensagem de erro informa que a data de nascimento está incorreta, visto que 
-- precisa ser uma string entre aspas.

-- F) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

 <!-- -- EXERCICIO 3 -->

 -- A)
 SELECT * FROM Actor
 WHERE gender = "female";
 
 -- B)
 SELECT salary FROM Actor
 WHERE name = "Tony Ramos";
 
 -- C)
 SELECT * FROM Actor
 WHERE gender = "invalid";
 -- Não retornou nada (id = null, name = null, salary = null, birth_date = null, gender = null)
 
 -- D)
 SELECT id, name, salary FROM Actor
 WHERE salary <= 500000;
 
 -- E)
 SELECT id, nome FROM Actor
 WHERE id = "002";
 -- O erro informa que a coluna "nome" não existe. Precisa mudar para name
 
 SELECT id, name FROM Actor
 WHERE id = "002";
 
  <!-- -- EXERCICIO 4 -->
  
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- A) Essa query segue uma estrutura. 1) é solicitado tudo "*" de Actor. 2) é 
-- realizado um filtro de todos os nomes que começam com as letras "A" ou "J", depois,
-- com base nessa filtragem, é realizada uma outra filtragem, agora para retornar todos os
-- nomes que começam com as letras A e J que tem salário superior a 300000.

-- B)  
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

-- C)
SELECT * FROM Actor
WHERE name LIKE "%g%" OR  name LIKE "%G%";

-- D)
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR  name LIKE "%G%" OR name LIKE "%a%" OR  name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

  <!-- -- EXERCICIO 5 -->

  -- A)
CREATE TABLE Films(
id VARCHAR (255) PRIMARY KEY,
título VARCHAR (255) NOT NULL,
sinopse TEXT,
data_de_lançamento DATE NOT NULL,
avaliação FLOAT NOT NULL
);
-- TEXT é um dos tipos de dados mais utilizados para armazenar textos.

-- B)
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

-- C)
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes 
  confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta 
  depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai 
  se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

-- D)
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. A vida de abusos 
  acaba por acarretar sua morte precoce",
  "2017-11-02", 
  8
);

-- B)
INSERT INTO Films (id, título, sinopse, data_de_lançamento, avaliação)
VALUES(
  "004", 
  "Central do Brasil",
  "Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas 
   para pessoas analfabetas, que ditam o que querem contar às suas famílias. 
   Ela embolsa o dinheiro sem sequer postar as cartas. Um dia, Josué, 
   o filho de nove anos de idade de uma de suas clientes, acaba sozinho 
   quando a mãe é morta em um acidente de ônibus. Ela reluta em cuidar do 
   menino, mas se junta a ele em uma viagem pelo interior do Nordeste em 
   busca do pai de Josué, que ele nunca conheceu.",
  "1998-04-03", 
  10
);

  <!-- -- EXERCICIO 6 -->

  -- A)
  SELECT id, título, avaliação FROM Films
  WHERE id = "004";
  
  -- B) 
  SELECT * FROM Films
  WHERE título = "Central do Brasil";
  
  -- C)
  SELECT id, título, sinopse FROM Films
  WHERE avaliação >= 7;
  
  <!-- -- EXERCICIO 7 -->

    -- A)
    SELECT * FROM Films
    WHERE título LIKE "%vida%";
    
    -- B)
    SELECT * FROM Films
    WHERE título LIKE "%TERMO DE BUSCA%" OR 
		sinopse LIKE "%TERMO DE BUSCA";
        
	-- C)
	SELECT * FROM Films
    WHERE data_de_lançamento <"2021-11-22";
    
    -- D)
    SELECT * FROM Films
    WHERE data_de_lançamento < "2021-11-22" and
    (título LIKE "%TERMO DE BUSCA%" OR
    sinopse LIKE "%TERMO DE BUSCA%") AND avaliação >= 7;