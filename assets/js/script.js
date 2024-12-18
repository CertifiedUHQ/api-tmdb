let popularBtn = document.querySelector("#popular");
let nowPlaying = document.querySelector("#now-playing");
let topRatedBtn = document.querySelector("#top-rated");
let upComing = document.querySelector("#upcoming");
let horrorBtn = document.querySelector("#horror");
let fictionBtn = document.querySelector("#fiction");
let actionBtn = document.querySelector("#action");
let comedyBtn = document.querySelector("#comedy");
let titleFilm = document.querySelector("#films");
let titleSeries = document.querySelector("#series");


let right = document.querySelector("#arrow-right");
let left = document.querySelector("#arrow-left");

let rightSerie = document.querySelector("#arrow-right-series");
let leftSerie = document.querySelector("#arrow-left-series");

let leftSearch = document.querySelector("#arrow-left-search");
let rightSearch = document.querySelector("#arrow-right-search");


let popularListContainer = document.querySelector(".popular-list-container");
let aHeader = document.querySelector(".a-header")
let aHeaderEnabled = false;
let popularListContainerSeries = document.querySelector(".popular-list-container-series");
let popularListContainerSearch = document.querySelector(".popular-list-container-search");


let searchImg = document.querySelector(".search img");
let searchInput = document.querySelector(".search input");
let url = 'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1';
let urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc';

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVjMGM4NDM5OWQyMDJhODAyNjdlM2RlNDBlZjEzZCIsIm5iZiI6MTczNDMzODA0MS4zOTEsInN1YiI6IjY3NWZlNWY5ZDYzMTNjNzk1MjQxODcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SGWeid9nuBnkks0oE6eT2b53twtec2jyk0L5noMM67E";

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#popular").focus();
     refreshImg();
     refreshImgSeries();
});

horrorBtn.addEventListener("click", function () {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=27';
    refreshImg(); 
    titleFilm.textContent = "Films d'horreur";
    popularListContainer.scrollLeft = 0;
    popularListContainerSeries.scrollLeft = 0;
});

fictionBtn.addEventListener("click", function () {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=878';
    urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10765';
    refreshImg(); 
    refreshImgSeries();
    titleFilm.textContent = "Films de fiction";
    titleSeries.textContent = "Séries de fiction"
    popularListContainer.scrollLeft = 0;
    popularListContainerSeries.scrollLeft = 0;
});

actionBtn.addEventListener("click", function () {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=28';
    urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10759';
    refreshImg(); 
    refreshImgSeries();
    titleFilm.textContent = "Films d'action";
    titleSeries.textContent = "Séries d'action"
    popularListContainer.scrollLeft = 0;
    popularListContainerSeries.scrollLeft = 0;
});

comedyBtn.addEventListener("click", function () {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=35';
    urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35';
    refreshImg(); 
    refreshImgSeries();
    titleFilm.textContent = "Films de comédie";
    titleSeries.textContent = "Séries de comédie"
    popularListContainer.scrollLeft = 0;
    popularListContainerSeries.scrollLeft = 0;
});

popularBtn.addEventListener("click", function() {
    url = 'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1';
    urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc';
    refreshImg();
    refreshImgSeries();
    titleFilm.textContent = "Films populaires";
    titleSeries.textContent = "Séries populaires"
    popularListContainerSeries.scrollLeft = 0;
    popularListContainer.scrollLeft = 0;
});

nowPlaying.addEventListener("click", function() {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}';
    urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}';
    refreshImg();
    refreshImgSeries();
    titleFilm.textContent = "Films du moment";
    titleSeries.textContent = "Séries du moment"
    popularListContainerSeries.scrollLeft = 0;
    popularListContainer.scrollLeft = 0;
});

upComing.addEventListener("click", function() {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
    urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}';
    refreshImg();
    refreshImgSeries();
    titleFilm.textContent = "Films à venir";
    titleSeries.textContent = "Séries à venir"
    popularListContainerSeries.scrollLeft = 0;
    popularListContainer.scrollLeft = 0;
});

topRatedBtn.addEventListener("click", function() {
    url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200';
    urlSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200';
    refreshImg();
    refreshImgSeries();
    titleFilm.textContent = "Films les mieux évalués";
    titleSeries.textContent = "Séries les mieux évalués"
    popularListContainerSeries.scrollLeft = 0;
    popularListContainer.scrollLeft = 0;
});




function refreshImg() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        },
    };

    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            let popularList = document.querySelector(".popular-list");
            popularList.innerHTML = "";

            json.results.slice(0, 20).forEach(movie => {
                let container = document.createElement("div");
                let imageDiv = document.createElement("div");
                let titleRatingDiv = document.createElement("div");
                let movieStar = document.createElement("span");
                let movieDiv = document.createElement("div");
                let movieTitle = document.createElement("h3");
                
                container.className = "movie-container";
                imageDiv.className = "card-img";
                titleRatingDiv.className = "title-rating";
                movieDiv.className = "card-content";
                imageDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
                movieTitle.textContent = movie.title;
                movieStar.textContent = `⭐ ${movie.vote_average.toFixed(1)}/10`;

                titleRatingDiv.appendChild(movieTitle);
                titleRatingDiv.appendChild(movieStar);
                movieDiv.appendChild(titleRatingDiv);
                container.appendChild(imageDiv);
                container.appendChild(movieDiv);
                popularList.appendChild(container);
            });
        }) 
}


function refreshImgSeries() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        },
    };

    fetch(urlSeries, options)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let popularList = document.querySelector(".popular-list-series");
            popularList.innerHTML = "";

            json.results.slice(0, 20).forEach(movie => {
                let container = document.createElement("div");
                let imageDiv = document.createElement("div");
                let titleRatingDiv = document.createElement("div");
                let movieStar = document.createElement("span");
                let movieDiv = document.createElement("div");
                let movieTitle = document.createElement("h3");
                
                container.className = "movie-container-series";
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
}

function searchChange() {
    if (!aHeaderEnabled) {
        if (window.visualViewport.width <= 900) {
            aHeader.style.display = "none";
            aHeaderEnabled = true;
        }
    }
    else {
        if (window.visualViewport.width <= 900) {
            aHeader.style.display = "flex";
            aHeaderEnabled = false;
        }
    }

    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
}
    
right.addEventListener("click", function() {
    popularListContainer.scrollLeft += 700;
});

left.addEventListener("click", function() {
    popularListContainer.scrollLeft -= 700;
});

rightSerie.addEventListener("click", function() {
    popularListContainerSeries.scrollLeft += 700;
});

leftSerie.addEventListener("click", function() {

    popularListContainerSeries.scrollLeft -= 700;
});

rightSearch.addEventListener("click", function() {
    popularListContainerSearch.scrollLeft += 700;
});

leftSearch.addEventListener("click", function() {    
    popularListContainerSearch.scrollLeft -= 700;
});


searchImg.addEventListener("click", searchChange);



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
            if (window.innerWidth <= 900) {
                leftSearch.style.display = "none";
                rightSearch.style.display = "none";
            }
            else {
                leftSearch.style.display = "flex";
                rightSearch.style.display = "flex";
            }
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
 
