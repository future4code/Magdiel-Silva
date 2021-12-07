import express, { Express } from "express";
import cors from "cors";
import { countries } from "./data";
import { country } from "./types";

const app: Express = express();

app.use(express.json());
app.use(cors());

//ENDPOINT DE TESTE

app.get("/test", (req, res) => {
  res.send("Olá do servidor!");
});

//ENDPOINT 1 - BUSCAR TODOS OS PAÍSES

app.get("/countries", (req, res) => {
  res.send(countries);
});

// ENDPOINT 3 - BUSCAR PAÍS POR FILTRO

app.get("/countries/search", (req, res) => {
  let result: country[] = countries;

  if (req.query.name) {
    result = result.filter((country) => {
      return country.name.includes(req.query.name as string);
    });
  } else if (req.query.capital) {
    result = result.filter((country) => {
      return country.capital.includes(req.query.capital as string);
    });
  } else if (req.query.continent) {
    result = result.filter((country) => {
      return country.continent.includes(req.query.continent as string);
    });
  } else {
    res.status(404).send("País não encontrado");
  }
  res.status(200).send(result);
});

// ENDPOINT 2 - BUSCAR PAÍS POR ID

app.get("/countries/:id", (req, res) => {
  const id = req.params.id;
  const result = countries.find((country) => {
    return country.id === Number(id);
  });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("País não encontrado");
  }
});

// ENDPOINT 4 - EDITAR PAÍS

// ENDPOINT 5 - DELETAR PAÍS

// app.delete("/countries/:id", (req, res) => {

//     const token = req.headers.authorization

//     if(!token){
//         return res.status(401).end()
//     }

//     const index = countries.findIndex((country)=>{
//         return country.id === Number(req.params.id)
//     })

//     countries.splice(index, 1)

// }

// ENDPOINT 6 - CRIAR PAÍS

app.listen(3003, () => {
  console.log("Servidor pronto!");
});
