/* eslint-disable @next/next/no-img-element */
import { trackRecord } from "@/config/constant/trackRecord";
import { cxm } from "@/utils";
import { useRef, useState } from "react";
import Collapsible from "react-collapsible";
import { useClickAway } from "react-use";

const TrackRecordSection = () => {
  const collapsibleTarget = useRef(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const handleClick = (i: number) => {
    setActiveFaq((prev) => (prev === i ? null : i));
    setActiveImage(i);
  };

  useClickAway(collapsibleTarget, () => {
    setActiveFaq(null);
    setActiveImage(0);
  });
  return (
    <section className="mt-10 md:mt-[70px] lg:mt-[90px]">
      <div className="max-w-[1037px] mx-auto text-center">
        <h2 className="__h2">Proven Track Record</h2>
        <h5 className="__h5 mt-1 max-w-[443px] mx-auto">
          {"Deployed successfully with labs of all sizes"}
        </h5>
        <p className="mt-4 __body20">
          Easy, mobile-optimized, web-based interface accessible from anywhere
        </p>
      </div>
      <div className="mt-20 max-w-[1095px] mx-auto grid grid-cols-3 gap-x-10">
        <div className="space-y-10" ref={collapsibleTarget}>
          {trackRecord.collapsible.map((data, i) => (
            <CollapsibleColumn
              key={i}
              {...data}
              onClick={() => handleClick(i)}
              isOpen={activeFaq === i}
            />
          ))}
        </div>

        <div className="col-span-2 flex justify-center">
          <img
            src={trackRecord.tracks[activeImage]}
            alt="Image"
            className="max-h-[450px] h-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;

function CollapsibleColumn({
  description,
  title,
  onClick,
  isOpen,
}: {
  title: string;
  description: string;
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <div className={cxm("group relative isolate")}>
      <div
        onClick={onClick}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3 className="__body20 font-normal">{title}</h3>
      </div>
      <Collapsible
        trigger=""
        open={isOpen}
        transitionTime={500}
        transitionCloseTime={500}
      >
        <p className="p-[30px] rounded-3xl __gradient mt-3.5 __body20 font-normal">
          {description}
        </p>
      </Collapsible>
    </div>
  );
}
