document.getElementById("button").addEventListener("click", tokyoGhoul);
document.getElementById("button1").addEventListener("click", naruto);
document.getElementById("button2").addEventListener("click", onePuchMan);

function tokyoGhoul() {
  fetch("https://api.jikan.moe/v3/search/anime?q=Tokyo Ghoul&limit=6")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const dt = data.results;
      let output = "";
      dt.forEach(element => {
        output += `<h1 class="head">${element.title}</h1>
                  <div class="info">
                  <img src="${element.image_url}">
                  <p>${element.synopsis}</p>
                  <h2>Episodes: ${element.episodes}</h2>
                  </div>`;
      });
      document.getElementById("container").innerHTML = output;
    });
}

function naruto() {
  fetch("https://api.jikan.moe/v3/search/anime?q=naruto&limit=16")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const dt = data.results;
      let output = "";
      dt.forEach(element => {
        output += `<h1 class="head">${element.title}</h1>
                  <div class="info">
                  <img src="${element.image_url}">
                  <p>${element.synopsis}</p>
                  <h2>Episodes: ${element.episodes}</h2>
                  </div>`;
      });
      document.getElementById("container").innerHTML = output;
    });
}

function onePuchMan() {
  fetch("https://api.jikan.moe/v3/search/anime?q=one punch man&limit=6")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const dt = data.results;
      let output = "";
      dt.forEach(element => {
        output += `<h1 class="head">${element.title}</h1>
                  <div class="info">
                  <img src="${element.image_url}">
                  <p>${element.synopsis}</p>
                  <h2>Episodes: ${element.episodes}</h2>
                  </div>`;
      });
      document.getElementById("container").innerHTML = output;
    });
}
