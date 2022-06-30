$(document).ready(function(){
    //---slideUp/slideDownここから-------------------------------------------------------------------------------
        $('.header_nav-list').each(function(){
            $(this).mouseenter(function(){
                $(this).find('.header_nav-list-sub').slideDown(200);
            }).mouseleave(function(){
                $(this).find('.header_nav-list-sub').slideUp(100);
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
                var mylstSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub').children('.header_nav-list-sub-link');
                var myNavlst =  $(this).prev('.header_nav-list');
                if($(this).hasClass('opened-slide')){ 
                    myNavlst.addClass('opened-lisb');
                    myNavSub.animate({top:0}, 1000);
                    mylstSub.animate({opacity:1, lineHeight:'4em'},1000, function(){myNavSub.addClass('opened-list');});
                   
                } else {
                    myNavlst.removeClass('opened-lisb');
                    myNavSub.animate({top:'-490px'}, 1000);
                    mylstSub.animate({opacity:0, lineHeight: 0},1000, function(){myNavSub.removeClass('opened-list');});
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
                var mylstSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub').children('.header_nav-list-sub-link');
                var myNavlst =  $(this).prev('.header_nav-list');
                if($(this).hasClass('opened-slide')){ 
                    myNavlst.addClass('opened-lisb');
                    myNavSub.animate({top:0}, 1000);
                    mylstSub.animate({opacity:1, lineHeight:'4em'},1000, function(){myNavSub.addClass('opened-list');});
                   
                } else {
                    myNavlst.removeClass('opened-lisb');
                    myNavSub.animate({top:'-490px'}, 1000);
                    mylstSub.animate({opacity:0, lineHeight: 0},1000, function(){myNavSub.removeClass('opened-list');});
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
