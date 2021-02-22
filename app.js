import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import useMusicData from "./hooks/useMusicData";
import Search from "./components/Search";
import MusicList from "./components/MusicList";

const App = () => {
  const [
    data,
    searchTerm,
    setSearchTerm,
    loadNextPage,
    hasNextPage,
    getResultsCount,
  ] = useMusicData();

  return html`
    <header>
      <h1>IonicTunes 🎸</h1>
      ${Search({ searchTerm, setSearchTerm })}
    </header>
    <main>
      ${data.length > 0 &&
      html`
        <h2 class="results-summary">
          Showing ${data.length} of ${getResultsCount()} results for
          "${searchTerm}" ♫
        </h2>
      `}
      ${MusicList({ data, loadNextPage, hasNextPage })}
    </main>
  `;
};

render(html`<${App} />`, document.body);
