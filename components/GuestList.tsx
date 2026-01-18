'use client';

import { useState } from 'react';
import AccordionItem from './AccordionItem';

interface Guest {
  id: number;
  name: string;
  description: string;
}

const guests: Guest[] = [
  { id: 1, name: 'ГРЕКОВА-ПРОХОРЕНКО СОФИЯ ВЛАДИМИРОВНА', description: 'Описание ГРЕКОВА-ПРОХОРЕНКО СОФИИ ВЛАДИМИРОВНЫ' },
  { id: 2, name: 'КУКАРИН АЛЕКСЕЙ ИГОРЕВИЧ', description: 'Описание КУКАРИНА АЛЕКСЕЯ ИГОРЕВИЧА' },
  { id: 3, name: 'ТЕЛКОВ ФЁДОР БОРИСОВИЧ', description: 'Описание ТЕЛКОВА ФЁДОРА БОРИСОВИЧА' },
  { id: 4, name: 'САЛМИН ЛЕОНИД ЮРЬЕВИЧ', description: 'Описание САЛМИНА ЛЕОНИДА ЮРЬЕВИЧА' },
  { id: 5, name: 'СЕМЁНОВ ВАЛЕРИЙ БОРИСОВИЧ', description: 'Описание СЕМЁНОВА ВАЛЕРИЯ БОРИСОВИЧА' },
];

export default function GuestList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center lg:mb-20">
          <h2 className="font-helvetica-regular mb-6 text-[40px] uppercase leading-tight lg:mb-8 lg:text-[80px]">
            ГОСТИ ПЕРВОГО ВЫПУСКА
          </h2>
          <p className="font-helvetica-regular mx-auto max-w-3xl text-[18px] leading-relaxed lg:text-[26px] lg:leading-[30px]">
            Те, кто поделится любимыми местами, лайфстайлом, воспоминаниями и историями — своим
            Екатеринбургом.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-t border-black">
          {guests.map((guest, index) => (
            <AccordionItem
              key={guest.id}
              name={guest.name}
              description={guest.description}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
