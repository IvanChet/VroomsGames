$(function() {
    $('[data-fancybox]').fancybox({
        youtube : {

        },
        vimeo : {
            color : 'f00'
        }
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
            const $form = $(this);
            let err = false;
            $form.addClass('sending');

            $('input', $form).each(function() {
                if ($(this).hasClass('error')) {
                    err = true;
                }
            });

            if (!err) {
                if (!$form.hasClass("successful")) return $.ajax({
                    type: "POST",
                    url: "/send.php",
                    data: $form.serialize(),
                    cache: !1,
                    success: function(t) {
                        //Success
                        $form.slideUp(500, function() {
                            $('input, textarea', $form).val('');
                        });

                        $form.next('.success-message').slideDown(500);

                        $form.addClass('successful');
                    }
                });
           } else {
                $form.removeClass('sending');
            }
    });

    $('.testing__btn').on('click', function() {
        var $active = $('.question.active'),
            $next = $active.next('.question');

        if ($next.length) {
            $active.removeClass('active').slideUp(300);
            $next.addClass('active').slideDown(300);
        }
    });

    flatpickr.defaultConfig.animate = window.navigator.userAgent.indexOf('MSIE') === -1;
    flatpickr(".flatpickr");

    var examples = document.querySelectorAll(".flatpickr");

    var configs = {
        datetime: {
            enableTime: true,
            dateFormat: "d-m-Y H:i",
            time_24hr: true,
            minDate: "today",
            locale: 'ru',
            firstDayOfWeek: 2
        },

        altinput: {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d"
        },

        "minDate": {
            minDate: "2020-01"
        },

        minDateToday: {
            minDate: "today"
        },

        "maxDateStr": {
            dateFormat: "d.m.Y",
            maxDate: "15.12.2017"
        },

        minMaxDateTwoWeeks: {
            minDate: "today",
            maxDate: new Date().setDate(new Date().getDate() + 14)
        },

        disableSpecific: {
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9) ]
        },

        disableRange: {
            onReady: function () {
                this.jumpToDate("2025-04")
            },
            disable: [
                {
                    from: "2025-04-01",
                    to: "2025-05-01"
                },
                {
                    from: "2025-09-01",
                    to: "2025-12-01"
                }
            ]
        },

        disableFunction: {
            locale: {
                firstDayOfWeek: 2
            },
            disable: [
                function(date) {
                    // return true to disable

                    return (date.getDay() === 0 || date.getDay() === 6);

                }
            ]
        },

        enableSpecific: {
            onReady: function () {
                this.jumpToDate("2025-03")
            },
            enable: ["2025-03-30", "2025-05-21", "2025-06-08", new Date(2025, 8, 9) ]
        },

        enableRange: {
            onReady: function () {
                this.jumpToDate("2025-04")
            },
            enable: [
                {
                    from: "2025-04-01",
                    to: "2025-05-01"
                },
                {
                    from: "2025-09-01",
                    to: "2025-12-01"
                }
            ]
        },

        enableFunction: {
            enable: [
                function(date) {
                    // return true to enable

                    return (date.getMonth() % 2 === 0 && date.getDate() < 15);

                }
            ]
        },

        multiple: {
            mode: "multiple",
            dateFormat: "Y-m-d",
        },

        multipleCustomConjunction: {
            mode: "multiple",
            dateFormat: "Y-m-d",
            conjunction: " :: "
        },

        multiplePreload: {
            mode: "multiple",
            dateFormat: "Y-m-d",
            defaultDate: ["2016-10-20", "2016-11-04"]
        },

        range: {
            mode: "range"
        },

        rangeDisable:{
            mode: "range",
            minDate: "today",
            dateFormat: "Y-m-d",
            disable: [
                function(date) {
                    // disable every multiple of 8
                    return !(date.getDate() % 8);
                }
            ]
        },

        rangePreload: {
            mode: "range",
            dateFormat: "Y-m-d",
            defaultDate: ["2016-10-10", "2016-10-20"],
        },

        timePicker: {
            enableTime: true,
            noCalendar: true,
        },

        timePickerMinMaxHours: {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            minDate: "16:00",
            maxDate: "22:30",
        },

        "timePicker24": {
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
        },

        "timePickerPreloading": {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            defaultDate: "13:45"
        },

        minTime: {
            enableTime: true,
            minTime: "09:00"
        },

        minMaxTime: {
            enableTime: true,
            minTime: "16:00",
            maxTime: "22:00"
        },

        inline: {
            inline: true
        },
        weekNumbers: {
            weekNumbers: true,

        },

        strap: {
            wrap: true
        },

        onDayCreate: {
            onDayCreate: function(dObj, dStr, fp, dayElem){
                // Utilize dayElem.dateObj, which is the corresponding Date

                // dummy logic
                if (Math.random() < 0.15)
                    dayElem.innerHTML += "<span class='event'></span>";

                else if (Math.random() > 0.85)
                    dayElem.innerHTML += "<span class='event busy'></span>";
            }
        },

        confirmDate: {
            "enableTime": true,
        },
        weekSelect: {
            "onChange": [function(){
                // extract the week number
                // note: "this" is bound to the flatpickr instance
                var weekNumber = this.selectedDates[0]
                    ? this.config.getWeek(this.selectedDates[0])
                    : null;

                console.log(weekNumber);
            }]
        },
        rangePlugin: {
        },

        minMaxTimePlugin: {
            enableTime: true,
            minDate: "2025",
            plugins: [
            ]
        }
    }

    for (var i = 0; i < examples.length; i++) {
        flatpickr(examples[i], configs[examples[i].getAttribute("data-id")] || {});
    }
});

