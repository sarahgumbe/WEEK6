//IMPORTS
const express = require('express');

const PORT = process.env.PORT ||3000;

//Creating express app
const app = express();
app.use(express.json());

//Routes
app.post('/',(req ,res)=> {
    const body = req.body;
    console.log(body)
    res.status(200).json({message:'sucess'})
});


app.listen(PORT, () => {
    console.log('server has started on PORT ${PORT}');
});


