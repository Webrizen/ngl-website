import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function MainCard({ name, dsc, date, src, details }: any) {
  return (
    <>
      <div
        className={`${
          details ? "h-[480px] md:h-[750px]" : "h-[480px] sm:h-[620px] "
        }  w-full  relative`}
      >
        <Link href={"/single-blog"}>
          <div
            className="absolute top-[3%] left-[5.1%] "
            style={{ zIndex: 20 }}
          >
            <div
              className={` bg-btnbg z-20 text-white px-5 py-2 rounded-[20px]`}
            >
              {name}
            </div>
          </div>
          <div
            className="absolute bottom-[7%] left-[5.1%] w-[90%] "
            style={{ zIndex: 20 }}
          >
            <div className="grid gap-[35px]">
              <div
                className={`flex  ${
                  details ? "justify-start" : "justify-center"
                }`}
              >
                <p className="text-white font-[400] text-[15px]">{dsc}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="text-white text-[15px] opacity-[0.7]">
                    {date}
                  </span>
                </div>
                <div className="flex items-center gap-2 opacity-[0.7] font-[300]">
                  <Clock
                    className="w-[13px] text-white"
                  />{" "}
                  <span className="text-white text-[15px]"> 5 Min Read</span>
                </div>
              </div>
            </div>
          </div>

          <Image
            style={{ zIndex: 10 }}
            className="z-10 rounded-[20px] w-full h-full object-cover opacity-90 ease-in hover:ease-out  hover:opacity-50  transition-all delay-100  hover:delay-100 duration-300 hover:duration-300 "
            src={src}
            alt=""
          />
        </Link>
      </div>
    </>
  );
}

export default MainCard;