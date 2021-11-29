USE`maryam-magdiel-silva`;

SET SQL_SAFE_UPDATES = 0;

```
SELECT * FROM Movie;
SELECT * FROM Actor;
```


## EXERCÍCIO 1 ##
 **A)** Toda a coluna "salary" seria deletada. 
 **B)** A coluna gender será substituída por sex.  
 **C)** Foi alterada a coluna gender para que receba até 255 caracteres. 
 **D)** 
ALTER TABLE Actor
```CHANGE gender gender VARCHAR(100);```

## EXERCÍCIO 2 ##
 **A)**  
 ```
    UPDATE Actor
    SET name = "Astrobot", birth_date = "2021-11-23"
    WHERE id = "003"; 
```
**B)**
```

    UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes";

    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES";
```
**C)**
```
    UPDATE Actor
    SET 
    name = "Bananinha",
    birth_date = "2021-11-23",
    salary = 100000,
    gender = "male"
    WHERE id = "005";
```
**D)**
```
    UPDATE Actor
    SET
    name = "Augustinho Carrara",
    birth_date = "1978-11-23",
    salary = 250000,
    gender = "male"
    WHERE id = "007";


    0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
    Foi atualizado um dado na tabela mas nenhuma informação foi adicionada/alterada.alter
 ```   

## EXERCÍCIO 3 ##

 **A)** 
    DELETE FROM Actor
    WHERE name = "Fernanda Montenegro";

 **B)**
    DELETE FROM Actor
    WHERE
    gender = "male" AND
    salary >1000000;

## EXERCÍCIO 4 ##
 **A)** 
 ```
    SELECT MAX(salary) FROM Actor;
```
 **B)** 
 ```
    SELECT MIN(salary) FROM Actor
    WHERE gender = "female";
```
 **C)**
 ```
    SELECT COUNT(*) FROM Actor
    WHERE gender = "female";
```
 **D)**
 ```
    SELECT SUM(salary) FROM Actor;
```

## EXERCÍCIO 5 ##

 **A)** 
 ```
    SELECT COUNT(*), gender FROM Actor
    GROUP BY gender;
    Foi contabilizado e agrupado por gênero a quantidade total de atores e atrizes.
```
 **B)** 
 ```
    SELECT id, name FROM Actor
    ORDER BY name DESC;
```
 **C)**
 ```
    SELECT * FROM Actor
    ORDER BY salary;
```
 **D)**
 ```
    SELECT * FROM Actor 
    ORDER BY salary DESC
    LIMIT 3;
```
**E)**
```
    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;
 ```
## EXERCÍCIO 6 ##

 **A)** 
 ```
    ALTER TABLE Movie
    ADD playing_limit_date DATE;
```
 **B)**
 ```
    ALTER TABLE Movie
    CHANGE avaliação rating FLOAT;
```
 **C)**
 ```
    UPDATE Movie
    SET playing_limit_date = "2021-12-25"
    WHERE id = "001";

    UPDATE Movie
    SET playing_limit_date = "2020-10-25"
    WHERE id = "002";
```
 **D)**
 ```
    DELETE FROM Movie
    WHERE id = "004";

    UPDATE Movie
    SET sinopse = "Nesse filme a atriz Fernanda Montenegro foi indicada ao oscar de Melhor Atriz"
    WHERE id = "004";
    0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
    Não apareceu "erro" na requisição, no entanto o ID e nem a nova sinopse aparecem na tabela. 
```
## EXERCÍCIO 7 ## 

 **A)** 
 ```
    SELECT COUNT(*) FROM Movie
    WHERE rating > 7.5;
```
 **B)**
 ```
    SELECT AVG(rating) FROM Movie;
```
 **C)**
 ```
    SELECT COUNT(*) FROM Movie
    WHERE playing_limit_date > CURDATE();
```
 **D)**
 ```
    SELECT COUNT(*) FROM Movie
    WHERE data_de_lançamento > CURDATE();
```
 **E)**
 ```
    SELECT MAX(rating) FROM Movie;
```
 **F)**
 ```
    SELECT MIN(rating) FROM Movie;
```

## EXERCÍCIO 8 ## 

 **A)** 
 ```
    SELECT * FROM Movie
    ORDER BY título DESC;
```
 **B)** 
 ```
    SELECT * FROM Movie
    ORDER BY título ASC
    LIMIT 5;
```
 **C)**
 ```
    SELECT * FROM Movie
    WHERE data_de_lançamento < CURDATE()
    ORDER BY data_de_lançamento DESC
    LIMIT 3;
```
 **D)**
 ```
    SELECT * FROM Movie
    ORDER BY rating DESC
    LIMIT 3;
```
