$(document).ready(function(){
    //---slideUp/slideDownここから-------------------------------------------------------------------------------
        $('.header_nav-list').each(function(){
            $(this).mouseenter(function(){
                $(this).find('.header_nav-list-sub').slideDown(200).removeClass('close');
            }).mouseleave(function(){
                $(this).find('.header_nav-list-sub').slideUp(100).addClass('close');
            });
        });
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
                $('.header_nav-wrap').css({top:'70px'}).slideDown().css({display:'flex'}).addClass('opened-wrap');
            } else {
                $(this).unwrap();
                $('.header_nav-wrap').css({top:'35px'}).slideUp().removeClass('opened-wrap');
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                var myNavSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub');
                if($(this).hasClass('opened-slide')){ 
                    myNavSub.css({top:0}).slideDown().addClass('opened-list');
                    $(this).prev('.header_nav-list').addClass('opened-lisb');
                } else {
                    myNavSub.css({top:0}).slideUp().removeClass('opened-list');
                    $(this).prev('.header_nav-list').removeClass('opened-lisb');    
                }
            });
        });
    } else {
        $('.main_window-wrap').append($('.main_window-logo'));
        $('.icon_hamburger').remove;
        $('.main_window-logo-wrap').remove();
        if($('.ico_plsmns').length < 1){
            $('.ico_plsmns').remove();
        }
    }
});
$(window).resize(function(){
    if (window.matchMedia("(max-width: 1220px)").matches) {
        $('.header_nav').prepend("<div class='icon_hamburger'></div>");
        $('.header_nav-list').after("<li class='ico_plsmns'></li>");
        $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
        $('.main_window').after($('.main_window-logo-wrap'));
        $('.icon_hamburger').on('touchstart', function(){
            $(this).toggleClass('opened-sub');
            if($(this).hasClass('opened-sub')){
                $('.opened-sub').wrap('<div class="icon_hamburger-wrap"></div>');
                $('.header_nav-wrap').css({top:'70px'}).slideDown().css({display:'flex'}).addClass('opened-wrap');
            } else {
                $(this).unwrap();
                $('.header_nav-wrap').css({top:'35px'}).slideUp().removeClass('opened-wrap');
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                var myNavSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub');
                if($(this).hasClass('opened-slide')){ 
                    myNavSub.slideDown().addClass('opened-list');
                    $(this).prev('.header_nav-list').addClass('opened-lisb');
                } else {
                    myNavSub.slideUp().removeClass('opened-list');
                    $(this).prev('.header_nav-list').removeClass('opened-lisb');    
                }
            });
        });
    } else {
        $('.main_window-wrap').append($('.main_window-logo'));
        $('.icon_hamburger').remove;
        $('.main_window-logo-wrap').remove();
        if($('.ico_plsmns').length < 1){
            $('.ico_plsmns').remove();
        }
    }
});
