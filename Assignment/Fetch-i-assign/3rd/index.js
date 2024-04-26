
let container = document.getElementById("container");

let url =`https://reqres.in/api/users`;


const getData = async(url) =>{
    try {
        let res = await fetch(`${url}`)
        let data = await res.json();
        console.log(data)
        //var data1 = data.data;
        displayData(data.data);
    } catch (error) {
        console.log(error);
    }
}

//getData(url)


const displayData = (user) =>{
      container.innerHTML=""
    user.forEach(({first_name,last_name,avatar,email})=>{

        var card = document.createElement("div")

        var name = document.createElement("h1")
        name.textContent= `${first_name} ${last_name}`

        var email1 = document.createElement("p")
        email1.textContent=email

        var avatar1 = document.createElement("img")
        avatar1.src = avatar

        card.append(name,email1,avatar1)
        container.append(card)
    })
}

document.getElementById("btn").addEventListener("click",() =>{
    getData(`${url}`)
})