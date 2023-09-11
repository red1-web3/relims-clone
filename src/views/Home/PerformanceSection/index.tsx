/* eslint-disable @next/next/no-img-element */
import { performances } from "@/config/constant/performances";
import { cxm } from "@/utils";
import Image from "next/image";

const PerformanceSection = () => {
  return (
    <section className="mt-10 md:mt-[70px] lg:mt-[90px] __gradient py-10 md:py-[60px]">
      <div className="max-w-[calc(1367px+30px)] px-[30px] mx-auto text-center">
        <h2 className="__h2"> Everything your lab needs in one place</h2>
        <p className="__h5 max-w-[852px] mx-auto mt-5">
          Optimized to drive revenue, patient satisfaction and business
          performance
        </p>

        <Image
          height={680}
          width={720}
          alt="Image"
          src={"/performance_mobile.png"}
          className="mt-5 md:hidden"
        />
        <div className="max-md:flex justify-center mt-12 md:mt-24">
          <div className="max-w-[1010px] mx-auto grid grid-cols-2 max-md:gap-x-[14px] lg:gap-y-10 relative">
            {performances.map(({ icon, lists, title }, i) => (
              <div
                key={i}
                className={cxm(
                  i % 2 ? "md:ml-[250px] lg:ml-[400px]" : "",
                  i === 0 && "md:translate-x-16",
                  i === 6 && "md:translate-x-16",
                  i === 1 && "md:-translate-x-16",
                  i === 7 && "md:-translate-x-16"
                )}
              >
                <div
                  className={cxm(
                    "w-[160px] md:max-w-[137px] flex flex-col max-md:items-center max-lg:scale-90",
                    i % 2 ? "md:items-start" : "md:items-end"
                  )}
                >
                  <Image {...icon} alt="Icon" className="max-md:h-10" />
                  <h6 className="font-medium text-xl/[22px] mt-1.5 capitalize mb-1">
                    {title}
                  </h6>
                  {lists.map((list, i) => (
                    <p
                      className="text-xs md:text-[13px]/[15px] text-[#333333] mt-0.5 font-medium whitespace-pre"
                      key={i}
                    >
                      {list}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <img
              className="max-md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[700px]"
              src="/performance_section_bg.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
