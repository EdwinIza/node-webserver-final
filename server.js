const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


//MOTOR DE PLANTILLAS HBS
// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: "rodRigo tuFIño"
    });
});

//RENDERIZACION DE LA PAGINA
app.get('/about', (req, res) => {
    //res.send('Esta es mi primera web app');
    res.render('about');
});


//PUERTO EN EL QUE SE EJECUTA LA APLICACION
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});