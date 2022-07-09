$(document).ready(function(){
    //---slideUp/slideDownここから-------------------------------------------------------------------------------
    $('.header_nav-list').each(function(){
        //let myNvHght = $(this).find('.header_nav-list-sub-link').height();
        //let myNvLeng = $(this).find('.header_nav-list-sub-link').length;
        //let myLnkHgt = (myNvLeng + 1) * myNvHght * -1 ;
        $(this).on('hover', function(){
            $(this).find('.header_nav-list-sub').slideToggle(200);
            /*.animate(
                { top: '70px' }, 50, function(){
                    $(this).find('.header_nav-list-sub-link').addClass('hover');
            });
        }).mouseleave(function(){
            $(this).find('.header_nav-list-sub').slideUp(200);
            .animate(
                { top : myLnkHgt }, 50, function(){
                    $(this).find('.header_nav-list-sub').removeClass('hover');
                    $(this).find('.header_nav-list-sub-link').removeClass('hover');
                });*/
        });
    });
    //---ここまでslideUp/slideDown-------------------------------------------------------------------------------
    if (window.matchMedia("(max-width: 1220px)").matches) {
        for(let i = 0; i < $(window).length; i++){
        $('.header_nav').prepend("<div class='icon_hamburger'></div>");
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('.header_nav-list').after("<li class='ico_plsmns'></li>");
        $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
        $('.main_window').after($('.main_window-logo-wrap'));
        }
        $('.icon_hamburger').on('touchstart', function(){
            $(this).toggleClass('opened-sub');
            $(this).parent('.icon_hamburger-wrap').toggleClass('opened-sub');
            if($('.icon_hamburger-wrap').hasClass('opened-sub')){
                document.querySelector('.icon_hamburger').animate([
                    { transform: 'rotate(0deg)'},
                    { transform: 'rotate(-45deg)'}],
                    200);
                $('.header_nav-wrap').animate(
                    { opacity: 1 , top: '50px' },
                    600);
            } else {
                document.querySelector('.icon_hamburger').animate([
                    { transform: 'rotate(-45deg)'},
                    { transform: 'rotate(0deg)'}],
                    200);
                $('.header_nav-wrap').animate(
                    { opacity: 0 , top:'-490px'},
                    );
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                let myNavlst = $(this).prev('.header_nav-list');
                let mbleHght = $(this).height();
                let mbleLeng = $(this).prev('.header_nav-list').find('.header_nav-list-sub-link').length;
                let myLnkHgt = (mbleLeng + 1) * mbleHght;
                if($(this).hasClass('opened-slide')){
                    myNavlst.animate({ height : myLnkHgt }, 600);
                } else {
                    myNavlst.animate({ height : mbleHght }, 600);
                }
            });
        });
    } else {
        $('.main_window-wrap').append($('.main_window-logo'));
        $('.icon_hamburger-wrap').remove;
        $('.main_window-logo-wrap').remove();
        if($('.ico_plsmns').length < 1){
            $('.ico_plsmns').remove();
        }
    }
});

$(window).resize(function(){
    if( $('.icon_hamburger-wrap').length > 0){
            for(let i = 0; i < $('.icon_hamburger-wrap').length; i++ ){
                console.log($('.icon_hamburger-wrap').length);
                $('.icon_hamburger-wrap').remove();
            }
            for(let i = 0; i < $('.ico_plsmns').length; i++){
                $('.ico_plsmns').remove();
            }
            if( $('.main_window-logo-wrap').length > 0 ){
                for(let i = 0; i < $('.main_window-logo-wrap').length; i++ ){
                    $('.main_window').appened($('.main_window-logo'));
                    $('.main_window-logo-wrap').remove();
                }
            }
        for(let i = 0;i < $(window).length; i++){
            $('.header_nav').prepend("<div class='icon_hamburger'></div>");
            $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
            $('.header_nav-list').after("<li class='ico_plsmns'></li>");
            $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
            $('.main_window').after($('.main_window-logo-wrap'));
        }
    }
    //---slideUp/slideDownここから-------------------------------------------------------------------------------
    $('.header_nav-list').each(function(){
        let myNvHght = $(this).find('.header_nav-list-sub-link').height();
        let myNvLeng = $(this).find('.header_nav-list-sub-link').length;
        let myLnkHgt = (myNvLeng + 1) * myNvHght * -1 ;
        $(this).mouseenter(function(){
            $(this).find('.header_nav-list-sub').animate(
                { top:'70px' }, 50, function(){
                    $(this).find('.header_nav-list-sub-link').addClass('hover');
            });
        }).mouseleave(function(){
            $(this).find('.header_nav-list-sub').animate(
                { top : myLnkHgt }, 50, function(){
                    $(this).find('.header_nav-list-sub').removeClass('hover');
                    $(this).find('.header_nav-list-sub-link').removeClass('hover');
                });
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
                $('.header_nav-wrap').animate(
                    { opacity: 1 , top: '50px' },
                    100);
            } else {
                document.querySelector('.icon_hamburger').animate([
                    { transform: 'rotate(-45deg)'},
                    { transform: 'rotate(0deg)'}],
                    200);
                $('.header_nav-wrap').animate(
                    { opacity: 0 , top:'-490px'},
                    100);
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                let myNavlst = $(this).prev('.header_nav-list');
                let myNavSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub');
                let myNavlnk = $(this).prev('.header_nav-list').find('.header_nav-list-sub-link');
                let mbleHght = $(this).height();
                let mbleLeng = $(this).prev('.header_nav-list').find('.header_nav-list-sub-link').length;
                let myLnkHgt = (mbleLeng + 1) * mbleHght;
                if($(this).hasClass('opened-slide')){
                    myNavlst.animate({ height : myLnkHgt }, 600);
                    myNavSub.animate({ opacity:1 , top: 0 }, 400);
                    myNavlnk.animate({ opacity:1 }, 400);
                } else {
                    myNavSub.animate({ opacity: 0 , top: '-400px' }, 400);
                    myNavlnk.animate({ opacity: 0 }, 400);
                    myNavlst.animate({ height : mbleHght }, 600);
                }
            });
        });
    } else {
        $('.main_window-wrap').append($('.main_window-logo'));
        $('.icon_hamburger-wrap').remove;
        $('.main_window-logo-wrap').remove();
        if($('.ico_plsmns').length > 0){
            $('.ico_plsmns').remove();
        }
    }
});