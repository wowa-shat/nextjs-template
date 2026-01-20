import Image from "next/image";

export default function ImageGrid() {
  const images = [
    {
      id: 1,
      url: "/images/book-section/1.png",
      alt: "Interview image 1"
    },
    {
      id: 2,
      url: "/images/book-section/2.png",
      alt: "Interview image 2"
    },
    {
      id: 3,
      url: "/images/book-section/3.png",
      alt: "Interview image 3"
    },
    {
      id: 4,
      url: "/images/book-section/4.png",
      alt: "Interview image 4"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-20 px-40">
      {images.map((image) => (
        <div key={image.id} className="overflow-hidden">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
