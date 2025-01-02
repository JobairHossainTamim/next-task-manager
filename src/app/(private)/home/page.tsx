import HomeClient from "@/components/HomeClient/HomeClient";
import LayoutProvider from "@/components/Layout/LayoutProvider";
import axios from "axios";
import { cookies } from "next/headers";
import { useState } from "react";

export async function getData() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      throw new Error("Token is missing");
    }

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL!;
    const endpoint = `${baseURL}/api/users/currentUser`;

    const response = await axios.get(endpoint, {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message || "An error occurred while fetching data");
  }
}

const HomePage = async () => {
  const user: any = await getData();

  return <HomeClient user={user}></HomeClient>;
};

export default HomePage;
