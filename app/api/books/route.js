import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Books from "@/models/Books"

export const GET = async (request)=>{

    try {
        await connect()

        const books  = await Books.find()
        
        return new NextResponse(JSON.stringify(books),{status: 200}) 

    } catch (err) {
        
        return new NextResponse("database error",{status: 500}) 
    }
}