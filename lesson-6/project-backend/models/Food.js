import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSetting } from "./hooks.js";

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
}, { versionKey: false, timestamps: true });

foodSchema.post("save", handleSaveError);

foodSchema.pre("findOneAndUpdate", setUpdateSetting);

foodSchema.post("findOneAndUpdate", handleSaveError);

const Food = model("food", foodSchema);

export default Food;