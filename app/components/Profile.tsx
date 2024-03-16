import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { RevealWrapper } from "next-reveal";

function Profile() {
  return (
    <section id="people">
      <div className="bg-[url('/images/profile/bg.jpg')] bg-center bg-no-repeat bg-cover px-12 py-16">
        <RevealWrapper duration={1500}>
          <p className="text-center text-[0.75rem] leading-loose text-[#424242]">
            <strong>بِسْمِ اللَّهِ الرحمن الرَّحِيمِ</strong>
            <br />
            ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ<br />Dengan memohon Rahmat
            dan Ridho Allah SWT. Kami mengharapkan kehadiran
            Bapak/Ibu/Saudara/(i). pada acara Resepsi Pernikahan putra-putri kami
          </p>
        </RevealWrapper>
        <div className="grid grid-cols-2 mt-20">
          <div className="-rotate-90 flex flex-col justify-end lg:mr-4 -translate-y-4 lg:-translate-y-4">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
                <span>THE</span>
                <span>BRIDE</span>
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper duration={1500} origin="right">
            <img
              src="/images/profile/l.jpg"
              alt="lulu"
              className="translate-x-[3rem]"
            />
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-end text-right gap-6 mt-12">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="text-3xl font-light mt-2 mb-4">
            Luluul Jannah
            </h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong>Putri dari</strong>
            <br />
            H. Matsuri (Alm)
            <br />
            &
            <br />
            HJ. Juahairiyah
          </p>
          <a
            href="https://www.instagram.com/itsminlulu/"
            className="text-sm text-white bg-[#9C76C2] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>Lulu J</span>
            <HiArrowLongRight />
          </a>
        </div>
        <div className="grid grid-cols-2 mt-20">
          <RevealWrapper duration={1500} origin="left">
            <img
              src="/images/profile/f.jpg"
              alt="farhan"
              className="-translate-x-[3rem]"
            />
          </RevealWrapper>
          <div className="rotate-90 flex flex-col justify-end lg:ml-4 translate-y-4 lg:translate-y-8">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
                <span>THE</span>
                <span>GROOM</span>
              </p>
            </RevealWrapper>
          </div>
        </div>
        <div className="flex flex-col items-start text-left gap-6 mt-12">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="text-3xl font-light mt-2 mb-4">
              Farhan
            </h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong>Putra dari</strong>
            <br />
            Bpk. Hadari
            <br />
            &
            <br />
            Ibu Sufiyah (Almh)
          </p>
          <a
            href="https://www.instagram.com/"
            className="text-sm text-white bg-[#9C76C2] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>Farhan</span>
            <HiArrowLongRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
