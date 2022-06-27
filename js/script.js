$(document).ready(function(){
    //---slideUp/slideDownここから-------------------------------------------------------------------------------
    //$('.header_nav-list').each(function(){
    //    $(this).mouseenter(function(){
    //        $(this).find('.header_nav-list-sub').slideDown(200).removeClass('close');
    //    }).mouseleave(function(){
    //        $(this).find('.header_nav-list-sub').slideUp(100).addClass('close');
    //    });
    //});
    //---ここまでslideUp/slideDown-------------------------------------------------------------------------------
    if (window.matchMedia("(max-width: 1220px)").matches) {
        $('.header_nav').prepend("<div class='icon_hamburger'></div>");
        $('.header_nav-list').after("<li class='ico_plsmns'></li>");
        $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
        $('.main_window').after($('.main_window-logo-wrap'));
        $('.icon_hamburger').on('touchstart', function(){
            $(this).toggleClass('opened-sub');
            if($(this).hasClass('opened-sub')){
                $('.opened-sub').wrap('<div class="icon_hamburger-wrap"></div>');
            } else {
                $(this).unwrap();
            }
            $('.header_nav-wrap').toggleClass('opened-wrap');
        });
    
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                $(this).prev('.header_nav-list').children('.header_nav-list-sub').toggleClass('opened-list');
                $(this).prev('.header_nav-list').toggleClass('opened-lisb');
            });
        });
    } else {
    }
});
$(window).resize(function(){
    $(function() {
        if (window.matchMedia("(max-width:  1220px)").matches) {
            if($('.icon_hamburger').length < 1){
                $('.header_nav').prepend("<div class='icon_hamburger'></div>");
                $('.header_nav-list').after("<li class='ico_plsmns'></li>");
                $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
                $('.main_window').after($('.main_window-logo-wrap'));   
                $('.icon_hamburger').on('touchstart', function(){
                    $(this).toggleClass('opened-sub');
                    if($(this).hasClass('opened-sub')){
                        $('.opened-sub').wrap('<div class="icon_hamburger-wrap"></div>');
                    } else {
                        $(this).unwrap();
                    }
                    $('.header_nav-wrap').toggleClass('opened-wrap');
                });
            
                $('.ico_plsmns').each(function(){
                    $(this).on('touchstart', function(){
                        $(this).toggleClass('opened-slide');
                        $(this).prev('.header_nav-list').children('.header_nav-list-sub').toggleClass('opened-list');
                        $(this).prev('.header_nav-list').toggleClass('opened-lisb');
                    });
                });
            }
        } else {
        }
    });
});
