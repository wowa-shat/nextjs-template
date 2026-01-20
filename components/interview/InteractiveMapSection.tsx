import CollapsiblePanel from "./CollapsiblePanel";

export default function InteractiveMapSection() {
  return (
    <div className="relative w-full h-[960px] overflow-hidden">
      {/* Map Background Image */}
      <img
        src="/images/book-section/5.png"
        alt="Hand-drawn city map"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Collapsible Panel */}
      <CollapsiblePanel />
    </div>
  );
}
