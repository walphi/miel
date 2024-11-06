'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const videos = [
  {
    url: "https://player.vimeo.com/external/373824917.sd.mp4?s=c3c7d8ef88a59001c8e9b1359b7b54f536d6bd10&profile_id=164&oauth2_token_id=57447761",
    title: "Digital Marketing Excellence"
  },
  {
    url: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761",
    title: "AI-Powered Solutions"
  },
  {
    url: "https://player.vimeo.com/external/434045115.sd.mp4?s=29a1b8273a0247f84e1015f957d2b15a864c7d0c&profile_id=164&oauth2_token_id=57447761",
    title: "Real Estate Marketing"
  }
];

export function VideoSlider() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(() => {
          // Handle autoplay failure
        });
      }
    });
  }, []);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-[600px] rounded-lg overflow-hidden"
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
          <video
              ref={el => {
                videoRefs.current[index] = el as HTMLVideoElement; // Type assertion added
              }}
              src={video.url}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white">{video.title}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}