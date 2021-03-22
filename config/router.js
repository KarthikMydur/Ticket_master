const express = require('express')
const router = express()

const departmentController = require('../app/controllers/departmentController')
const customerController = require('../app/controllers/customerController')
const employeeController = require('../app/controllers/employeeController')

//department
router.get('/department', departmentController.list)
router.post('/department/new', departmentController.create)
router.get('/department/:id', departmentController.show)
router.put('/department/:id', departmentController.update)
router.delete('/department/:id',departmentController.delete)

//customer
router.get('/customer', customerController.list)
router.post('/customer/new', customerController.create)
router.get('/customer/:id', customerController.show)
router.put('/customer/:id', customerController.update)
router.delete('/customer/:id',customerController.delete)

//employee
router.get('/employee', employeeController.list)
router.post('/employee/new', employeeController.create)
router.get('/employee/:id', employeeController.show)
router.put('/employee/:id', employeeController.update)
router.delete('/employee/:id', employeeController.delete)

module.exports = router