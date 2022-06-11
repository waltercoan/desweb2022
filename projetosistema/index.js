const express = require('express');
const { engine } = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

const fakedata = [
    {
        id: 1,
        nome: 'Zezinho',
        endereco: 'Rua lalalal 100',
        telefone: '5555-1234'
    },
    {
        id: 2,
        nome: 'Huguinho',
        endereco: 'Rua lululul 200',
        telefone: '5555-4321'
    }
];

app.set('view engine','handlebars');
app.engine('handlebars', engine());

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));


app.get('/', function(req,res){
    //res.send("<h1>eu nao acredito</h1>");
    res.render('index');
});

app.get('/clientes', function(req,res){
    //res.send("<h1>eu nao acredito</h1>");
    res.render('clientes', {listaclientes: fakedata});
});


app.listen(3000, () =>{
    console.log('Server online');
});
