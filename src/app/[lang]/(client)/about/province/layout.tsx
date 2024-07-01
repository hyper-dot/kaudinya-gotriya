import Filter from "./Filter";
const content = {
  np: "प्रादेशिक समिति",
  en: "Provincal Committee",
};

export default async function ({
  params,
  children,
}: {
  params: { lang: string };
  children: any;
}) {
  return (
    <div>
      <div
        style={{
          background: "url(/about/bg/bod.webp) center",
          backgroundSize: "",
        }}
        className="flex h-[200px] items-center justify-center md:h-[300px]"
      >
        <div className="flex h-[90%] w-[90%] items-center justify-center rounded-3xl bg-[rgba(0,0,0,0.4)] text-3xl font-bold text-white md:text-5xl">
          {content[params.lang as keyof typeof content]}
        </div>
      </div>
      <Filter />
      {children}
    </div>
  );
}
