async function getMeal(query) {

        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        
        const response = await data.json();
        console.log(response.meals);

        response.meals.forEach(meal => {
            console.log(meal.strMeal);
        });
   
}

getMeal("cake");
function getMeal_details(meal){
    console.log(meal)
}