## EXERCÍCIO 1 ##
```
CREATE TABLE Rating(
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY(movie_id) REFERENCES Movie(id) 
);
```

**A)** Chave estrangeira é responsável por fazer a relação entre distintas tabelas e está sempre referenciada a PRIMARY KEY. No caso do exerício 1 essa relação é entre a tabela Rating e Movie. 

**B)**
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
(
"001",
"Filme muito bom",
10,
"001"
);
```
**C)** Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-magdiel-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))A menssagem de erro informa que não é possível adicionar ou atualizar a nova linha por algum erro na chave estrangeira, ou seja, no ID inválido que foi digitado.

```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
(
"003",
"Filme ruim",
3,
"004"
);
```
**D)**
```
ALTER TABLE Movie DROP COLUMN Rating;
```
**E)** Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-magdiel-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
--    A menssagem indica que o arquivo não pode ser removido por está relacionado a outra tabela. 
```
DELETE FROM Movie
WHERE id = "002";
```

## EXERCÍCIO 2 ##
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

**A)** Essa tabela consegue relacionar atores e atrizes com filmes. Ela tem uma relação de vários para vários N:M Para realizar essa relação essa tabela necessita de duas chaves estrangeiras, uma para a PRIMARY KAY da Movie e outra para a PRIMARY KEY de Actor.

**B)**
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
(
"001",
"002"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
(
"001",
"003"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
(
"001",
"004"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
(
"002",
"004"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
(
"003",
"006"
);
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
(
"003",
"005"
);
```

**C)** Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-magdiel-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))A mensagem de erro indicou um problema da chave estrangeira, ou seja, com problema no ID.

```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES
(
"003",
"001"
);
```

**D)**  Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id' To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.Aconteceu um erro pois o tabela está vinculada a outra tabela.

```
DELETE FROM Actor
WHERE id = 002;
```

## EXERCÍCIO 3 ##
```
SELECT * FROM Movie 
INNER JOIN Rating 
ON Movie.id = Rating.movie_id;
```
**A)** A query acima utiliza o operador JOIN que junta os registros de distintas tabelas. O operador ON especifica as condições para retorno das queries.
