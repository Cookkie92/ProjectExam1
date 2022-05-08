const url = "https://it-kk.no/project-blog/wp-json/wp/v2/posts?_embed";

const resultContainer = document.querySelector(".posts-result");

async function getApi() {
  try {
    const response = await fetch(url);

    const result = await response.json();
    // console.log(result);
    resultContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      const pictures = result[i]._embedded["wp:featuredmedia"]["0"].source_url;

      resultContainer.innerHTML += `
      <div class ="result">
      <a href="spespost.html?id=${result[i].id}">
      <div class="inner-result">
        <h3>${result[i].slug}</h3>
        <img class="post-image" src=" ${pictures}">
        </div>
         </a>
      </div>

      `;
      console.log(result[i]);
    }
  } catch (error) {
    console.log("error occured", error);
    resultContainer.innerHTML = "This didnt go as planned";
  }
}

getApi();
{
  /* <a href="spespost.html?id=${result[i].id}"></a> */
}
