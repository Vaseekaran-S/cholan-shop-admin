
import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
    {
        category_name: String,
        category_description: String,
        total_products: Number,
        products : Array,
    },{
        timestamps: true
    }
)

console.log(mongoose.models);

const Category =  mongoose.models.Categories || mongoose.model("Categories",CategorySchema)
console.log(mongoose.models);


export default Category