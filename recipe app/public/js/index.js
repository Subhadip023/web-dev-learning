const search_btn=document.getElementById('search_btn');
const recipeSearchForm=document.getElementById('recipeSearchForm');
const ingredientInput=document.getElementById('ingredientInput');
const recipes=document.querySelector('.recipes');
const recipe_details=document.getElementById('recipe_details');
const closed_recipeDetails=document.getElementById('closed_recipeDetails');

const fetchRecipes=async (quary)=>{
  const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}
  `);
  const response=await data.json();
  response.meals.forEach(element => {
    const recipeDiv=document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML=`
    <div class="heading">${element.strMeal}</div>
    <div class="image">
      <img src="${element.strMealThumb}" alt="" />
    </div>
    <div class="button">
    <button onclick="getDetails(${element.idMeal})">Get Recipe</button>
    </div>
    `
    recipes.appendChild(recipeDiv);
  }); 
}
search_btn.addEventListener("click",(e)=>{
  e.preventDefault();
  const search=ingredientInput.value;
  fetchRecipes(search);
});
closed_recipeDetails.addEventListener("click",()=>{
  recipe_details.style.display="none";

});

const getDetails=async(id)=>{
  const data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  let meal=await data.json();
  meal=meal.meals[0];
  console.log(typeof meal)
  console.log( meal.strInstructions)
  console.log( meal.strIngredient1)
  recipe_details.style.display="block";
}