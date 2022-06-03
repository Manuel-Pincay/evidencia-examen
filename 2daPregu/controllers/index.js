const { response } = require('express');

const numero= async(req,res)=>{
    const {numero}=req.body;
    const numer = new numer(body);
    const newnumer = await numer.save();
    res.status(201).json(newnumer);

    return res.status(200).send({message:'SAVE'})
}

const obtenernumero = async (req,res = response)=>{
    const {id} = req.params;
    const numer  = await Espacio.findById(id).catch((err)=>{res.status(400).json({status:'No es una ID valida >:c', error:err})});
    res.json(espacio);
}

module.exports= {numero, obtenernumero}