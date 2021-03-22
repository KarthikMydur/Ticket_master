const Customer = require('../models/customer')

//list
module.exports.list = (req,res)=>{
    Customer.find()
    .then(cust=>{
        res.json(cust)
    })
    .catch(err=>{
        res.json(err)
    })
}


//creare new
module.exports.create = (req,res)=>{
    const body = req.body
    const customer = new Customer(body)
    customer.save()
    .then(cust=>{
        res.json(cust)
    })
    .catch(err=>{
        res.json(err)
    })
}

// show by id
module.exports.show=(req,res)=>{
    const id = req.params.id
    Customer.findById(id)
    .then(cust=>{
        res.json(cust)
    })
    .catch(err=>{
        res.json(err)
    })
}

//update
module.exports.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Customer.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then(cust=>{
        res.json(cust)
    })
    .catch(err=>{
        res.json(err)
    })
}
//delete
module.exports.delete = (req,res)=>{
    const id = req.params.id
    Customer.findByIdAndDelete(id)
    .then(cust=>{
        res.json(cust)
    })
    .catch(err=>{
        res.json(err)
    })
}