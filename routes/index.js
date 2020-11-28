var router = require('express').Router();
// const { requiresAuth } = require('express-openid-connect');
const dataQuery = require('../db/conectionDB');

// callback para listar actividades en index
router.get('/', function (req, res, next) {
    const datas = dataQuery.resultQuery(`SELECT * from actividad  ;`).then((data) => {
        res.render('index', {
            title: 'Moneda Aunar',
            data: data,

        });
    }).catch((err) => console.log(err));
});

// callback para Listar actividades disponibles en ruta /borrar
router.get('/borrar', async (req, res) => {
    const datas = dataQuery.resultQuery(`SELECT * from actividad  ;`).then((data) => {
        res.render('borrar', {
            title: 'Moneda Aunar',
            data: data,
            mensaje: '',
        });
    }).catch((err) => console.log(err));
});


// callback para borrar un dato específico
router.get('/borrar/:id', (req, res) => {
    // console.log(req.params.id)
    // res.send('Ok');
    const { id } = req.params;
    const datas = dataQuery.resultQuery(`DELETE from actividad WHERE id_actividad = ${id};`).then((data) => {
        res.redirect('/borrar');
    }).catch((err) => console.log(err));
});


router.get('/registro', (req, res) => {
    res.render('admin/registro');
});

router.get('/registro2', (req, res) => {
    res.render('admin/prueba');
});


module.exports = router;