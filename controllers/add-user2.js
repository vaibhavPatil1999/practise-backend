const appointmentTable = require('../models/appointment')

const path = require('path')


const router = require('../routes/add-user')

exports.getController = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'))
}


exports.postController = async (req, res, next) => {
    try {

        if (!req.body.contact) {
            throw new error('contact number is mandatory')
        }

        const { name, Email, contact } = req.body
        /* const Obj = {
            name,
            Email,
            contact
        }
        res.json(Obj)*/
        const data = await appointmentTable.create({ name: name, email: Email, contact: contact })
        res.status(201).json(data)


    } catch (err) {
        res.status(500).json({ error: err })
    }
}






exports.getCon = async (req, res, next) => {
    try {
        const info = await appointmentTable.findAll()
        res.status(200).json({ info: info })
    } catch (err) {
        res.status(500).json({ error: err })
    }

}



exports.deleteCOn = async (req, res, next) => {
    try {
        if (!req.params.id) {
            console.log("ID is missing")
            res.status(400).json({ err: 'ID is missing' })
        }

        const ID = req.params.id

        await appointmentTable.destroy({ where: { id: ID } })
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

exports.updateC = (req,res,next) =>{

    const {name,email,phoneNumber,userID} = req.body
    
       var id = userID
    appointmentTable.findAll({where:{id}}).then((result)=>{
            appointmentTable.update({name:name,email:email,contact:phoneNumber},{where:{id}}).then(()=>{
                  var infoObj = {
                    name,
                    email,
                    phoneNumber,
                    id
                  }
                  res.json({data:infoObj})
            })
    })
}







