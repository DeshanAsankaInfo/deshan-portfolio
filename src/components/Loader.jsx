'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../animations/loading1.json'; // ✅ Make sure the file is in src/animations/

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FAFAFB]">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '100px', width: '100px' }}
      />
    </div>
  );
}
