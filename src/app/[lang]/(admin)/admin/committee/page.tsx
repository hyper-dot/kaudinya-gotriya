import React from "react";
import Link from "next/link";
import { H2 } from "@/components/typography";

const links = [
  { title: "Advisory Comittee", to: "/advisory" },
  { title: "Central Comittee", to: "/central" },
  { title: "Departmental Heads", to: "/departmental" },
  { title: "Executive Comittee", to: "/executive" },
  { title: "Provincial Comittee", to: "/province" },
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
    </div>
  );
};

export default page;
