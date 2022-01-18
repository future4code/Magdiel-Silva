LABOOK

ESTRUTURA DA DADOS
    usuarios
        id
        nome
        email
        senha

    posts
        id_usuario (chave estrangeira)
        foto
        descricao
        dataCriacao
        tipo: 'normal' || 'evento'
    
    curtidas
        id_usuario (chave estrangeira)
        id_post(chave estrangeira)

    comentários
        id
        id_usuario (chave estrangeira)
        id_post(chave estrangeira)
        texto

FUNCIONALIDADES
    
    cadastrar: (dadosUsuario) => token

    logar: (email, senha) => token

    criarPost: (dadosPost, token) => mensagem

    buscarPostPorId: id => post
