let popularBtn = document.querySelector("#popular");
let nowPlaying = document.querySelector("#now-playing");
let topRatedBtn = document.querySelector("#top-rated");
let upComing = document.querySelector("#upcoming");

let right = document.querySelector("#arrow-right");
let left = document.querySelector("#arrow-left");
let rightSerie = document.querySelector("#arrow-right-series");
let leftSerie = document.querySelector("#arrow-left-series");
let popularListContainer = document.querySelector(".popular-list-container");
let popularListContainerSeries = document.querySelector(".popular-list-container-series");

let searchImg = document.querySelector(".search img");
let searchInput = document.querySelector(".search input");
let url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc';
let urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200';

window.addEventListener("DOMContentLoaded", () => {
  refreshImgSeries();
});

function refreshImgSeries() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVjMGM4NDM5OWQyMDJhODAyNjdlM2RlNDBlZjEzZCIsIm5iZiI6MTczNDMzODA0MS4zOTEsInN1YiI6IjY3NWZlNWY5ZDYzMTNjNzk1MjQxODcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SGWeid9nuBnkks0oE6eT2b53twtec2jyk0L5noMM67E',
        },
    };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      let popularList = document.querySelector(".popular-list");
      popularList.innerHTML = "";

      json.results.slice(0, 20).forEach((movie) => {
        const container = document.createElement("div");
        container.className = "movie-container";

        const imageDiv = document.createElement("div");
        const titleRatingDiv = document.createElement("div");
        const movieStar = document.createElement("span");
        const movieDiv = document.createElement("div");
        const movieTitle = document.createElement("h3");

        imageDiv.className = "card-img";
        titleRatingDiv.className = "title-rating";
        movieDiv.className = "card-content";

        imageDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
        movieTitle.textContent = movie.name;
        movieStar.textContent = `⭐ ${movie.vote_average.toFixed(1)}/10`;

        titleRatingDiv.appendChild(movieTitle);
        titleRatingDiv.appendChild(movieStar);
        movieDiv.appendChild(titleRatingDiv);
        container.appendChild(imageDiv);
        container.appendChild(movieDiv);
        popularList.appendChild(container);
      });
    })
    .catch((err) => console.error("Erreur:", err));

  fetch(urlSeries, options)
    .then((response) => response.json())
    .then((json) => {
      let popularList = document.querySelector(".popular-list-series");
      popularList.innerHTML = "";

      json.results.slice(0, 20).forEach((movie) => {
        const container = document.createElement("div");
        container.className = "movie-container-series";

        const imageDiv = document.createElement("div");
        const titleRatingDiv = document.createElement("div");
        const movieStar = document.createElement("span");
        const movieDiv = document.createElement("div");
        const movieTitle = document.createElement("h3");

        imageDiv.className = "card-img-series";
        titleRatingDiv.className = "title-rating-series";
        movieDiv.className = "card-content-series";

        imageDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
        movieTitle.textContent = movie.name;
        movieStar.textContent = `⭐ ${movie.vote_average.toFixed(1)}/10`;

        titleRatingDiv.appendChild(movieTitle);
        titleRatingDiv.appendChild(movieStar);
        movieDiv.appendChild(titleRatingDiv);
        container.appendChild(imageDiv);
        container.appendChild(movieDiv);
        popularList.appendChild(container);
      });
    })
    .catch((err) => console.error("Erreur:", err));
}
