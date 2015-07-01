$(document).ready(function(){
    /*menu*/
    var flag = true;

    $(".btn-toggle-js").on('click', function () {
        if(flag) {
            flag = false;

            $(this).parent().parent().find('.tbl-toggle').slideToggle(function () {
                flag = true;
            });
        }
    });

    /*Load form*/
    $('body').append('<div class="place-for-popup"></div>');
    $('.place-for-popup').load('popup.html .wrap-all-form', function(){
        function popup(popup, btnClick) {
            btnClick.on('click', function (e) {
                e.preventDefault();

                popup.fadeIn(300);
                $('.bg-popup').fadeIn(300);
            });

            $('.bg-popup').on('click', function (e) {
                e.stopPropagation();

                popup.fadeOut(300);
                $('.bg-popup').fadeOut(300);
            });

            popup.on('click', function (e) {
                e.stopPropagation();
            });
        }

        var popup1 = $('#popup1'),
            popup2 = $('#popup2'),
            btn1 = $('#btn-popup1-js'),
            btn2 = $('#btn-popup2-js');

        popup(popup1, btn1);
        popup(popup2, btn2);
    });

    /*Mask tell*/
    $("#phone-mask").mask("+7 (999) 999-99-99");
});