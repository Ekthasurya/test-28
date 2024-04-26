let container = document.getElementById("container");

document.getElementById("searchBtn").addEventListener("click",() =>{
    let searchVal =document.getElementById("searchData").value;
    console.log(searchVal)

    getData(searchVal)
})

let api =`https://www.omdbapi.com/?i=tt3896198&apikey=b82b50f1`

const getData = async(searchVal) => {

    try {
    let res = await fetch(`${api}&s=${searchVal}`)
    let data = await res.json()
    console.log(data.Search)
    displayData(data.Search)
    } catch (error) {
      console.log(error)    
    }
    
}

function displayData(data){

    container.innerHTML=""

    data.forEach((ele) =>{

        let box = document.createElement("div");
        
        let  image = document.createElement("img");
        image.src =ele.Poster;

        let title = document.createElement("h2");
        title.textContent=ele.Title

        box.append(image,title)
        container.append(box)

    })

}