import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function validateJWTgetUserId(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      throw new Error("Token not found");
    }

    const decodedData: any = jwt.verify(token, process.env.jwtSecret!);
    const userId = decodedData.UserId;

    return userId;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
