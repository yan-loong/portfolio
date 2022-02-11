import { model, Schema } from "mongoose";
import { User } from "@portfolio/common"

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const UserModel = model<User>('user', userSchema);

export { UserModel }