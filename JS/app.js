$(function () {

    // filter category

    let filter = $("[data-filter]");

    filter.on('click', function (event) {
        event.preventDefault();

        let category = $(this).data('filter');

        if(category == 'all') {
            $('[data-cat]').removeClass('hide')
        } else {
            $('[data-cat]').each(function() {

                let itemCat = $(this).data('cat');

                if(itemCat != category) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            })
        }
    })

    // modals

    const modalCall = $('[data-modal]');

    modalCall.on('click', function(event) {
        event.preventDefault();
        
        let modalId = $(this).data('modal');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find('.modal__dialog').css({
                transform: 'rotateX(0)'
            })
        }, 200)

        $('[data-slider="slick"]').slick(setPosition)
    });

    // close modals
    const modalClose = $('[data-close]');

    modalClose.on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $('body').removeClass('no-scroll')
        }, 200)

    });

    // close modals 
    $('.modal').on('click', function() {
        let $this = $(this);
        $this.find('.modal__dialog').css({
            transform: 'rotateX(90deg)'
        });

        setTimeout(function() {
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
        }, 200)
        
    });

    $('.modal__dialog').on('click', function(event) {
        event.stopPropagation();
    });

    // Slider: https://kenwheeler.github.io/slick/
    
    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.slickNext').on('click', function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick('slickNext')
    })

    $('.slickPrev').on('click', function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick('slickPrev')
    })

    // Menu Burger =================

    const navToggle = $('#navToggle');
    const Nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        Nav.toggleClass('show');
    })
  
})