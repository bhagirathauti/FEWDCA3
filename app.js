// getting all elements from the document
const randomImageDiv = document.querySelector(".sec2")
const featuredDish = document.getElementById("ftDishImage")
const featuredDishName = document.getElementById("ftDishName")
const ftIngredientsBtn = document.getElementById("ftDishIngredients")
const ftNameImageNButtons = document.querySelector(".nameImagenbuttons")
// adding all the ingredients
const ingredientsDiv = document.createElement("div")
ingredientsDiv.setAttribute("id", "ingredientsDiv")
randomImageDiv.appendChild(ingredientsDiv)
const ingredients = document.createElement("ul")
ingredientsDiv.appendChild(ingredients)
// fetching featured Random Meal
async function randomMeal(){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        console.log(response)
        const data = await response.json();
        featuredDish.src=data.meals[0].strMealThumb;
        featuredDishName.innerText="Todays Random Meal : "+data.meals[0].strMeal;
    }catch(error){
        console.log(error)
    }
}
randomMeal()
// Meal Search
async function searchMeal(){
    try{
        const response1 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
        console.log(response1)
        const data1 = await response1.json();
    }catch(error){
        console.log(error)
    }
}
searchMeal()

