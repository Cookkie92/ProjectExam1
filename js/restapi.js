const url = "https://it-kk.no/project-blog/wp-json/wp/v2/posts?_embed";

const resultContainer = document.querySelector(".result");

async function getApi() {
  try {
    const response = await fetch(url);

    const result = await response.json();
    // console.log(result);

    resultContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      const pictures = result[i]._embedded["wp:featuredmedia"]["0"].source_url;
      if (i > 0) {
        resultContainer.innerHTML += `
      <figure class="selected-img">
      <h3 class="caro-logo">${result[i].slug}</h3>
        <img class="image" src="${pictures}">
        
        </figure>
      `;
        continue;
      }

      resultContainer.innerHTML += `
      <figure class="selected-img" data-active>
      <h3 class="caro-logo">${result[i].slug}</h3>
        <img class="image" src="${pictures}">
        
        </figure>
      `;
    }

    //fetch Array fra API
    //finn route til bilder på API
    //Finn path til bilder
    // loop gjennom array fra API
    // Display bilder fra array i .result i HTML med InnerHTML
    // Lag HTML med <figure> rundt og <img> med bilde fra array inni
    //Add event listener (click) til Button satt i HTML
    //Når knapp blir trykkt, hent bilder fra array i loop ( next button starter på 0 og går oppover og previous starter fra der den er og går nedover)
    //
    //Bilde som er valgt skal være større enn andre bilder
    //
  } catch (error) {
    console.log("error occured", error);
    resultContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();

const changePic = document.querySelectorAll("[data-karusellu-btn]");

console.log(changePic);

changePic.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.karuselluBtn === "next" ? 1 : -1;
    console.log(button.dataset);
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-bilder]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    // slides.children[3].dataset.selectedImg = true;
    delete activeSlide.dataset.active;
  });
});

// const lol = document.querySelectorAll("[bilde-karusell]");
// console.log(changePic);

//<a href="spespost.html?id=${result[i].id}"></a>
// ${result[i].content.rendered}

/* <h3 class="post-logo">${result[i].slug}</h3> */

// images.forEach(function () {
//   console.log(images);
// });

// result[i]._embedded["wp:featuredmedia"]["0"].source_url

// .yoast_head_json.og_image[0].url
