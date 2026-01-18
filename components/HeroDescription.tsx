import Image from "next/image";

export default function HeroDescription() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-46 py-16 md:py-28">
      <div className="w-full">
        {/* Main Text Block with Inline Images */}
        <div className="font-helvetica-regular text-white text-7xl leading-tight mb-24">
          <span className="inline-flex flex-wrap items-center gap-x-2">
            <span>Город — это люди</span>

            {/* 5 Face Avatars */}
            <span className="inline-flex items-center align-middle">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className="relative inline-block w-[125px] h-[125px]"
                >
                  <Image
                    src={`/images/faces/face_${num}.png`}
                    alt={`Person ${num}`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </span>
              ))}
            </span>

            <span>.</span>
          </span>

          <br className="hidden md:block" />

          <span className="inline-flex flex-wrap items-center gap-x-2">
            <span>Их голоса</span>

            {/* Audio Player */}
            <span className="relative inline-block w-[368px] h-[89px]" >
              <Image
                src="/images/voice_message.png"
                alt="Voice message"
                fill
                className="object-contain"
              />
            </span>

            <span>, шаги</span>

            {/* Footprint */}
            <span className="relative inline-block w-[231px] h-[107px]" >
              <Image
                src="/images/footprint.png"
                alt="Footprint"
                fill
                className="object-contain"
              />
            </span>
          </span>

          <br className="hidden md:block" />

          <span className="inline-flex flex-wrap items-center gap-x-2">
            <span>и истории</span>

            {/* Cassette */}
            <span className="relative inline-block w-[146px] h-[97px]" >
              <Image
                src="/images/cassette.png"
                alt="Cassette tape"
                fill
                className="object-contain"
              />
            </span>

            <span>. Поэтому наш проект</span>

            {/* EKAT PEOPLE CLUB Logo */}
            <span className="relative inline-block w-[210px] h-[106px]" >
              <Image
                src="/images/logo.png"
                alt="EKAT PEOPLE CLUB"
                fill
                className="object-contain"
              />
            </span>
          </span>

          <br className="hidden md:block" />

          <span className="inline-flex flex-wrap items-center gap-x-2">
            <span>про жителей Екатеринбурга</span>

            {/* EKAT ERIN BURG Text Logo */}
            <span className="relative inline-block w-[103px] h-[82px]" >
              <Image
              src="/images/ekb.png"
              alt="Екатеринбург"
                fill
                className="object-contain"
              />
            </span>

            <span>—</span>
          </span>

          <br className="hidden md:block" />

          <span className="inline-flex flex-wrap items-center gap-x-3 md:gap-x-4 lg:gap-x-6">
            <span>тех, кто чувствует и проживает город</span>
          </span>

          <br className="hidden md:block" />

          <span className="inline-flex flex-wrap items-center gap-x-3 md:gap-x-4 lg:gap-x-6">
            <span>каждый день</span>

            {/* Alarm Clock */}
            <span className="relative inline-block w-[121px] h-[121px]" >
              <Image
              src="/images/alarm_clock.png"
              alt="Alarm clock"
                fill
                className="object-contain"
              />
            </span>

            <span>.</span>
          </span>
        </div>

        {/* Subtitle */}
        <div className="font-helvetica-oblique text-neutral-600 text-xl md:text-2xl lg:text-5xl text-center md:text-center">
          Про тех, кто придаёт местам смысл.
        </div>
      </div>
    </section>
  );
}
