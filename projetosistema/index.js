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
/*Configura a engine (motor) do express para utilizar o handlebars */
app.use(bodyparser.urlencoded({extended: false}));
app.set('view engine','handlebars');
app.engine('handlebars', engine());

/*disponibilizando acesso para as bibliotecas estaticas do bootstrap e jquery */
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));


app.get('/', function(req,res){
    //res.send("<h1>eu nao acredito</h1>");
    res.render('index');
});

app.get('/clientes/novo', function(req,res){
    res.render('formcliente');
});

app.post('/clientes/save', function(req,res){
    let novocliente = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        telefone: req.body.telefone,
        id: 0
    };
    fakedata.push(novocliente);
    res.redirect("/clientes");
});


app.get('/clientes', function(req,res){
    //res.send("<h1>eu nao acredito</h1>");
    res.render('clientes', {listaclientes: fakedata});
});

/*inicialização da aplicação NodeJS + Express */
app.listen(3000, () =>{
    console.log('Server online - http://localhost:3000/');
});
