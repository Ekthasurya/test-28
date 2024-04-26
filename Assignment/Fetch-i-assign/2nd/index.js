

let url1 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

let url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;

let getCategoriesData = async(url1) =>{
     try {
        let res = await fetch(`${url1}`)
        let data = await res.json();
        console.log(data);

     } catch (error) {
        console.log("something went wrong");
     }
}


let getIngredientData = async(url2) =>{
    try {
       let res = await fetch(`${url2}`)
       let data = await res.json();
       console.log(data);

    } catch (error) {
       console.log("something went wrong");
    }
}


document.getElementById("get-category-data").addEventListener("click", ()=>{
    getCategoriesData(url1)
})

document.getElementById("get-ingredient-data").addEventListener("click", ()=>{
    getIngredientData(url2)
})



