let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment");

let saveBtn = document.getElementById("save-data");
let hitory = document.getElementById("history");
counter = 0;

const increment = () => {
  counter += 1;
  console.log((countEl.textContent = counter));
};
const saveData = () => {
  hitory.textContent += counter + " - ";
  countEl.textContent = 0;
  counter = 0;
};
