const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'123456789',
    database: 'shumbasystem'
})
app.get('/api/getuser',(req,res)=>{
db.query('SELECT user_id,user_name,user_surname FROM users WHERE user_id = 26',
(err,result)=>{
    res.send(result)
})
})

app.get('/api/getorders', (req, res) => {
    db.query('SELECT * FROM orders WHERE sender_id = 26',
    (err,result)=>{
        res.send(result)
    })

})

app.post("/delete",(req,res)=>{
    const deluporder_number= req.body.deluporder_number
    db.query("DELETE FROM orders WHERE order_id = ?",[deluporder_number],
    (err,result)=>{
        res.send(result)
    })
})

app.post('/create',(req,res)=>{
    const order_num= req.body.order_num
    const recipient_name= req.body.recipient_name
    const recipient_surname= req.body.recipient_surname
    const recipient_id_no= req.body.recipient_id_no
    const phone_number= req.body.phone_number
    const dest_country= req.body.dest_country
    const address= req.body.address

    const sender_name= req.body.sender_name
    const sender_id= req.body.sender_id
    const source_country=req.body.source_country

    const currency= req.body.currency
    const amount= req.body.amount
    const name_of_bank= req.body.name_of_bank
    const bank_acc_number = req.body.bank_acc_number

    db.query('INSERT INTO orders (order_id,recipient_name,recipient_surname,national_id,phone_number,destination_country,source_country,address,sender_id,sender_name,currency,amount,bank,acc_num) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [order_num,recipient_name,recipient_surname,recipient_id_no,phone_number,dest_country,source_country,address,sender_id,sender_name,currency,amount,name_of_bank,bank_acc_number],
    (err,result)=>{
        if (err){
            console.log(err)
        }else{
            res.send("value insertion was a success")
        }
    })

})

app.listen(3001, () => {
    console.log("running server on port 3001")
});