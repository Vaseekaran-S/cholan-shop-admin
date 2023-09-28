
import { NextResponse } from "next/server";
import connectMongo from "@/lib/MongoDb";
import Products from "@/models/products/model";

export async function POST(req:Request){
    const data  = await req.json()

    await connectMongo()
    console.log(data);

    const res = await Products.create(data)
    console.log(res);
    
    return NextResponse.json({ type : "POST"})
    
}