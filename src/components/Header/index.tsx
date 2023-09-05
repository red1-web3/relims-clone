import { NavLinkProps, navLinks } from "@/config/constant/navLinks";
import { cxm } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { IoChevronDownOutline, IoMenuSharp } from "react-icons/io5";
import { useClickAway, useWindowScroll } from "react-use";

const Header = () => {
  const scroll = useWindowScroll();
  const [isActiveNavMenu, setIsActiveNavMenu] = useState(false);

  return (
    <>
      <header
        className={cxm(
          "fixed top-0 left-0 w-full duration-300 z-[99] bg-[#D7F7FF]",
          scroll.y > 0 && "bg-white"
        )}
      >
        <div className="max-w-[1340px] mx-auto px-5 py-6">
          <div className="flex items-center justify-between">
            <Link href={"#"}>
              <Image
                src={"/logo.png"}
                width={124}
                height={50}
                alt="Logo Image"
              />
            </Link>

            {/* Mobile Nav --Start-- */}
            <nav className="lg:hidden">
              <button
                onClick={() => setIsActiveNavMenu((p) => !p)}
                className={cxm(
                  "text-3xl h-10 aspect-square duration-200 __c_all rounded",
                  isActiveNavMenu && "bg-accent text-white"
                )}
              >
                <IoMenuSharp />
              </button>
            </nav>
            {/* Mobile Nav --End-- */}

            {/* Desktop Nav --Start-- */}
            <nav className="max-lg:hidden">
              <ul className="flex items-center gap-x-10">
                {navLinks.map((data, i) => {
                  return <Links {...data} key={i} />;
                })}
                <li>
                  <Link href={"#"} className="__btn px-[35px]">
                    Request Demo
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Desktop Nav --End-- */}
          </div>
        </div>
      </header>
      <div
        className={cxm(
          "fixed top-[97.4px] z-[98] left-0 bg-white p-5 w-full duration-300",
          isActiveNavMenu ? "translate-y-0" : "-translate-y-[calc(100%+97.4px)]"
        )}
      >
        <ul className="space-y-3">
          {navLinks.map((data, i) => {
            return <Links {...data} key={i} />;
          })}
          <li>
            <Link href={"#"} className="__btn text-sm px-5 !mt-5 w-fit">
              Request Demo
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

function Links({ label, url, subLinks }: NavLinkProps) {
  const router = useRouter();
  const dropDown = useRef(null);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  useClickAway(dropDown, () => {
    setIsOpenDropDown(false);
  });

  return (
    <li>
      {subLinks ? (
        <div className="relative" ref={dropDown}>
          <button
            onClick={() => setIsOpenDropDown((prev) => !prev)}
            className={cxm(
              "flex items-center gap-x-1 text-app-black hover:text-accent font-light duration-200 text-base lg:text-lg"
            )}
          >
            <div>{label}</div>
            <div
              className={cxm(isOpenDropDown && "-rotate-180", "duration-300")}
            >
              <IoChevronDownOutline />
            </div>
          </button>
          <ul
            className={cxm(
              "absolute top-[calc(100%+10px)] max-lg:w-full max-lg:shadow-lg max-lg:left-0 lg:right-0 bg-white w-[160px] __c_all gap-y-4 flex-col items-start px-5 py-3 duration-300",
              isOpenDropDown
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "-translate-y-5 opacity-0 pointer-events-none"
            )}
          >
            {subLinks.map(({ label, url }, i) => (
              <li key={i}>
                <Link
                  href={url}
                  className="text-sm hover:text-accent duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link
          href={url}
          className={cxm(
            "text-app-black hover:text-accent font-light duration-200 text-base lg:text-lg",
            router.pathname === url && "font-bold text-accent"
          )}
        >
          {label}
        </Link>
      )}
    </li>
  );
}
