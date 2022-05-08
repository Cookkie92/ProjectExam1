const detailsContainer = document.querySelector(".details-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// const slug = params.get("slug");

// console.log(id);

const url =
  "https://it-kk.no/project-blog/wp-json/wp/v2/posts/" + id + "?_embed";

async function getApi() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    // console.log(results);
    createHtml(results);
  } catch (error) {
    console.log("error occured", error);
    detailsContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();

function createHtml(results) {
  console.log(url);
  const pictures = results._embedded["wp:featuredmedia"]["0"].source_url;
  detailsContainer.innerHTML = `
      
      
       
        <h3>${results.slug}</h3>
        <img class="details-image" src="${pictures}">
        
      `;
}
