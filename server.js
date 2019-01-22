<<<<<<< HEAD
const server = require('./configs/app')();
const config = require('./configs/config/config');
const db = require('./configs/db');

//create the basic server setup 
server.create(config, db);

//start the server
server.start();
=======
const express = require('express'),
      app = express(),
      hbs = require('express-handlebars').create({defaultLayout:'index.hbs'});

//setting our app engine to handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/',(request,response)=>{
  response.render('homepage',{title: 'homepage'});
});

app.listen(3010,()=>console.log('node.js express server started at port 3010'));

>>>>>>> 725b3098e1de92ed888a114cef0bc2ed7d57e65d
