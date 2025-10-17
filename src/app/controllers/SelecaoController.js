import conexao from '../database/conexao.js'

class SelecaoController {

    index(req, res) {
        const sql = 'SELECT * FROM selecoes'
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(404).send(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    show(req, res) {
        // res.json(buscarSelecaoPorId(req.params.id))
        const id = parseInt(req.params.id)
        const sql = 'SELECT * FROM selecoes WHERE id =?'
        conexao.query(sql, id, (erro, resultados) => {
            const row = resultados[0]
            if (erro) {
                res.status(404).send(erro)
            } else {
                res.status(200).json(row)
            }
        })
    }

    store(req, res) {
        const selecao = req.body
        const sql = 'INSERT INTO selecoes SET ?'
        conexao.query(sql, selecao, (erro, resultados) => {
            if (erro) {
                res.status(400).send(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    update(req, res) {
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
    }

    destroy(req, res) {
        const id = parseInt(req.params.id)
        const sql = 'DELETE FROM selecoes WHERE id =?'
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(404).send(erro)
            } else {
                res.status(204).json(resultados)
            }
        })
    }


}
//padrao singleton
export default new SelecaoController()