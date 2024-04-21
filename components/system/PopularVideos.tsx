import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardVid from "../../assets/Gal_Card/video-demo.png";

import CardImg1 from "../../assets/Gal_Card/1.jpg";
import CardImg2 from "../../assets/Gal_Card/2.jpg";
import CardImg3 from "../../assets/Gal_Card/3.jpg";
import CardImg4 from "../../assets/Gal_Card/4.jpg";

const PopularVideos = () => {
    return (
        <div className="relative w-full h-auto  px-[5.1%] text-white">
            {/* title section */}
            <div className="relative w-full h-auto pb-10 md:pb-12 flex items-center gap-5">
                <h3 className="inline-flex items-center text-[18px] font-medium">
                    Popular{" "}
                    <span className="text-[12px] font-light ml-[10px] opacity-80">
                        Videos
                    </span>
                </h3>
                <i className="relative w-full h-[1px] bg-[#4D4D4D]"></i>
            </div>

            {/* all cards */}
            <div className="relative w-full h-auto  grid grid-cols-12 gap-[30px]">
                {/* col 1 */}
                <div className="relative w-full h-auto col-span-12 md:col-span-7">
                    <Link href={"/single-blog"}>
                        <div className="Patd-Card relative w-full h-auto block">
                            <div className="Patd-Card-banner relative w-full h-auto flex flex-col items-center justify-center text-center">
                                <Image
                                    src={CardVid}
                                    placeholder="blur"
                                    alt="Video"
                                    className="relative w-full h-auto min-h-[250px] lg:h-[600px] rounded-[20px] object-cover object-center filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                />
                                <span className="absolute left-[15px] top-[15px] z-10 rounded-[30px] py-[10px] px-[20px] bg-black bg-opacity-50 text-white text-[15px]">
                                    Technology
                                </span>
                                <button className="absolute z-10 w-[50px] h-[50px] bg-white rounded-[50%] inline-flex items-center justify-center text-center text-black text-[20px] bg-blend-multiply">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative w-full h-auto mt-[20px]">
                                <p className="text-[20px]">
                                    Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan
                                    porttitor facilisis luctus metus.
                                </p>
                                <h4 className="flex items-center mt-[20px] gap-[30px] text-[13px]">
                                    <span>
                                        <b className="text-[#999999]">By:</b> Alan Rickman
                                    </span>
                                    <span className="inline-flex items-center gap-[5px]">
                                        <Clock className="w-[13px]" /> 12
                                        Minutes
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* col 2 */}
                <div className="relative w-full h-auto col-span-12 md:col-span-5">
                    <div className="custom_y_scrollbar_design relative w-full h-auto md:h-[500px] lg:h-[600px] p-0 lg:pr-[20px] mt-[40px] lg:mt-0 overflow-y-auto flex flex-col gap-[20px]">
                        {/* card 1 */}
                        <div className="Patd-Card relative w-full h-auto grid grid-cols-12 gap-[10px] md:gap-[20px]">
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto">
                                <div className="Patd-Card-banner relative w-full h-auto flex flex-col items-center justify-center text-center">
                                    <Image
                                        src={CardImg1}
                                        alt="Image"
                                        placeholder="blur"
                                        className="relative w-full h-auto md:h-[200px] rounded-[20px] object-cover object-center filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                    />
                                    <button className="absolute z-10 w-[45px] h-[45px] bg-white rounded-[50%] inline-flex items-center justify-center text-center text-black text-[17px] bg-blend-multiply">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto flex flex-col justify-end py-[20px]">
                                <div className="Gal_2_Card_2_txt text-[15px]">
                                    <span className="relative py-[10px] px-[20px] rounded-[30px] bg-white bg-opacity-10 border border-solid border-black border-opacity-60 inline-flex  mb-[15px]">
                                        Lifestyle
                                    </span>
                                    <p>
                                        Donec nec justo eget felis facilisis fermentum. Aliquam
                                        porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="Patd-Card relative w-full h-auto grid grid-cols-12 gap-[10px] md:gap-[20px]">
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto">
                                <div className="Patd-Card-banner relative w-full h-auto flex flex-col items-center justify-center text-center">
                                    <Image
                                        src={CardImg2}
                                        alt="Image"
                                        placeholder="blur"
                                        className="relative w-full h-auto md:h-[200px] rounded-[20px] object-cover object-center filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                    />
                                    <button className="absolute z-10 w-[45px] h-[45px] bg-white rounded-[50%] inline-flex items-center justify-center text-center text-black text-[17px] bg-blend-multiply">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto flex flex-col justify-end py-[20px]">
                                <div className="Gal_2_Card_2_txt text-[15px]">
                                    <span className="relative py-[10px] px-[20px] rounded-[30px] bg-white bg-opacity-10 border border-solid border-black border-opacity-60 inline-flex  mb-[15px]">
                                        Latest
                                    </span>
                                    <p>
                                        Donec nec justo eget felis facilisis fermentum. Aliquam
                                        porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="Patd-Card relative w-full h-auto grid grid-cols-12 gap-[10px] md:gap-[20px]">
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto">
                                <div className="Patd-Card-banner relative w-full h-auto flex flex-col items-center justify-center text-center">
                                    <Image
                                        src={CardImg3}
                                        alt="Image"
                                        placeholder="blur"
                                        className="relative w-full h-auto md:h-[200px] rounded-[20px] object-cover object-center filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                    />
                                    <button className="absolute z-10 w-[45px] h-[45px] bg-white rounded-[50%] inline-flex items-center justify-center text-center text-black text-[17px] bg-blend-multiply">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto flex flex-col justify-end py-[20px]">
                                <div className="Gal_2_Card_2_txt text-[15px]">
                                    <span className="relative py-[10px] px-[20px] rounded-[30px] bg-white bg-opacity-10 border border-solid border-black border-opacity-60 inline-flex  mb-[15px]">
                                        Ai
                                    </span>
                                    <p>
                                        Donec nec justo eget felis facilisis fermentum. Aliquam
                                        porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className="Patd-Card relative w-full h-auto grid grid-cols-12 gap-[10px] md:gap-[20px]">
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto">
                                <div className="Patd-Card-banner relative w-full h-auto flex flex-col items-center justify-center text-center">
                                    <Image
                                        src={CardImg4}
                                        alt="Image"
                                        placeholder="blur"
                                        className="relative w-full h-auto md:h-[200px] rounded-[20px] object-cover object-center filter brightness-75 hover:brightness-50 transition-all duration-300 ease-in-out"
                                    />
                                    <button className="absolute z-10 w-[45px] h-[45px] bg-white rounded-[50%] inline-flex items-center justify-center text-center text-black text-[17px] bg-blend-multiply">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 relative w-full h-auto flex flex-col justify-end py-[20px]">
                                <div className="Gal_2_Card_2_txt text-[15px]">
                                    <span className="relative py-[10px] px-[20px] rounded-[30px] bg-white bg-opacity-10 border border-solid border-black border-opacity-60 inline-flex  mb-[15px]">
                                        Technology
                                    </span>
                                    <p>
                                        Donec nec justo eget felis facilisis fermentum. Aliquam
                                        porttitor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularVideos;