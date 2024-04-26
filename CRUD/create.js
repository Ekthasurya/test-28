
let url = `http://localhost:3000/todos`;

document.querySelector("button").addEventListener("click",()=>{
    createTodo()
})


let createTodo =async()=>{
     try {
        let inputVal = document.getElementById("title").value;
        obj1 ={
            title : inputVal,
            completed : true
        }

        let res = await fetch(url,{
            method : "POST",
            headers:{
                'Content-Type':'application/json',
            },
            body :JSON.stringify(obj1)
        });
        let data = await res.json();
     } catch (error) {
        console.log(error)
     }
}