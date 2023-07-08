const express = require('express');
const router = express.Router();
const mysqlConnection = require('../connection/connection');
const jwt = require('jsonwebtoken');

router.get('/ListarCancers',(req,res)=> {
    mysqlConnection.query('select * from typeofcancer',(err,rows,fields)=> {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.post('/InsertCancer', (req,res) => {
    mysqlConnection.query('insert into typeofcancer(cancerName,cancerDescription) values(?,?)',
    [req.body.cancerName,req.body.cancerDescription],(err,respuesta) =>{
        if(err){
            console.log(err);
        }else{
            console.log(respuesta.rows);
            res.send(JSON.stringify({"status":"ok","item":respuesta.rows}));
        }
    })
})
router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    mysqlConnection.query(`delete from typeofcancer where idCancer=${id}`, (err,resp,fields)=>{
        if(err){
            console.log(err);
        }else{
            res.status(200).send({
                message: "Cancer Deleted"
            });
        }
    })
})

module.exports = router;