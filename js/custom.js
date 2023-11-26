$('.owl-one').owlCarousel({
    smartSpeed:500,
    slideSpeed: 500,
    paginationSpeed: 500,
    rewind: false,
    autoRefresh: false,
    margin: 10,
    loop: true,
    autoWidth: true,
    autoplay: false,
    stagePadding: 10,
    nav: true,
    lazyLoad: true,
    navText:["<div class='nav-btn prev-slide'>Предишен</div>","<div class='nav-btn next-slide'>Следващ</div>"],


    slideTransition: 'linear',
    responsiveBaseElement: 'body',
    responsive: {
        0: {
            items: 2,
            loop:true,
            smartSpeed:500,
            slideSpeed: 500,
            paginationSpeed: 500,
            lazyLoad: true,
            startPosition: 2,
        },
        600: {
            items: 3,
            loop:true,
            smartSpeed:500,
            slideSpeed: 500,
            paginationSpeed: 500,
            lazyLoad: true,
            startPosition: 2,
            onResize: function() {
                owl.trigger('refresh.owl.carousel');
            }
        },
        1000: {
            items: 5.5,
            loop: true,
            smartSpeed:500,
            slideSpeed: 500,
            paginationSpeed: 500,
            lazyLoad: true,
            startPosition: 2,
            touchDrag  : false,
            mouseDrag  : false,
        }
    }
});


var brandSlider = $('.owl-one');

function brandSliderClasses() {
    brandSlider.each(function () {
        var total = $(this).find('.owl-item.active').length;
        $(this).find('.owl-item').removeClass('firstactiveitem');
        $(this).find('.owl-item').removeClass('lastactiveitem');
        $(this).find('.owl-item.active').each(function (index) {
            if (index === 0) {
                $(this).addClass('firstactiveitem')
            }
            if (index === total - 1 && total > 1) {
                $(this).addClass('lastactiveitem')
            }
        })
    })
}

brandSliderClasses();
brandSlider.on('translated.owl.carousel', function (event) {
    brandSliderClasses()
});

// second slider for contacts
$('.owl-two').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    autoplay: false,
    stagePadding: 10,
    nav: true,
    navText:["<div class='nav-btn prev-slide'>Предишен</div>","<div class='nav-btn next-slide'>Следващ<i class='arrow right'></i></div>"],

    // autoHeight: true,

    smartSpeed: 1000,
    slideTransition: 'linear',
    responsiveBaseElement: 'body',
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,
            autoWidth: false,
        },
        700: {
            items: 3,
            touchDrag  : false,
            mouseDrag  : false,
        },
        1000: {
            items: 3,
            touchDrag  : false,
            mouseDrag  : false,
        }
    }
});

var brandSliderTwo = $('.owl-two');

function brandSliderClassesTwo() {
    brandSliderTwo.each(function () {
        var total = $(this).find('.owl-item.active').length;
        $(this).find('.owl-item').removeClass('firstactiveitem');
        $(this).find('.owl-item').removeClass('lastactiveitem');
        $(this).find('.owl-item.active').each(function (index) {
            if (index === 0) {
                $(this).addClass('firstactiveitem')
            }
            if (index === total - 1 && total > 1) {
                $(this).addClass('lastactiveitem')
            }
        })
    })
}

brandSliderClassesTwo();
brandSliderTwo.on('translated.owl.carousel', function (event) {
    brandSliderClassesTwo()
});

/*
NAV BAR
 */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// Mobile nav
function myMobileNav() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Loader
var myLoader;

function myLoading() {
    myLoader = setTimeout(showPage, 100);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("side-ground").style.opacity = 1;
}

// RELOADS WEBPAGE WHEN MOBILE ORIENTATION CHANGES
$(window).bind('orientationchange', function (event) {
    this.location.reload()
});
// to be triggered only for desktops
// $(window).on('resize',function(){location.reload();});
$( window ).resize(function() {
    if($(window).width()>1199) {
        this.location.reload();
    }
})
