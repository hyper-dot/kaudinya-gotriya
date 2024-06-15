"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "../Header/LanguageSwitcher";
import { menus, services, about, others } from "./menus";
import { MenuIcon, X, ChevronDown } from "lucide-react";

const MobileNav = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [otherCommittee, setOtherCommittee] = useState(false);

  const handleClose = () => {
    setMobileNav(false);
    setServiceOpen(false);
    setAboutOpen(false);
    setOtherCommittee(false);
  };

  return (
    <div className="sticky top-0 z-10 md:hidden">
      <div
        className={`flex items-center justify-between px-2 py-4 transition-all duration-200 md:hidden  ${"bg-primary text-white"}`}
      >
        <button
          onClick={() => setMobileNav(!mobileNav)}
          className="text-secondary-400"
        >
          {mobileNav ? <X /> : <MenuIcon />}
        </button>
        <LanguageSwitcher lang={lang} />
      </div>

      <ul
        className={`mobile-nav flex flex-col overflow-auto bg-primary text-white transition-all duration-300 ${
          mobileNav ? "h-[300px]" : "h-0"
        }`}
      >
        {menus[lang as keyof typeof menus].map((menu, menuIdx) => {
          if (menu.to === "/about") {
            return (
              <div key={menuIdx} className="text-sm">
                <p
                  onClick={() => {
                    setAboutOpen(!aboutOpen);
                  }}
                  className="flex cursor-pointer items-center px-2 py-2"
                >
                  {lang === "en" ? "About Us" : "हाम्रो बारेमा"}
                  <ChevronDown
                    strokeWidth={1}
                    className={aboutOpen ? "rotate-180" : ""}
                  />
                </p>
                <ul
                  className={`overflow-hidden pl-4 transition-all duration-300 ${aboutOpen && !otherCommittee ? "h-[220px]" : aboutOpen && otherCommittee ? "h-[380px]" : "h-0"}`}
                  key={`about_${menuIdx}`}
                >
                  {about[lang as keyof typeof about].map((m, aboutIdx) =>
                    m.to === "/others" ? (
                      <div key={aboutIdx}>
                        <p
                          onClick={() => {
                            setOtherCommittee(!otherCommittee);
                          }}
                          className="flex cursor-pointer items-center px-2 py-2"
                        >
                          {lang === "en" ? "Other Committee" : "अन्य समिति"}
                          <ChevronDown
                            strokeWidth={1}
                            className={otherCommittee ? "rotate-180" : ""}
                          />
                        </p>
                        <ul
                          className={`overflow-hidden px-4 transition-all duration-300 ${otherCommittee ? "h-[150px]" : "h-0"}`}
                          key={`otherCommittee_${aboutIdx}`}
                        >
                          {others[lang as keyof typeof others].map(
                            (m, committeeIdx) => (
                              <li key={`committee_${committeeIdx}`}>
                                <Link
                                  onClick={handleClose}
                                  className={`block px-2 py-2 text-sm ${pathname === `/about/${m.to}` && "bg-yellow-600"}`}
                                  href={`/about/${m.to}`}
                                >
                                  {m.title}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    ) : (
                      <li
                        onClick={() => setAboutOpen(!aboutOpen)}
                        key={`about_${aboutIdx}`}
                      >
                        <Link
                          onClick={handleClose}
                          className={`block px-2 py-2 text-sm ${pathname === `/about/${m.to}` && "bg-yellow-600"}`}
                          href={`/about/${m.to}`}
                        >
                          {m.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            );
          } else if (menu.to === "/services") {
            return (
              <div key={menuIdx} className="text-sm">
                <p
                  onClick={() => {
                    setServiceOpen(!serviceOpen);
                  }}
                  className="flex cursor-pointer items-center px-2 py-2"
                >
                  {lang === "en" ? "Services" : "हाम्रा सेवाहरु "}
                  <ChevronDown
                    className={serviceOpen ? "rotate-180" : ""}
                    strokeWidth={1}
                  />
                </p>
                <ul
                  className={`overflow-hidden px-4 transition-all duration-300 ${serviceOpen ? "h-[180px]" : "h-0"}`}
                  key={`services_${menuIdx}`}
                >
                  {services[lang as keyof typeof services].map(
                    (m, serviceIdx) => (
                      <li key={`service_${serviceIdx}`}>
                        <Link
                          onClick={handleClose}
                          className={`block px-2 py-2 text-sm ${pathname === `/services/${m.to}` && "bg-yellow-600"}`}
                          href={`/services/${m.to}`}
                        >
                          {m.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            );
          } else {
            return (
              <li
                onClick={() => setMobileNav(!mobileNav)}
                key={`menu_${menuIdx}`}
              >
                <Link
                  onClick={handleClose}
                  className={`block px-2 py-2 text-sm ${pathname === menu.to && "bg-yellow-600"}`}
                  href={menu.to}
                >
                  {menu.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
