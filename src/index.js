const express = require('express');
const handlebabrs = require('express-handlebars');
const { configHbs } = require('./config/hbs');
const { configExpress } = require('./config/express');
const { router } = require('./config/routes');
const { configDataBase } = require('./config/database');

const PORT = process.env.PORT || 3000;

async function start() {
  const app = express();

  await configDataBase();
  configHbs(app);
  configExpress(app);
  app.use(router);

  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

start();
