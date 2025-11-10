export default function PlayButton() {
  return (
    <div
      className="
        md:w-[96] md:h-[96] w-[56] h-[56]
        bg-black rounded-full
        flex items-center justify-center
        transition-transform duration-300
        group-hover:scale-110
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="md:w-[64] md:h-[64] w-[40] h-[40] ml-[2]"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}
