// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
// console.log(navbar)

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

import { search_News, append} from "../scripts/fetch.js";

let newsdata = JSON.parse(localStorage.getItem("cart"))||[];
let search = (e) =>{
    if(e.key === "Enter"){
        let query = document.getElementById("search_input").value ;

        search_News(query).then((data)=>{
            console.log(data);
            let results = document.getElementById("results");
            results.innerHTML = null;
            append(data, results);
        })

    }
}

document.getElementById("search_input").addEventListener("keydown", search)

let sidebar = document.getElementById("sidebar").children;

function cSearch(){
    search_News(this.id).then((data)=>{
        console.log(data);
        let results = document.getElementById("results");
        results.innerHTML = null;
        append(data, results);
    })
}

for(let el of sidebar){
    el.addEventListener("click", cSearch);
}


  localStorage.setItem("news", JSON.stringify(newsdata) )