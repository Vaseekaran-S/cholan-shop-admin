
import { NextResponse } from "next/server";
import connectMongo from "@/lib/MongoDb";
import Products from "@/models/products/model";

export async function POST(req:Request){
    const data  = await req.json()
    await connectMongo()

    const response = await Products.create(data)    
    return NextResponse.json(response)
    
}