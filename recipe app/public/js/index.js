// Replace 'https://api.example.com/data' with the URL of the API you want to fetch data from
const apiUrl = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

// Make a GET request to the API endpoint
fetch(apiUrl)
  .then(response => {
    // Check if the response status is ok (200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Do something with the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });

      async function fetchRandomMeal() {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
  
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const meal = data.meals[0];
    
    const mealName = meal.strMeal;
    const mealCategory = meal.strCategory;
    const mealInstructions = meal.strInstructions;

    // You can return the meal object or any other data you want
    return {
      name: mealName,
      category: mealCategory,
      instructions: mealInstructions
    };
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    // You can handle errors or rethrow them if necessary
    throw error;
  }
}
async function displayRandomMeal() {
  try {
    const meal = await fetchRandomMeal();
    
    console.log('Random Meal:', meal);
    // Display the meal data on the webpage or wherever needed
  } catch (error) {
    // Handle errors
    console.error('Error fetching random meal:', error);
  }
}
