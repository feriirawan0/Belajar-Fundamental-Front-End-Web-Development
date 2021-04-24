import "../component/movie-list.js";
import "../component/search-movie.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-movie");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
