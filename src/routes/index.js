const { Router } = require('express');
const countryRoute = require("./Country");
const activityRoute = require("./Activity");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.use("/countries",countryRoute)
router.use("/activities",activityRoute)


module.exports = router;



