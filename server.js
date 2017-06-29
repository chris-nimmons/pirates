const express = require('express');
const mustached = require('mustache-express');
const parser = require('body-parser');
const models = require('./models');

const application = express();

application.engine('mustache', mustached());
application.set('views', './views');
application.set('view engine', 'mustache');

application.get('/pirates', async (request, response) => {
    var pirates = await models.pirates.all();
    var query = { where: { id: 2 }, include: [models.islands ] };
    var pirate = await models.pirates.find(query);
});

application.listen(3000);