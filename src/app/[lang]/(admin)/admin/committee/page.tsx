import React from "react";
import Link from "next/link";
import { H2 } from "@/components/typography";

const links = [
  { title: "Board of Directors", to: "/bod" },
  { title: "Audit Committee", to: "/audit" },
  { title: "Credit Committee", to: "/credit" },
  { title: "Education Committee", to: "/education" },
  { title: "Advisory Committee", to: "/advisory" },
  { title: "Unit Committee", to: "/unit" },
  { title: "Management Teams", to: "/management" },
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
