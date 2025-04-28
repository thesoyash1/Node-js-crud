const User = require("../Models/crudModel");

exports.getAllUserData = async (req, res) => {
  try {
    const user = await User.findAll();
    console.log("check function");
    res.json(user);
  } catch (error) {
    console.log("not get data ", error);
    res.status(500).send("error");
  }
};

exports.createUserData = async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log("check create query ----- > ", req.body);
    const user = await User.create({ name, email });
    console.log("created data");
    res.status(200).json(user);
  } catch (error) {
    console.log("not created", error);
    res.status(500).send("Error on creating data");
  }
};

exports.updateUserData = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("req --- > ", req);
    console.log("req param id ", req.params.id);
    const { name, email } = req.body;
    await User.update({ name, email }, { where: { id } });
    res.send("updated");
  } catch (error) {
    console.log("error in updating", error);
    res.status(500).send("error");
  }
};

exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.send("deleted succeess");
  } catch (error) {
    console.log("error in deleting data", error);
    res.status(500).send("error");
  }
};
