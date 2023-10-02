import connectMongo from "@/lib/MongoDb";
import Category from "@/models/category/model";
import { NextResponse } from "next/server";


export async function GET() {
    await connectMongo()
    const data = await Category.find()
    return NextResponse.json({ data })
}


export async function POST(req: Request) {
    const info = await req.json()
    await connectMongo()

    const data = await Category.create(info)
    return NextResponse.json({ data })
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