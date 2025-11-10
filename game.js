var buttonColours = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;
function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);

    userClickedPattern=[];

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("h1").text("Level :"+level);
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

$(document).on("keydown", function(){
  if (!started)
  {
    $("#level-title").text("Level : "+level);
    nextSequence();
    started=true;
  }
});

$(".btn").on("click",function(){
    var userChosenColour =$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
  $("#"+currentColour).removeClass("pressed")
}, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        var count=0;
        for(var i=0;i<gamePattern.length;i++){
            if(gamePattern[i] === userClickedPattern[i]){
                count++;
            }
        }

        if(count===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else{
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();

        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },1000);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    };
}

function startOver(){
    level=0
    started=false;
    gamePattern=[];
}