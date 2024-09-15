var userPattern = [];
var gamePattern = [];
var i=0;
var buttonColors = ["green", "red", "yellow", "blue"];
function nextSequence(){
    var r = Math.floor( Math.random() * 4 ) + 1;
    gamePattern.push(buttonColors[r]);
    i++;
    $("#level-title").text("Level " + i);
    $("#"+buttonColors[r]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function checkAnswer(){
    var last = userPattern.length-2;
    if(userPattern[last] === gamePattern[last]){
        return true;
    }else{
        return false;
    }
}

function answerLength(){
    if(userPattern.length == gamePattern.length){
        userPattern = [];
        nextSequence();
        return true;
    }
}

function reset(){
    i=0;
    userPattern = [];
    gamePattern = [];
}

for (let i=0; i<4; i++){
    $('#'+buttonColors[i]).on("click", function(){
        var audio = new Audio("./sounds/"+buttonColors[i]+".mp3");
        audio.play();
        setTimeout(function(){
            $("#"+buttonColors[i]).css("background-color",buttonColors[i]);
        }, 100);
        $("#"+buttonColors[i]).css("background-color","white");
        // $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

        userPattern.push(buttonColors[i]);
        if(checkAnswer()){
            answerLength();
        }else{
            reset();
            $("h1").text("Game Over, Press Any Key to Restart");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 1000);
            $("body").addClass("game-over");
            $("body").on("keypress", function(event){
                reset();
                nextSequence();
            })
    
        }
        
    })
}

$("body").on("keypress", function(event){
    if(event.key === "a" || event.key === "A"){
        reset();
        nextSequence();
    }
})