import { Shoes } from "@/components/backend-data/schemas/add-schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { writeFile, writeFileSync } from "fs";
const multer = require("multer");
const upload = multer({ dest: "public/" });

export async function POST(req) {
  upload.single("image");
  const formDataD = await req.formData();
  let image = formDataD?.get("image");
  let name = formDataD?.get("name");
  let description = formDataD?.get("description");
  let price = formDataD?.get("price");
  // const byteData = await image.arrayBuffer();
  // const buffer = Buffer.from(byteData);
  const imgPath = `./public/${image?.name}`;
  console.log("formDataD:", imgPath);
  // const fileRes = await writeFile(imgPath, buffer);
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION);
    const res = new Shoes({
      name,
      description,
      price,
      image: imgPath,
    });
    const result = await res.save();
    console.log("mongo db Data:", result);
    return NextResponse.json(
      {
        msg: "post Created successfully!",
        data: result,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log({ err });
  }
}
