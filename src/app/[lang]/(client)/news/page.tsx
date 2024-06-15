import React from "react";
import { NewsHero, AllNews } from "@/components/news";
import connectDB from "@/server/utils/connectDB";
import News from "@/server/models/News";

const page = async () => {
  await connectDB();
  const news = await News.find().sort({ createdAt: -1 });

  if (news && news.length > 0) {
    const latestNews = news[0];
    console.log(latestNews);
    return (
      <div>
        <NewsHero
          news={{
            title: latestNews.title,
            desc: latestNews.desc,
            image: latestNews.image.secure_url,
            _id: latestNews._id,
          }}
        />
        <AllNews data={JSON.stringify(news)} />
      </div>
    );
  } else {
    return (
      <div className="flex h-screen items-center justify-center text-center">
        No news for today
      </div>
    );
  }
};

export default page;
