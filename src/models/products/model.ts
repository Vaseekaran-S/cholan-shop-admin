
import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        name: String,
        product_id: Number,
        category: String,
        price: Number,
        brand : String,
        offer: String,
        discount: Number,
        colour : String,
        description: String,
        image: String,
    },{
        timestamps : true
    }
)

const Products = mongoose.models.Products || mongoose.model("Products",ProductSchema)

export default Products