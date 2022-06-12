import Gif from "./Gif";
import PropTypes from "prop-types";

export default function Gifs({ gifs }) {
  return (
    <ul className="gif-list row justify-content-center">
      {gifs.map((gif, index) => (
        <Gif key={gif.id} gif={gif} index={index} />
      ))}
    </ul>
  );
}

Gifs.propTypes = {
  gifs: PropTypes.array.isRequired,
};
