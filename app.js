const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "root",
    database: "football_club", 
    supportBigNumbers: true, 
    bigNumberStrings: true
});

getColumns = require('./getColumns');


app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

// app.post("/postItems",function(req,res,next){

//     let data=req.body.data

//     let query=`INSERT INTO items_order (username,item_name,price,customerId,quantity)
//     VALUES ?
//     `
//     pool.query(query,[data],(err,results)=>{
    
//         if(err){
//             res.status(400).send("error")
//             return
//         }
//         else{
//             res.status(200).send(results)
//             return
//         }
//     })

// })

app.get('/', function(req, res) {
    res.render('dashboard/view');
});


const adminDashboardRoutes = require('./routes/adminDashboard');

app.use("/", adminDashboardRoutes);

const server = app.listen(3000, function(){
    console.log("Server listening at port 3000!!!");
})
