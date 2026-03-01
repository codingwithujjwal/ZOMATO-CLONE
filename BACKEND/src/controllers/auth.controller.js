const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const foodPartnerModel = require("../models/foodpartner.model");


async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashpassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashpassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValied = await bcrypt.compare(password, user.password);

  if (!isPasswordValied) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}

async function logoutUser(req, res) {
  res.clearCookie("token");

  res.status(200).json({
    message: "User logged out successfully",
  });
}

async function registerFoodPartner(req, res) {
  const { name, email, password, address , phone, contactName} = req.body;

  const isFoodPartnerAlreadyExists = await foodPartnerModel.findOne({ email });

  if (isFoodPartnerAlreadyExists) {
    return res.status(400).json({ message: "Food Partner already exists" });
  }

  const hashpassword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    password: hashpassword,
    address,
    phone,
    contactName
  });

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "Food Partner registered successfully",
    foodPartner: {
      _id: foodPartner._id,
      name: foodPartner.name,
      email: foodPartner.email,
      address: foodPartner.address,
      phone: foodPartner.phone,
      contactName: foodPartner.contactName
    },
  });
}

async function loginFoodPartner(req, res) {
    const { email, password } = req.body;
    
    const foodPartner = await foodPartnerModel.findOne({ email });

    if (!foodPartner) { 
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const isPasswordValied = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordValied) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const token = jwt.sign(
        {
            id: foodPartner._id,
        },
        process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodPartner: {
            _id: foodPartner._id,
            name: foodPartner.name,
            email: foodPartner.email,
        },
    });
}

async function logoutFoodPartner(req, res) {
    res.clearCookie("token");

    res.status(200).json({
        message: "Food Partner logged out successfully",
    });
}


module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner
};
