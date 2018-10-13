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

