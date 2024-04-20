import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function MainCard({ name, dsc, date, src, details }: any) {
  return (
    <>
      <div
        className={`${details ? "h-[480px] md:h-[750px]" : "h-[480px] sm:h-[620px] "
          }  w-full  relative`}
      >
        <Link href={"/single-blog"}>
          <div
            className="absolute top-[3%] px-5 flex justify-between items-center w-full"
            style={{ zIndex: 20 }}
          >
            <div
              className={`bg-[rgba(0,0,0,0.1)] z-20 text-white px-5 py-2 rounded-[20px]`}
            >
              {name}
            </div>
            <div
              className={`bg-btnbg z-20 text-white px-5 py-2 rounded-[20px] flex items-start gap-3 w-max mt-10 md:mt-0`}
            >
              <button aria-label="Prev Button" className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-[rgba(225,225,225,0.1)] hover:bg-[rgba(225,225,225,0.2)] backdrop-blur-lg border border-[rgba(225,225,225,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd" />
                </svg>
              </button>
              <button aria-label="Next Button" className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-[rgba(225,225,225,0.1)] hover:bg-[rgba(225,225,225,0.2)] backdrop-blur-lg border border-[rgba(225,225,225,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="absolute bottom-[7%] left-[5.1%] w-[90%] "
            style={{ zIndex: 20 }}
          >
            <div className="grid gap-[35px]">
              <div
                className={`flex  ${details ? "justify-start" : "justify-center"
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