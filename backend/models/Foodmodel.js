import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : {
        type : String,
        requireed : true
    },

    description : {
        type : String,
        requireed : true
    },

    price : {
        type : Number,
        requireed : true
    },

    image : {
        type : String,
        requireed : true
    },

    category : {
        type : String,
        requireed : true
    }
})

const foodModel = mongoose.models.food || mongoose.model('food' , foodSchema);

export default foodModel;

