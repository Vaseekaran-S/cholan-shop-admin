
import { NextResponse } from "next/server";
import connectMongo from "@/lib/MongoDb";
import mongoose from "mongoose";

export async function POST(req:Request){

    await connectMongo()

    const name  = await req.json()
    
    try{
        console.log("Success");

    }catch(err){
        console.log("Error : ",err);
    }

    return NextResponse.json({...name, type : "POST"})
    
}