import ImageGrid from "./ImageGrid";
import InteractiveMapSection from "./InteractiveMapSection";

export default function InterviewSection() {
  return (
    <section className="w-full bg-black text-white">
      {/* Main Header */}
      <header className="py-12 md:py-16">
        <h1 className="text-center font-helvetica-boldoblique text-5xl px-4">
          мы берём интервью у каждого гостя —<br/>встречаемся, обсуждаем, записываем.
        </h1>
      </header>

      {/* Image Grid */}
      <ImageGrid />

      {/* Divider Text */}
      <div className="py-16">
        <p className="text-center font-helvetica-lightoblique text-5xl">
          все упомянутые места отмечаем на карте
        </p>
      </div>

      {/* Interactive Map Section */}
      <InteractiveMapSection />
    </section>
  );
}
