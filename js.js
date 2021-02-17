
let optionWidth = $(".options").outerWidth();
$(".option-container").css("left",-optionWidth);

$(".option-container span").click(function(){
let currentLeft =    $(".option-container").css("left"); //gettr
console.log(currentLeft);
if(currentLeft == "0px"){
    $(".option-container").css({
        
        transition:"all 1s"
    })
}else{
    $(".option-container").css({
        left:0,
        transition:"all 1s"
    })
}
})

$(".option-container i").click(function(){
let currentLeft =    $(".option-container").css("left"); //gettr
console.log(currentLeft);
if(currentLeft == "0px"){
    $(".option-container").css({
        left:-optionWidth,
        transition:"all 1s"
    })
}else{
    $(".option-container").css({
        
        transition:"all 1s"
    })
}
})

//اختصرت الكود كله فى دول تمام كدا
$(".card-header").click(function(){
    var x = $(this).next().height();
    $(".card-body").slideUp();(1000);
    var y = $(this).next().height();
    if(x === y){
        $(this).next().slideToggle();(1000);
    }
})



function countdown(){
				var now = new Date();
                var target = new Date(2026, 9 ,15);
                //console.log(target)
				var present = now.getTime();
				var ttime = target.getTime();
                var total = ttime - present;
                //console.log(total)
                // console.log(present)
                // console.log(ttime)
                
				var s = Math.floor(total / 1000);
                var m = Math.floor(s / 60);
                //console.log(m)
                var h = Math.floor(m / 60);
                // console.log(h)
                var d = Math.floor(h / 24)-30;
                
				h %= 24;
				m %= 60;
                s %= 60;
                
				document.getElementById("d").innerHTML = "<h2>"+  d + " D"+"</h2>";
				document.getElementById("h").innerHTML = "<h2>"+  h + " h"+"</h2>";
				document.getElementById("m").innerHTML = "<h2>"+  m + " m"+"</h2>";
                document.getElementById("s").innerHTML = "<h2>"+  s + " s"+"</h2>";
                
				setTimeout(countdown, 1000);
}

countdown();







var maxLength = 100;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#char').text(textlen);
});
