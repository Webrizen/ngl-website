import PartCardImg5 from "@/public/Patd-Card/5.jpg";
import PartCardImg6 from "@/public/Patd-Card/6.jpg";
import PartCardImg7 from "@/public/Patd-Card/7.jpg";
import PartCardImg8 from "@/public/Patd-Card/8.jpg";
import Link from "next/link";
import BlogMainSubCard from "./BlogMainSubCard";

function FeturedPost() {
  const data = [
    {
      topic: "AUTO",
      title:
        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg5,
    },
    {
      topic: "AI",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg6,
    },
    {
      topic: "Technology",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg7,
    },
    {
      topic: "Business",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg8,
    },
  ];
  return (
    <>
      <div className="px-[5.1%] w-full">
        <div className="relative w-full h-auto  flex items-center gap-5 pb-10 md:pb-12">
          <h3 className="inline-flex items-center text-white text-[18px] font-medium">
            Featured
            <span className="text-[12px] font-light ml-[10px] opacity-80">
              Post
            </span>
          </h3>
          <i className="relative w-full h-[1px] bg-[#4D4D4D]"></i>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-7 md:gap-10 w-full">
          {data.map((item, index) => (
            <BlogMainSubCard
              key={index}
              href={"/single-blog"}
              topic={item.topic}
              src={item.src}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FeturedPost;