import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-white mb-2">
          <span className="text-rose-500 font-semibold text-lg">
            KokohKoki
          </span>{" "}
          diambil dari mana sih? Kenapa namanya Kokoh Koki? simply karena yaa
          yang jual kokoh-kokoh haha Nahhh, ga cuma dari namanya juga tapi kita
          juga menerapkan prinsip kokoh-kokoh yang mana kita selalu fokus pada
          kualitas ikan dan harganyaaa pasti cincayy mennn! Konsep kita Hunting,
          dimana ada ikan bagus kita pasti stock, tentu jadi yang ikan yang
          terkurasi adalah ikan-ikan terbaik dari farm terbaik mau darimanapun
          itu, local ataupun import selalu kita seleksi yang terbaik. Jadi
          Sahabat Goldfish bisa nikmati ikan terbaik hasil seleksi kokoh!
        </h1>
        <Link to="/">
          <button className="w-52 font-bold h-10 bg-rose-500 text-white hover:bg-black hoverEffect duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
