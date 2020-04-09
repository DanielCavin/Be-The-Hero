const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(cors())
//1h24
app.use(express.json())
app.use(routes)


app.listen(3333)

/**
 *Tipos de parametros :
 *Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *Route Params: Parâmetros utilizados para identificar recursos "/:id"
 *Request body: Corpo da requisição , utilizada para criar ou alterar recursos
 */

/**
 * Driver : Select * from users
 * Query Builder : Table('users').select('*').where()
 *
 */