//alert("working");   //This is for testing the index.js linkd or not

// $ = document.querySelector=document.querySelectorAll

// $("h1").addClass("big_title");

// $('button').html("Cliked");

// $("a").attr('href',"https://www.yahoo.com");

// $("h1").click(function(){
//     $("h1").css("color", "purple")
// });


// $('button').click(function(){
//     $("h1").css("color","purple")
// });


// $(document).keypress(function(event){
//     $("h1").html(event.key);
    

// });
// $("h1").on("mouseover",function(){
//     $("h1").css("color","yellow")
// })

// Animation 

$('button').click(function(){
    // $("h1").toggle()
    // $("h1").fadeToggle()
    // $("h1").slideToggle()
    // $("h1").animate({
    //     opacity: 0.5
    // });
    $("h1").slideUp().slideDown().animate({
            opacity: 0.5
        });

});