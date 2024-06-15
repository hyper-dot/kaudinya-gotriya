import { NextRequest, NextResponse } from "next/server";
import { documentSchema } from "@/schemas/document.schema";
import { formDataToObject } from "@/lib/form";
import {
  getCloudflareUrl,
  getAuthKeySecret,
} from "@/server/actions/document/constants";
import { nanoid } from "nanoid";
import Doc from "@/server/models/Document";
import connectDB from "@/server/utils/connectDB";
import { revalidatePath } from "next/cache";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const data = formDataToObject(formData);
  const parsedData = documentSchema.safeParse(data);

  if (parsedData.success) {
    const { doc, title } = parsedData.data;
    const id = nanoid();
    const url = `${getCloudflareUrl()}/satlok/documents/${id}`;
    try {
      await fetch(url, {
        body: doc,
        method: "PUT",
        headers: { "X-Custom-Auth-Key": getAuthKeySecret() },
      });
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        {
          message:
            "Couldn't upload the file. Please reach out to concerned party.",
        },
        { status: 500 },
      );
    }

    // Save it to database
    try {
      await connectDB();
      const newDoc = new Doc({ title, url });
      const savedDoc = await newDoc.save();
      revalidatePath("/admin/documents");
      console.log("SAVED DOCUMENT:", savedDoc);
      return NextResponse.json(
        {
          message: "Successfully added new document",
        },
        { status: 200 },
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        {
          message:
            "Couldn't save the data. Please reach out to concerned party.",
        },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json(
      { message: "Please send us a valid data" },
      { status: 400 },
    );
  }
};
