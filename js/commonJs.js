$(document).ready(function(){
    var flag = true;

    $(".btn-toggle-js").on('click', function () {
        if(flag) {
            flag = false;

            $(this).parent().parent().find('.tbl-toggle').slideToggle(function () {
                flag = true;
            });
        }
    });
});