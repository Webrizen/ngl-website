import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardVid from "../../assets/Gal_Card/video-demo.png";
import PartCardImg1 from "@/public/Patd-Card/1.jpg";
import PartCardImg2 from "@/public/Patd-Card/2.jpg";
import PartCardImg3 from "@/public/Patd-Card/3.jpg";
import PartCardImg4 from "@/public/Patd-Card/4.jpg";
import CardImg1 from "../../assets/Gal_Card/1.jpg";
import CardImg2 from "../../assets/Gal_Card/2.jpg";
import CardImg3 from "../../assets/Gal_Card/3.jpg";
import CardImg4 from "../../assets/Gal_Card/4.jpg";
import MainCard from "./MainCard";
import BlogMainSubCard from "./BlogMainSubCard";

const TopStories = () => {
  const data = [
    {
      topic: "AUTO",
      title:
        "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg1,
    },
    {
      topic: "AI",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg2,
    },
    {
      topic: "Technology",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg3,
    },
    {
      topic: "Business",
      title:
        " Donec nec justo eget felis facilisis fermentum. Aliquam porttitor.",
      src: PartCardImg4,
    },
  ];
  return (
    <div className="relative w-full h-auto  px-[5.1%] text-white">
      {/* title section */}
      <div className="relative w-full h-auto pb-10 md:pb-12 flex items-center gap-5">
        <h3 className="inline-flex items-center text-[18px] font-medium">
          Top{" "}
          <span className="text-[12px] font-light ml-[10px] opacity-80">
            Stories
          </span>
        </h3>
        <i className="relative w-full h-[1px] bg-[#4D4D4D]"></i>
      </div>

      {/* all cards */}
      <div className="relative w-full h-auto  grid grid-cols-10 gap-[30px]">
        {/* col 1 */}
        <div className="relative w-full h-auto col-span-10 md:col-span-6 lg:col-span-7">
          <div className="grid grid-cols-12 bg-primary rounded-2xl">
            <div className="col-span-12 lg:col-span-8">
              <div className="Patd-Card relative w-full h-auto block">
                <div>
                  <MainCard
                    src={PartCardImg1}
                    name="Technology"
                    dsc="Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci."
                    date="18/03/2024"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 py-8 px-5 md:pl-20 md:mt-0 mt-4 bg-[#101011] md:rounded-tr-2xl md:rounded-br-2xl md:w-[360px] md:-ml-[15%]">
              <div className="grid gap-5 sm:gap-8 py-3 lg:px-auto">
                <div className="text-sm">
                  <p className="font-normal">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis.
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-normal">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis.
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-normal">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis.
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-normal">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci. Aenean dignissim
                    pellentesque felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* col 2 */}
        <div className="relative w-full h-auto col-span-10 md:col-span-4 lg:col-span-3">
          <div className="custom_y_scrollbar_design relative w-full h-auto md:h-[500px] lg:h-[600px] p-0 lg:pr-[20px] mt-[40px] lg:mt-0 overflow-y-auto flex flex-col gap-[20px]">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-auto grid grid-cols-12 gap-[10px] md:gap-[20px]"
              >
                <div className="col-span-12 md:col-span-12 relative w-full h-auto">
                  <BlogMainSubCard
                    href={"/single-blog"}
                    topic={item.topic}
                    title={item.title}
                    src={item.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;