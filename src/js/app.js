const cors = require('cors'); 
const bodyparser = require('body-parser')
var express = require('express');
const { pool } = require('./queries');

var app = express();

app.use(cors())
app.use(bodyparser.json())

//Muestra la tabla
app.get('/api/rutero', (req, res)=>{
    const search = req.query.search ?? '';
    const date = new Date(req.query.dateFilter ?? '');
    date.setDate(date.getDate()+1)
    const dateFilter = req.query.dateFilter ? `and (datelocal between date ('${req.query.dateFilter}') and date ('${date.toISOString().split('T')[0]}'))`
    : '';
    pool.query(`SELECT * FROM observations where (area ilike '%${search}%' or name ilike '%${search}%' or observations ilike '%${search}%') ${dateFilter} order by datelocal desc limit 5 offset ${(req.query.pag-1)*5}`, (error, result)=>{
        if(error){
            throw error;
        }else{
            res.send(result.rows);
        }
    })
});

app.post('/api/rutero', (req, res)=>{
    const {area, name, observations, datelocal} = req.body
    pool.query('insert into observations (area, name, observations, datelocal) values ($1, $2, $3, $4)', [area, name, observations, datelocal], (error,result)=>{
        if(error){
            throw error;
        }else{
            res.send({message: 'OK'});
        }
    })
})

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function(){
    console.log("Servidor OK EN PUERTO:"+puerto);
});

