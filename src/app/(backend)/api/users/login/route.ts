import bcrypt from "bcrypt";
import User from "@/modules/users/user.model";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import path from "path";
import { connectDB } from "@/config/config";

connectDB();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const userExists = await User.findOne({
      email: reqBody.email,
    });
    if (!userExists) {
      return NextResponse.json(
        { message: "User is not exists" },
        { status: 404 }
      );
    }

    const passwordMatched = await bcrypt.compare(
      reqBody.password,
      userExists.password
    );

    if (!passwordMatched) {
      return NextResponse.json(
        { message: "Password Not matched" },
        { status: 404 }
      );
    }

    // Create token
    const token = jwt.sign({ UserId: userExists._id }, process.env.jwtSecret!, {
      expiresIn: "365d",
    });

    const response = NextResponse.json(
      { message: "User Login  successfully" },
      { status: 201 }
    );

    // attached Token

    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
      path: "/home",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
