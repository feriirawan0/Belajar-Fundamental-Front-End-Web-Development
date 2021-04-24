class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=be5c1d323fbc45e99b0abdf79f9b03e3&query=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results.length > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