$( document ).ready(function() {
    $('.btnNext button').click(function(){
        $('.oneWindow').slideUp('slow', function() {
            $('.twoWindow').slideDown('slow');
        });
    });
});

$(function() {
    var values = [1, 5, 10];

    var slider = $("#polzunok").slider({
        min : values[0],
        max : values[2],
        slide: function(event, ui) {
            var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
            var includeRight = event.keyCode != $.ui.keyCode.LEFT;
            slider.slider('option', 'value', findNearest(includeLeft, includeRight, ui.value));
            return false;
        }
    });
    function findNearest(includeLeft, includeRight, value) {
        var nearest = null;
        var diff = null;
        for (var i = 0; i < values.length; i++) {
            if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
                var newDiff = Math.abs(value - values[i]);
                if (diff == null || newDiff < diff) {
                    nearest = values[i];
                    diff = newDiff;
                }
            }
        }
        return nearest;
    }
});

$(function () {

    $('.md-trigger').on('click', function() {
        $('.md-modal').addClass('md-show');
    });

    $('.md-close').on('click', function() {
        $('.md-modal').removeClass('md-show');
    });

});

$(function () {
    var btnPay = $('.btnBlock button');

    btnPay.on('click', function() {
        btnPay.removeClass('active');
        $(this).addClass('active');
    });
});


$(function () {
    var linkTable = $('.calendar td a');

    linkTable.on('click', function() {
        linkTable.removeClass('active');
        $(this).addClass('active');
    });
    var linkTable2 = $('.reservationTime td a');

    linkTable2.on('click', function() {
        linkTable2.removeClass('active');
        $(this).addClass('active');
    });
});

$(function () {
   var linkBackHome = $('#nav-home .linkBack');
   var linkNextHome = $('#nav-home .linkNext');
   var linkBacknProfile = $('#nav-profile .linkBack');
   var linkNextProfile = $('#nav-profile .linkNext');
   var linkBackContact = $('#nav-contact .linkBack');

    linkBackHome.on('click', function () {
        $('.twoWindow').slideUp('slow', function() {
            $('.oneWindow').slideDown('slow');
        });
    });
    linkNextHome.on('click', function () {
        $('#nav-home-tab').removeClass('active');
        $('#nav-profile-tab').addClass('active');
        $('#nav-home').removeClass('show active');
        $('#nav-profile').addClass('show active');
    });
    linkBacknProfile.on('click', function () {
        $('#nav-home-tab').addClass('active');
        $('#nav-profile-tab').removeClass('active');
        $('#nav-profile').removeClass('show active');
        $('#nav-home').addClass('show active');
    });
    linkNextProfile.on('click', function () {
        $('#nav-profile-tab').removeClass('active');
        $('#nav-contact-tab').addClass('active');
        $('#nav-profile').removeClass('show active');
        $('#nav-contact').addClass('show active');
    });
    linkBackContact.on('click', function () {
        $('#nav-contact-tab').removeClass('active');
        $('#nav-profile-tab').addClass('active');
        $('#nav-contact').removeClass('show active');
        $('#nav-profile').addClass('show active');
    });
});


$(function() {
    var creditly = Creditly.initialize(
        '.creditly-wrapper .expiration-month-and-year',
        '.creditly-wrapper .credit-card-number',
        '.creditly-wrapper .security-code',
        '.creditly-wrapper .card-type');

    $(".creditly-card-form .submit").click(function(e) {
        e.preventDefault();
        var output = creditly.validate();
        if (output) {
            // Your validated credit card output
            console.log(output);
        }
    });
});
