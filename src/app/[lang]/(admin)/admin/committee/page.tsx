import React from "react";
import Link from "next/link";
import { H2 } from "@/components/typography";

const links = [
  { title: "Advisory Comittee", to: "/advisory" },
  { title: "Central Comittee", to: "/central" },
  { title: "Departmental Heads", to: "/departmental" },
  { title: "Provincial Comittee", to: "/provincial" },
  { title: "Co Society", to: "/co-society" },
];

const countries = [
  { title: "America", to: "/america" },
  { title: "India", to: "/india" },
  { title: "China", to: "/china" },
  { title: "United Kingdom", to: "/united-kingdom" },
  { title: "Europe", to: "/europe" },
  { title: "Japan", to: "/japan" },
  { title: "France", to: "/france" },
  { title: "Canada", to: "/canada" },
  { title: "Australia", to: "/australia" },
  { title: "Others", to: "/others" },
];

const page = () => {
  return (
    <div>
      <H2 className="border-b pb-2">All Committee</H2>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li>
            <Link
              className="text-blue-600 underline-offset-4 hover:underline"
              key={idx}
              href={`/admin/committee/${link.to}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="pb-4 pt-10 text-xl font-semibold">Foreign Departments</h2>
      <ul className="space-y-2">
        {countries.map((link, idx) => (
          <li>
            <Link
              className="text-blue-600 underline-offset-4 hover:underline"
              key={idx}
              href={`/admin/committee/${link.to}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
