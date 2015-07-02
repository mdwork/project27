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

            $('.bg-popup').on('click', function () {
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
            btn1 = $('.btn-popup-full-form-js'),
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

    /*popup for video*/
    $('.wrap-iframe').on('click', function(){
        $('body').append('<div class="bg-popup-video"></div>');

        var currentVideo = $(this).find('iframe').clone();

        $('.bg-popup-video').append(currentVideo).fadeIn(300);

        $('.bg-popup-video').on('click', function(){
            $(this).fadeOut(300).remove();
        });
    });


    /*Slider parametr*/
    var options = {
        $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
        $AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
        $SlideDuration: 300,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
        $SlideWidth: 316,                                   //[Optional] Width of every slide in pixels, default value is width of 'slides' container
        //$SlideHeight: 150,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
        $SlideSpacing: 23, 					                //[Optional] Space between each slide in pixels, default value is 0
        $DisplayPieces: 4,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,                              //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
            $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
            $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
            $SpacingX: 0,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
            $SpacingY: 0,                                   //[Optional] Vertical space between each item in pixel, default value is 0
            $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
        },

        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        }
    };

    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizes
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1340));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});