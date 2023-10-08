import mongoose from "mongoose";

const {Schema} =  mongoose

const booksSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    desc: String,
    img: String

},{timestamps: true})

mongoose.models = {}

export default mongoose.model("Books", booksSchema)