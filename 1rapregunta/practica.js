const express = require('express');
const cors = require('cors');

const app = express();

const PUERTO = 3000;

app.use(cors());
app.use(express.json());

/* RES */
const Ruta1= async(req,res)=>{
    const {parametro}=req.query
/*     const parametro = process.env.parametro || 'v1'; */

    console.log("funciona");
    if(parametro === 1 ){
        return res.status(400).send({message:'RUTA1'})
    }
    else{
        if(parametro === 2 ){
            return res.status(400).send({message:'RUTA2'})
        }
        return res.status(400).send({error:'NO ES RUTA'})
    }
}

const Ruta2= async(req,res)=>{
    const {ruta}=req.body;
    if(ruta === 1 ){
        return res.status(400).send({message:'RUTA1'})
    }
    else{
        if(ruta === 2 ){
            return res.status(400).send({message:'RUTA2'})
        }
        return res.status(400).send({error:'NO ES RUTA'})
    }
}



/* RUTAS  */

app.get('/api/prueba/:parametro',Ruta1)
app.post('/api/prueba/v1',Ruta2)



app.listen(PUERTO,()=>console.log(`Conectado por Puerto ${PUERTO}`))