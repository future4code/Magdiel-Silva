export class Recipe {
    constructor(
        private id: string,
        private titulo: string,
        private descricao: string,
        private data_de_criacao: Date
    ){}

    public getId(){
        return this.id
    }
    public getTituto(){
        return this.titulo
    }
    public getDescricao(){
        return this.descricao
    }
    public getData(){
        return this.data_de_criacao
    }
    static toRecipeModel(data:any):Recipe{
        return new Recipe(
            data.id,
            data.titulo,
            data.descricao,
            data.data_de_criacao,
        )
    }
}