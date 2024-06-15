import React from "react";
import { Mail, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { dictionary } from "@/dictionairy";

const Header = ({ lang }: { lang: string }) => {
  return (
    <header className="relative">
      <div className=" flex flex-wrap items-center justify-between px-1 py-4 md:px-4">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt=""
            height={100}
            width={100}
            className="h-[50px] w-[50px]  sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px]"
          />
          <div>
            <h1 className="sm:text-xl">
              सतलोक बहुउद्देश्यीय सहकारी संस्था लि.
            </h1>
            <h1 className="text-[0.6rem]">
              SATALOK MULTIPURPOSE CO-OPERATIVE LTD.
            </h1>
            <div className=" h-[1px] bg-primary md:h-[3px]" />
            <div className="mt-[1px] h-[1px] bg-red-600 md:h-[3px]" />
          </div>
        </div>
        <div className="flex flex-1 justify-center gap-4">
          <Phone className="w-4" />
          <Mail className="w-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
