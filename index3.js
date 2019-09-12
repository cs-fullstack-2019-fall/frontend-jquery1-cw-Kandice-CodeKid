$('button').click(function () {
    // alert("myElement was clicked!");
    $('tr:nth-child(odd)').css("background-color","grey");
    // e.preventDefault();
});

// tr:nth-child(odd) {
//     background-color: grey;
// }

// $(document).mouseover(function() {
//     $("p:nth-of-type(odd)").css(
//         "color", "red");