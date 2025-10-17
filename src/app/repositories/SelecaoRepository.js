import conexao from '../database/conexao.js'

class SelecaoRepository {

    create(selecao) {
         const sql = 'INSERT INTO selecoes SET ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, resultados) => {
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(resultados)
                }
            })
        })
     }
    findAll() {
        const sql = 'SELECT * FROM selecoes'
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultados) => {
                if (erro) {
                    return reject(erro)
                } else {
                    const row= JSON.parse(JSON.stringify(resultados))
                    return resolve(row)
                }
            })
        })
    }
    findById(id) { 
        const sql = 'SELECT * FROM selecoes WHERE id =?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultados) => {
                if (erro) {
                    return reject(erro)
                } else {
                    const row= JSON.parse(JSON.stringify(resultados))
                    return resolve(row)
                }
            })
        })
    }
    update(selecao,id) { 
        const sql = 'UPDATE selecoes SET ? WHERE id = ?'
       return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultados) => {
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(resultados)
                }
            })
        })
    }
    destroy(id) {
        const sql = 'DELETE FROM selecoes WHERE id =?'
         return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultados) => {
                if (erro) {
                    return reject(erro)
                } else {
                    return resolve(resultados)
                }
            })
        })
     }
    }


export default new SelecaoRepository()

