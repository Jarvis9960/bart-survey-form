import express from "express";
import connectDb from "./Database/ConfigDb.js";
import TeamModel from "./Model/TeamModel.js";
import IndividualModel from "./Model/IndividualModel.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb()
  .then((res) => {
    console.log("connection to database is successfull");
  })
  .catch((err) => {
    console.log(err);
  });



app.post("/api/fillsurveryform", async (req, res) => {
  try {
    const role = req.body.role;

    if (role === "team") {
      const {
        TeamName,
        NoOfTeamMembers,
        LeadName,
        emailId,
        address,
        city,
        phone,
        state,
        postalCode,
      } = req.body;

      const newTeam = new TeamModel({
        role,
        TeamName,
        NoOfTeamMembers,
        LeadName,
        emailId,
        address,
        city,
        phone,
        state,
        postalCode,
      });

      const savedReponse = await newTeam.save();

      if (savedReponse) {
        return res.status(201).json({
          status: true,
          message: "registration succesfully completed",
        });
      }
    } else {
      const {
        fullName,
        email,
        Designation,
        address,
        city,
        phone,
        state,
        postalCode,
      } = req.body;

      const newIndividual = new IndividualModel({
        role,
        fullName,
        email,
        Designation,
        address,
        city,
        phone,
        state,
        postalCode,
      });

      const savedResponse = await newIndividual.save();

      if (savedResponse) {
        return res.status(201).json({
          status: true,
          message: "registration succesfully completed",
        });
      }
    }
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ status: false, message: "something went wrong" });
  }
});

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
