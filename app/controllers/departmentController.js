const Department = require('../models/department')

//list
module.exports.list = (req,res)=>{
    Department.find()
    .then(dept=>{
        res.json(dept)
    })
    .catch(err=>{
        res.json(err)
    })
}


//creare new
module.exports.create = (req,res)=>{
    const body = req.body
    const department = new Department(body)
    department.save()
    .then(dept=>{
        res.json(dept)
    })
    .catch(err=>{
        res.json(err)
    })
}

// show by id
module.exports.show=(req,res)=>{
    const id = req.params.id
    Department.findById(id)
    .then(dept=>{
        res.json(dept)
    })
    .catch(err=>{
        res.json(err)
    })
}

//update
module.exports.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Department.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then(department=>{
        res.json(department)
    })
    .catch(err=>{
        res.json(err)
    })
}
//delete
module.exports.delete = (req,res)=>{
    const id = req.params.id
    Department.findByIdAndDelete(id)
    .then(dept=>{
        res.json(dept)
    })
    .catch(err=>{
        res.json(err)
    })
}