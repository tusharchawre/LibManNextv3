import { NextResponse } from "next/server"
import connect from "@/utils/db"
import TechKnow from "@/models/TechKnow"

export const GET = async (request, {params})=>{
    const {id} = params

    try {
        await connect()

        const TechKnowledge  = await TechKnow.find({title: `${id}`})
        return new NextResponse(JSON.stringify(TechKnowledge),{status: 200}) 

    } catch (err) {
        
        return new NextResponse("database error",{status: 500}) 
    }
}