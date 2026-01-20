import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/images/screens/events-1.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
          unoptimized
        />
      </div>
      <div className="w-full">
        <Image
          src="/images/screens/events-2.png"
          alt=""
          width={1920}
          height={1946}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
