import React from "react";
import { RevealWrapper } from "next-reveal";
import "./footer.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/gallery/bg2.jpg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#ffffff00_0%,#9C76C2_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/(i) berkenan hadir dan memberikan doa restu
                kepada kami. Atas kehadiran dan doanya kami mengucapkan
                terimakasih
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </p>
            </RevealWrapper>
            <br />
            <br />
            <RevealWrapper duration={1500} origin="bottom">
              <h1 className="text-4xl font-light mt-2">Lulu & Farhan</h1>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <div className="bg-[#9C76C2] p-20 flex items-center justify-center">
        <img src="/images/footer/lf.png" alt="logo" className="w-24" />
      </div>
                <footer>
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-md-12">
              <ul className="pull-right list-unstyled">
                <li>
                    <a href="https://rtprojex.com">RTPROJEX</a>
                </li>
                <li>
                    © RTPROJEX {new Date().getFullYear()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
