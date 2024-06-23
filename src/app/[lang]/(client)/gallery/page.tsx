import React from "react";
import { H3 } from "@/components/typography";
import { GalleryThumbnail } from "@/components/gallery/GalleryThumbnail";
import { notFound } from "next/navigation";
import { Gallery } from "@/server/models/Gallery";
import connectDB from "@/server/utils/connectDB";

const page = async () => {
  await connectDB();

  const gallery = await Gallery.find().populate("photos");

  if (gallery && gallery.length > 0) {
    return (
      <div>
        <section
          style={{
            background:
              "url(/home/gallery/arrows.svg) no-repeat 0.5% 13%, url(/home/gallery/left.svg) no-repeat 98%, url(/home/gallery/right.svg) no-repeat left",
          }}
        >
          <H3 className="px-4 pt-4 text-white md:pl-24 lg:pt-20">
            Photo Gallery
          </H3>
          <div className="grid place-items-center gap-y-8 py-16 md:grid-cols-2 lg:mx-10 lg:grid-cols-2 xl:grid-cols-3">
            {gallery.map((g, idx) => (
              <GalleryThumbnail key={idx} id={g._id} />
            ))}
          </div>
        </section>
      </div>
    );
  } else {
    return notFound();
  }
};

export default page;
