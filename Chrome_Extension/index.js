let inputEl = document.querySelector("#input-el");
let saveEl = document.querySelector("#save-el");
let ulEl = document.querySelector("#ul-el");
let deleteBtn = document.querySelector("#delete-btn");
let saveTab = document.querySelector("#save-tab-btn");
//let myLeads = ["www.awasomelead.com", "www.epiclead.com", "www.texlead.com"];
let myLeads = [];

//localStorage.clear();
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// check if localstorae is truthy to set its values to myLeads
// and then call render() to display values

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

saveEl.addEventListener("click", () => {
  let inputValue = inputEl.value;
  if (inputValue != "") {
    myLeads.push(inputValue);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads); //
  }
});

// access chrome tabs:
//update the manifest json to have permissions: ['tabs']
//chrome will allow you a acces any input in chrome tabs
// inside callback function:
// chrome.tabs.query mthd which takes object as 1st param and
//callback function
//1st param (obj) should have active : true ie the active tab
// currentWindow: true ie the active window
//callback function takes tabs as param
// get the first tab url using tabs[0].url
//push it to local array
//save it local storage
// call render function to display the tab url on screen;

saveTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0].url);
    console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function displayUrl() {
  for (i of tab) {
    myLeads.push(i.url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);
  }
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  // ulEl.innerHTML = "";
  render(myLeads);
});

//display existing values
function render(leads) {
  //better way with existing element in array
  // let li = document.createElement("li");
  // let a = document.createElement("a");
  // for (let i of myLeads) {
  //   a.setAttribute("target", "_blank");
  //   a.setAttribute("href", `${i}`);
  //   a.textContent = i;
  // }
  // li.appendChild(a);
  // // ulEl.innerHTML = "<li>"+i+"</li>"
  // ulEl.appendChild(li);

  //best way to use with empty array
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // console.log("leads", leads[i]);
    //  listItems += "<li><a target='_blank' href='#'>" + myLeads[i] + "</a></li>";
    listItems += `<li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
     </li>`;
  }

  ulEl.innerHTML = listItems;
}

//falsy values ara:
// false, 0, " ", null, undefined, NaN
