
$(document).ready(function () {
    // включаем tolltip у элемента
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    //Формируем запрос
    $(".modal-body").load("https://artart241.github.io img.d-block.w-100", function (response, status, request) {
        
    });

});

$("#btnSelect").click(function(e) {
    console.log($("option[selected]"));
});

