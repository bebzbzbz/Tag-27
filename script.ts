// ======== STRING METHODS ========
console.log("STRING METHODS");
// ======== LVL 1_1 ========
console.log("Lvl 1_1");

let firstName = "Jane";
let lastName = "Doe";

console.log(firstName.length);
console.log(lastName.length);

let fullName = firstName.concat(lastName);
console.log(fullName.length);

// ======== LVL 1_2 ========
console.log("Lvl 1_2");

const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."
console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

// ======== LVL 1_4 ========

const susisStatus = "Susi is going to codingschool"

let susiDiv = document.querySelector("#susi");

if (susiDiv) {
    susiDiv.innerHTML += `<p>${susisStatus.slice(0, 4)}</p>`;
    susiDiv.innerHTML += `<p>${susisStatus.slice(5, 7)}</p>`;
    susiDiv.innerHTML += `<p>${susisStatus.slice(5, 16)} ${susisStatus.slice(23)}</p>`;
    susiDiv.innerHTML += `<p>${susisStatus.slice(23)}</p>`;
    susiDiv.innerHTML += `<p>${susisStatus.slice(0, 7)} ${susisStatus.slice(23)}</p>`;   
}

// ======== LVL 1_5 ========

const whereIsSusi = "Susi is back from codingschool";

if (susiDiv) {
    susiDiv.innerHTML += `<p>${whereIsSusi.substring(0, 4)}</p>`;
    susiDiv.innerHTML += `<p>${whereIsSusi.substring(5, 7)}</p>`;
    susiDiv.innerHTML += `<p>${whereIsSusi.substring(24)}</p>`;
    susiDiv.innerHTML += `<p>${whereIsSusi.substring(0, 7)} ${whereIsSusi.substring(24)}</p>`;   
}

// ======== LVL 1_7 ========

const samsStatus = "Sam is good at codingschool"

let samDiv = document.querySelector("#sam");

if (samDiv) {
    samDiv.innerHTML += `<p>${samsStatus.replace("good", "bad")}</p>`;
    samDiv.innerHTML += `<p>${samsStatus.replace("codingschool", "school")}</p>`;
    samDiv.innerHTML += `<p>${samsStatus.replace("codingschool", "tennis")}</p>`;
}

// ======== LVL 1_8 ========

console.log("Lvl 1_8");

const whereIsSam = "Sam is going to school";

if (samDiv) {
    samDiv.innerHTML += `<p>${whereIsSam.toUpperCase()}</p>`;
    samDiv.innerHTML += `<p>${whereIsSam.toLowerCase()}</p>`;
    samDiv.innerHTML += `<p>${whereIsSam.substring(0, 3).toUpperCase() + whereIsSam.substring(3, 16) + whereIsSam.substring(16).toUpperCase()}</p>`;
    samDiv.innerHTML += `<p>${whereIsSam.substring(0, 3) + whereIsSam.substring(3, 16).toUpperCase() + whereIsSam.substring(16)}</p>`;
    samDiv.innerHTML += `<p>${whereIsSam.replace("s", "S").replace("i", "I").replace("g", "G").replace("t", "T").replace("sch", "Sch")}</p>`;
}

// ======== LVL 1_9 ========

const infoAboutSam = "Sam is going to codingschool";
const susi = "Susi";
const and = "and";

let susiSamDiv = document.querySelector("#susi-and-sam");

if (susiSamDiv) {
    susiSamDiv.innerHTML += `<p>${infoAboutSam.slice(0, 15)} ${infoAboutSam.slice(22)} ${and} to the movie theater</p>`
    susiSamDiv.innerHTML += `<p>${infoAboutSam.replace("codingschool", "the movie theater")}</p>`
    susiSamDiv.innerHTML += `<p>${susi.concat(" ", and, " ", infoAboutSam.replace("is", "are"))}</p>`
    susiSamDiv.innerHTML += `<p>${susi.concat(" ", and, " ", infoAboutSam.replace("is", "are").replace("codingschool", "the gym and to the movie theater"))}</p>`
    susiSamDiv.innerHTML += `<p>${susi.concat(infoAboutSam.slice(3))} and to the movie theater</p>`
}

// ======== STRING BONUS ========

let btn = document.querySelector("#search-button");

btn?.addEventListener("click", searchReplace)

function searchReplace () {
    const searchInput = document.querySelector<HTMLInputElement>("#search-input")?.value;
    let article = document.querySelector("article");
    const searchOutput = `<span>${searchInput}</span>`
    console.log(searchOutput);

    // const result = article?.replaceAll(searchInput, searchOutput);
    // console.log(result);

    if (article && searchInput) {
        console.log(article.innerHTML);
        console.log(article.innerText);
        article.innerHTML = article.innerText.replaceAll(searchInput, searchOutput)
    }
}

// ======== NUMBER ========

// let a = 15.16698.toString();
// let b = 7.78714.toString();
// let c = Number("12.3").toString();
// let d = Number("3.14random").toString();
// let e = Number("32px").toString();
// let f = true;
// let g = false;
// let h = "321";
// let i = "Supercode";