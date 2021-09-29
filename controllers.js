const {Employees} = require('./database.setup')
const _= require('lodash')

module.exports = {

// Get all employees
getAll: async function(req, res, next) {
   await Employees.findAll().then(result => {
        res.json({ count: result.length, employee: result })
    }).catch(function(err){
            next(err)
    });
},

// Get one employee with id
getOne: async function(req, res, next) {
    await Employees.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(user){
        if(!user) {
            return res.status(404).send({error: 'User Not Found'})
        }else{
            res.json(user)
        }
    }).catch(function(err){
        next(err)
    });
},

// Create a new employee
create: async function(req, res, next) {
    if(Object.keys(req.body).length === 0) return res.status(400).send("Your request is missing details.");
    const req_email = req.body.email
    await Employees.findAndCountAll({where: { email: req_email }}).then(result => {
        if (result.count != 0) {
            res.status(400).send({error: 'Email address already in use'})
          }
    })
    const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city
    }
    data['fullname'] = data.firstname + data.lastname
    await Employees.create(data).then(function(){
        res.json({
          status : "Employee record successfully created."
        });
      }).catch(function (err) {
            next(err)
      });
},

// Update an employee
update: async function(req, res, next) {
    if(Object.keys(req.body).length === 0) return res.status(400).send("Your request is missing details.");
    const req_id = req.params.id
    await Employees.findOne({where: { id: req_id }}).then(record => {
        if (!record) {
            throw new Error('User Not Found')
          }

          const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            age: req.body.age,
            city: req.body.city
        }

        record.update(data).then(function(){
            res.status(201).send({
                status : `Employee with id ${req_id} record successfully updated.`
              });
        }).catch(function (err) {
            next(err)
         });
        
      }).catch(function (err) {
         next(err)
      });
},

// delete an employee 
delete: async function(req, res, next) {
    const req_id = req.params.id;

    await Employees.destroy({ 
        where: { id: req_id } 
    }).then(count => {
        if(!count){
            return res.status(404).send({error: 'User Not Found'})
        }
        res.status(204).send()
        }).catch(function (err){
            next(err)
        });
},

// delete all employees
deleteAll: async function(req, res, next){
    await Employees.destroy({
       where: {},
       truncate: true
    }).then(() => {
        res.status(204).end()
    }).catch(function(err){
        next(err)
    });
}

}
