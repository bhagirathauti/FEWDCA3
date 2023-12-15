const randomImageDiv = document.querySelector(".sec2")
async function randomMeal(){
    try{
        const response = await fetch(`www.themealdb.com/api/json/v1/1/random.php`)
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
randomMeal()