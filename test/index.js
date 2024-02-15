 async function getmeal(quary){

const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quary}`);
const responce=await data.json();
console.log(responce)
}

getmeal("cake")