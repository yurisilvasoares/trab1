import { Router } from "express"
import { cardapioCreate, cardapioDestroy, cardapioIndex, cardapioSearch, cardapioUpdate } from "./controllers/cardapioController.js"

const router = Router()

router.get('/cardapio', cardapioIndex)
      .post('/cardapio', cardapioCreate)
      .put('/cardapio/:id', cardapioUpdate)
      .delete('/cardapio/:id', cardapioDestroy)
      .get('/cardapio', cardapioSearch)


      export default router