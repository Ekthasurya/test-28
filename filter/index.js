let container = document.getElementById("container");


let url = `https://fakestoreapi.com/products`;


let getData = async(url)=>{
    try {
       let res = await fetch(url)
       let data = await res.json(); 
       console.log(data)
       displayData(data)
    } catch (error) {
       console.log(error) 
    }
}

getData(url)
    
let displayData = (data)=>{
     container.innerHTML="";
    data.forEach((ele)=>{
        let box = document.createElement("div");

        let image1 = document.createElement("img");
        image1.src = ele.image;

        let title1 =document.createElement("h2");
        title1.textContent = ele.title;

        let des = document.createElement("p");
        des.textContent = ele.description;

        let price1 = document.createElement("h4");
        price1.textContent = ele.price;

        let rating = document.createElement("p");
        rating.textContent = ele.rating.rate;

        box.append(image1,title1,des,price1,rating)
        container.append(box)

    })
}

document.getElementById("filterData").addEventListener("change",()=>{
    let filterValue = document.getElementById("filterData").value;
    console.log(filterValue)
    getData(`${url}/category/${filterValue}`)
    
})