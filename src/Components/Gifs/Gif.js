import PropTypes from "prop-types";
import "./gifs.scss";

export default function Gif(props) {
  const {
    gif: { title, url },
    index,
  } = props;
  return (
    <li className="gif-li col-12 d-flex flex-column align-items-center">
      <h3 className="text-center gif-title">{`${index + 1}. ${title}`}</h3>
      <img src={url} alt={title} width="300" className="mt-2" />
    </li>
  );
}

Gif.propTypes = {
  gif: PropTypes.object.isRequired,
};
