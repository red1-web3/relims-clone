/* eslint-disable @next/next/no-img-element */
import { performances } from "@/config/constant/performances";
import { cxm } from "@/utils";
import Image from "next/image";

const PerformanceSection = () => {
  return (
    <section className="mt-10 md:mt-[70px] lg:mt-[90px] __gradient py-[60px]">
      <div className="max-w-[1367px] mx-auto text-center">
        <h2 className="__h2"> Everything your lab needs in one place</h2>
        <p className="__h5 max-w-[852px] mx-auto mt-5">
          Optimized to drive revenue, patient satisfaction and business
          performance
        </p>

        <div className="max-w-[1010px] mx-auto mt-24 grid grid-cols-2 gap-y-10 relative">
          {performances.map(({ icon, lists, title }, i) => (
            <div
              key={i}
              className={cxm(
                i % 2 ? "ml-[400px]" : "",
                i === 0 && "translate-x-16",
                i === 6 && "translate-x-16",
                i === 1 && "-translate-x-16",
                i === 7 && "-translate-x-16"
              )}
            >
              <div
                className={cxm(
                  "max-w-[137px] flex flex-col",
                  i % 2 ? " items-start" : "items-end"
                )}
              >
                <Image {...icon} alt="Icon" />
                <h6 className="font-medium text-xl/[22px] mt-1.5 capitalize mb-1">
                  {title}
                </h6>
                {lists.map((list, i) => (
                  <p
                    className="text-[13px]/[15px] text-[#333333] mt-0.5 font-medium whitespace-pre"
                    key={i}
                  >
                    {list}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px]"
            src="/performance_section_bg.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
