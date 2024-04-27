
let url = `https://fakestoreapi.com/products`;


let cartData = JSON.parse(localStorage.getItem("cart"))||[];

let getData =async()=>{
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        console.log(data)
        displayData(cartData)
    } catch (error) {
        console.log(error);
    }
}
getData()


let container =document.getElementById("container");


let displayData = (arr)=>{
    container.innerHTML="";
   arr.forEach((ele)=>{
       let box = document.createElement("div");

       let title = document.createElement("h3");
       title.textContent=ele.title;

       let image = document.createElement("img");
       image.src=ele.image;

       let des = document.createElement("p");
       des.textContent= ele.description;

       let price = document.createElement("p");
       price.textContent=ele.price
       
       let existingcart = cartData.find((cartItm)=> cartItm.id == ele.id);

       let cartDiv = document.createElement("div");

       if(existingcart){
       let cartInc = document.createElement("button");
       cartInc.textContent = "+";
       cartInc.addEventListener("click",()=>incQuantity(existingcart.id));
       let qnt = document.createElement("p");
       qnt.textContent = existingcart.quantity;
       let cartdec = document.createElement("button");
       cartdec.textContent = "-";
       cartdec.addEventListener("click",()=>decQuantity(existingcart.id));


       cartDiv.append(cartInc,qnt,cartdec)
       }
       else{
           var cartButton = document.createElement("button");
           cartButton.textContent = "Add to cart";
           cartButton.addEventListener("click",()=>{
              cartData.push({...ele,quantity:1})
              localStorage.setItem("cart",JSON.stringify(cartData))
              getData()
           })
           cartDiv.appendChild(cartButton)
   
       }
       
       box.append(title,image,des,price,cartButton,cartDiv)
       container.append(box)
   })
}

function incQuantity(id){
   let exist = cartData.findIndex((el)=>el.id==id);
   if(exist!==-1){
      cartData[exist].quantity++;
      localStorage.setItem("cart",JSON.stringify(cartData));
      getData();
   }
}

function decQuantity(id){
   let exist = cartData.findIndex((el)=>el.id==id);
   if(exist!==-1){
       if(cartData[exist].quantity==1){
           cartData.splice(exist,1)
       }
       else{
           cartData[exist].quantity--;
           
       }
       localStorage.setItem("cart",JSON.stringify(cartData));
           getData();
      
   }
}


