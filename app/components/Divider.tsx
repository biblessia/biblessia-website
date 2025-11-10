import DashedDots from "../icons/DashedDots";

export default function Divider() {
  return (
    <div className="flex flex-row items-center justify-center gap-[4] md:gap-[8] bg-white">
      <DashedDots className="h-[4] w-[44] md:w-[88] md:h-[8]" />
      <DashedDots className="h-[4] w-[44] md:w-[88] md:h-[8]" />
    </div>
  );
}
