"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";

// Swiper components, modules and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

interface SliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div className=" h-screen">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{ delay: 20000 }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, date, title, description, image }) => (
              <SwiperSlide key={id}>

                <div className="relative h-screen">
                  {/* Background */}
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Content */}
                  <div className="text-white font-normal relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-36">

                    <span className="bg-black font-normal mb-4 rounded-full px-4 py-1 text-2xl">
                      {date}
                    </span>
                    
                    <h1 className="text-white font-normal text-4xl md:text-8xl tracking-tight ">
                      {title}
                    </h1>

                    <p className="text-white font-normal mt-4 text-2xl">
                      {description}
                    </p>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;