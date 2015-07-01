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

                setTimeout(function(){
                    popup.find('.wrap-form').show();
                    popup.find('.success-message').hide();
                }, 300);
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

        function sendMail(form, name, tell, mail, message) {
            var flag = false;

            form.on('click', function (e) {
                e.preventDefault();

                var nameUser = name,
                    tellUser = tell,
                    mailUser = mail,
                    messageUser = message;

                if(name != undefined) {
                    var nameUserVal = nameUser.val();
                }
                if(tell != undefined) {
                    tellUserVal = tellUser.val();
                }
                if(mail != undefined) {
                    var mailUserVal = mailUser.val();
                }
                if(message != undefined) {
                    var messageUserVal = messageUser.val();
                }


                function checkField($field) {
                    $field.on('keydown', function () {
                        $field.css('border-color', '#7b7b7b');

                        flag = true;
                    });
                }

                if (nameUserVal == '' || nameUserVal == ' ') {
                    nameUser.css('border-color', '#f00');
                    flag = false;

                    checkField(nameUser);
                }
                else {
                    flag = true;
                }
                if (tellUserVal == '' || tellUserVal == ' ') {
                    tellUser.css('border-color', '#f00');
                    flag = false;

                    checkField(tellUser);
                }
                else {
                    flag = true;
                }

                if (flag) {
                    $.ajax({
                        url: 'form.php',
                        type: 'POST',
                        data: {nameUser: nameUserVal, tellUser: tellUserVal, mailUser: mailUserVal, messageUser: messageUserVal },
                        success: function (data) {
                            if (data) {
                                form.hide();
                                $('.wrap-form').hide();

                                form.fadeIn(500);
                                $('.success-message').show();

                                nameUserVal = nameUser.val('');
                                tellUserVal = tellUser.val('');
                            }
                        }
                    });
                }
            });
        }

        var form1 = $('#form1'),
            form2 = $('#form2'),
            name1 = $('#name1'),
            name2 = $('#name2'),
            tell1 = $('#tell1'),
            tell2 = $('#tell2');

        sendMail(form1, name1, tell1);
        sendMail(form2, name2, tell2);
    });

    /*Mask tell*/
    $("#phone-mask").mask("+7 (999) 999-99-99");
});