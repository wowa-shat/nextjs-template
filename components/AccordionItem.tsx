'use client';

import { useState } from 'react';
import ArrowDown from '@/src/icons/arrow-down.svg';

interface AccordionItemProps {
  name: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({ name, description, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-black">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-8 text-left transition-all duration-300 hover:opacity-70 lg:py-10"
        aria-expanded={isOpen}
      >
        <span className="font-helvetica-regular text-[28px] uppercase leading-tight tracking-[-0.03em] lg:text-[48px]">
          {name}
        </span>
        <ArrowDown
          className={`h-8 w-8 shrink-0 transition-transform duration-300 lg:h-[54px] lg:w-[54px] ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: '#000000' }}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 pb-6' : 'max-h-0'
        }`}
      >
        <p className="font-helvetica-regular text-base text-black/70 lg:text-lg">
          {description}
          <br/>
          Подробная информация о гостях будет представлена в ближайшее время...
        </p>
      </div>
    </div>
  );
}
