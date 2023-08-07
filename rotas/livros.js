const {Router} = require("express")
const {getLivros, getLivro, postLivro, patchLivros, deleteLivros} = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', postLivro) 


router.patch('/:id', patchLivros)

router.delete('/:id', deleteLivros)

module.exports = router