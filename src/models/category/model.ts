
import mongoose, { Schema, deleteModel } from "mongoose";

const CategorySchema = new Schema(
    {
        category_name: String,
        total_products: Number,
        products : Array,
    }
)

const Category =  mongoose.models.Category || mongoose.model("Category",CategorySchema,"category")

export default Category