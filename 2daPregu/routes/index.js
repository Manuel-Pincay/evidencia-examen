const { Router } = require('express');  

const {numero,
obtenernumero} = require('../controllers')


router.get('/' , numero)
router.post('/:busqueda', obtenernumero)