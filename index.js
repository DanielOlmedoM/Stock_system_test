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

const {google} = require('googleapis');

// Each API may support multiple versions. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const blogger = google.blogger({
  version: 'v3',
  auth: 'YOUR API KEY'
});

const params = {
  blogId: '3213900'
};

// get the blog details
blogger.blogs.get(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`The blog url is ${res.data.url}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
