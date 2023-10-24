import { shoesData } from "@/utils/shoes-data";
import { NextResponse } from "next/server";

export function GET(req, content) {
  let id = content?.params?.id;

  const res = shoesData?.filter((item) => {
    return item?.id == id && item;
  })?.[0];
  console.log(res);
  console.log({ id });
  return res
    ? NextResponse.json({ msg: "requseted shoes!", data: res }, { status: 200 })
    : NextResponse.json(
        { msg: "requseted shoes not present!" },
        { status: 404 }
      );
}
