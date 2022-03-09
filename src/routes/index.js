const router = require('express').Router()

// Middlewares
const Healthcheck = require('../middlewares/healthcheck.js')

// CONTROLLERS

// ROUTES

// HEALTHCHECK
router.get('/healthcheck', Healthcheck.getHealth)

module.exports = router
