const asyncHandler = require('express-async-handler')

const Category = require('../model/Category')
const Transaction = require('../model/Transaction')
const categoryControl ={

    //! Add 
    create: asyncHandler(async(req,res)=>{ 
        const {name,type} =req.body
       console. log(req.user.id)
        console.log(name,type);

        const lowercaseName = name.toLowerCase()
        const validTypes = ['income','expense'];

        if(!validTypes.includes(type.toLowerCase())){
            throw new Error(`Invalid type : + ${type}`  )
        }
// ! check if category already exists in user
const categoryExists = await Category.findOne({
    name:lowercaseName,
    user:req.user?.id
})

if(categoryExists){
    throw new Error(`Category already exists in user: `+categoryExists.user)
}

const createCategory = await Category.create({
    user:req.user?.id,
    name:lowercaseName,
    type:type.toLowerCase()
    })

    if(createCategory){
        res.json({
            message:'Category created successfully',
            createCategory
        })
    }else{
        throw new Error('some error occured while creating category')
    }
    
    //? end of create category
    }),
    //! list
    list: asyncHandler(async(req,res)=>{
        const listCategory = await Category.find({user:req.user?.id})
        if(!listCategory){
            throw new Error('No categories found')
        }else{
            res.json({catorgies:listCategory})
        }  
     }),

    // ! Update
    update: asyncHandler(async(req,res)=>{
        const catId = req.params.id
        const {name,type} = req.body
        const normalizeName = name.toLowerCase()
        const categoryUpd = await Category.findById(catId) //?Find Category id 
        if(!categoryUpd && categoryUpd.user.toString() !== catId.toString()){
            throw new Error('Invalid category update request')
        }
        categoryUpd.name = name || categoryUpd.name
        categoryUpd.type = type || categoryUpd.type
        const updateCategory = await categoryUpd.save()


        
    res.json({ message:'Category updated successfully',updateCategory})        


        
    }),

    //! Delete
    delete: asyncHandler(async(req,res)=>{
        const catId= req.params?.id
        console.log(catId);
        
        // const TransId = await Transaction.updateMany({category:catId,user:req.user?.id},{category:null})
        const deletedCat =await Category.deleteOne({user:req.user?.id,_id:catId})

        res.json({message:"Category deleted successfully",deletedCat})

    }) 

}
module.exports = categoryControl