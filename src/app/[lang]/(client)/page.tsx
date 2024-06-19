import React from "react";
import { HomeCarousel, Welcome, Mission } from "@/components/home";
import DashboardNotice from "@/server/models/DashboardNotice";
import connectDB from "@/server/utils/connectDB";
import Message from "@/components/home/Message";
import GallaryNotice from "@/components/home/Gallary-Notice";

const page = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  await connectDB();
  const notices = await DashboardNotice.find();

  return (
    <main>
      {notices && notices.length > 0 && (
        <HomeCarousel notices={JSON.stringify(notices)} />
      )}
      <Welcome lang={lang} />
      <Mission lang={lang} />
      {/* 
      <Gallery lang={lang} /> */}
      <Message lang={lang} />
      <GallaryNotice lang={lang} />
    </main>
  );
};

export default page;
