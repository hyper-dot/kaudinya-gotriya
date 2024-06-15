import React from "react";
import {
  HomeCarousel,
  Welcome,
  Mission,
  Gallery,
  Remmitance,
  Why,
} from "@/components/home";
import DashboardNotice from "@/server/models/DashboardNotice";
import connectDB from "@/server/utils/connectDB";

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
      <Gallery lang={lang} />
      <Why lang={lang} />
      <Remmitance lang={lang} />
    </main>
  );
};

export default page;
