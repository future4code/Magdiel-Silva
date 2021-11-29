## EXERCÍCIO 1 ##

** a) O método RAW utiliza uma sintaxe bastante similar ao Workbench. Utiliza-se template string para passar os dados da requisição. **

** b) **
```
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor 
    WHERE name = "${name}"
    `)
    return result[0]
};
app.get("/actor/search", async (req: Request, res: Response) => {
    try{
        const name = req.query.name as string;
        res.status(200).send( await searchActor(name));
    }catch(error:any){
        console.log(error.message);
        res.status(500).send (error.sqlMessage || error.message)
    }
}
);
```
** c) **
```
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw (`
    SELECT COUNT (*) as count FROM Actor
    WHERE gender = ${gender}
    `);
    const count = result [0][0].count;
    return count;
;
}
app.get("/actor/search/gender", async (req: Request, res: Response) => {
    try{
        const gender = req.query.gender as string;
        res.status(200).send( await countActors(gender));
    }catch(error:any){
        console.log(error.message);
        res.status(500).send (error.sqlMessage || error.message)
    }
}
);
```

