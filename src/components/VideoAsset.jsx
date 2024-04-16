import { forwardRef } from 'react';
// envolver en forwardRef(el componente entero) para poder pasar refs del padre al hijo:

export const VideoAsset = forwardRef(({ onPlay, onPause }, ref) => {
  return (
    <>
       <video
          ref={ref}
          onPlay={onPlay}
          onPause={onPause}
        >
        <source
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        />
        </video>
    </>
  )
});
