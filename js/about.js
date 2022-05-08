const url = "https://it-kk.no/project-blog/wp-json/wp/v2/pages";

const resultContainer = document.querySelector(".result");

async function getApi() {
  try {
    const response = await fetch(url);

    const result = await response.json();
    // console.log(result);
    resultContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      resultContainer.innerHTML += `
      
      
      <div class="about-me-page">
        <h3 class="about-heading">${result[i].slug}</h3>
        <div class="about-me">${result[i].content.rendered}</div>
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
