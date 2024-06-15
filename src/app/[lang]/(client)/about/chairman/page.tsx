import React from "react";
import { H1 } from "@/components/typography";
import Speech from "@/server/models/Speech";
import { notFound } from "next/navigation";
import Member from "@/server/models/Member";
import PersonCard from "@/components/about/PersonCard";
import connectDB from "@/server/utils/connectDB";

import dynamic from "next/dynamic";
const RichContentPreview = dynamic(
  () => import("@/components/editor/Preview"),
  { ssr: false, loading: () => <div className="h-[80vh]"></div> },
);

const page = async () => {
  try {
    await connectDB();
    const chairman = await Member.findOne({ group: "bod", isChairman: true });
    const speech = await Speech.findOne();
    console.log(chairman);
    return (
      <div className="py-20">
        <H1 className="pb-10 text-center">अध्यक्षज्युको सन्देश</H1>
        <PersonCard
          main
          position={chairman.position}
          public_id={chairman.image.public_id}
          name={chairman.name}
        />
        <div className="mx-auto max-w-5xl px-2 pt-5">
          <RichContentPreview html={speech.speech} />
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    return notFound();
  }
};

export default page;
