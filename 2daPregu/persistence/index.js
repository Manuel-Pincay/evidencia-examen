const numer = Schema({

    numero:{
        type:String,
        require:[true, `El nombre del producto es obliogatorio`], 
        unique: true
    }
})