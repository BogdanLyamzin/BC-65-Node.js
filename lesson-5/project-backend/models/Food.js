import {Schema, model} from "mongoose";

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        min: 1,
        required: true,
    },
    type: {
        type: String,
        enum: ["breakfast", "dinner", "supper"],
        required: true,
    }
}, {versionKey: false, timestamps: true});

const Food = model("foods", foodSchema);
// category => categories
// mouse => mice

export default Food;