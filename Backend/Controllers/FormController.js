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
      return res
        .status(201)
        .json({ message: "Your Data already exists", existingData });
    }

    const data = new formSchema({
      FirstName,
      LastName,
      ProfilePhoto,
      LinkedInProfile,
      Twitter,
      Role
    });

    await data.save();

    return res.status(200).json({ message: "Your data added successfully", data });

  } catch (error) {
    return res.status(400).json({ message: "Something went wrong", error: error.message });
  }
};

export default fromController;
