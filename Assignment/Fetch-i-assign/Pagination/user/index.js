let container = document.getElementById("container");
let paginationBox = document.getElementById("pagination");


let url =`https://jsonplaceholder.typicode.com/users`;


const getData = async(url)=>{
    try {
        let res = await fetch(`${url}`)
        let data = await res.json();
        console.log(data)
        displayData(data)
        pagination(res.headers.get("X-Total-Count"),6)
    } catch (error) {
       console.log(error); 
    }
}

getData(`${url}?_page=1&_limit=6`)


const displayData = (data) =>{
    container.innerHTML="";
    data.forEach((ele)=>{
        let box = document.createElement("div")

        let id1 = document.createElement("div")
        id1.textContent = `Id : ${ele.id}`;

        let name1 = document.createElement("div")
        name1.textContent = `Name : ${ele.name}`;

        let username1 = document.createElement("div")
        username1.textContent=`Username : ${ele.username}`;

        let phone1 = document.createElement("div")
        phone1.textContent= `Phone : ${ele.phone}`;

        let email1 = document.createElement("div")
        email1.textContent=`Email :${ele.email}`;

        let website1 = document.createElement("div")
        website1.textContent=`Website :${ele.website}`;

        let company = document.createElement("div")
        company.textContent =`Company : ${ele.company.name}`;

       box.append(id1,name1,username1,phone1,email1,website1,company)

       container.append(box)
    })
}



const pagination = (total1,limit1)=>{
    let total = total1;
    let limit = limit1;
    let noOfBtn = Math.ceil(total/limit)
    paginationBox.innerHTML="";
    for(let i =1; i<=noOfBtn;i++){
        let btn = document.createElement("button");
        btn.textContent = i;
        btn.addEventListener("click",()=>{
            getData(`${url}?_page=${i}&_limit=6`)
        })
        paginationBox.append(btn)
        
    }
}
