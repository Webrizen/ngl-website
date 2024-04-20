import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
  import { Clock } from 'lucide-react';
  import Image from "next/image";
  import Link from "next/link";
  import ArticleImage1 from "@/assets/Patd-Card/5.jpg";
  import LatestArticles from '@/components/system/LatestArticles';

export default function page() {
  return (
    <>
      <section className="relative w-full h-auto mt-[10%] text-white">
        <div className="relative w-[90%] h-auto ml-[5%]">
          {/* title  */}
          <div className="relative w-full h-auto">
            <span className="relative inline-flex items-center m-[2px] text-[13px]">
              Home
            </span>
            <i className="fa fa-caret-right text-[10px]"></i>
            <span className="relative inline-flex items-center m-[2px] text-[13px]">
              Blogs
            </span>
            <i className="fa fa-caret-right text-[10px]"></i>
            <span className="relative inline-flex items-center m-[2px] text-[13px] text-[#955CDF]">
              World Happiness Day
            </span>
          </div>

          {/* banner top */}
          <div className="relative w-full h-auto mt-[30px] block lg:grid grid-cols-[1fr,300px] gap-[30px]">
            <div className=" relative w-full h-auto">
              <div className="Single-TtP-Dlt">
                <div className="relative w-full h-auto">
                  <Image
                    src={ArticleImage1}
                    layout="fixed"
                    width={1000} // Set a large width for the initial rendering
                    height={230}
                    className="relative w-full h-auto lg:h-[500px] object-cover object-center rounded-[20px]"
                    alt="Article Image"
                  />
                </div>
                <div className="relative w-full h-auto p-[30px] text-center">
                  <h2 className="text-[30px] lg:text-[60px] font-bold mb-[10px]">
                    Quisque volutpat mattis eros. Nullam malesuada erat ut
                    turpis.
                  </h2>
                  <ul className="relative mt-[20px] text-[15px]">
                    <li className="relative inline-flex items-center gap-[7px] my-[5px] mx-[10px] opacity-100 text-[#955CDF]">
                      Healthcare
                    </li>
                    <li className="relative inline-flex items-center gap-[7px] my-[5px] mx-[10px] opacity-60">
                      21 March 2024
                    </li>
                    <li className="relative inline-flex items-center gap-[7px] my-[5px] mx-[10px] opacity-60">
                      <Clock className="w-[13px]" />{" "}
                      <span>9 Min. Read</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" relative w-full h-auto">
              <div className="relative w-full h-auto lg:h-[500px] mb-[40px] p-[30px] bg-[#1A1A1A] rounded-[20px] border border-solid border-[#2D2D2F]">
                <h3 className="text-[20px]">Table Of Contents</h3>
                <ol className="m-0 mt-[20px] px-[20px] text-[15px]">
                  <li className="list-decimal mt-[5px]">
                    Understanding Happiness:
                  </li>
                  <li className="list-decimal mt-[5px]">
                    Global Happiness Report:
                  </li>
                  <li className="list-decimal mt-[5px]">Promoting Happiness</li>
                  <li className="list-decimal mt-[5px]">
                    Reflection and Action
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* main content */}
          <div className="relative w-full h-auto flex flex-col items-center border-t border-solid border-[#2D2D2F] pt-[30px]">
            <div className="relative max-w-full lg:max-w-[1000px]">
              <div className="relative text-[15px]">
                <p className="my-[15px]">
                  March 20th marks a day of profound significance worldwide –
                  World Happiness Day. Established by the United Nations in
                  2012, this observance underscores the importance of happiness
                  and well-being as fundamental goals for humanity. It&apos;s a
                  day to reflect on what brings us joy, how we can cultivate
                  happiness in our lives, and the collective efforts needed to
                  promote happiness for all.
                </p>

                <h3 className="text-[20px] font-semibold mt-[10px] mb-[20px] block">
                  Understanding Happiness:
                </h3>

                <p className="my-[15px]">
                  Happiness is a multifaceted concept that goes beyond fleeting
                  moments of pleasure. It encompasses a sense of contentment,
                  fulfillment, and overall satisfaction with life. While
                  happiness is subjective and varies from person to person,
                  research indicates that certain factors contribute to our
                  well-being. These include strong social connections, a sense
                  of purpose, financial stability, physical and mental health,
                  and the ability to engage in activities that bring us joy.
                </p>

                <h3 className="text-[20px] font-semibold mt-[10px] mb-[20px] block">
                  Global Happiness Report:
                </h3>

                <p className="my-[15px]">
                  Every year, the World Happiness Report offers insights into
                  the state of happiness around the globe. It ranks countries
                  based on various factors, including GDP per capita, social
                  support, life expectancy, freedom to make life choices,
                  generosity, and perceptions of corruption. While the rankings
                  may fluctuate, the report highlights the importance of
                  addressing social and economic inequalities, fostering trust
                  and community resilience, and prioritizing mental health
                  initiatives to enhance overall happiness.
                </p>

                <h3 className="text-[20px] font-semibold mt-[10px] mb-[20px] block">
                  Promoting Happiness:
                </h3>

                <p className="my-[15px]">
                  On World Happiness Day, individuals, communities, and
                  governments come together to promote happiness and well-being
                  in various ways:
                </p>

                <ol className="m-0 p-0 ml-[20px]">
                  <li className="list-decimal my-[15px]">
                    Acts of Kindness: Small gestures of kindness can have a
                    ripple effect, spreading joy and positivity. Whether
                    it&apos;s volunteering, helping a neighbor, or simply
                    offering a smile, acts of kindness contribute to a happier
                    world.
                  </li>

                  <li className="list-decimal my-[15px]">
                    Mindfulness and Gratitude: Practicing mindfulness and
                    gratitude can shift our focus from what we lack to what we
                    have. Taking time to appreciate the present moment and
                    express gratitude for the blessings in our lives fosters a
                    deeper sense of happiness and contentment
                  </li>

                  <li className="list-decimal my-[15px]">
                    Social Connections: Building and nurturing meaningful
                    relationships is essential for happiness. Connecting with
                    family, friends, and communities provides a support system,
                    fosters a sense of belonging, and enhances overall
                    well-being.
                  </li>
                </ol>

                <h3 className="text-[20px] font-semibold mt-[10px] mb-[20px] block">
                  Reflection and Action:
                </h3>

                <p className="my-[15px]">
                  World Happiness Day encourages us to reflect on our own
                  happiness and take action to create a happier world for
                  ourselves and others. It reminds us that happiness is not a
                  destination but a journey, and that each of us has the power
                  to make a positive impact in the lives of others.
                </p>

                <p className="my-[15px]">
                  As we celebrate World Happiness Day, let us embrace the
                  principles of joy, compassion, and resilience. Let us strive
                  to cultivate happiness in our lives and communities, and work
                  towards a future where happiness and well-being are accessible
                  to all.
                </p>

                <p className="my-[15px]">
                  In conclusion, World Happiness Day serves as a reminder of the
                  importance of prioritising happiness and well-being in our
                  lives and societies. By fostering kindness, mindfulness,
                  social connections, and sustainable living practices, we can
                  contribute to a happier and more fulfilling world for
                  generations to come.
                </p>
              </div>

              <div className="relative w-full h-auto mt-[30px] p-[30px] bg-[#1A1A1A] rounded-[20px] border border-solid border-[#2D2D2F]">
                <div className="relative w-full h-auto grid grid-cols-[auto,1fr] gap-[15px]">
                  <div className="relative w-auto h-auto">
                    <Image
                      src={ArticleImage1}
                      // layout="fixed"
                      width={60}
                      height={60}
                      className="relative w-[60px] h-[60px] object-cover object-center rounded-full"
                      alt="Article Image"
                    />
                  </div>
                  <div className="relative w-full h-auto flex flex-col justify-center">
                    <h3 className="text-[20px] font-medium">Kaley Gibbons</h3>
                    <span className="block text-[15px] mt-[5px] opacity-60">
                      Medical Content Writer
                    </span>
                  </div>
                </div>
                <div className="relative w-full mt-[10px]">
                  <p className="text-[15px]">
                    Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                    consectetuer ligula vulputate sem tristique cursus. Nam
                    nulla quam gravida non commodo a sodales sit amet nisi.
                  </p>
                  <h4 className="text-[15px] font-light mt-[20px] opacity-60">
                    Follow Me!
                  </h4>
                  <div className="text-left mt-[20px]">
                    <Link
                      href="#"
                      className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                    >
                      <FaLinkedin />
                    </Link>
                    <Link
                      href="#"
                      className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      href="#"
                      className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="#"
                      className="relative inline-flex items-center justify-center m-[5px] p-[16px] text-center w-[50px] h-[50px] border border-solid border-[#2D2D2F] rounded-[30px] text-[18px]"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>

              {/* tags */}
              <div className="relative w-full h-auto mt-[30px] py-[20px] border-t border-solid border-[#2D2D2F] flex flex-col lg:flex-row gap-[20px]">
                <p className="opacity-60 mt-[5px]">Tags:</p>
                <ul className="relative w-full">
                  <li className="relative inline-flex items-center m-[5px] py-[10px] px-[20px] bg-[#1A1A1A] rounded-[30px] border border-solid border-[#2D2D2F]">
                    Down Syndrome
                  </li>
                  <li className="relative inline-flex items-center m-[5px] py-[10px] px-[20px] bg-[#1A1A1A] rounded-[30px] border border-solid border-[#2D2D2F]">
                    Therapy
                  </li>
                  <li className="relative inline-flex items-center m-[5px] py-[10px] px-[20px] bg-[#1A1A1A] rounded-[30px] border border-solid border-[#2D2D2F]">
                    World down syndrome
                  </li>
                  <li className="relative inline-flex items-center m-[5px] py-[10px] px-[20px] bg-[#1A1A1A] rounded-[30px] border border-solid border-[#2D2D2F]">
                    Down syndrome day awareness
                  </li>
                  <li className="relative inline-flex items-center m-[5px] py-[10px] px-[20px] bg-[#1A1A1A] rounded-[30px] border border-solid border-[#2D2D2F]">
                    Care
                  </li>
                  <li className="relative inline-flex items-center m-[5px] py-[10px] px-[20px] bg-[#1A1A1A] rounded-[30px] border border-solid border-[#2D2D2F]">
                    International down syndrome day
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" pt-12 md:py-14">
        <LatestArticles />
      </div>
    </>
  )
}
