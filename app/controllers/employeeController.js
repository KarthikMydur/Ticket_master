const Employee = require('../models/employee')

//get list
module.exports.list =(req,res)=>{
    Employee.find()
    .then(emp=>{
        res.json(emp)
    })
    .catch(err=>{
        res.json(err)
    })
}

//create new
module.exports.create=(req,res)=>{
    const body = req.body
    console.log(body)
    const employee = new Employee(body)
    employee.save()
    .then(emp=>{
        res.json(emp)
    })
    .catch(err=>{
        res.json(err)
    })
}

//show
module.exports.show=(req,res)=>{
    const id = req.params.id
    Employee.findById(id)
    .then(emp=>{
        res.json(emp)
    })
    .catch(err=>{
        res.json(err)
    })
}

//update
module.exports.update=(req,res)=>{
    const id = req.params.id
    const body = req.body
    Employee.findByIdAndUpdate(id, body,{ new: true, runValidators: true})
    .then(emp=>{
        res.json(emp)
    })
    .catch(err=>{
        res.json(err)
    })
}

//delete
module.exports.delete=(req,res)=>{
    const id = req.params.id
    Employee.findByIdAndDelete(id)
    .then(emp=>{
        res.json(emp)
    })
    .catch(err=>{
        res.json(err)
    })
}