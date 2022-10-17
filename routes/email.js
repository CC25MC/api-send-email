/*
    Ruta de files
    host + /files/data
*/
const { Router } = require('express')
const router = Router()
const { sendEmail } = require('../controllers/emails')

// Rutas
router.post("/send-email", sendEmail)

module.exports = router
