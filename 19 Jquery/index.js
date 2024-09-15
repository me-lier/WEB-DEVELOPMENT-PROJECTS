
$("body").keypress(function(event){
    $("h1").text(event.key);
    $("h1").addClass("title");
})

$("h1").on("mouseover", function(){
    $("h1").css("color","red");
})

$("h1").on("click", function(){
    $("h1").css("color","black");
})