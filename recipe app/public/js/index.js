const search_btn=document.getElementById('search_btn');
const recipeSearchForm=document.getElementById('recipeSearchForm');
const ingredientInput=document.getElementById('ingredientInput');
const recipes=document.querySelector('.recipes');
const recipe_details=document.getElementById('recipe_details');

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
    <button onclick="getDetails(${JSON.stringify(element)})">Get Recipe</button>
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

const getDetails=(meal)=>{

  console.log(meal)
  recipe_details.style.display="block";
}