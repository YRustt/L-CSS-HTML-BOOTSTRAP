
$(document).ready(function() {
    $(".ticket").click(function() {
        window.location = $(this).data("href");
    });
});

$(".right-ul li").click(function() {
    $("#search").css("visibility", "visible");
});

$("#close").click(function() {
    $("#search").css("visibility", "hidden");
});
