import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSetting } from "./hooks.js";

import { emailRegexp } from "../constants/regexp.js";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    verify: {
        type: Boolean,
        default: false,
        required: true,
    },
    verificationCode: {
        type: String,
    },
    token: {
        type: String,
    }
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", setUpdateSetting);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;