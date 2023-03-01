let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

//Expre4ss route

const vehicleRoute = require('../backend/routes/vehicle.route');
const { Next } = require('react-bootstrap/esm/PageItem');

//Mongodb database connection

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: user
}).then(() => {
    console.log('Database Successfully Connected')
},

    error => {
        console.log('could not connect to the database' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/vehicles', vehicleRoute)

//port

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to the port' + port)
})

//not found
app.use((req, res,next) =>{
    next(createError(404));
})

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode= 500;
    res.status(err.statusCode).send(err.message);
})