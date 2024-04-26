let container = document.getElementById("root");

let url = `http://localhost:3000/todos`;

let getData = async()=>{
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

getData()


let displayData = (data)=>{
    container.innerHTML="";
    data.forEach((ele)=>{
        let box = document.createElement("div");

        let  id1 = document.createElement("h3");
        id1.textContent = ele.id;

        let  title1 = document.createElement("h3");
        title1.textContent = ele.title;

        let  status = document.createElement("h3");
         status.textContent = ele.completed;
        
         let deleteBtn = document.createElement("button");
         deleteBtn.textContent ="Delete";
         deleteBtn.addEventListener("click",async()=>{
            try {
                let res = await fetch(`${url}/${ele.id}`,{
                    method : "DELETE",
                    headers :{
                        'Content-Type':'application/json',
                    }
                });
                let data = await res.json();
                getData()
            } catch (error) {
                console.log(error);
            }
         })

         let toggle = document.createElement("button");
         toggle.textContent = "Toggle";
         toggle.addEventListener("click",async()=>{
            try {
                let obj ={completed : ! ele.completed}
                let res = await fetch(`${url}/${ele.id}`,{
                    method : "PATCH",
                    headers :{
                        'Content-Type':'application/json',
                    },
                    body :JSON.stringify(obj)
                });
                let data = await res.json();
                getData()
            } catch (error) {
                console.log(error);
            }
         })


        //  Toggle.addEventListener("click",async()=>{
        //     try {
        //         let obj1 ={title:"surya",
        //         completed : ! ele.completed}
        
        //      let res = await fetch(`${url}/${ele.id}`,{
        //          method :"PUT",
        //          headers :{
        //              'Content-Type':'application/json',
        //          },
        //          body:JSON.stringify(obj1)
        //      })
        //      let data = await res.json();
        
        //      getData()
        
        //     } catch (error) {
        //      console.log(error)
        //     }
        // })

         box.append(id1,title1,status,deleteBtn,toggle)
         container.append(box)
    })
}


