import connectMongo from "@/lib/MongoDb";
import Products from "@/models/products/model";
import { NextResponse } from "next/server";


export async function GET(req:Request){

    const id = req.url.split("product_id/")[1]    
    await connectMongo()
    const response = await Products.findOne({product_id : id })

    return NextResponse.json({ exist: !!response })
    
}