import { connectDB } from "@/config/config";
import User from "@/modules/users/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const userExists = await User.findOne({ email: reqBody.email });

    if (userExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(reqBody.password, salt);
    reqBody.password = hashedPassword;

    // Create user
    await User.create(reqBody);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
