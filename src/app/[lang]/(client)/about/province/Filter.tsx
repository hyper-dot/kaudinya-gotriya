"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { PROVINCES } from "@/server/utils/constants";

const Filter = () => {
  const router = useRouter();
  const { p } = useParams();

  return (
    <select
      className="mx-auto mt-10 block"
      value={p || PROVINCES[0].value}
      onChange={(e) => {
        router.push(`/about/province/${e.target.value}`, { scroll: false });
      }}
    >
      {PROVINCES.map((d, idx) => (
        <option value={d.value} key={idx}>
          {d.title}
        </option>
      ))}
    </select>
  );
};

export default Filter;
