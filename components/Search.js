import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const Search = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return html`
    <input
      class="search"
      type="text"
      placeholder="Find your jam ♪"
      value=${searchTerm}
      onChange=${handleChange}
    />
  `;
};

export default Search;
