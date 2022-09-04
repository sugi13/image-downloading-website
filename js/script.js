// 
let searchField = document.querySelector("#search-field");
let button = document.querySelector("#search-btn");
let resultField = document.querySelector("#result-field");
let imgContainer = document.querySelector(".img-container");
function getData() {
    let url = `https://api.unsplash.com/search/photos?query= ${searchField.value}&per_page=30&client_id=jHcF-O-i-HCA9x2HNy4wNRsUrHMGVLm5gAchRTf1rA0`;
    fetch(url)
    .then((response) => response.json())
    .then(function(data){

    resultField.innerHTML = `Your searched for "${searchField.value}"`;
      for(let i = 0; i < data.results.length; i++) {

        let img = document.createElement('img');
        let downloadBtn = document.createElement('a');
        downloadBtn.setAttribute("id", "downloadBtn")
        let divElement = document.createElement('div');
        img.src = data.results[i].urls.regular;
        downloadBtn.textContent = "download";

        divElement.appendChild(img);
        divElement.appendChild(downloadBtn);

        imgContainer.appendChild(divElement);

        // adding function to download button//
        downloadBtn.addEventListener('click', function(){
         downloadBtn.href = data.results[i].links.html;
         downloadBtn.download = data.results[i].links.download;
        });
      }
    });
    searchField.disabled = true;
  }


  button.addEventListener("click", getData);