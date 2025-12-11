import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
});


export default model('users_model', userSchema);