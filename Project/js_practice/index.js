// alert("hi");
// var name ='subhadip';
// name.slice(0,5);
// // Tweeter count project 
// var tweet=prompt('compose your tweet ');
// tweet_length=tweet.length;
// alert('You have written '+ tweet_length +' charecters, you have '+(140-tweet_length)+" charecters remaning");
// var tweetunder140=tweet.slice(0,140);
// alert("tweet Under 140 charecters is \n "+ '->  '+tweetunder140);
//  string case

// var name ='subhadip';
// name=name.toUpperCase();
// console.log(name);
// console.log(name.toLowerCase());

// name=prompt('What is your name');
// namefirst=name.slice(0,1);
// name=name.slice(1,(name.length));
// namefirst=namefirst.toUpperCase();

// alert('Hellow '+namefirst+name.toLowerCase())

// 

// var dogage=prompt('How old yuor Dog');
// var humanage=(dogage-2)*4+21;
// alert('Your Dog is '+humanage+' years old in human years');
//  var x=5;
// x+=2;
// console.log(x);

// // java script function

// function getMilk() {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// function getMilk(moeny) {   

//     var nuofb=moeny/1.5;
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log('buy '+nuofb+ ' bottles of milk')
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }
//  getMilk(12);

// function lifeInWeeks(age) {
// var years=90-age;
//     console.log('You have '+years*365+ ' days, '+years*52+ ' weeks, and '+years*12+' months left.')
// }
// lifeInWeeks(56);


// function getMilk(moeny) {   

//     var nuofb=moeny/1.5;
//     nuofb=Math.floor(nuofb);
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log('buy '+nuofb+ ' bottles of milk')
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//     return moeny%1.5;
// }


// var change=getMilk(5);
// console.log(change);


// BMicalculater 
// var n=Math.random();
// n*=3;
// n=Math.round(n);
// console.log(n);

// love calculater
 // var male_patner_name=prompt("Enter male patner name ");
 // var female_patner_name=prompt("Enter female patner name ");
 // alert('Percentage of love between ' + male_patner_name + ' and '+female_patner_name+ " is " +Math.floor(Math.random()*100)+"%");


// function bmiCalculator (weight, height) {
//     var bmi=weight/Math.pow(height,2);
//     var massge;
//     if (bmi<18.5){
//         massge='you are underweight.';
//     }
//     else if(bmi>=18.5 && bmi<=24.9){
//         massge="you have a normal weight.";
//     }
//     else{
//         massge='you are overweight.';
//     }
//     return "Your BMI is "+bmi+", so "+massge;
// }
//  bmiCalculator(90,100);


// function isLeap(year) {
    
// /**************Don't change the code above****************/    
    
//     //Write your code here.    
//  if(year%4===0 && year%100!=0){
//   return 'Lelp ye year'
//  }
// else if(year %400===0){
//  return"Leap year."
// }
//     else{
//      return "Not Leap year."
//     }

// /**************Don't change the code below****************/    

// }

// isLeap(2100);

//  arrays 
// var gustList=["subhadip",'sarbik','somjit','megha','anjali','sunirnoy'];

// var name=prompt('What is your name');

// if (gustList.includes(name)){
//  alert ('Welcome '+name);
// }
// else{
//  alert('sorry may be next time');
// }

// var output=[];
// var n=1;
// function fizzBuzz(){
//  if(n%5===0&&n%3===0){
//   output.push("FizzBuzz");

// }
 
 
//  else if(n%5===0){
//    output.push("Buzz");

//  }
// else if (n%3===0){
//   output.push('Fizz');
//  }
//  else{
//    output.push(n);

//  }
//  n++;
//  console.log(output)
// // }

// function whosPaying(names) {
    
// /******Don't change the code above*******/
    
//     //Write your code here.
    
//     var index =Math.floor(Math.random()*names.length);
//     console.log(names[index]);

// /******Don't change the code below*******/    
// }

// whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);

/// while loop 
//  var i=1;
// while(i<10){
//  console.log(i);
//  i++;
// }



function fizzBuzz(){
 var n=0;
 var output=[];
 while(n<=100){
 if(n%5===0&&n%3===0){
  output.push("FizzBuzz");

}
 
 
 else if(n%5===0){
   output.push("Buzz");

 }
else if (n%3===0){
  output.push('Fizz');
 }
 else{
   output.push(n);

 }
 n++;}
 return output;
 }

console.log(fizzBuzz());


// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }