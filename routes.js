var employee = require('./controllers');

module.exports = function (router) {

  router.get('/employees', employee.getAll);
  router.get('/employee/:id', employee.getOne);
  router.post('/employee/create', employee.create);
  router.put('/employee/:id', employee.update);
  router.delete('/employee/:id', employee.delete);
  router.delete('/employees', employee.deleteAll);

  return router
};