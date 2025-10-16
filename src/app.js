import express from 'express'

import conexao from '../infra/conexao.js'

const app = express()
//indicar que o express vai trabalhar com json
app.use(express.json())


function buscarSelecaoPorId(id) {
  return selecoes.find(selecao => selecao.id === parseInt(id))
}
//pegar index do elemento no array
function buscarIndexSelecao(id) {
  return selecoes.indexOf(buscarSelecaoPorId(id))
}



//rotas
app.get('/selecoes', (req, res) => {
  //res.status(200).send(selecoes)
  const sql = 'SELECT * FROM selecoes'
  conexao.query(sql, (erro, resultados) => {
    if (erro) {
      res.status(404).send(erro)
    } else {
      res.status(200).json(resultados)
    }
  })
})

app.get('/selecoes/:id', (req, res) => {
  // res.json(buscarSelecaoPorId(req.params.id))
  const id = parseInt(req.params.id)
  const sql = 'SELECT * FROM selecoes WHERE id =?'
  conexao.query(sql,id,(erro, resultados) => {
    const row = resultados[0]
    if (erro) {
      res.status(404).send(erro)
    } else {
      res.status(200).json(row)
    }
  })
})

app.delete('/selecoes/:id', (req, res) => {
   const id = parseInt(req.params.id)
  const sql = 'DELETE FROM selecoes WHERE id =?'
  conexao.query(sql,id,(erro, resultados) => {
    if (erro) {
      res.status(404).send(erro)
    } else {
      res.status(204).json(resultados)
    }
  })
})

app.put('/selecoes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const selecao = req.body
  const sql = 'UPDATE selecoes SET ? WHERE id = ?'
  conexao.query(sql, [selecao, id], (erro, resultados) => {
    if (erro) {
      res.status(400).send(erro)
    } else {
      res.status(200).json(resultados)
    }
  })
})

app.post('/selecoes', (req, res) => {
  const selecao = req.body
  const sql = 'INSERT INTO selecoes SET ?'
  conexao.query(sql, selecao, (erro, resultados) => {
    if (erro) {
      res.status(400).send(erro)
    } else {
      res.status(201).json(resultados)
    }
  })

})

export default app

