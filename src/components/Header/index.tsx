import { NavLinkProps, navLinks } from "@/config/constant/navLinks";
import { cxm } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { useClickAway } from "react-use";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="max-w-[1340px] mx-auto px-5 py-6">
        <div className="flex items-center justify-between">
          <Link href={"#"}>
            <Image src={"/logo.png"} width={124} height={50} alt="Logo Image" />
          </Link>
          <nav>
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
        </div>
      </div>
    </header>
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
              "flex items-center gap-x-1 text-app-black hover:text-accent font-light duration-200 text-lg"
            )}
          >
            <div className="">{label}</div>
            <div
              className={cxm(isOpenDropDown && "-rotate-180", "duration-300")}
            >
              <IoChevronDownOutline />
            </div>
          </button>
          <ul
            className={cxm(
              "absolute top-[calc(100%+10px)] right-0 bg-white w-[160px] __c_all gap-y-4 flex-col items-start px-5 py-3 duration-300",
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
            "text-app-black hover:text-accent font-light duration-200 text-lg",
            router.pathname === url && "font-bold text-accent"
          )}
        >
          {label}
        </Link>
      )}
    </li>
  );
}
