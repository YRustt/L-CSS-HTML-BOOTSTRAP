
$(document).ready(function() {
    $(".ticket").click(function() {
        window.location = $(this).data("href");
    });
});
