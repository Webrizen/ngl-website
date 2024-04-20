import BlogMainSubCard from "./BlogMainSubCard";
import Link from "next/link";

function FeturedPost() {
  const data = [
    {
      topic: "AUTO",
      title:
        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: "https://placehold.co/900x500",
    },
    {
      topic: "AI",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: "https://placehold.co/900x500",
    },
    {
      topic: "Technology",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: "https://placehold.co/900x500",
    },
    {
      topic: "Business",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: "https://placehold.co/900x500",
    },
  ];
  return (
    <div>
      <div className="px-[5.1%] ">
        <div className="relative w-full h-auto  flex items-center gap-5 pb-10 md:pb-12">
          <h3 className="inline-flex items-center text-white text-[18px] font-medium">
            Featured
            <span className="text-[12px] font-light ml-[10px] opacity-80">
              Post
            </span>
          </h3>
          <i className="relative w-full h-[1px] bg-[#4D4D4D]"></i>
        </div>
        <div className="grid grid-cols-10 gap-7 md:gap-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="col-span-12  sm:col-span-5 lg:col-span-2 "
            >
              <BlogMainSubCard
                href={"/single-blog"}
                topic={item.topic}
                src={item.src}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeturedPost;