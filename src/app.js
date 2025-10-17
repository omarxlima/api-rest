import express from 'express'

import routes from './app/routes.js'

const app = express()

//indicar que o express vai trabalhar com json
app.use(express.json())
//usar o router
app.use(routes)


export default app

