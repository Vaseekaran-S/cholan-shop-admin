
import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
    {
        product_name: String,
        product_title: String,
        product_id: Number,
        category: mongoose.SchemaTypes.ObjectId,
        sub_category: String,
        brand: mongoose.SchemaTypes.ObjectId,
        model: String,
        price: Number,
        quantity: Number,
        offer: String,
        discount: Number,
        colour : String,
        description: String,
        images: [String],
        rating: [Number],
        total_rating: Number,
        orders: [mongoose.SchemaTypes.ObjectId],
    },{
        timestamps : true
    }
)

const Products = mongoose.models.Products || mongoose.model("Products",ProductSchema)

export default Products