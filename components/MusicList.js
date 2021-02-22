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
        <input
          type="button"
          class="next-button music-entry"
          value="Show More ⏭️"
          onClick=${loadNextPage}
        />
      `}
    </ol>
  `;
};

export default MusicList;
