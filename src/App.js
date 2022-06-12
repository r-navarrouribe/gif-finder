import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Gifs from "./Components/Gifs/Gifs";
import Header from "./Components/Header/Header";
import getGifs from "./services/getGifs";

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
      getGifs(urlAPI).then((newGifs) => setGifs(newGifs));
    } catch (error) {
      setFetchingError(true);
      setErrorMessage(error.message);
      throw new Error(error.message);
    }
  }, [urlAPI]);
  return (
    <div className="container">
      <Header />
      <main className="row">
        <div className="col-12">
          <Form
            query={query}
            setQuery={setQuery}
            setLimit={setLimit}
            fetchingError={fetchingError}
            errorMessage={errorMessage}
          />
          <Gifs gifs={gifs} />
        </div>
      </main>
    </div>
  );
}

export default App;
