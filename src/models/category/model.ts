
import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
    {
        category_name: String,
        category_description: String,
        sub_categories: [String],
        products: [mongoose.SchemaTypes.ObjectId],
    },{
        timestamps: true
    }
)

const Category =  mongoose.models.Categories || mongoose.model("Categories",CategorySchema)


export default Category