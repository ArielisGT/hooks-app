
import { useState, useRef } from 'react';
import { VideoAsset } from '../components/VideoAsset';

export const PlayVideoWithRef = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <div className="container d-flex flex-column">
        <VideoAsset
            ref={ref}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
        />
        <button
          className='btn btn-info'
          onClick={handleClick}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </>
  );
}


