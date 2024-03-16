import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { AiFillClockCircle } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";

function WeddingEvents() {
  return (
    <section id="wedding-events">
      <div className="bg-[url('/images/weddingEvents/bg.jpeg')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#9C76C2_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-xl italic text-white text-center font-light">
            Wedding Events
          </h1>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-10">
              <img
                src="/images/weddingEvents/kap.jpg"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem]"
              />
              <div className="flex">
                <div className="w-[20%] bg-[#9C76C2] rounded-bl-[1.25rem] flex items-center">
                  <p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-5 lg:-translate-x-3.5 tracking-[5px]">
                  </p>
                </div>
                <div className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">
                    Saturday, 13 April 2024 M
                    <br />
                    Sabtu, 4-5 Syawal 1445 H
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
                    <AiFillClockCircle />
                    <span>07.30 WIB - Selesai</span>
                  </p>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
                      Kediaman Mempelai Wanita
                    </strong>
                    <br />
                    Dusun Kapasan, Batioh, Banyuates
                  </p>
                  <a
                    href="https://maps.app.goo.gl/viLCdc5rB6TEFFek6"
                    className="text-[0.75rem] text-[#424242] border border-[#9C76C2] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                  >
                    GOOGLE MAPS
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-10">
              <iframe 
    src="https://www.youtube.com/embed/EJkdqGVyqLI?si=1s6j3_S5EV5-9ez5" 
    frameBorder="0" 
    allow="autoplay; encrypted-media" 
    allowFullScreen></iframe>
              <div className="flex">
                <div className="w-[20%] bg-[#9C76C2] rounded-bl-[1.25rem] flex items-center">
                  <p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-5 lg:-translate-x-3.5 tracking-[5px]">
                  </p>
                </div>
                <div className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">
                    Resepsi Pernikahan
                    <br />
                    Lulu & Farhan
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <FaFacebook />
                  <a
                    href="https://facebook.com/RTPROJEX/live_videos"
                    className="text-[0.75rem] text-[#424242] border border-[#9C76C2] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                  >
            <span>LIVE FACEBOOK</span>
                  </a>
                  <FaYoutube />
                  <a
                    href="https://www.youtube.com/watch?v=_TV4MjpVfho"
                    className="text-[0.75rem] text-[#424242] border border-[#9C76C2] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                  >
            <span>LIVE YOUTUBE</span>
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default WeddingEvents;
