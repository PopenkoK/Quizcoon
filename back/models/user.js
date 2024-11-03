import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30hd-wM82kY9vkCL40bKF39XUbMzfflnrng&s",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
