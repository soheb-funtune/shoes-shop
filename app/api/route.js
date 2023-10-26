import { NextResponse } from "next/server";
import axios from "axios";
import { shoesData } from "@/utils/shoes-data";

export async function GET(params) {
  return NextResponse.json(
    {
      msg: "this is response for APP ",
      data: shoesData,
    },
    { status: 200 }
  );
}

export async function POST(res) {
  let payload = await res.json();
  console.log({ payload });
  return NextResponse.json(
    { msg: "data received successfylly!", data: payload },
    { status: 200 }
  );
}
