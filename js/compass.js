$(function(){

    // WOW
    new WOW().init();

	// Waves
	Waves.displayEffect();

	// DownCount
	$('.countdown').downCount({
        date: '01/04/2016 12:00:00' // mm/dd/yyyy
    });

	// Scroll top
	$(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-to-top a').fadeIn(200);
        } else {
            $('.scroll-to-top a').fadeOut(200);
        }
    });

    $('.scroll-to-top a').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    // BootstrapValidator
    $('#contact form').bootstrapValidator({
        container: 'tooltip',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'Name is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email is required'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'Message is required'
                    }
                }
            }
        }
    });

});
