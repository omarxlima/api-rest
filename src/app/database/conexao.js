import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'NovaSenha123!',
    database: 'bd_copa'
});

conexao.connect();

/**
 * Executa uma consulta no banco de dados com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores 
 * @param {string} menssagemReject 
 * @returns objeto da Promisse
 */

export const consulta = (sql, valores='', menssagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultados) => {
            if (erro) {
                return reject(menssagemReject)
            } else {
                const row = JSON.parse(JSON.stringify(resultados))
                return resolve(row)
            }
        })
    })
}
export default conexao;