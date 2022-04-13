const express = require('express');
const router = express.Router();
const empController = require('../contollers/empController');

//get all employee
router.get('/list', empController.getEmp);

//get all employee
router.get('/id/:id', empController.getId);

//post create new employee
router.post('/add', empController.addEmp);

//put edit employee
router.put('/edit/:id', empController.editEmp);

//delete employee
router.delete('/delete/:id', empController.deleteEmp);

module.exports = router;