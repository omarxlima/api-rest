import express from 'express'

const app = express()
//indicar que o express vai trabalhar com json
app.use(express.json())

//mock de seleções
let selecoes = [
  { id: 1, nome: 'Brasil', 'grupo': 'G' },
  { id: 2, nome: 'Alemanha', 'grupo': 'G' },
  { id: 3, nome: 'Argentina', 'grupo': 'G' },
  { id: 4, nome: 'França' , 'grupo': 'G'},
]

//rotas

app.get('/', (req, res) => {
  res.send('Hello World, mARX!')
})

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})

app.post('/selecoes', (req, res) => {
  const novaSeleção = {
    id: parseInt(selecoes.length + 1),
    ...req.body
  }
  selecoes.push(novaSeleção)
  res.status(201).json(novaSeleção)
})

export default app

