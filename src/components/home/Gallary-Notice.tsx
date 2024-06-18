import React from "react";
import { homeDictionary } from "@/dictionary/home";
import { H2, P } from "../typography";
import { Image } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const GallaryNotice = ({ lang }: { lang: string }) => {
  const galleryData = [
    {
      _id: "1",
      title: "Gallery 1",
      images: "/rishi/rishi.svg",
    },
    {
      _id: "2",
      title: "Gallery 2",
      images: "/rishi/rishi.svg",
    },
    {
      _id: "3",
      title: "Gallery 3",
      images: "/rishi/rishi.svg",
    },
    {
      _id: "4",
      title: "Gallery 4",
      images: "/rishi/rishi.svg",
    },
  ];
  const Impnotices = [
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना ",
      content:
        "आचार्य बन्धु समाज नेपालले आफ्नो प्रकाशित २०८१ सालको क्यालेण्डर केन्द्रीय कार्यालयमा विमोचन गरेको छ ।",
      date: "2024-05-10",
    },
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना ",
      content:
        "आचार्य बन्धु समाज नेपालले आफ्नो प्रकाशित २०८१ सालको क्यालेण्डर केन्द्रीय कार्यालयमा विमोचन गरेको छ ।",
      date: "2024-05-10",
    },
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना ",
      content:
        "आचार्य बन्धु समाज नेपालले आफ्नो प्रकाशित २०८१ सालको क्यालेण्डर केन्द्रीय कार्यालयमा विमोचन गरेको छ ।",
      date: "2024-05-10",
    },
    {
      title: "केन्द्रिय कार्य समिती वैठक, साधारणसभा सूचना ",
      content:
        "आचार्य बन्धु समाज नेपालले आफ्नो प्रकाशित २०८१ सालको क्यालेण्डर केन्द्रीय कार्यालयमा विमोचन गरेको छ ।",
      date: "2024-05-10",
    },
  ];

  return (
    <section className=" py-10">
      <div className="container mx-auto flex flex-col md:flex-col lg:flex-row">
        <div className="md-full w-full pr-4 lg:w-2/3">
          <div className="mb-8 text-left">
            <div className="mb-4 flex items-center justify-between">
              <H2 className="text-3xl font-bold ">
                {homeDictionary[lang as keyof typeof homeDictionary].gallery}
              </H2>
              <a href="/gallery" className="text-blue-600 hover:underline">
                See All
              </a>
            </div>
            <div className="px-4 py-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {galleryData.map((gallary, index) => (
                  <Link
                    href={`/gallery/${gallary._id}`}
                    key={index}
                    className="w-full space-y-2 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-medium">{gallary.title}</p>
                      <p className="flex items-center gap-2">
                        <Image size={20} />
                        {gallary.images.length}
                      </p>
                    </div>
                    <div>
                      <img
                        src={gallary.images}
                        alt="gallery"
                        height={400}
                        width={400}
                        className="h-[250px] w-full rounded-md object-cover"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:full w-full pl-4 lg:w-1/3">
          <div className="text-left">
            <div className="mb-4 flex items-center justify-between">
              <H2 className="text-3xl font-bold ">
                {homeDictionary[lang as keyof typeof homeDictionary].news}
              </H2>
              <a href="/news" className="text-blue-600 hover:underline">
                See All
              </a>
            </div>
            <div className=" overflow-y-auto px-4 py-16">
              <div className="grid grid-cols-1 ">
                {Impnotices.slice(0, 3).map((item, index) => (
                  <Card
                    key={index}
                    className="mb-6 w-full rounded border-black bg-white transition-shadow duration-300 hover:shadow-xl"
                  >
                    <CardContent className="flex flex-col p-4">
                      <div>
                        <P>{item.date}</P>
                        <H2 className=" text-lg font-medium">{item.title}</H2>
                      </div>
                      <div>
                        <P className="text-gray-500">{item.content}</P>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallaryNotice;
