const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
});

const app = express();
app.use(bodyParser.json());
app.use(compression());
knex
  .select('*')
  .from('characters')
  .where({ first_name: 'Lift' })
  .then((families) => console.log(families))
  .catch((e) => console.log(e));
// console.log(knex);
app.listen(process.env.PORT || 3001, () =>
  console.log(`app is running on port ${process.env.PORT || 3001}`)
);
