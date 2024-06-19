import React from "react";
import { Landmark, Phone } from "lucide-react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const content = {
  np: {
    headOffice: "केन्द्रिय कार्यालय",
    contact: "सम्पर्क ",
    phone: "सम्पर्क नम्बर",
    address: "केन्द्रीय कार्यालय , कोटेश्वर , काठमाडौं ",
    opposite: "आदर्श ब्यान्क्वेट नजिक",
    visitUs: "ठेगाना",
    num1: "९८०१४४२३३९",
    num2: "०२३-५४३९३९४",
    email: "इमेल",
    contactDetails: "सम्पर्क विवरण",
  },
  en: {
    headOffice: "Head Office",
    contact: "Contact Details",
    phone: "Phone No.",
    address: "Head Office, Koteshwor, Kathmandu",
    opposite: "Near Adarsha Banquet",
    visitUs: "Visit Us",
    num1: "9801442339",
    num2: "023-5439394",
    email: "Email Us",
    contactDetails: "Contact Details",
  },
};

export const Content = ({ lang }: { lang: string }) => {
  return (
    <div className="flex flex-col  gap-9 px-4 md:px-10 xl:px-20">
      <div className="text-xl font-semibold uppercase text-primary">
        {content[lang as keyof typeof content].contactDetails}:<br />
      </div>

      <div className="rounded-lg border-2 border-dashed border-primary px-4 py-8">
        <p className="flex items-center gap-2 pb-4 font-semibold uppercase">
          <Phone />
          Call Us
        </p>

        <p>
          <span className="flex items-center gap-3 font-bold">
            <Landmark className="inline" size={20} />{" "}
            {content[lang as keyof typeof content].headOffice} <br />{" "}
          </span>
          <span className="block py-1 pl-8">
            {content[lang as keyof typeof content].address}
          </span>
        </p>

        <ul className="flex flex-col gap-4 pt-10 ">
          <li className="flex gap-2">
            <Phone fill="black" size={16} />{" "}
            {content[lang as keyof typeof content].phone} : <br />
            {content[lang as keyof typeof content].num2} <br />
            {content[lang as keyof typeof content].num1} <br />
          </li>

          <li className="flex gap-2">
            <FaMapMarkerAlt size={16} />{" "}
            {content[lang as keyof typeof content].visitUs} :<br />
            {content[lang as keyof typeof content].opposite} <br />
            {content[lang as keyof typeof content].address} <br />
          </li>

          <li className="flex gap-2">
            <IoMail size={16} />
            {content[lang as keyof typeof content].email} :<br />
            kaugmas1@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};
