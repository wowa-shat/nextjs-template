import HeroCarousel from "@/components/HeroCarousel";
import HeroDescription from "@/components/HeroDescription";
import GuestList from "@/components/GuestList";
import PodcastHero from "@/components/PodcastHero";
import PodcastGrid from "@/components/PodcastGrid";
import PodcastFooter from "@/components/PodcastFooter";
import InterviewSection from "@/components/interview/InterviewSection";
import dataSlider from "../data/slider-data.json";
import podcastEpisodes from "../data/podcast-episodes.json";
import AuthorSection from "@/components/AuthorSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <HeroCarousel data={dataSlider} />
      </div>
      <div className="relative -full">
        <HeroDescription />
      </div>
      <div className="relative w-full">
        <AuthorSection />
      </div>
      <div className="relative w-full">
        <GuestList />
      </div>

      {/* Podcast Section */}
      <section className="w-full bg-[#0000FE]">
        <PodcastHero />
        <PodcastGrid episodes={podcastEpisodes} />
        <PodcastFooter />
      </section>

      {/* Interview & Map Section */}
      <InterviewSection />
      <div className="w-full">
        <Image
          src="/images/screens/description.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="w-full">
        <Image
          src="/images/screens/calendar.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
