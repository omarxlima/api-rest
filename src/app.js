import express from 'express'

import conexao from './app/database/conexao.js'

import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()
//indicar que o express vai trabalhar com json
app.use(express.json())


//rotas
app.get('/selecoes', SelecaoController.index)

app.get('/selecoes/:id', SelecaoController.show)

app.post('/selecoes', SelecaoController.store)

app.put('/selecoes/:id', SelecaoController.update)

app.delete('/selecoes/:id',SelecaoController.destroy) 

export default app

