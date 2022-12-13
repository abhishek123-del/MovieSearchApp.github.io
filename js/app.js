const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// Most Popular movies  api  
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// Search Movie Api 


const movieBox = document.querySelector("#movieBox");
const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showMovies(data);
}

getMovies(APIURL);



const showMovies = (data) => {
  movieBox.innerHTML = "";
  data.results.forEach(item => {
    const ImagePath = IMGPATH + item.poster_path;
    const box = document.createElement("div");
    box.classList.add("box")
    box.innerHTML = `
     <img src="${ImagePath}">
     <div class="overlay">
         <div class="overlayRow">
             <h2>${item.original_title}</h2>
             <div class="rating">${item.vote_average}</div>
         </div>
         <h3>Overview:</h3>
         <p class="overview">
           ${item.overview}
         </p>
     </div>
     `
    movieBox.appendChild(box);
  });
}


const searchMovie = document.querySelector("#searchMovie");
searchMovie.addEventListener("keyup", (e) => {
  if (e.target.value != "") {
    getMovies(SEARCHAPI + e.target.value);
  } else {
    getMovies(APIURL);
  }
})

