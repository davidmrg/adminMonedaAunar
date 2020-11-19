var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
const dataQuery = require('../db/conectionDB');


router.get('/', function(req, res, next) {
    const datas = dataQuery.resultQuery(`SELECT * from actividad  ;`).then((data) => {
        console.log(data);
        res.render('index', {
            title: 'Moneda Aunar',
            data: JSON.stringify(data, null, 2),
            isAuthenticated: req.oidc.isAuthenticated()
        });
    }).catch((err) => console.log(err));
});

router.get('/profile', requiresAuth(), function(req, res, next) {
    console.log(req.oidc.user);
    const dataQ = dataQuery.resultQuery('SELECT * from estudiante').then((data) => {
            res.render('profile', {
                userProfile: JSON.stringify(req.oidc.user, null, 2),
                title: 'Perfil',
                data: data
            });
        })
        .catch((err) => console.log(err));
});




module.exports = router;