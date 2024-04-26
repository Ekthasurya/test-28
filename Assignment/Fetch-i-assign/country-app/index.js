


let url =`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`;

let container = document.getElementById("container");

const displayData = (data) =>{
    container.innerHTML="";
   data.forEach(({country,id,Rank,population}) =>{
        let card = document.createElement("div");
        let  country1 = document.createElement("h1");
        country1.textContent =`Name : ${country}`
        let id1 = document.createElement("h3");
        id1.textContent=`ID : ${id}`
        let rank1 = document.createElement("h3");
        rank1.textContent=`Rank : ${Rank}`
        let population1 =document.createElement("h3");
        population1.textContent=`Population : ${population}`

        card.append(country1,id1,rank1,population1)
        container.append(card)
        
      })
}

const getData = async(url) =>{
    try {
        let res = await fetch(`${url}`)
        let data = await res.json();
        console.log(data);
        displayData(data)
    } catch (error) {
       console.log("error"); 
    }
}

getData(url)

document.getElementById("sortData").addEventListener("change", () =>{
    let sortValue = document.getElementById("sortData").value;
    console.log(sortValue);
    getData(`${url}?sort=population&order=${sortValue}`)
});