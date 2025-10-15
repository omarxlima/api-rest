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

function buscarSelecaoPorId(id) {
  return selecoes.find(selecao => selecao.id === parseInt(id))
}
//pegar index do elemento no array
function buscarIndexSelecao(id) {
  return selecoes.indexOf(buscarSelecaoPorId(id))
}

//rotas

app.get('/', (req, res) => {
  res.send('Hello World, mARX!')
})

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    if (index === -1) {
        res.status(404).send({ message: 'Seleção não encontrada' })
    } else {
        selecoes.splice(index, 1)
        res.status(204).send()
    }
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    if (index === -1) {
        res.status(404).send({ message: 'Seleção não encontrada' })
    } else {
        selecoes[index].nome = req.body.nome
        selecoes[index].grupo = req.body.grupo
        res.json(selecoes[index])
    }
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

