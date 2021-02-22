import {
  html,
  useRef,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

const AudioPreview = ({ previewUrl }) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const changePlaying = () => {
    console.log("changePlaying");
    if (!audioEl.current) return;

    if (isPlaying) {
      audioEl.current.pause();
      setIsPlaying(false);
    } else {
      audioEl.current.play();
      setIsPlaying(true);
    }
  };

  return html`
    <audio
      ref=${audioEl}
      src=${previewUrl}
      type="audio/mp4"
      onEnded=${changePlaying}
    >
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <input
      class="audio-button"
      type="button"
      value=${isPlaying ? "Pause" : "Play"}
      onClick=${changePlaying}
    />
  `;
};

export default AudioPreview;
