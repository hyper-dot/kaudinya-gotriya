import PersonCard from "@/components/about/PersonCard";
import { notFound } from "next/navigation";
import connectDB from "@/server/utils/connectDB";
import { unstable_noStore as noStore } from "next/cache";
import ProvinceMember from "@/server/models/ProvinceMember";

export default async function ({ params }: { params: { p: string } }) {
  noStore();
  try {
    await connectDB();
    const members = await ProvinceMember.find({
      isChairman: false,
      province: params.p,
    });
    const chairman = await ProvinceMember.findOne({
      isChairman: true,
      province: params.p,
    });

    return (
      <div
        style={{
          background:
            "url(/about/bod/dots.svg) no-repeat 5% 5% /8%, url(/about/bod/circleHalf.svg) no-repeat 100% 0% / 10%, url(/about/bod/random.svg) no-repeat 0% 100% /15%, url(/about/bod/circles.svg) no-repeat 50% 95% / 20%",
        }}
        className="min-h-[50vh] pb-32"
      >
        {chairman && (
          <div className="flex justify-center py-20">
            <PersonCard
              main
              name={chairman.name}
              position={chairman.position}
              public_id={chairman.image.public_id}
            />
          </div>
        )}
        <div className="item-center mx-auto flex max-w-[80%] flex-wrap justify-center gap-24">
          {members.map((m, i) => (
            <PersonCard
              name={m.name}
              position={m.position}
              public_id={m.image.public_id}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    return notFound();
  }
}
