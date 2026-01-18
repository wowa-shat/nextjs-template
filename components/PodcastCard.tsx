'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { PodcastEpisode } from '@/types/podcast';
import { formatTime } from '@/utils/timeFormatter';
import PlayIcon from '@/src/icons/play-icon.svg';

interface PodcastCardProps {
  episode: PodcastEpisode;
  currentlyPlayingId: string | null;
  onPlayStateChange: (id: string | null) => void;
}

export default function PodcastCard({ episode, currentlyPlayingId, onPlayStateChange }: PodcastCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleCanPlay = () => {
      updateDuration();
    };

    // Add event listeners
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);

    // Manual check for duration if already loaded
    if (audio.readyState >= 1) {
      updateDuration();
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [episode.audioUrl]);

  // Effect to pause this audio when another card starts playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // If another episode is playing and this one is playing, pause it
    if (currentlyPlayingId !== null && currentlyPlayingId !== episode.id && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlayingId, episode.id, isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      onPlayStateChange(null);
    } else {
      audio.play();
      setIsPlaying(true);
      onPlayStateChange(episode.id);
    }
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-black rounded-2xl overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={episode.imageUrl}
          alt={episode.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5">
        {/* Tag */}
        <p className="font-helvetica-regular text-white text-base md:text-[20px] tracking-[-0.6px] mb-3">
          {episode.tag}
        </p>

        {/* Title */}
        <h3 className="font-helvetica-regular text-white text-2xl md:text-[32px] leading-tight md:leading-[36px] mb-4 line-clamp-2">
          {episode.title}
        </h3>

        {/* Author */}
        <p className="font-helvetica-regular text-white text-base md:text-[20px] tracking-[-0.6px] uppercase mb-6">
          {episode.author}
        </p>

        {/* Audio Player */}
        <div className="space-y-4">
          {/* Time and Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-white font-helvetica-regular text-sm md:text-[20px] tracking-[-0.6px]">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : '00:00'}</span>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-[2px] bg-gray-600">
              <div
                className="absolute top-0 left-0 h-full bg-gray-500 transition-all duration-100"
                style={{ width: `${progressPercentage}%` }}
              />
              <div
                className="absolute w-3 h-3 bg-white rounded-full transition-all duration-100"
                style={{ 
                  left: `${progressPercentage}%`, 
                  top: '50%',
                  transform: 'translate(-50%, -50%)' 
                }}
              />
            </div>
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="w-32 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-black" />
                <div className="w-1 h-4 bg-black" />
              </div>
            ) : (
              <PlayIcon className="w-10 h-10" style={{ color: '#000000' }} />
            )}
          </button>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={episode.audioUrl} preload="metadata" />
    </div>
  );
}
