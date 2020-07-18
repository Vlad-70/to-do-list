const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const date = require('./views/date.js');
const listItems = ['Buy something'];
const workItems = [];

app.get('/', (req, res) => res.render('list',
  {title: 'To-Do-List', heading: date.today, year: date.year,
   listItems: listItems}));

app.get('/work', (req, res) => res.render('list',
  {title: 'Work List', heading: date.day, year: date.year,
   listItems: workItems}));

app.post('/', (req, res) => {

  if (req.body.button === 'Work') {
    workItems.push(req.body.newItem);
    res.redirect('/work');
  }
  else {
    listItems.push(req.body.newItem);
    res.redirect('/');
  }
})

app.listen(3000, () => console.log('Server is running'));
