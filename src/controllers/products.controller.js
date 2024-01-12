import { Dto } from "../models/Dto.js";



export const getProducts = async (req, res) => {



try {
     res.status(201).json({
        products: [{}]
    })
} catch (error) {
    
}

   

};

export const createProduct = async (req, res) => {

 
    res.status(200).json({
        msg:"Producto creado correctamente"
    })


};

export const deleteProduct = async (req, res) => {



};