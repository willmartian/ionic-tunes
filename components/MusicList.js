import {
  html,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import MusicEntry from "./MusicEntry";

const MusicList = ({ data, loadNextPage, hasNextPage }) => {
  const [activeItemId, setActiveItemId] = useState();

  return html`
    <ol class="music-list">
      ${data.map((item, index) =>
        MusicEntry({ item, activeItemId, setActiveItemId, index })
      )}
      ${hasNextPage() &&
      html`
        <button class="next-button music-entry" onClick=${loadNextPage}>
          Show More ⏭️
        </button>
      `}
    </ol>
  `;
};

export default MusicList;
