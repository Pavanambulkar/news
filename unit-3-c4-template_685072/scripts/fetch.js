let search_News = async(query) =>{
    

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let data = await res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log("err:", err);
    }
     
}


let append = (data, results) =>{
    data.forEach((title,  description, content) =>{
        let div = document.createElement("div");
        div.setAttribute("id", "detailed_news")

        let Title = document.createElement("h3");
        Title.innerText = title;
        let des = document.createElement("p");
        des.innerText = description;
        let cont = document.createElement("p");
        cont.innerText = content;
        div.append(Title, des, cont);
        results.append(div);
    })

}

export {search_News, append};


// title,  description, content