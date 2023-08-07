const fs = require("fs")

function getTodosLivros(){
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse( fs.readFileSync("livros.json"))
    
    const livroFiltrado = livros.filter( livro => livro.id === id) [0]
    //resultado -> [{id:2, nome:"livros legal"}]
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse( fs.readFileSync("livros.json"))

    const novaListaDeLivros = [ ...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivros(modificacoes, id){
    let livrosAtuais = JSON.parse( fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}
function deletaLivroPorId(id){
    const livros = JSON.parse( fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado))

    return livroFiltrado

}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivros,
    deletaLivroPorId
}