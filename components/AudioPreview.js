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

    if (audioEl.current.paused) {
      audioEl.current.play();
      setIsPlaying(true);
    } else {
      audioEl.current.pause();
      setIsPlaying(false);
    }
  };

  return html`
    <audio ref=${audioEl} src=${previewUrl} type="audio/mp4">
      Your browser does not support the
      <code>audio</code> element.
    </audio>
    <input
      class="audio-button ${isPlaying && "playing"}"
      type="button"
      value=${isPlaying ? "▮▮ Pause" : "▶ Play"}
      onClick=${changePlaying}
    />
  `;
};

export default AudioPreview;
