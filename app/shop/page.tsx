import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/images/screens/store.png"
          alt=""
          width={1920}
          height={1470}
          className="w-full h-auto"
          priority
        />
      </div>
    </>
  );
}
