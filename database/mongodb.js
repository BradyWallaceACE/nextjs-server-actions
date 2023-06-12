import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("MongoDB is connected");
    return;
  }

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB is now connected"))
    .catch((error) => console.log(error));
};

export default connectDB;
