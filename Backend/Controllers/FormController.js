import formSchema from "../models/FormModel.js";
const fromController = async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      ProfilePhoto,
      LinkedInProfile,
      Twitter,
      Role,
    } = req.body;
    const existingData = await formSchema.find({ LinkedInProfile });

    if (existingData.length > 0) {
      res
        .status(201)
        .json({ message: "Your Data is already exist", existingData });
    }

    const data = new formSchema({
      FirstName: FirstName,
      LastName: LastName,
      ProfilePhoto: ProfilePhoto,
      LinkedInProfile: LinkedInProfile,
      Twitter:Twitter,
      Role:Role
    });
    await data.save()
    res.status(200).json({message:"Your data add SuccessFully",data})
  } catch (error) {
    res.status(400).json({message:"Something went wrong ",error:error.message})
  }
};

export default fromController;
