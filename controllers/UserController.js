const Users = require('../models/Users')
const index = (req,res,next) =>{
    Users.find().then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}
const show = (req,res,next)=>{
    let userId = req.body.userId
    Users.findById(userId)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })}
const store = (req,res,next)=>{
    let user = new Users({
        username : req.body.username,
        email : req.body.email
    })
    user.save()
    .then(response=>{
        res.json({
            message:'User added successfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
}
    const update = (req,res,next)=>{
        let userId = req.body.userId
        let updatedData = {
            username: req.body.username,
            email: req.body.email
        }
        Users.findByIdAndUpdate(userId,{$set : updatedData})
        .then(()=>{
            res.json({
                message: 'User updated successfully!'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error Occured!'
            })
        })
    }
    const destroy = (req,res,next)=>{
        let userId = res.body.userId
        Users.findByIdAndRemove(userId)
        .then(()=>{
            res.json({
                message: 'User removed successfully'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error Occured'
            })
        })
    }
    module.exports= {
        index,show,store,update,destroy
    }