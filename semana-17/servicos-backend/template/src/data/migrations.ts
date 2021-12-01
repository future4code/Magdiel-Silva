import { connection } from "./connection"
// import users from "./users.json"
import {getAddressInfo}  from "..//services/getAddressInfo"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = async () => await connection.raw(`
    
      CREATE TABLE IF NOT EXISTS tabela1 (
         cep VARCHAR(255) PRIMARY KEY NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         numero INT NOT NULL,
         complemento VARCHAR(255) NOT NULL,
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
   `)

   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

// const insertUsers = () => connection("aula51_users")
//    .insert(users)
//    .then(() => { console.log("Usuários criados") })
//    .catch(printError)

// EXERCÍCIO 3 

const insertAddressInfo = async () => await connection("tabela1")
         .insert(async ()=>{
            const result = await getAddressInfo("06310320", 400, "casa")
            console.log(result)
            return result
         })
         .catch(printError)

// const insertAddressInfoRaw = async () => {

//    const result = await getAddressInfo("06310320", 400, "casa")

//    await connection.raw (`
//    INSERT INTO 'maryam-magdiel-silva'.Aula51_AddressInfo(
//    cep,
//    logradouro,
//    numero,
//    complemento, 
//    bairro, 
//    cidade,
//    estado)

//    VALUES 
//    ('${result.cep}', 
//    '${result.logradouro}',
//     '${result.numero}', 
//     '${result.complemento}',
//     '${result.bairro}',
//     '${result.cidade}',
//      '${result.estado}');
//    `)
// } 


createTables()
   .then(()=>{
      insertAddressInfo()
   })
