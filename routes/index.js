var router = require('express').Router();
// const { requiresAuth } = require('express-openid-connect');
const dataQuery = require('../db/conectionDB');


router.get('/', function(req, res, next) {
    const datas = dataQuery.resultQuery(`SELECT * from actividad  ;`).then((data) => {
       /*for(var i=0; i<9;i++){
        console.log(data[i])
       };*/
        res.render('index', {
            title: 'Moneda Aunar',
            data: data,
            
        });
    }).catch((err) => console.log(err));
});



router.get('/registro', (req, res) => {
    res.render('admin/registro');
  });

  router.get('/registro2', (req, res) => {
    res.render('admin/prueba');
  });


module.exports = router;