import Image from "next/image";
import Link from "next/link";

function BlogMainSubCard({ topic, title, src, href }: any) {
  return (
    <div>
      <Link href={href}>
        <div className="h-[280px] sm:h-[220px] w-full  relative ">
          <div
            className="absolute top-[3%] left-[5.1%] "
            style={{ zIndex: 20 }}
          >
            <div
              className={` bg-btnbg z-20 text-white px-5 py-2 rounded-[20px]`}
            >
              {topic}
            </div>
          </div>

          <Image
            style={{ zIndex: 10 }}
            className="z-10 rounded-[20px] w-full h-full object-cover opacity-90 ease-in hover:ease-out  hover:opacity-50  transition-all delay-100  hover:delay-100 duration-300 hover:duration-300 "
            src={src}
            width={500}
            height={500}
            alt="hmm"
          />
        </div>
        <div className="mt-5">
          <h4 className="text-white text-[15px]  md:text-[17px]">{title}</h4>
        </div>
      </Link>
    </div>
  );
}

export default BlogMainSubCard;