import { connectDB } from "@/config/config";
import { validateJWTgetUserId } from "@/modules/users/jwtValidation";
import User from "@/modules/users/user.model";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const userId = await validateJWTgetUserId(request);
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
