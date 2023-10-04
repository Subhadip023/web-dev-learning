let buttonColors=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];
function nextSequence(){
    let randomNumber =Math.floor((Math.random())*4);
    let randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + currentColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour   ).removeClass("pressed");
      }, 100);
}
function playSound(name) {

    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }




$('.btn').click(function(){
    let userChosenColour=$(this).attr("id");
    animatePress(userChosenColour);
    // $("#" + $(this).attr("id")).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
});
// nextSequence()