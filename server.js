const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

//Database connection
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error)=>{
    console.error('ERROR: ' + error.message);
});

//loading models
require('./models/Post');

const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), ()=>{
    console.log('Server running in port: ' + server.address().port);
});