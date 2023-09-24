
import mongoose, { Schema } from "mongoose";

const Product = new Schema(
    {
        name: String,
        id: Number,
        description: String,
        price: Number,
        category: String,
        image: String,
        offer: String,
        discount: Number,
    },
    {
        timestamps : true
    }
)