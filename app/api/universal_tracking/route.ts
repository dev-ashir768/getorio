import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const consignment_number = await req.json();
    const response = await axios.post(
      "https://apis.orio.digital/api/universal_tracking",
      consignment_number,
      {
        headers: {
          Token: `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.message || "An error occurred";
      return NextResponse.json({ message: errorMessage });
    }
  }
}
