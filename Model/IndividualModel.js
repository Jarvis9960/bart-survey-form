import mongoose from "mongoose";

const IndividualSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  Designation: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
  },
  state: {
    type: String,
  },
  postalCode: {
    type: String,
  },
});

const IndividualModel = mongoose.model("IndividualModel", IndividualSchema);

export default IndividualModel;
