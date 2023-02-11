//IMPORTS
const express = require('express');
const mongoose =require('mongoose');
require('dotenv').config();
//console.log(process.env)

const CBCSTUDENTSRoutes = require('./routes/CBCSTUDENTS');

const PORT = process.env.PORT;
//connecting app to mongodb

const connectionString = process.env.DATABASE_URL;
mongoose.connect(connectionString);

const database = mongoose.connection;

database.on('error',(error) => {
    console.log(error);
});


database.on('connected',() => {
    console.log('Database connected');
});

//Creating express app
const app = express();
app.use(express.json());


app.use('/CBCSTUDENTS',CBCSTUDENTSRoutes);


app.listen(PORT, () => {
    console.log('server has started on PORT ${PORT}');
});


