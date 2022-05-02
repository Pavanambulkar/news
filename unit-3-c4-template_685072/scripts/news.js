// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
// console.log(navbar)

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
import { search_News, append} from "../scripts/fetch.js";






let newsdata = JSON.parse(localStorage.getItem("cart"))




let search = (e) =>{
    if(e.key === "Enter"){
        let query = document.getElementById("search_input").value ;

        search_News(query).then((data)=>{
            console.log(data);
            let results = document.getElementById("results");
            // results.innerHTML = null;
            append(data.articles, results);
        })

    }
}

document.getElementById("search_input").addEventListener("keydown", search)

let sidebar = document.getElementById("sidebar").children;

function cSearch(){
    search_News(this.id).then((data)=>{
        console.log(data);
        let results = document.getElementById("results");
        append(data.articles, results);
        // results.innerHTML = null;

    })
}

for(let el of sidebar){
    el.addEventListener("click", cSearch);
}