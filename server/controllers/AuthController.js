import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { compare } from "bcrypt";
import { renameSync, unlinkSync } from "fs";

const maxAge = 3 * 24 * 60 * 60; // in seconds

const createToken = ({ email, userId }) => {
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

export const signup = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).send("Please provide email and password");
    }

    const user = await User.create({ email, password });

    const token = createToken({ email, userId: user.id });

    response.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // Convert to milliseconds
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      secure: process.env.NODE_ENV === "production", // True if in production
    });

    return response.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        profileSetups: user.profileSetup,
      },
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send("Server error!!!");
  }
};

export const login = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).send("Please provide email and password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return response
        .status(404)
        .send("User with the given email is not available!");
    }

    const auth = await compare(password, user.password);

    if (!auth) {
      return response.status(404).send("Incorrect password!");
    }

    const token = createToken({ email, userId: user.id });

    response.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // Convert to milliseconds
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      secure: process.env.NODE_ENV === "production", // True if in production
    });

    return response.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        profileSetups: user.profileSetup,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        color: user.color,
      },
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send("Server error!!!");
  }
};

export const getUserInfo = async (request, response, next) => {
  try {
    const userData = await User.findById(request.userId);
    if (!userData) {
      return response.status(404).send("User not found!");
    }

    return response.status(200).json({
      id: userData._id,
      email: userData.email,
      profileSetups: userData.profileSetup,
      firstName: userData.firstName,
      lastName: userData.lastName,
      image: userData.image,
      color: userData.color,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send("Server error!!!");
  }
};

export const updateProfile = async (request, response, next) => {
  try {
    const { userId } = request;
    const { firstName, lastName, color } = request.body;

    if (!firstName || !lastName) {
      return response.status(400).send("Firstname and Lastname is required!");
    }

    const userData = await User.findByIdAndUpdate(
      userId,
      {
        firstName,
        lastName,
        color,
        profileSetup: true,
      },
      { new: true, runValidators: true }
    );

    return response.status(200).json({
      id: userData._id,
      email: userData.email,
      profileSetups: userData.profileSetup,
      firstName: userData.firstName,
      lastName: userData.lastName,
      image: userData.image,
      color: userData.color,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send("Server error!!!");
  }
};

export const addProfileImage = async (request, response, next) => {
  try {
    if (!request.file) {
      return response.status(400).send("No image uploaded.");
    }

    const date = Date.now();
    let fileName = "uploads/profiles/" + date + request.file.originalname;
    renameSync(request.file.path, fileName);

    const updatedUser = await User.findByIdAndUpdate(
      request.userId,
      { image: fileName },
      { new: true, runValidators: true }
    );

    return response.status(200).json({
      image: updatedUser.image,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send("Server error!!!");
  }
};

export const removeProfileImage = async (request, response, next) => {
  try {
    const { userId } = request;
    const user = await User.findById(userId);

    if(!user) {
      return response.status(404).send("User not found!");
    }

    if(user.image) {
      unlinkSync(user.image);
    }

    user.image = null;
    await user.save();

    return response.status(200).send("Profile image successfully removed!");
  } catch (error) {
    console.log(error);
    return response.status(500).send("Server error!!!");
  }
};

export const logout = async (request, response, next) => {
  try {
    response.cookie("jwt", "", {maxAge: 1, secure: true, sameSite: "None"})

    return response.status(200).send("Logout successful!");
  } catch (error) {
    console.log(error);
    return response.status(500).send("Server error!!!");
  }
};