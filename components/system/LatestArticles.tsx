import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ArticleImage1 from "../../assets/Patd-Card/5.jpg";
import ArticleImage2 from "../../assets/Patd-Card/6.jpg";
import ArticleImage3 from "../../assets/Patd-Card/7.jpg";
import ArticleImage4 from "../../assets/Patd-Card/8.jpg";

const LatestArticles = () => {
    return (
        <div className="relative w-full h-auto p-[5.1%] text-white">
            {/* title section */}
            <div className="relative w-full h-auto pb-10 md:pb-12 flex items-center gap-5">
                <h3 className="inline-flex items-center text-[18px] font-medium">
                    Latest{" "}
                    <span className="text-[12px] font-light ml-[10px] opacity-80">
                        Articles
                    </span>
                </h3>
                <i className="relative w-full h-[1px] bg-[#4D4D4D]"></i>
            </div>

            {/* all cards */}
            <div className="relative w-full h-auto grid md:grid-cols-4 grid-cols-1 gap-[30px] text-white">
                {/* one */}
                <div className="Patd-Card relative w-full h-auto block bg-[#fff] bg-opacity-10 rounded-[20px] overflow-hidden border border-solid border-[#2F2F30] ">
                    <Link href={"/single-blog"}>
                        <div className="Patd-Card-banner relative w-full h-auto">
                            <Image
                                src={ArticleImage1}
                                layout="fixed"
                                width={1000} // Set a large width for the initial rendering
                                height={230}
                                className="relative w-full h-[230px] object-cover object-center rounded-[0px] filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                alt="Article Image"
                            />
                        </div>
                        <div className="relative w-full py-[20px] p-[20px]">
                            <h3 className="text-[17px] font-medium mb-[15px] truncate line-clamp-2 overflow-hidden text-ellipsis relative w-full">
                                Sleep Apnea
                            </h3>
                            <p className="relative w-full max-w-[40ch] opacity-70 text-[15px]">
                                Donec nec justo eget felis facilisis fermentum. Aliquam
                                porttitor.
                            </p>
                            <h4 className="relative mt-[30px] flex justify-between items-center text-[13px] font-light opacity-70">
                                <span className="inline-flex items-center gap-[5px]">
                                    18/03/2024
                                </span>
                                <span className="inline-flex items-center gap-[5px]">
                                    <Clock className="w-[13px]" />

                                    <span>5 Min Read</span>
                                </span>
                            </h4>
                        </div>
                    </Link>
                </div>

                {/* two */}
                <div className="Patd-Card relative w-full h-auto block bg-[#fff] bg-opacity-10 rounded-[20px] overflow-hidden border border-solid border-[#2F2F30] ">
                    <Link href={"/single-blog"}>
                        <div className="Patd-Card-banner relative w-full h-auto">
                            <Image
                                src={ArticleImage2}
                                layout="fixed"
                                width={1000} // Set a large width for the initial rendering
                                height={230}
                                className="relative w-full h-[230px] object-cover object-center rounded-[0px] filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                alt="Article Image"
                            />
                        </div>
                        <div className="relative w-full py-[20px] p-[20px]">
                            <h3 className="text-[17px] font-medium mb-[15px] truncate line-clamp-2 overflow-hidden text-ellipsis relative w-full">
                                World Water Day
                            </h3>
                            <p className="relative w-full max-w-[40ch] opacity-70 text-[15px]">
                                Donec nec justo eget felis facilisis fermentum. Aliquam
                                porttitor.
                            </p>
                            <h4 className="relative mt-[30px] flex justify-between items-center text-[13px] font-light opacity-70">
                                <span className="inline-flex items-center gap-[5px]">
                                    18/03/2024
                                </span>
                                <span className="inline-flex items-center gap-[5px]">
                                    <Clock className="w-[13px]" />

                                    <span>5 Min Read</span>
                                </span>
                            </h4>
                        </div>
                    </Link>
                </div>

                {/* three */}
                <div className="Patd-Card relative w-full h-auto block bg-[#fff] bg-opacity-10 rounded-[20px] overflow-hidden border border-solid border-[#2F2F30] ">
                    <Link href={"/single-blog"}>
                        <div className="Patd-Card-banner relative w-full h-auto">
                            <Image
                                src={ArticleImage3}
                                layout="fixed"
                                width={1000} // Set a large width for the initial rendering
                                height={230}
                                className="relative w-full h-[230px] object-cover object-center rounded-[0px] filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                alt="Article Image"
                            />
                        </div>
                        <div className="relative w-full py-[20px] p-[20px]">
                            <h3 className="text-[17px] font-medium mb-[15px] truncate line-clamp-2 overflow-hidden text-ellipsis relative w-full">
                                International Day of Happiness 2024
                            </h3>
                            <p className="relative w-full max-w-[40ch] opacity-70 text-[15px]">
                                Donec nec justo eget felis facilisis fermentum. Aliquam
                                porttitor.
                            </p>
                            <h4 className="relative mt-[30px] flex justify-between items-center text-[13px] font-light opacity-70">
                                <span className="inline-flex items-center gap-[5px]">
                                    18/03/2024
                                </span>
                                <span className="inline-flex items-center gap-[5px]">
                                    <Clock className="w-[13px]" />

                                    <span>5 Min Read</span>
                                </span>
                            </h4>
                        </div>
                    </Link>
                </div>

                {/* four */}
                <div className="Patd-Card relative w-full h-auto block bg-[#fff] bg-opacity-10 rounded-[20px] overflow-hidden border border-solid border-[#2F2F30] ">
                    <Link href={"/single-blog"}>
                        <div className="Patd-Card-banner relative w-full h-auto">
                            <Image
                                src={ArticleImage4}
                                layout="fixed"
                                width={1000} // Set a large width for the initial rendering
                                height={230}
                                className="relative w-full h-[230px] object-cover object-center rounded-[0px] filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                alt="Article Image"
                            />
                        </div>
                        <div className="relative w-full py-[20px] p-[20px]">
                            <h3 className="text-[17px] font-medium mb-[15px] truncate line-clamp-2 overflow-hidden text-ellipsis relative w-full">
                                World Water Day
                            </h3>
                            <p className="relative w-full max-w-[40ch] opacity-70 text-[15px]">
                                Donec nec justo eget felis facilisis fermentum. Aliquam
                                porttitor.
                            </p>
                            <h4 className="relative mt-[30px] flex justify-between items-center text-[13px] font-light opacity-70">
                                <span className="inline-flex items-center gap-[5px]">
                                    18/03/2024
                                </span>
                                <span className="inline-flex items-center gap-[5px]">
                                    <Clock className="w-[13px]" />

                                    <span>5 Min Read</span>
                                </span>
                            </h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestArticles;