import {
  html,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

const Search = ({ setSearchTerm }) => {
  const [inputText, setInputText] = useState("");

  const handleInput = (evt) => {
    setInputText(evt.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputText);
  };

  return html`
    <div class="search">
      <input
        type="text"
        placeholder="Find your jam ♪"
        value=${inputText}
        onInput=${handleInput}
        onChange=${handleSearch}
      />
      <input type="button" onClick=${handleSearch} value="Search" />
    </div>
  `;
};

export default Search;
