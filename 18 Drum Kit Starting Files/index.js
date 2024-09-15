for(let i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // this.style.color = "white";
        var arr = ["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"]
        var audio = new Audio("./sounds/"+arr[i]+".mp3"); 
        audio.play();
    });
}

document.addEventListener("keypress", function(event){
    var word = ["w","a","s","d","j","k","l"];
    var i;
    if(event.key==="w"){
        i=0;
    }
    if(event.key==="a"){
        i=1;
    }
    if(event.key==="s"){
        i=2;
    }
    if(event.key==="d"){
        i=3;
    }
    if(event.key==="j"){
        i=4;
    }
    if(event.key==="k"){
        i=5;
    }
    if(event.key==="l"){
        i=6;
    }
    var arr = ["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"]
    var audio = new Audio("./sounds/"+arr[i]+".mp3"); 
    audio.play();
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey){
    var active = document.querySelector("."+currentKey);
    active.classList.add("pressed");
    setTimeout( function(){
        active.classList.remove("pressed");
    }, 3000);
}