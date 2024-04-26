

let url =`https://jsonplaceholder.typicode.com/todos`;

let container = document.getElementById("container");

const displayData = (data) =>{
    container.innerHTML=''
    data.forEach((ele)=>{
        let card = document.createElement("div");

        let title1 = document.createElement("p");
        title1.textContent= ele.title

        let check = document.createElement("input")
        check.type= 'checkbox'

        card.append(title1,check)
        container.append(card)
    })
}

const getData = async(url) =>{
    try {
        let res = await fetch(`${url}`)
        let data = await res.json();
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

getData(url)