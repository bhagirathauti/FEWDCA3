// getting all elements from the document
const randomImageDiv = document.querySelector(".sec2")
const featuredDish = document.getElementById("ftDishImage")
const featuredDishName = document.getElementById("ftDishName")
const ftIngredientsBtn = document.getElementById("ftDishIngredients")
const ftNameImageNButtons = document.querySelector(".nameImagenbuttons")
// adding all the ingredients
const ingredients = [];
// fetching featured Random Meal
async function randomMeal(){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        console.log(response)
        const data = await response.json();
        featuredDish.src=data.meals[0].strMealThumb;
        featuredDishName.innerText="Todays Random Meal : "+data.meals[0].strMeal;
        ftinstructions.innerText=data.meals[0].strInstructions;
        const food=data.meals[0]
        for(let i=0;i<=20;i++){
            const ingredient = food[`strIngredient${i}`];
            const measure = food[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
        ftingredients.innerHTML="Ingredients : "+ingredients;
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

// Instructions Modal

const instructionsModal = document.getElementById("instructions")
const instructionsBtn = document.getElementById("ftDishInstructions")
const closeSpan = document.getElementsByClassName("close")[0];
const ftinstructions = document.getElementById("allInstructions")
instructionsBtn.onclick=()=>{
    instructionsModal.style.display="block";
}
closeSpan.onclick=()=>{
    instructionsModal.style.display="none";
}
window.onclick = function(event){
    if(event.target==instructionsModal){
        instructionsModal.style.display="none";
    }
}
// Ingredients Modal

const ingredientsModal = document.getElementById("ingredients")
const ingredientsBtn = document.getElementById("ftDishIngredients")
const backSpan = document.getElementsByClassName("back")[0];
const ftingredients = document.getElementById("allIngredients")
ingredientsBtn.onclick=()=>{
    ingredientsModal.style.display="block";
}
backSpan.onclick=()=>{
    ingredientsModal.style.display="none";
}
document.body.onclick = function(event){
    if(event.target==ingredientsModal){
        ingredientsModal.style.display="none";
    }
}