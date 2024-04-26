let container = document.getElementById("container");
let paginationBox = document.getElementById("pagination");
let url =`https://jsonplaceholder.typicode.com/users`;



let getData = async(url)=>{
    try {
       let res = await fetch(`${url}`)
       pagination(res.headers.get("X-Total-Count"),6)
       let data = await res.json(); 
       console.log(data)
       displayData(data)
       

    } catch (error) {
       console.log(error) 
    }
}

getData(`${url}?_page=1&_limit=6`)
    
let displayData = (data)=>{
     container.innerHTML="";
    data.forEach((ele)=>{
        let box = document.createElement("div")

        let name1 = document.createElement("h1");
        name1.textContent = ele.name;

        let username1 = document.createElement("h3");
        username1.textContent = ele.username;

        let email1 = document.createElement("p");
        email1.textContent = ele.email

        let web = document.createElement("p");
        web.textContent =ele.website;

        
        
        box.append(name1,username1,email1,web)
        container.append(box)

    })
}


let pagination =(total1,limit1)=>{
     let total =total1 ;
     let limit = limit1;
     let noOfBtn = Math.ceil(total/limit);
    paginationBox.innerHTML="";
    for(let i =1; i<=noOfBtn;i++){
        let btn = document.createElement("button");
        btn.textContent = i;
        console.log(i)
        btn.addEventListener("click",()=>{
            getData(`${url}?_page=${i}&_limit=6`)
        })
        paginationBox.append(btn)
    }
}


