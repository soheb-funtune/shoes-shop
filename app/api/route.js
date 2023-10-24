import { NextResponse } from "next/server";
import axios from "axios";
import { shoesData } from "@/utils/shoes-data";

export async function GET(params) {
  //   const options = {
  //     method: "GET",
  //     url: "https://shoes-collections.p.rapidapi.com/shoes",
  //     headers: {
  //       "X-RapidAPI-Key": "5f45dd40b6msh27817332edb4912p1475adjsn308fbd1f438b",
  //       "X-RapidAPI-Host": "shoes-collections.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  return NextResponse.json(
    {
      msg: "this is response for APP ",
      data: shoesData,
    },
    { status: 200 }
  );
}
