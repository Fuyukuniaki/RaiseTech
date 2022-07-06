$(document).ready(function(){
    //---slideUp/slideDownここから-------------------------------------------------------------------------------
    $('.header_nav-list').each(function(){
        $(this).mouseenter(function(){
                $(this).addClass('hover').find('.header_nav-list-sub').addClass('hover').animate(
                    { marginTop:0 }, 200, function(){
                        $(this).find('.header_nav-list-sub-link').addClass('hover').animate(
                            {opacity:1}, 200
                        );
                });
            }).mouseleave(function(){
                $(this).find('.header_nav-list-sub').animate(
                    { marginTop : '-490px' }, 200, function(){
                        $(this).find('.header_nav-list-sub').removeClass('hover');
                        $(this).find('.header_nav-list-sub-link').animate(
                            {opacity:0}, 200, function(){$(this).removeClass('hover')
                });
            });
            $(this).removeClass('hover');
        });
    });
    //---ここまでslideUp/slideDown-------------------------------------------------------------------------------
    if (window.matchMedia("(max-width: 1220px)").matches) {
        if($('.icon-hamburger').length > 0){
            for(let i = 0; i < $('.icon-hamburger').length; i++ ){
                $('.icon-hamburger').remove();
            }
            for(let i = 0; i < $('.ico_plsmns').length; i++){
                $('.ico_plsmns').remove();
            }
        }
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
                var myNavlst = $(this).prev('.header_nav-list');
                var myNavSub = $(this).prev('.header_nav-list').children('.header_nav-list-sub');
                var myNavlnk = $(this).prev('.header_nav-list').find('.header_nav-list-sub-link');
                var mbleHght = $(this).height();
                var mbleLeng = $(this).prev('.header_nav-list').find('.header_nav-list-sub-link').length;
                var myLnkHgt = (mbleLeng + 1) * mbleHght;
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
        $('.icon_hamburger').remove;
        $('.main_window-logo-wrap').remove();
        if($('.ico_plsmns').length < 1){
            $('.ico_plsmns').remove();
        }
    }
});

$(window).resize(function(){
    if (window.matchMedia("(max-width: 1220px)").matches) {
        if($('.icon_hamburger-wrap').length > 0){
            for(let i = 0; i < $('.icon_hamburger-wrap').length; i++ ){
                $('.icon_hamburger-wrap').remove();
            }
            for(let i = 0; i < $('.ico_plsmns').length; i++){
                $('.ico_plsmns').remove();
            }
        }
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