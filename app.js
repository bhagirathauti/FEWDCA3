
//GETTING ALL ELEMENTS FROM HTML
const mealName = document.querySelectorAll("#ftDishName");
const mealThumbnail = document.querySelector("#ftDishImage");
const mealIngredientsList = document.getElementById("allIngredients");
const searchResult = document.querySelector(".searchResults");

// INSTRUCTIONS MODAL

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

// INGREDIENTS MODAL
const Ingredientsmodal = document.getElementById("ingredients");
const ingredientsBtn = document.getElementById("ftDishIngredients");
const closeModalBtn = document.getElementsByClassName("back")[0];
ingredientsBtn.addEventListener("click", () => {
    Ingredientsmodal.style.display = "block";
});
closeModalBtn.addEventListener("click", () => {
    Ingredientsmodal.style.display = "none";
});

document.body.addEventListener("click", (event) => {
    if (event.target === modal) {
        Ingredientsmodal.style.display = "none";
    }
});
document.body.onclick = function(event){
    if(event.target==Ingredientsmodal){
        Ingredientsmodal.style.display="none";
    }
}

// FEATURED DISH
function getRandomMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => {
        appendRandomMeal(data);
    })
    .catch((err) => console.log(err));
}
function appendRandomMeal(data) {
    const meal = data.meals[0];
    
    mealName.forEach((name) => {
        name.innerText = meal.strMeal;
    });
    
    ftinstructions.innerText=data.meals[0].strInstructions;
    mealThumbnail.src = meal.strMealThumb;
    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;
        if (meal[ingredient] && meal[measure]) {
            ingredients.push(`${meal[ingredient]}, ${meal[measure]}`);
        } else {
            break; 
        }
    }
    
    mealIngredientsList.innerText = "Ingredients: " + ingredients.join(", ");
}

// SEARCH RESULTS
function handleSearchResults(data) {
    searchResult.innerHTML = ""; // to refresh search content
    if (data.meals !== null) {
        const meals = data.meals;
        meals.forEach((meal) => {
            searchResult.innerHTML += `<div class="recipe">
            <img class="recipe-thumb" src=${meal.strMealThumb} alt="">
            <p>${meal.strMeal}</p>
            </div>`;
        });
    } else {
        searchResult.innerHTML += `<p id="no-result">Nothing found</p>`;
    }
}
function searchMeal() {
    const searchedCategory = document.getElementById("search").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchedCategory}`)
    .then((res) => res.json())
    .then((data) => {
            handleSearchResults(data);
        })
        .catch((err) => console.log(err));
    }
    
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", searchMeal);
getRandomMeal();
