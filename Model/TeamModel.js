import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  TeamName: {
    type: String,
    required: true,
  },
  NoOfTeamMembers: {
    type: Number,
    required: true,
  },
  LeadName: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
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

const TeamModel = mongoose.model("TeamModel", TeamSchema);

export default TeamModel;
