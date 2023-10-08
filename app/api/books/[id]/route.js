import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Books from "@/models/Books"

export const GET = async (request, {params})=>{
    const {id} = params

    try {
        await connect()

        const book  = await Books.find({title: `${id}`})
        return new NextResponse(JSON.stringify(book),{status: 200}) 

    } catch (err) {
        
        return new NextResponse("database error",{status: 500}) 
    }
}