const router = require('express-promise-router')();

const { index } = require('../controllers/indexCtrl');
const { admin } = require('../controllers/adminCtrl');

const { login } = require('../middlewares/login');
const { veryjwt } = require('../middlewares/veryjwt');

const { alluser, oneuser, insertuser, updateuser, deleteuser, allmedicsuser, insertmedicsuser } = require('../controllers/userCtrl');
const { allform, oneform, insertform, updateform, deleteform } = require('../controllers/formCtrl');
const { allmedi, onemedi, insertmedi, updatemedi, deletemedi } = require('../controllers/mediCtrl');

//RUTA COMPROBACION
router.post('/login', login)

//RUTAS USUARIOS
router.get('/users', alluser);
router.get('/users/:id',  oneuser);
router.post('/users', insertuser);
router.put('/users/:id', updateuser);
router.delete('/users/:id',  deleteuser);
router.get('/users/medics/:id',  allmedicsuser);
router.post('/users/medics/:id', insertmedicsuser)

//RUTAS DE LAS FORMAS FARMACEUTICAS
router.get('/formafarmaceutica', allform);
router.get('/formafarmaceutica/:id', oneform);
router.post('/formafarmaceutica', insertform);
router.put('/formafarmaceutica/:id', updateform);
router.delete('/formafarmaceutica/:id',  deleteform);

//RUTAS DE LOS MEDICAMENTOS
router.get('/medicamento', allmedi);
router.get('/medicamento/:id', onemedi);
router.post('/medicamento', insertmedi);
router.put('/medicamento/:id', updatemedi);
router.delete('/medicamento/:id',  deletemedi);

module.exports = router;