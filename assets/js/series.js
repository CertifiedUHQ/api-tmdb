let popularBtn = document.querySelector("#popular");
let nowPlaying = document.querySelector("#now-playing");
let topRatedBtn = document.querySelector("#top-rated");
let upComing = document.querySelector("#upcoming");

let right = document.querySelector("#arrow-right");
let left = document.querySelector("#arrow-left");
let rightSerie = document.querySelector("#arrow-right-series");
let leftSerie = document.querySelector("#arrow-left-series");
let popularListContainer = document.querySelector(".popular-list-container");
let popularListContainerSeries = document.querySelector(
  ".popular-list-container-series"
);

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


async function searchMovies(query) {
  const options = {
      method: "GET",
      headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`
      }
  };
  let urlQuery = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
      let response = await fetch(urlQuery, options);
      let data = await response.json();

      let popularList = document.querySelector(".popular-list-search");
      popularList.innerHTML = "";

      if (data.results && data.results.length > 0) {
          data.results.slice(0, 20).forEach((movie) => {
              if (!movie.poster_path || movie.vote_average === null) {
                  return; 
              }

              let container = document.createElement("div");
              let imageDiv = document.createElement("div");
              let movieDiv = document.createElement("div");
              let titleRatingDiv = document.createElement("div");
              let movieTitle = document.createElement("h3");
              let movieStar = document.createElement("span");
              
              
              container.className = "movie-container-search";
              imageDiv.className = "card-img-search";
              imageDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
              movieDiv.className = "card-content-search";
              titleRatingDiv.className = "title-rating-search";
              movieTitle.textContent = movie.title || movie.name;
              movieStar.textContent = `⭐ ${movie.vote_average.toFixed(1)}/10`;

              titleRatingDiv.appendChild(movieTitle);
              titleRatingDiv.appendChild(movieStar);
              movieDiv.appendChild(titleRatingDiv);
              container.appendChild(imageDiv);
              container.appendChild(movieDiv);

              popularList.appendChild(container);
          });
      }
}

searchInput.addEventListener("keyup", function() {
      let searchInput = document.querySelector("#search-input");
      let query = searchInput.value.trim();
      let popularList = document.querySelector(".div-container-search");
      if (query) {
          leftSearch.style.display = "flex";
          rightSearch.style.display = "flex";
          popularList.style.display = "flex";
          setTimeout(() => { 
              searchMovies(query);
          }, 250);
      } else {
          leftSearch.style.display = "none";
          rightSearch.style.display = "none";
          popularList.style.display = "none";
      }
});
