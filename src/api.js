require('dotenv').config()
const express = require('express')
const cors = require('cors')
const config = require('./config/index')

const basePath = '/api'

const api = express()

api.use(cors())

if (config.env !== 'production') {
  // use http logger for dev environment
  const morgan = require('morgan')
  api.use(morgan('dev'))
  const swaggerUi = require('swagger-ui-express')
  const swaggerDocument = require('../docs/openapi.json')
  api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

// Disabled x-powered-by for security
api.disable('x-powered-by')

// Parse body params and attach them to req.body
api.use(express.json())
api.use(express.urlencoded({ extended: true }))

// include routes and expose in base path
api.use(basePath, require('./routes'))

api.listen(config.port, () => {
  console.log(`SERVER on http://localhost:${config.port} in ${config.env}`)
})
