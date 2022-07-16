function scriptAll(){
    if( $('.icon_hamburger-wrap').length > 0){
        $('.icon_hamburger-wrap').remove;
        for( let i = $('.icon_hamburger-wrap').length; i > 0; i-- ){
            $('.icon_hamburger-wrap').remove();
        }
        for( let i = $('.ico_plsmns').length; i > 0 ; i-- ){
            $('.ico_plsmns').remove();
        }
    }
    if( $('.main_window-logo-wrap').length > 0 ){
        $('.main_window-logo').unwrap();
        $('.main_window-wrap').append($('.main_window-logo'));
    }
    if( $('.hover').length > 0 || $('.opened-slide').length > 0 ){
        for( let i = $('.hover').length; i > 0; i-- ){
            $('.hover').removeClass('hover');
        }
        for( let i = $('.opened-slide').length; i > 0; i-- ){
            $('.opened-slide').removeClass('opened-slide');
        }
        for( let i = $('.ico_plsmns').length; i > 0; i-- ){
            $('.ico_plsmns').remove();
        }
    }
};
function scriptRT(){
    if(window.matchMedia("(min-width: 1200px)").matches){
        $('*').removeAttr('style');
        $('.main_window-wrap').append($('.main_window-logo'));
        $('.opened-sub').removeClass('opened-sub');
        $('.icon_hamburger-wrap').remove;
        $('.main_window-logo-wrap').remove();
        if($('.ico_plsmns').length < 1){
            $('.hover').removeClass('hover');
            $('.opened-slide').removeClass('opened-slide');
            $('.ico_plsmns').remove();
        }
        //---slideUp/slideDownここから-------------------------------------------------------------------------------
        let headerNavList = $('nav a:not(:only-child)').parent();
        headerNavList.each(function(){
            let hedrNavLstSub = $(this).children().eq(1);
            $(this).hover(
                function(){
                    hedrNavLstSub.addClass('js-slide');
                    $(this).find('.js-slide').stop().slideDown(200);
                },
                function(){
                    $(this).find('.js-slide').stop().slideUp(0).removeClass('js-slide');
                }
            );
        });
        //---ここまでslideUp/slideDown-------------------------------------------------------------------------------
    } else if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1200px)").matches) {
        console.log('width:767-1200');
        $('*').removeAttr('style');
        $('.header_nav').prepend("<div class='icon_hamburger'></div>");
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('.header_nav-list').after("<li class='ico_plsmns'></li>");
        $('.icon_hamburger-wrap').on('touchstart', function(){
        $(this).children('.icon_hamburger').toggleClass('opened-sub');
        let mbleHght = $(this).height();
        let mbleLeng = $(this).next().children().length;
        let myLnkHgt = (mbleLeng + 1) * mbleHght;
        $(this).toggleClass('opened-sub');
        $(this).next().toggleClass('opened-sub');
        if($(this).hasClass('opened-sub')){
            document.querySelector('.icon_hamburger').animate([
                { transform: 'rotate(0deg)'},
                { transform: 'rotate(-45deg)'}],
                200);
            $(this).next()
                .css( { display: 'flex' } )
                .animate(
                    { maxHeight: myLnkHgt },
                    600);
        } else {
            document.querySelector('.icon_hamburger').animate([
                { transform: 'rotate(45deg)'},
                { transform: 'rotate(0deg)'}],
                200);
            $(this).next()
                .css( { display: 'none' } )
                .animate(
                { maxHeight: 0 },
                );
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                $(this).prev().toggleClass('opened-slide');
                let myNavlst = $(this).prev();
                let mbleHght = $(this).height();
                let mbleLeng = $(this).prev().children().eq(1).children().length;
                let myLnkHgt = (mbleLeng + 1) * mbleHght;
                myNavlst.toggleClass('hover');
                if($(this).hasClass('opened-slide')){
                    myNavlst.animate({ height : myLnkHgt }, 600);
                } else {
                    myNavlst.css({ height : mbleHght });
                }
            });
        });
    } else {
        console.log('else');
        $('*').removeAttr('style');
        $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
        $('.main_window').after($('.main_window-logo-wrap'));
        $('.header_nav').prepend("<div class='icon_hamburger'></div>");
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('.header_nav-list').after("<li class='ico_plsmns'></li>");
        $('.icon_hamburger-wrap').on('touchstart', function(){
        $(this).children('.icon_hamburger').toggleClass('opened-sub');
        let mbleHght = $(this).height();
        let mbleLeng = $(this).next().children().length;
        let myLnkHgt = (mbleLeng + 1) * mbleHght;
        $(this).toggleClass('opened-sub');
        $(this).next().toggleClass('opened-sub');
        if($(this).hasClass('opened-sub')){
            document.querySelector('.icon_hamburger').animate([
                { transform: 'rotate(0deg)'},
                { transform: 'rotate(-45deg)'}],
                200);
            $(this).next()
                .css( { display: 'flex' } )
                .animate(
                    { maxHeight: myLnkHgt },
                    600);
        } else {
            document.querySelector('.icon_hamburger').animate([
                { transform: 'rotate(45deg)'},
                { transform: 'rotate(0deg)'}],
                200);
            $(this).next()
                .css( { display: 'none' } )
                .animate(
                { maxHeight: 0 },
                );
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).on('touchstart', function(){
                $(this).toggleClass('opened-slide');
                $(this).prev().toggleClass('opened-slide');
                let myNavlst = $(this).prev();
                let mbleHght = $(this).height();
                let mbleLeng = $(this).prev().children().eq(1).children().length;
                let myLnkHgt = (mbleLeng + 1) * mbleHght;
                myNavlst.toggleClass('hover');
                if($(this).hasClass('opened-slide')){
                    myNavlst.animate({ height : myLnkHgt }, 600);
                } else {
                    myNavlst.css({ height : mbleHght });
                }
            });
        });
    }
};

