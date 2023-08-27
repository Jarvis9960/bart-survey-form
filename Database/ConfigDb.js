import mongoose from "mongoose";

const connectDb = () => {
  try {
    return mongoose.connect(
      "mongodb+srv://Durgeshzz:Durgesh26@cluster0.kedle66.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
