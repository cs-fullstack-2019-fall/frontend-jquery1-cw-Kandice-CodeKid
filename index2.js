// $('#middle_pic').on("load",function () {
//     setInterval(function () {
//
//     })
// });

function blink(){
    $("#middle_pic").animate({"opacity": 0}, 400 ).animate({"opacity": 1}, 400 );
}
$(document).ready(function(){
    setInterval(blink, 2000);
});



// function blink() {
//     $("#middle_pic").animate({
//         "opacity": 0
//     }, 400).animate({
//         "opacity": 1
//     }, 400);
// }
//
// var blinkInterval;
// var pauseInterval;
// var blinking = true;
//
// $(document).ready(function () {
//     blinkInterval = setInterval(blink, 500);
//     pauseInterval = setInterval(toggleBlink, 2000);
// });
//
// function toggleBlink() {
//     if (blinking) {
//         clearInterval(blinkInterval);
//         blinking = false;
//     } else {
//         blinkInterval = setInterval(blink, 500);
//         blinking = true;
//     }
// }