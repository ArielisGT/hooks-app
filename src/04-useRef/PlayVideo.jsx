
import { useState, useRef } from 'react';

export const PlayVideo = () => {
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
      <div class="container-fluid">
        <button
          className='btn btn-info'
          onClick={handleClick}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <video
          ref={ref}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
        <source
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        />
        </video>
      </div>
    </>
  );
}


