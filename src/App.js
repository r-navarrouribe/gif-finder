import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiKey = "vQ5Co2BXoWe3Ond9dio7NQyzzA1is4T7";
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState("10");
  const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`;
  const [gifs, setGifs] = useState([]);
  const [fetchingError, setFetchingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    try {
      fetch(urlAPI)
        .then((res) => res.json())
        .then((response) => {
          const newGifs = response.data.map((gif) => ({
            url: gif.images.downsized.url,
            title: gif.title,
            id: gif.id,
          }));
          setGifs(newGifs);
        });
    } catch (error) {
      setFetchingError(true);
      setErrorMessage(error.message);
      throw new Error(error.message);
    }
  }, [urlAPI]);
  return (
    <div className="App-content container">
      <h1>Gif Finder</h1>
      <form>
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <input
          type="number"
          min="1"
          max="20"
          value="10"
          onChange={(e) => {
            setLimit(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {query !== "" && <h2>Results for the search "{query}"</h2>}
      {fetchingError && errorMessage}
      <ul className="gif-list">
        {gifs.map((gif) => (
          <li key={gif.id}>
            <h3>{gif.title}</h3>
            <img src={gif.url} alt={gif.title} width="300" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
