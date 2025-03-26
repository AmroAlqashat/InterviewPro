import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { prisma } from "../config/prismaClient.js";

dotenv.config();

const userSignup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (user == null) {
      let hashPassword;
      try {
        hashPassword = await bcrypt.hash(
          password,
          parseInt(process.env.SALT_ROUNDS)
        );
      } catch (error) {
        console.error("Error hashing password:", error);
        return res
          .status(500)
          .json({ message: "Server error while hashing password" });
      }

      await prisma.users.create({
        data: {
          name: fullName,
          email: email,
          password: hashPassword,
        },
      });
      res.status(200).json({ message: "Sign up successful!" });
    } else {
      res.status(409).json({ message: "Email already exists", emailError: true });
    }
  } catch (error) {
    console.error("Error during user sign up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
      select: {
        password: true,
      },
    });

    if (!user) return res.status(409).json({ message: "Email does not exist", emailError: true });

    let isMatch;
    try {
      isMatch = await bcrypt.compare(password, user.password);
    } catch (error) {
      console.error("Error during comparing passwords", error);
      return res.status(500).json({ message: "Server error while comparing passwrods" });
    }

    if(isMatch){
      return res.status(200).json({ message: "Login successful!" });
    } else {
      return res.status(401).json({ message: "Incorrect password", passwordError: true });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export { userSignup, userLogin };
