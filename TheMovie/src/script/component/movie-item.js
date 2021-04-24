import css from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      display: block;
      margin-bottom: 18px;
      border-radius: 10px;
      overflow: hidden;
    }

    .img-movie{
      width: 240px;
      height: 350px;
      object-fit: cover;
    }

    @media only screen and (max-width: 800px){
      .img-movie {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
      }
    }
    </style>
    <head>
    <link rel="stylesheet" href="../../../node_modules/bootstrap/dist/css/bootstrap.min.css">
    </head>
    <div class="card mb-3" style="max-width: 920px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="img-movie" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="Fan Art">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${this._movie.original_title}</h5>
          <p class="card-text">${this._movie.overview}</p>
          <p class="card-text"><small class="text-muted">Tahun : ${this._movie.release_date}</small></p>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);
