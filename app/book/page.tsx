"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ShoppingCartIcon from "@/src/icons/shopping-cart.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Book images for carousel
const bookImages = [
  "/images/book-cover-1.png",
  "/images/book-cover-2.png",
  "/images/book-cover-3.png",
  "/images/book-cover-4.png",
  "/images/book-cover-5.png",
  "/images/book-cover-6.png",
  "/images/book-cover-7.png",
  "/images/book-cover-8.png",
  "/images/book-cover-9.png",
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Desktop: Two-column grid, Mobile: Single column stack */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 p-4 md:p-8 lg:p-40 pb-4 md:pb-4 lg:pb-16 max-w-[1920px] mx-auto">
        {/* Left Column: Image Carousel */}
        <div className="relative w-full items-center flex">

          {/* Custom Vertical Pagination Dots */}
          <div className="custom-pagination mr-6 z-10"></div>
          
          <div className="w-full aspect-[775/388]">
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              loop={true}
              className="h-full w-full"
            >
              {bookImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image}
                      alt={`Book cover spread ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Header & Authors */}
          <div className="flex flex-col gap-4">
            <h1 className="font-helvetica-regular text-[40px] leading-tight text-black">
              ПРЕДЗАКАЗ. ПЕРВЫЙ ВЫПУСК
            </h1>
            <p className="font-helvetica-regular text-2xl text-[#454344] underline leading-tight">
              София Грекова-Прохоренко, Алексей Кукарин, Фёдор Телков, Леонид Салмин, Валерий Семёнов
            </p>
          </div>

          {/* Price & Add to Cart Button */}
          <div className="flex items-center justify-between gap-4">
            <p className="font-helvetica-regular text-[32px] text-black">2000 ₽</p>
            <button className="flex items-center gap-3 bg-[#0000FE] text-white px-6 py-3 rounded-[20px] hover:bg-[#0000CC] transition-colors">
              <ShoppingCartIcon className="w-11 h-9" style={{ color: "white" }} />
              <span className="font-helvetica-regular text-2xl">В корзину</span>
            </button>
          </div>

          {/* Product Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xl text-[#727272] font-helvetica-regular">
            <div>Год: 2026</div>
            <div>Обложка: мягкая</div>
            <div>Язык: русский</div>
            <div>ISBN: 000001</div>
            <div>Формат: 20х20 см.</div>
            <div>Количество страниц: 50</div>
          </div>

          {/* Store Availability List */}
          <div className="flex flex-row gap-4">
            {[
              { name: "«Пиотровский»", status: "В наличии в магазине" },
              { name: "«Домна»", status: "В наличии в магазине" },
              { name: "«Буквально»", status: "В наличии в магазине" },
            ].map((store, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0000FE] mt-1.5 flex-shrink-0"></div>
                <div className="font-helvetica-regular text-xl text-[#727272] leading-tight">
                  <div className="font-bold">{store.name}</div>
                  <div className="text-sm">{store.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 p-4 md:p-8 lg:p-40 pt-0 md:pt-0 lg:pt-0 max-w-[1920px] mx-auto">
        {/* Left Column: Image Carousel */}
        <div className="relative w-full items-center flex">
          
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Description Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-helvetica-regular text-xl text-black">О книге</h2>
              <div className="w-[74px] h-0.5 bg-black"></div>
            </div>

            {/* Pre-order Notice - Bold Italic */}
            <p className="font-helvetica-oblique font-bold text-xl text-[#3B3B3B] leading-relaxed">
              В данный момент мы оформляем предзаказ на книгу. Получим тираж ориентировочно в середине июня.
            </p>

            {/* Main Description */}
            <p className="font-helvetica-regular text-xl text-[#3A3A3A] leading-relaxed">
              Первый выпуск иллюстрированного путеводителя по Екатеринбургу с авторскими маршрутами от людей, известных в творческих кругах города. Авторы рассказывают о своих любимых местах в городе, историях, связанных с ними, делятся впечатлениями и воспоминаниями.
              <br />
              <br />
              Главный акцент — вручную иллюстрированная карта каждого автора с отмеченными местами и комментариями: цитатами, мнениями, личными событиями. Все интервью гостей оформляются в неформальной форме со схематичной визуализацией и различными приёмами типографики для более лёгкого восприятия.
            </p>
          </div>
        </div>
      </div>

      {/* Custom styles for vertical pagination dots */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 17px;
          height: 17px;
          background-color: transparent;
          border: 1px solid #000000;
          opacity: 1;
          margin: 0 !important;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #000000;
          border: 1px solid #000000;
        }
      `}</style>
    </div>
  );
}
