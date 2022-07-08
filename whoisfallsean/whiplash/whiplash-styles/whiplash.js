//Start State
var drumKeys = ["a", "s", "d", "f", "j", "k", "l"];
var gamePattern = [];
var userDrumPattern = [];
var started = false;
var level = 0;

//Keypress tracker to start game + Keypress Else
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    } else {
        var userChosenDrum = event.key;
        userDrumPattern.push(userChosenDrum);

        playSound(userChosenDrum);
        animatePress(userChosenDrum);
        checkAnswer(userDrumPattern.length - 1);
      }
    });

//User Click Tracker
$(".drum").click(function() {
  if(level > 0){
  var userChosenDrum = $(this).attr("id");
  userDrumPattern.push(userChosenDrum);
  playSound(userChosenDrum);
  animatePress(userChosenDrum);
  checkAnswer(userDrumPattern.length - 1);
}});

//Check user action + next step
function checkAnswer(currentLevel) {
  if (userDrumPattern[currentLevel] === gamePattern[currentLevel]) {
    if (currentLevel === gamePattern.length - 1) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").html("Guitar Solo 🎸 </br> Press Any Key to Encore");

    startOver();
  }
}
// game generated sequence
function nextSequence() {
  userDrumPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 7);
  var randomChosenDrum = drumKeys[randomNumber];
  gamePattern.push(randomChosenDrum);

  $("#" + randomChosenDrum).fadeIn(100).fadeOut(100).fadeIn(100);
  //Might need to add in background color
  playSound(randomChosenDrum);
}
//sound + visual effects
function playSound(name) {
  var drumSound = new Audio("whiplash-styles/drum-sounds/" + name + ".mp3");
  drumSound.play();
}

function animatePress(currentDrum) {
  $("#" + currentDrum).addClass("pressed");
  setTimeout(function() {
    $("#" + currentDrum).removeClass("pressed");
  }, 100);
}
//Reset Game
function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
}
