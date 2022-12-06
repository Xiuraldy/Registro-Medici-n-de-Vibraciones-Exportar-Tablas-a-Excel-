const cors = require('cors'); 
const bodyparser = require('body-parser')
var express = require('express');
const { pool } = require('./queries');

var app = express();

app.use(cors())
app.use(bodyparser.json())

//Muestra la tabla
app.get('/api/Vibraciones', (req, res)=>{
    const search = req.query.search ?? '';
    const date = new Date(req.query.dateFilter ?? '');
    date.setDate(date.getDate()+1)
    const dateFilter = req.query.dateFilter ? `and (datelocal between date ('${req.query.dateFilter}') and date ('${date.toISOString().split('T')[0]}'))`
    : '';
    pool.query(`SELECT * FROM records where (machine ilike '%${search}%' or name ilike '%${search}%') ${dateFilter} order by datelocal desc`, (error, result)=>{
        if(error){
            throw error;
        }else{
            res.send(result.rows);
        }
    })
});

app.post('/api/Vibraciones', (req, res)=>{
    const {name, machine, llmvllcv, llgellcv, lltempllcv, lcmvllcv, lcgellcv, lctempllcv, llmvllch, llgellch, lltempllch, lcmvllch, lcgellch, lctempllch, llmvllca, llgellca, lltempllca, lcmvllca, lcgellca, lctempllca, llmvlccv, llgelccv, lltemplccv, lcmvlccv, lcgelccv, lctemplccv, llmvlcch, llgelcch, lltemplcch, lcmvlcch, lcgelcch, lctemplcch, llmvlcca, llgelcca, lltemplcca, lcmvlcca, lcgelcca, lctemplcca, datelocal} = req.body
    pool.query('insert into records (name, machine, llmvllcv, llgellcv, lltempllcv, lcmvllcv, lcgellcv, lctempllcv, llmvllch, llgellch, lltempllch, lcmvllch, lcgellch, lctempllch, llmvllca, llgellca, lltempllca, lcmvllca, lcgellca, lctempllca, llmvlccv, llgelccv, lltemplccv, lcmvlccv, lcgelccv, lctemplccv, llmvlcch, llgelcch, lltemplcch, lcmvlcch, lcgelcch, lctemplcch, llmvlcca, llgelcca, lltemplcca, lcmvlcca, lcgelcca, lctemplcca, datelocal) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39)', [name, machine, llmvllcv || null, llgellcv|| null, lltempllcv || null, lcmvllcv || null, lcgellcv || null, lctempllcv || null, llmvllch || null, llgellch || null, lltempllch || null, lcmvllch || null, lcgellch || null, lctempllch || null, llmvllca || null, llgellca || null, lltempllca || null, lcmvllca || null, lcgellca || null, lctempllca || null, llmvlccv || null, llgelccv || null, lltemplccv || null, lcmvlccv || null, lcgelccv || null, lctemplccv || null, llmvlcch || null, llgelcch || null, lltemplcch || null, lcmvlcch || null, lcgelcch || null, lctemplcch || null, llmvlcca || null, llgelcca || null, lltemplcca || null, lcmvlcca || null, lcgelcca || null, lctemplcca || null, datelocal], (error,result)=>{
        if(error){
            throw error;
        }else{
            res.send({message: 'OK'});
        }
    })
})

const puerto = process.env.PUERTO || 443;

app.listen(puerto, function(){
    console.log("Servidor OK EN PUERTO:"+puerto);
});

