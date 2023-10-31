import connectMongo from "@/lib/MongoDb";
import Category from "@/models/category/model";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongo()
    const data = await Category.find()    
    return NextResponse.json(data)
}


export async function POST(req: Request) {
    let data = await req.json()
    console.log(data);
    await connectMongo()
    data = {
        ...data,
        total_products: 0,
        products: []
    }
    console.log(data);
    const response = await Category.create(data)
    return NextResponse.json({ response })
}


export async function PUT(req: Request) {
    const info = await req.json()
    const { category_id, product_id } = info

    await connectMongo()
    const res = await Category.findByIdAndUpdate(
        category_id,
        {
            $inc: { total_products: 1 },
            $push: { products: product_id }
        },
        { new: true }
    )

    return NextResponse.json({ status: "success" })
}