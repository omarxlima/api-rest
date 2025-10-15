import app from './src/app.js'

import conexao from './infra/conexao.js'

const PORT = 3000

//fazer a conexçao com o banco de dados
conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log('Conexão com o banco de dados realizada com sucesso!');
    app.listen(PORT, () => {
      console.log(`Example app listening on PORT http://localhost:${PORT}`)
    })
  }
});

