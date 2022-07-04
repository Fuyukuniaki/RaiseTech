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
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('.header_nav-list').after("<li class='ico_plsmns'></li>");
        $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');

        $('.main_window').after($('.main_window-logo-wrap'));
        $('.icon_hamburger').on('touchstart', function(){
            $(this).toggleClass('opened-sub');
            $('.icon_hamburger-wrap').toggleClass('opened-sub');
            if($('.icon_hamburger-wrap').hasClass('opened-sub')){
                document.querySelector('.icon_hamburger').animate([
                    { transform: 'rotate(0deg)'},
                    { transform: 'rotate(-45deg)'}],
                    200);
                $('.header_nav-wrap').addClass('opened-wrap');
                document.querySelector('.header_nav-wrap').animate([
                    { opacity: 0 , top:'-490px'},
                    { opacity: 1 , top: '25px' }],
                    600);
            } else {
                document.querySelector('.icon_hamburger').animate([
                    { transform: 'rotate(0deg)'},
                    { transform: 'rotate(-45deg)'}],
                    200);
                document.querySelector('.header_nav-wrap').animate([
                    { opacity: 1 , top: '25px' }],
                    { opacity: 0 , top:'-490px'},
                    600);
                $('.header_nav-wrap').removeClass('opened-wrap');
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                //let myNavSub = document.querySelector('.opened-slide').previousElementSibling.children[1];
                //let mylstSub = document.querySelector('.opened-slide').previousElementSibling.children[1].children[0];
                var myNavSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub');
                //var mylstSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub').children('.header_nav-list-sub-link');
                var myNavlst = $(this).prev('.header_nav-list');
                if($(this).hasClass('opened-slide')){ 
                    myNavSub.addClass('opened-list');
                    /*document.querySelector('.opened-list').animate([
                        { opacity: 0 },
                        { opacity: 1 }],
                        600);
                    myNavSub.animate([
                        { top:'-350px', opacity:0 },
                        { top: 0      , opacity:1 }],
                        100,
                        function(){
                            myNavSub.addClass('opened-list');
                        });*/
                    myNavlst.addClass('opened-lisb');
                } else {
                    myNavSub.removeClass('opened-list');
                    /*document.querySelector('.opened-list').animate([
                        { opacity: 1 },
                        { opacity: 0 }],
                        600);
                    document.querySelector('.opened-list').animate([
                        { top: 0      , opacity:0 },
                        { top:'-350px', opacity:1 }],
                        100,
                        function(){
                            myNavSub.removeClass('opened-list');
                        });*/
                        myNavlst.removeClass('opened-lisb');
                        myNavSub.removeClass('opened-list');    
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
/*
$(window).resize(function(){
    if (window.matchMedia("(max-width: 1220px)").matches) {
    $('.header_nav').prepend("<div class='icon_hamburger'></div>");
    $('.header_nav-list').after("<li class='ico_plsmns'></li>");
        $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
        $('.main_window').after($('.main_window-logo-wrap'));
        $('.icon_hamburger').on('touchstart', function(){
            $(this).toggleClass('opened-sub');
            $('.icon_hamburger-wrap').toggleClass('opened-sub');
            if($('.icon_hamburger-wrap').hasClass('opened-sub')){
                $('.icon_hamburger-wrap').animate([
                    { transform: 'rotate(0deg)'},
                    { transform: 'rotate(-90deg)'}],
                    100);
                $('.header_nav-wrap').css({top:'-490px'}).animate({opacity:1, top: '70px'},600,function(){$(this).css({display:'flex'}).addClass('opened-wrap');});
            } else {
                $('.icon_hamburger-wrap').animate([
                    { transform: 'rotate(0deg)'},
                    { transform: 'rotate(90deg)'}],
                    100);
                $('.header_nav-wrap').css({top:'35px'}).animate({opacity:0, top:'-490px'}, 300).removeClass('opened-wrap');
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
                    myNavSub.animate({top:0}, 600);
                    mylstSub.animate({opacity:1},600, function(){myNavSub.addClass('opened-list');});
                   
                } else {
                    myNavlst.removeClass('opened-lisb');
                    myNavSub.animate({top:'-490px'}, 300);
                    mylstSub.animate({opacity:0},300, function(){myNavSub.removeClass('opened-list');});
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
*/