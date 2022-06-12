import "./form.scss";
import PropTypes from "prop-types";

export default function Form({
  query,
  setQuery,
  setLimit,
  fetchingError,
  errorMessage,
}) {
  return (
    <section className="form-section row mt-3">
      <form className="col-12">
        <div className="row justify-content-center">
          <div className="col-7 col-lg-6 d-flex flex-column align-items-center">
            <label htmlFor="query">What are you looking for?</label>
            <input
              id="query"
              type="text"
              className="form-control form-input"
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <div className="col-3 col-lg-2 d-flex flex-column align-items-center">
            <label htmlFor="num-imput">Number of gifs</label>
            <input
              id="num-input"
              type="number"
              className="form-control form-input"
              min="1"
              max="20"
              placeholder="10"
              onChange={(e) => {
                setLimit(e.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <span className="text-center mt-2 text-warning">
        {query !== "" && <h2>Results for the search "{query}":</h2>}
      </span>
      <span className="text-center">{fetchingError && errorMessage}</span>
    </section>
  );
}

Form.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setLimit: PropTypes.func.isRequired,
  fetchingError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
