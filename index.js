const express = require('express');
const exphbs = require('express-handlebars');
const { sequelize } = require('./config/database');
const routes = require('./routes');

const app = express();

app.use(express.static('public'));

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
