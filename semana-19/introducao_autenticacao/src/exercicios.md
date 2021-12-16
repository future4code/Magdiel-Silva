# EXERCÍCIO 1 

## A 
Acredito que seja melhor utilizar strings para a identificação de usuários

## B
import {v4} from "uuid"

export const generateId = (): string => {
    return v4()
}

# EXERCÍCIO 2 

## A
O código está realizando três tarefas diferentes. 
Primeiro é declarada uma tabela de usuários chamada "userTableName", essa tabela é igual a tabela "User";
na sequência o código realiza a conexão com o Banco de Dados, e por fim, declara a função
createUser que adiciona o usuário na tabela "userTableName", utilizando como parâmetros: id, email e password.

## B 
Essa tabela foi criada no Workbench
CREATE TABLE User(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255)UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

## C
import { connection } from "./connection"

const userTableName = "User"

export const createUser = async(id:string, email: string, password: string) => {
    await connection
    .insert({
        id, 
        email,
        password
    })
    .into(userTableName) 
};

# EXERCÍCIO 3

## A

A linha "as string" transforma a chave secreta do JWT em string. O typescript
entende que esse valor pode vir, além de uma string, como undefined, por esse motivo delimitamos
como string, visto que a função sing do JWT espera um valor em string.

## B

import { AuthenticationData } from "../types";

  const expiresIn = "1min";

  const generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }
};

export type AuthenticationData = {
    id: string;
  }

  # EXERCÍCIO 4
  
