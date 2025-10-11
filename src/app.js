import express from 'express'

const app = express()

//mock de seleções
const selecoes = [
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

export default app

