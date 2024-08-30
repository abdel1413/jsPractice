let data = [
  { player: "jane", score: 52 },
  { player: "smith", score: 41 },
];

const logBtn = document.querySelector("#log-btn");

logBtn.addEventListener("click", () => {
  for (let i of data) {
    if (i.player === "jane") {
      console.log(i.score);
    }
  }
});

const sentenceGenerator = (sentce, arr) => {
  let stce = " ";
  let lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      stce += arr[i] + ".";
    } else {
      stce += arr[i] + ", ";
    }
  }
  return `The ${arr.length} ${sentce}  are: ${stce} `;
};

let s = sentenceGenerator("The heigest mount", [
  "mount everest",
  "mount sanai",
]);

const container = document.querySelector("#container");

let images = [
  "imgs/image1.jpeg",
  "imgs/image2.jpeg",

  "imgs/image4.jpeg",
  "imgs/image5.jpeg",
];

let img = document.createElement("img");
let imageLink = "";
for (let i = 0; i < images.length; i++) {
  // img.setAttribute("class", "img-el");
  // img.setAttribute("src", `${images[i]}`);

  //imageLink += img;
  ///img.setAttribute("alt", "photo");
  imageLink += `<img src=${images[i]} class="img-el"  alt= "photo"/>`;
}

//container.textContent = img;
container.innerHTML = imageLink;