$(document).ready(function(){
    scriptAll();
    scriptRT();
});

$(window).resize(function(){
    scriptAll();
    scriptRT();
});



//     if( $('.icon_hamburger-wrap').length > 0){
//         for( let i = $('.icon_hamburger-wrap').length; i > 0; i-- ){
//             console.log($('.icon_hamburger-wrap').length);
//             $('.icon_hamburger-wrap').remove();
//         }
//         for( let i = $('.ico_plsmns').length; i > 0 ; i-- ){
//             $('.ico_plsmns').remove();
//         }
//         if( $('.main_window-logo-wrap').length > 0 ){
//             for( let i = $('.main_window-logo-wrap').length; i > 0; i-- ){
//                 $('.main_window').append($('.main_window-logo'));
//                 $('.main_window-logo-wrap').remove();
//             }
//         }
//         for( let i = 0; i == $(window).length; i++ ){
//             $('.header_nav').prepend("<div class='icon_hamburger'></div>");
//             $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
//             $('.header_nav-list').after("<li class='ico_plsmns'></li>");
//             $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
//             $('.main_window').after($('.main_window-logo-wrap'));
//         }
//     }
//     if (window.matchMedia("(max-width: 1200px)").matches) {
//         for(let i = 0; i < $(window).length; i++){
//             $('.header_nav').prepend("<div class='icon_hamburger'></div>");
//             $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
//             $('.header_nav-list').after("<li class='ico_plsmns'></li>");
//             $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
//             $('.main_window').after($('.main_window-logo-wrap'));
//         }
//         $('.icon_hamburger-wrap').on('touchstart', function(){
//             $(this).children('.icon_hamburger').toggleClass('opened-sub');
//             $(this).next().toggleClass('opened-sub');
//             let mbleHght = $(this).height();
//             let mbleLeng = $(this).next().children().length;
//             let myLnkHgt = (mbleLeng + 1) * mbleHght;
//             $(this).toggleClass('opened-sub');
//             $(this).next().toggleClass('opened-sub');
//             if($(this).hasClass('opened-sub')){
//                     document.querySelector('.icon_hamburger').animate([
//                         { transform: 'rotate(0deg)'},
//                         { transform: 'rotate(-45deg)'}],
//                         200);
//                     $(this).next()
//                         .css( { display: 'flex' } )
//                         .animate(
//                             { maxHeight: myLnkHgt },
//                             600);
//                     } else {
//                         document.querySelector('.icon_hamburger').animate([
//                             { transform: 'rotate(-45deg)'},
//                             { transform: 'rotate(0deg)'}],
//                             200);
//                         $(this).next()
//                             .css( { display: 'none' } )
//                             .animate(
//                             { maxHeight: 0 },
//                             );
//                 }
//             });
//             $('.ico_plsmns').each(function(){
//                 $(this).on('touchstart', function(){
//                     $(this).toggleClass('opened-slide');
//                     $(this).prev().toggleClass('opened-slide');
//                     let myNavlst = $(this).prev();
//                     let mbleHght = $(this).height();
//                     let mbleLeng = $(this).prev().children([1]).children().length;
//                     let myLnkHgt = (mbleLeng + 1) * mbleHght;
//                     myNavlst.toggleClass('hover');
//                     if($(this).hasClass('opened-slide')){
//                         myNavlst.animate({ height : myLnkHgt }, 600);
//                     } else {
//                         myNavlst.animate({ height : mbleHght }, 600);
//                     }
//                 });
//             });
//     } else {
//         $('.main_window-wrap').append($('.main_window-logo'));
//         $('.icon_hamburger-wrap').remove;
//         $('.main_window-logo-wrap').remove();
//         if($('.ico_plsmns').length < 1){
//             $('.ico_plsmns').remove();
//         }
        
//         //---slideUp/slideDownここから-------------------------------------------------------------------------------
//         let headerNavList = '.header_nav-list';
//         let headNavLstSub = '.header_nav-list-sub';
//         $(headerNavList).each(function(){
//             $(this).on({
//                 'mouseenter':function(){
//                     $(this).find(headNavLstSub).slideDown(200);
//                 },
//                 'mouseleave':function(){
//                     $(this).find(headNavLstSub).hide();
//                 }
//             });
//                 // 'hover', function(){
//                 //     $(this).find('.header_nav-list-sub').slideToggle(200);
//         });
//         //---ここまでslideUp/slideDown-------------------------------------------------------------------------------
//     }
