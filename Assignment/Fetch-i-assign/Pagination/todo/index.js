
let container = document.getElementById("container");

let url = `https://jsonplaceholder.typicode.com/todos`


let getData = async(url)=>{
 
    try {
       let res = await fetch(`${url}`);
       let data = await res.json();
       console.log(data); 
       displayData(data)
       pagination(res.headers.get("X-Total-Count"),9)
    } catch (error) {
       console.log(error) 
    }
}

getData(`${url}?_page=1&_limit=9`)

const displayData = (data)=>{
    
    container.innerHTML ="";
    data.forEach((ele)=>{
       let box = document.createElement("div");

       let id1 = document.createElement("h3");
       id1.textContent = ele.id;

       let title1 = document.createElement("h1");
       title1.textContent = ele.title;

       let completed1 = document.createElement("p");
       completed1.textContent = ele.completed;

       box.append(id1,title1,completed1)
       container.append(box)

    })
}


const pagination =(total1,limit1)=>{
     let total = total1;
     let limit =limit1;
     let noOfBtn = Math.ceil(total/limit);

    let paginationBox = document.getElementById("pagination");
    paginationBox.innerHTML="";

    for(let i =1;i<=noOfBtn;i++){
        let btn =document.createElement("button");
        btn.textContent=i;
        btn.addEventListener("click",()=>{
            getData(`${url}?_page=${i}&_limit=9`)
        })
        paginationBox.append(btn)
    }
}
