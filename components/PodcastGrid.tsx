'use client';

import { useState } from 'react';
import { PodcastEpisode } from '@/types/podcast';
import PodcastCard from './PodcastCard';

interface PodcastGridProps {
  episodes: PodcastEpisode[];
}

export default function PodcastGrid({ episodes }: PodcastGridProps) {
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);

  return (
    <div className="w-full px-6 md:px-12 lg:px-14 py-8">
      {/* Separator Line */}
      <div className="w-full h-[2px] bg-white mb-8" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {episodes.map((episode) => (
          <PodcastCard
            key={episode.id}
            episode={episode}
            currentlyPlayingId={currentlyPlayingId}
            onPlayStateChange={setCurrentlyPlayingId}
          />
        ))}
      </div>
    </div>
  );
}
