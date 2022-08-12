function scriptAll(){
    $('*').attr('style', '');
    if( $('.js-slide').length > 0 ){
        for( let i = $('.js-slide').length; i > 0 ; i-- ){
            $('.js-slide').remove();
        }
    }
    if( $('.icon-hamburger--wrap').length > 0 ){
        $('.icon-hamburger--wrap').remove;
        for( let i = $('.icon-hamburger--wrap').length; i > 0; i-- ){
            $('.icon-hamburger--wrap').remove();
        }
        for( let i = $('.icon-plsmns').length; i > 0 ; i-- ){
            $('.icon-plsmns').remove();
        }
    }
    if( $('.js-hamburger--wrap--open').length    > 0
     || $('.js-hamburger__parent--open').length  > 0
     || $('.js-hamburger__toplist--open').length > 0
     || $('.js-hamburger__sublist--open').length > 0 ){
        for( let i = $('.js-hamburger--wrap--open').length; i > 0; i-- ){
            $('.js-hamburger--wrap--open').removeClass('js-hamburger--wrap--open');
        }
        for( let i = $('.js-hamburger__parent--open').length; i > 0; i-- ){
            $('.js-hamburger__parent--open').removeClass('js-hamburger__parent--open');
        }
        for( let i = $('.js-hamburger__toplist--open').length; i > 0; i-- ){
            $('.js-hamburger__toplist--open').removeClass('js-hamburger__toplist--open');
        }
        for( let i = $('.js-hamburger__sublist--open').length; i > 0; i-- ){
            $('.js-hamburger__sublist--open').removeClass('js-hamburger__sublist--open');
        }
        for( let i = $('.icon-plsmns').length; i > 0; i-- ){
            $('.icon-plsmns').remove();
        }
    }
    let touch_event = window.ontouchstart;
    let touch_points = navigator.maxTouchPoints;
    if( touch_event !== undefined && 0 < touch_points ) {
        // タッチ対応端末の処理が入る
        myEvent = 'click';
        ohEvent = 'click';
        levEvent= 'touchend touchmove';

    } else {
        // タッチ非対応端末の処理が入る
        myEvent = 'click';
        ohEvent = 'mouseover';
        levEvent= 'mouseleave';
    }
};
function hamburgerMenu(){
    $('nav').prepend("<span class='icon-hamburger'></span>");
    $('.icon-hamburger').wrap('<div class="icon-hamburger--wrap"></div>');
    $('nav').find('a:not(:only-child)').each(function(){$(this).append("<span class='icon-plsmns'></span>")});
    $('nav:first-of-type > ul:first-of-type').addClass('js-hamburger__toplist');
    $('nav a:first-of-type:not(:only-child)').addClass('js-hamburger__sublist');
    $('nav a:first-of-type:not(:only-child)').next().addClass('js-hamburger__btmlist');
    $('nav a:last-child').addClass('js-hamburger__sublist');

    $('.icon-hamburger--wrap').on(myEvent, function(){
        $(this).toggleClass('js-hamburger--wrap--open');
        if($(this).hasClass('js-hamburger--wrap--open')){
            $(this).children('.icon-hamburger').addClass('icon-hamburger--open');
            $(this).next().addClass('js-hamburger__toplist--open');
        } else {
            $(this).children('.icon-hamburger').removeClass('icon-hamburger--open');
            $(this).next().removeClass('js-hamburger__toplist--open');
        }
    });
    if( ohEvent == 'click' ){
        $('.js-hamburger__sublist').parent().each(function(){
            $(this).off(ohEvent);
            $(this).on(ohEvent, function(){
                $(this).toggleClass('js-hamburger__parent');
                if($(this).hasClass('js-hamburger__parent')){
                    $(this).addClass('js-hamburger__parent--open');
                    $(this).find('.js-hamburger__btmlist').addClass('js-hamburger__btmlist--open');
                    $(this).find('.js-hamburger__sublist').addClass('js-hamburger__sublist--open');
                    $(this).find('.icon-plsmns').addClass('js-plsmns--mns');
                    $('.js-hamburger__parent').not(this).removeClass('js-hamburger__parent--open');
                    $('.js-hamburger__btmlist--open').not($(this).find('.js-hamburger__btmlist')).removeClass('js-hamburger__btmlist--open')
                    $('.js-plsmns--mns').not($(this).find('.icon-plsmns')).removeClass('js-plsmns--mns');
                    $('.js-hamburger__sublist').not($(this).find('.js-hamburger__sublist')).removeClass('js-hamburger__sublist--open');
                } else {
                    $(this).removeClass('js-hamburger__parent--open');
                    $(this).find('.js-hamburger__btmlist').removeClass('js-hamburger__btmlist--open');
                    $(this).find('.icon-plsmns').removeClass('js-plsmns--mns');
                    $(this).find('.js-hamburger__sublist').removeClass('js-hamburger__sublist--open');
                }
            });
        });
    } else {
        $('.js-hamburger__sublist').parent().each(function(){
            $(this).off(ohEvent);
            $(this).on(ohEvent, function(){
                $(this).find('.js-hamburger__btmlist').addClass('js-hamburger__btmlist--open');
                $(this).find('.icon-plsmns').addClass('js-plsmns--mns');
                $('.js-hamburger__btmlist--open').not($(this).find('.js-hamburger__btmlist')).removeClass('js-hamburger__btmlist--open')
                $('.js-plsmns--mns').not($(this).find('.icon-plsmns')).removeClass('js-plsmns--mns');
            });
            $(this).on(levEvent, function(){
                $(this).find('.js-hamburger__btmlist').removeClass('js-hamburger__btmlist--open');
                $(this).find('.icon-plsmns').removeClass('js-plsmns--mns');
            });
        });

        $('.js-hamburger__sublist').each(function(){
            $(this).off(ohEvent);
            $(this).on( ohEvent, function(){
                $(this).addClass('js-hamburger__sublist--open');
                $('.js-hamburger__parent--open').removeClass('js-hamburger__parent--open js-hamburger__btmlist');
            });
            $(this).off(levEvent);
            $(this).on( levEvent, function(){
                $(this).removeClass('js-hamburger__sublist--open');
            });
        });
    }
};

function scriptRT(){
    if(window.matchMedia("(min-width: 1201px)").matches){
        //---slideUp/slideDownここから-------------------------------------------------------------------------------
        let headerNavList = $('nav a:not(:only-child)').parent();
        headerNavList.each(function(){
            let hedrNavLstSub = $(this).children().eq(1);
            $(this).off( ohEvent );
            $(this).on( ohEvent,
                function(){
                    $('.js-slide').stop().slideUp(0).removeClass('js-slide');
                    hedrNavLstSub.addClass('js-slide');
                    $(this).find('.js-slide').stop().slideDown(200);
                }
            );
            $(this).on( levEvent ,
                function(){
                    $(this).find('.js-slide').stop().slideUp(0).removeClass('js-slide');
                }
            );
        });
        //---ここまでslideUp/slideDown-------------------------------------------------------------------------------
    } else {
        hamburgerMenu();
    }
};


$(document).ready(function(){
    scriptAll();
    scriptRT();
});

$(window).on('load resize', function(){
    scriptAll();
    scriptRT();
});
