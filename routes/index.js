var router = require('express').Router();
// const { requiresAuth } = require('express-openid-connect');
const dataQuery = require('../db/conectionDB');

// callback para listar actividades en index

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


// callback para Listar actividades disponibles para borrar

router.get('/borrar', async (req, res) => {
    const datas = dataQuery.resultQuery(`SELECT * from actividad  ;`).then((data) => {
      
         res.render('borrar', {
             title: 'Moneda Aunar',
             data: data,
         });
     }).catch((err) => console.log(err));
});


// callback para borrar un dato específico

router.get('/borrar/:id_actividad', async (req, res) => {
    const { id_actividad } = req.params;
    const datas = dataQuery.resultQuery(`DELETE * from actividad WHERE ${id_actividad} =  id_actividad;`).then((data) => {
         res.render('/', {
            mensaje: 'Actividad eliminada'
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