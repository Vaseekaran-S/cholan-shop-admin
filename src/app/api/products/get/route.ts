
import connectMongo from "@/lib/MongoDb";
import Products from "@/models/products/model";
import { NextResponse } from "next/server";

export async function GET(req: Request){

    await connectMongo()
    const data = await Products.find()

    return NextResponse.json({data})
}