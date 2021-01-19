const express = require('express');
const morgan = require('morgan');
const app = express();

const semillero = require('./routes/semillero');

require('dotenv').config();

app.use(morgan('dev'));

app.use(express.json());

//Routes

app.use('/semillero', semillero)

app.get('/',(req,res)=>{
    res.send('<h1>Semillero</h1>')
});

app.set('port',process.env.PORT || 5000);

app.listen(app.get('port'), ()=> {
  console.log(`Aplicación corriendo en el puerto ${app.get('port')}!`);
});