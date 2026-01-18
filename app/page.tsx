import HeroCarousel from "@/components/HeroCarousel";
import HeroDescription from "@/components/HeroDescription";
import GuestList from "@/components/GuestList";
import PodcastHero from "@/components/PodcastHero";
import PodcastGrid from "@/components/PodcastGrid";
import PodcastFooter from "@/components/PodcastFooter";
import dataSlider from "../data/slider-data.json";
import podcastEpisodes from "../data/podcast-episodes.json";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <HeroCarousel data={dataSlider} />
      </div>
      <div className="relative h-screen w-full overflow-hidden">
        <HeroDescription />
      </div>
      <GuestList />
      
      {/* Podcast Section */}
      <section className="w-full bg-[#0000FE]">
        <PodcastHero />
        <PodcastGrid episodes={podcastEpisodes} />
        <PodcastFooter />
      </section>
    </>
  );
}
