"use client";

import { useState } from "react";
import ArrowDown from '@/src/icons/arrow-down.svg';
import Image from "next/image";

export default function CollapsiblePanel() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="absolute bottom-0 right-0 bg-white text-black p-6 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-start">
        <h3 className="font-helvetica-regular text-4xl pr-8">
          у каждого гостя своя карта со своими местами
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-shrink-0 transition-transform duration-300"
          aria-label={isOpen ? "Collapse panel" : "Expand panel"}
        >
          <ArrowDown
            className={`h-8 w-8 shrink-0 transition-transform duration-300 lg:h-[54px] lg:w-[54px] ${isOpen ? '' : 'rotate-180'
              }`}
            style={{ color: '#000000' }}
          />
        </button>
      </div>

      <div className={`overflow-hidden ${isOpen ? "pt-4 mt-4 border-t border-black" : ""} transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="mb-4 font-helvetica-regular text-4xl">
          нарисованный город как живая система —<br />пространство смыслов, мыслей,<br />воспоминаний и переживаний.
        </p>
        <br />
        <p className="inline-flex font-helvetica-lightoblique text-4xl">
          (все иллюстрации нарисованы вручную:
        </p>
        <br />
        <p className="inline-flex font-helvetica-lightoblique text-4xl">
          маркерами, линерами и карандашами
          <Image
            src="/images/pencil.png"
            alt="Pencil"
            height={40}
            width={189}
            className="object-contain"
            unoptimized
          />)
        </p>
      </div>
    </div>
  );
}
