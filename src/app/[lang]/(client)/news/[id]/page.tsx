import { Metadata, ResolvingMetadata } from "next";
import connectDB from "@/server/utils/connectDB";
import { FaPenNib } from "react-icons/fa";

import "./page.css";

import { SingleNews } from "@/components/news";
import News from "@/server/models/News";
import { dateFormatter } from "@/lib/dateFormatter";
import { RichContentPreview } from "@/components/editor";

const page = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  const news = await News.findById(params.id);
  const allNews = await News.find().limit(3).sort({ createdAt: -1 });

  if (!news) return <></>;

  return (
    <div className="px-4 pt-10 lg:mx-auto lg:max-w-4xl">
      <h1 className="text-center text-3xl font-bold text-blue-950 md:text-5xl">
        {news.title}
      </h1>
      <div className="flex flex-col items-center justify-center pt-24"></div>

      <div className="blog-content text-ui-600 flex flex-col gap-4">
        <img
          src={news.image.secure_url}
          className="max-h-[70vh] rounded-xl object-cover"
        />
        <div className="text-ui-500 py-2">
          <p className="flex items-center gap-4">
            <FaPenNib />
            {dateFormatter(news.createdAt)}
          </p>
        </div>
        <RichContentPreview html={news.body} />
      </div>

      <div className="mb-16">
        <h5 className="py-8 pl-4 text-2xl font-bold">
          Latest News & Activities
        </h5>
        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {allNews &&
            allNews.map((n, idx) => <SingleNews key={idx} news={n} />)}
        </div>
      </div>
    </div>
  );
};

export default page;
