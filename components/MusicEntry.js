import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

import useAverageColor from "../hooks/useAverageColor";
import AudioPreview from "./AudioPreview";

const MusicEntry = ({ item, activeItemId, setActiveItemId }) => {
  const name = item.trackName || item.collectionName;
  const id = item.trackId || item.collectionId;
  const isActive = activeItemId == id;
  const artworkUrl = item.artworkUrl100 || item.artworkUrl60;
  const iTunesUrl = item.trackViewUrl || item.collectionViewUrl;
  const price = (item.trackPrice || item.collectionPrice) + " " + item.currency;

  const averageColor = useAverageColor(artworkUrl);

  const handleClick = () => {
    setActiveItemId(id);
  };

  return html`
    <li
      class="music-entry ${isActive && "active"}"
      style="--average-color: ${averageColor};"
      onClick=${handleClick}
    >
      <article>
        <div class="backdrop-container">
          <div class="under-backdrop">
            <p>Buy on <a href=${iTunesUrl}>iTunes</a> for <b>${price}</b></p>
            ${item.previewUrl &&
            AudioPreview({ previewUrl: item.previewUrl, isActive })}
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
