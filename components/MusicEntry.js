import {
  html,
  useRef,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import useAverageColor from "../hooks/useAverageColor";

const MusicEntry = ({ item, activeItemId, setActiveItemId }) => {
  const name = item.trackName || item.collectionName;
  const id = item.trackId || item.collectionId;
  const isActive = activeItemId == id;
  const artworkUrl = item.artworkUrl100 || item.artworkUrl60;
  const iTunesUrl = item.trackViewUrl || item.collectionViewUrl;
  const price = (item.trackPrice || item.collectionPrice) + " " + item.currency;

  const averageColor = useAverageColor(artworkUrl);
  const audioEl = useRef(null);

  const handlePlay = () => {
    setActiveItemId(id);
  };

  const handlePause = () => {
    setActiveItemId(null);
  };

  useEffect(() => {
    if (audioEl.current !== null && !isActive) {
      audioEl.current.pause();
    }
  }, [isActive]);

  return html`
    <li
      class="music-entry ${isActive && "active"}"
      style="--average-color: ${averageColor};"
    >
      <article>
        <div class="backdrop-container">
          <div class="under-backdrop">
            <p>Buy on <a href=${iTunesUrl}>iTunes</a> for <b>${price}</b></p>
            ${item.previewUrl &&
            html`
              <audio
                class="audio-preview"
                onPlay=${handlePlay}
                onPause=${handlePause}
                ref=${audioEl}
                src=${item.previewUrl}
                type="audio/mp4"
                controls
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            `}
          </div>
          <div class="image-backdrop">
            <img src=${artworkUrl} />
          </div>
        </div>
        <h1>${name}</h1>
        <p>${item.wrapperType} by ${item.artistName}</p>
      </article>
    </li>
  `;
};

export default MusicEntry;
