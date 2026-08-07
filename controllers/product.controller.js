const Product = require('../models/product.model.js')

const getProducts = async (req , res) => {
    try{
              const products = await Product.find({});
              res.status(200).json({
                success : true,
                message : "Products retrieved successfully",
                data : products
              })
        }
        catch(error){
            res.status(500).json({
                succes : false,
                message : error.message
            })
    
            
        }
}

const getProduct = async (req,res)=>{
    try{
            const {id} = req.params;
            const product = await Product.findById(id);

            if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

            res.status(200).json({
                success : true , 
                message : "Product retrieved successfully",
                data : product
            })
        }
    catch(error){
         res.status(500).json(
            {
                success : false,
                message : error.message

            }
         )

        }
}

const createProduct = async (req , res) => {
        try{
           const product = await Product.create(req.body);
        res.status(200).json({
            success : true ,
            message : "Product created successfully",
            data : product
        })
        }
    
        catch(error){
            res.status(500).json({
                success: false ,
                message : error.message
            })
        }
}

const updateProduct = async (req,res) => {
     try{
          const {id} = req.params;
          const product = await Product.findByIdAndUpdate(id , req.body);
    
          if(!product){
           return res.status(404).json({
                success : false , 
                message : "Product not found" 
            })
          }
    
          const updatedProduct = await Product.findById(id);
    
          return res.status(200).json({
            success : true , 
            message : "Product updated successfully",
            data : updatedProduct
          })
        }
    
        catch(error){
            res.status(500).json({
                success : false , 
                message : error.message
            })    
        }
}

const deleteProduct = async (req , res) => {
     try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({
                succes : false,
                message : "Product to delete not found"
            })
        }

        return res.status(200).json({
            success : true,
            message : "Product deleted successfully"
        })

    }
    catch(error){
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct , 
    updateProduct , 
    deleteProduct
}