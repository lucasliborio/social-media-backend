import mongoose from "../../../server"
import { Schema } from "mongoose"
const profileSchema = new Schema({
  posts: [{
    type: Schema.Types.ObjectId,
    ref: "Posts",
    minLength: 2
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: "Profile"
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model("Profile", profileSchema)