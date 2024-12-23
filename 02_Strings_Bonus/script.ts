// ======== STRING BONUS ========

let btn = document.querySelector("#search-button");

btn?.addEventListener("click", searchReplace)

// oder btn.onclick = searchReplace;

function searchReplace () {
    event?.preventDefault()
    const searchInput = (document.querySelector("#search-input") as HTMLInputElement).value;

    // damit drücken wir aus, dass es sich def um ein html element handelt
    // Variante  const searchInput = document.querySelector<HTMLInputElement>("#search-input")?.value; geht aber nicht mit getElementById


    let article = document.querySelector("article");
    const searchOutput = `<span>${searchInput}</span>`;
    console.log(searchOutput);

    // const result = article?.replaceAll(searchInput, searchOutput);
    // console.log(result);

    if (article && searchInput) {
        // console.log(article.innerHTML);
        // console.log(article.innerText);
        article.innerHTML = article.innerText.replaceAll(searchInput, searchOutput)
    }
}