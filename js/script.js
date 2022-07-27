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
    let touch_event = window.ontouchstart;
    let touch_points = navigator.maxTouchPoints;
    if( touch_event !== undefined && 0 < touch_points ) {
        // タッチ対応端末の処理が入る
        myEvent = 'touchstart';
        ohEvent = 'touchstart';
        levEvent= 'touchend touchmove';

    } else {
        // タッチ非対応端末の処理が入る
        myEvent = 'click';
        ohEvent = 'mouseover';
        levEvent= 'mouseleave';
    }
};
function scriptRT(){
    if(window.matchMedia("(min-width: 1201px)").matches){
        $('*').removeAttr('style');
        $('.opened-sub').removeClass('opened-sub');
        $('.icon_hamburger-wrap').remove;
        if($('.ico_plsmns').length < 1){
            $('.hover').removeClass('hover');
            $('.opened-slide').removeClass('opened-slide');
            $('.ico_plsmns').remove();
        }
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
    } else if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1200px)").matches) {
        $('*').removeAttr('style');
        $('nav').prepend("<div class='icon_hamburger'></div>");
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('nav').find('a:not(:only-child)').parent().each(function(){$(this).after("<li class='ico_plsmns'></li>")});
        $('.icon_hamburger-wrap').off(myEvent);
        $('.icon_hamburger-wrap').on(myEvent, function(){
            $(this).children('.icon_hamburger').toggleClass('opened-sub');
            let mbleHght = $(this).height();
            let mbleLeng = $(this).next().children().length;
            let myLnkHgt = (mbleLeng + 1) * mbleHght;
            $(this).toggleClass('opened-sub');
            $(this).next().toggleClass('opened-sub');
            if($(this).hasClass('opened-sub')){
                $(this).next()
                .css( { display: 'flex' } )
                .animate(
                    { maxHeight: myLnkHgt },
                    600);
            } else {
                    $(this).next()
                    .css( { display: 'none' } )
                    .animate(
                        { maxHeight: 0 },
                    );
            }
        });
        $('.ico_plsmns').each(function(){
            $(this).off(ohEvent);
            $(this).on(ohEvent, function(){
                $(this).toggleClass('opened-slide');
                $(this).prev().toggleClass('opened-slide');
                let myNavlst = $(this).prev();
                let mbleHght = $(this).height();
                let mbleLeng = $(this).prev().children().eq(1).children().length;
                let myLnkHgt = (mbleLeng + 1) * mbleHght;
                $('.hover').not(myNavlst).css({ 'height' : mbleHght, 'overflow' : 'hidden' }).removeClass('hover');
                myNavlst.toggleClass('hover');
                if($(this).hasClass('opened-slide')){
                    myNavlst.css('overflow','visible').animate({ 'height' : myLnkHgt }, 200);
                    if($('.hover')!== myNavlst){
                        $('.hover').not(myNavlst).css({ height : mbleHght }).removeClass('hover');
                        $('.opened-slide').not(this).removeClass('opened-slide');
                    }
                } else {
                    myNavlst.css({ 'height' : mbleHght, 'overflow' : 'hidden' });
                }
            });
        });
        $('nav a:first-of-type:not(:only-child)').addClass('slide-link');
        $('.slide-link').each(function(){
            $(this).off(ohEvent);
            $(this).on( ohEvent, function(){
                let myParent = $(this).parent();
                myParent.toggleClass('opened-slide');
                myParent.next().toggleClass('opened-slide');
                myParent.toggleClass('hover');
                let mbleHght = myParent.children().eq(0).height();
                let mbleLeng = myParent.children().eq(1).children().length;
                let myLnkHgt = (mbleLeng + 1) * mbleHght;
                if(myParent.hasClass('opened-slide')){
                    $('.hover').not(myParent).css({ height : mbleHght }).removeClass('hover');
                    $('.opened-slide').not(myParent).removeClass('opened-slide');
                    myParent.css('overflow','visible').animate({ 'height' : myLnkHgt }, 200);
                    if($('.hover') !== myParent){
                        $('.hover').not(myParent).css({ 'height' : mbleHght, 'overflow' : 'hidden' }).removeClass('opened-slide');
                        $('.hover').not(myParent).css({ 'height' : mbleHght }).removeClass('hover');
                        $('.opened-slide').not(myParent).removeClass('opened-slide');
                    }
                } else {
                    myParent.css({ 'height' : mbleHght, 'overflow' : 'hidden' }).removeClass('opened-slide hover');
                    myParent.next('.ico_plsmns').removeClass('opened-slide');
                }
            });
        });
        $('nav a:only-child').parent().each(function(){
            $(this).on( ohEvent, function(){
                $('.hover').removeClass('hover');
                $(this).toggleClass('hover');
            });
        });
    } else if (window.matchMedia("(min-width: 376px)").matches && window.matchMedia("(max-width: 767px)").matches) {
        $('*').removeAttr('style');
        $('nav').prepend("<div class='icon_hamburger'></div>");
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('nav').find('a:not(:only-child)').parent().each(function(){$(this).after("<li class='ico_plsmns'></li>")});
        $('.icon_hamburger-wrap').on(myEvent, function(){
            $(this).children('.icon_hamburger').toggleClass('opened-sub');
            let mbleHght = $(this).height();
            let mbleLeng = $(this).next().children().length;
            let myLnkHgt = (mbleLeng + 1) * mbleHght;
            $(this).toggleClass('opened-sub');
            $(this).next().toggleClass('opened-sub');
            if($(this).hasClass('opened-sub')){
                $(this).next()
                .css( { display: 'flex' } )
                .animate(
                    { maxHeight: myLnkHgt }, 600
                );
            } else {
                $(this).next()
                    .css( { display: 'none' } )
                    .animate(
                        { maxHeight: 0 },
                );
            }
            });
            $('.ico_plsmns').each(function(){
                $(this).on(ohEvent, function(){
                    $(this).toggleClass('opened-slide');
                    $(this).prev().toggleClass('opened-slide');
                    let myNavlst = $(this).prev();
                    let mbleHght = $(this).height();
                let mbleLeng = $(this).prev().children().eq(1).children().length;
                let myLnkHgt = (mbleLeng + 1) * mbleHght;
                $('.hover').not(myNavlst).css({ 'height' : mbleHght, 'overflow' : 'hidden' }).removeClass('hover');
                myNavlst.toggleClass('hover');
                if($(this).hasClass('opened-slide')){
                    myNavlst.css('overflow','visible').animate({ 'height' : myLnkHgt }, 200);
                    if($('.hover')!== myNavlst){
                        $('.hover').not(myNavlst).css({ height : mbleHght }).removeClass('hover');
                        $('.opened-slide').not(this).removeClass('opened-slide');
                    }
                } else {
                    myNavlst.css({ 'height' : mbleHght, 'overflow' : 'hidden' });
                }
            });
        });
    } else if( window.matchMedia("(max-width: 375px)").matches ){
        $('*').removeAttr('style');
        $('article:nth-of-type(3) br').css({ display: 'none' });
        $('nav').prepend("<div class='icon_hamburger'></div>");
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('nav').find('a:not(:only-child)').parent().each(function(){$(this).after("<li class='ico_plsmns'></li>")});
        $('.icon_hamburger-wrap').on(myEvent, function(){
            $(this).children('.icon_hamburger').toggleClass('opened-sub');
            let mbleHght = $(this).height();
            let mbleLeng = $(this).next().children().length;
            let myLnkHgt = (mbleLeng + 1) * mbleHght;
            $(this).toggleClass('opened-sub');
            $(this).next().toggleClass('opened-sub');
            if($(this).hasClass('opened-sub')){
                $(this).next()
                .css( { display: 'flex' } )
                .animate(
                    { maxHeight: myLnkHgt },
                    600);
                } else {
                    $(this).next()
                    .css( { display: 'none' } )
                    .animate(
                        { maxHeight: 0 },
                        );
                    }
                });
                $('.ico_plsmns').each(function(){
                    $(this).on(ohEvent, function(){
                        $(this).toggleClass('opened-slide');
                        $(this).prev().toggleClass('opened-slide');
                        let myNavlst = $(this).prev();
                        let mbleHght = $(this).height();
                        let mbleLeng = $(this).prev().children().eq(1).children().length;
                        let myLnkHgt = (mbleLeng + 1) * mbleHght;
                        $('.hover').not(myNavlst).css({ 'height' : mbleHght, 'overflow' : 'hidden' }).removeClass('hover');
                        myNavlst.toggleClass('hover');
                        if($(this).hasClass('opened-slide')){
                            myNavlst.css('overflow','visible').animate({ 'height' : myLnkHgt }, 200);
                            if($('.hover')!== myNavlst){
                                $('.hover').not(myNavlst).css({ height : mbleHght }).removeClass('hover');
                                $('.opened-slide').not(this).removeClass('opened-slide');
                            }
                        } else {
                            myNavlst.css({ 'height' : mbleHght, 'overflow' : 'hidden' });
                        }
                    });
                });
    } else {
        $('*').removeAttr('style');
        $('nav').prepend("<div class='icon_hamburger'></div>");
        $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
        $('nav').find('a:not(:only-child)').parent().each(function(){$(this).after("<li class='ico_plsmns'></li>")});
        $('.icon_hamburger-wrap').on(myEvent, function(){
            $(this).children('.icon_hamburger').toggleClass('opened-sub');
            let mbleHght = $(this).height();
            let mbleLeng = $(this).next().children().length;
            let myLnkHgt = (mbleLeng + 1) * mbleHght;
            $(this).toggleClass('opened-sub');
            $(this).next().toggleClass('opened-sub');
            if($(this).hasClass('opened-sub')){
                $(this).next()
                .css( { display: 'flex' } )
                .animate(
                    { maxHeight: myLnkHgt },
                    600);
            } else {
                $(this).next()
                .css( { display: 'none' } )
                .animate(
                    { maxHeight: 0 },
                    );
                }
            });
            $('.ico_plsmns').each(function(){
                $(this).on(myEvent, function(){
                    $(this).toggleClass('opened-slide');
                    $(this).prev().toggleClass('opened-slide');
                    let myNavlst = $(this).prev();
                    let mbleHght = $(this).height();
                    let mbleLeng = $(this).prev().children().eq(1).children().length;
                    let myLnkHgt = (mbleLeng + 1) * mbleHght;
                    $('.hover').not(myNavlst).css({ 'height' : mbleHght, 'overflow' : 'hidden' }).removeClass('hover');
                    myNavlst.toggleClass('hover');
                    if($(this).hasClass('opened-slide')){
                        myNavlst.css('overflow','visible').animate({ 'height' : myLnkHgt }, 200);
                        if($('.hover')!== myNavlst){
                            $('.hover').not(myNavlst).css({ height : mbleHght }).removeClass('hover');
                            $('.opened-slide').not(this).removeClass('opened-slide');
                        }
                    } else {
                        myNavlst.css({ 'height' : mbleHght, 'overflow' : 'hidden' });
                    }
                });
        });
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



// $(function () {
//     flag = '';
//     $('button:first-of-type').addClass('btn');
//     rtBtnWth = $('.btn').width() +'px' ;
//     rtBtnHgt = $('.btn').height() +'px' ;
//     rtBtnFon = $('.btn').css('font-size');
//     $(window).on('load resize', function () {
//         let w = $(window).innerWidth();
//         // sp幅
//         if ( w <= 767 && flag != 'sp' ) {
//             flag = 'sp';
//             // sp時の処理をここに書く
//             myBtnWth = $('.btn').width() + 'px';
//             myBtnHgt = $('.btn').height() + 'px';
//             myBtnFon = $('.btn').css('font-size');
//             document.querySelector('.btn').animate([
//                 { 'width' : rtBtnWth, 'height' : rtBtnHgt, 'font-size' : rtBtnFon },
//                 { 'width' : myBtnWth, 'height' : myBtnHgt, 'font-size' : myBtnFon }], 200);
//             rtBtnWth = $('.btn').width() + 'px';
//             rtBtnHgt = $('.btn').height() + 'px';
//             rtBtnFon = $('.btn').css('font-size');
//             // pc幅
//         } else if ( w > 768 && flag != 'pc' ) {
//             flag = 'pc';
//             // pc時の処理をここに書く
//             myBtnWth = $('.btn').width() + 'px';
//             myBtnHgt = $('.btn').height() + 'px';
//             myBtnFon = $('.btn').css('font-size');
//             document.querySelector('.btn').animate([
//                 { 'width' : rtBtnWth, 'height' : rtBtnHgt, 'font-size' : rtBtnFon },
//                 { 'width' : myBtnWth, 'height' : myBtnHgt, 'font-size' : myBtnFon }], 200);
//             rtBtnWth = $('.btn').width() + 'px';
//             rtBtnHgt = $('.btn').height() + 'px';
//             rtBtnFon = $('.btn').css('font-size');
//         }
//     });
// });

// if( $('.main_window-logo-wrap').length > 0 ){
//     $('.main_window-logo').unwrap();
//     $('.main_window-wrap').append($('.main_window-logo'));
// }

// $('.main_window-wrap').append($('.main_window-logo'));
// $('.main_window-logo-wrap').remove();

//      if( $('.icon_hamburger-wrap').length > 0){
//          for( let i = $('.icon_hamburger-wrap').length; i > 0; i-- ){
//              console.log($('.icon_hamburger-wrap').length);
//              $('.icon_hamburger-wrap').remove();
//          }
//          for( let i = $('.ico_plsmns').length; i > 0 ; i-- ){
//              $('.ico_plsmns').remove();
//          }
//          if( $('.main_window-logo-wrap').length > 0 ){
//              for( let i = $('.main_window-logo-wrap').length; i > 0; i-- ){
//                  $('.main_window').append($('.main_window-logo'));
//                  $('.main_window-logo-wrap').remove();
//              }
//          }
//          for( let i = 0; i == $(window).length; i++ ){
//              $('.header_nav').prepend("<div class='icon_hamburger'></div>");
//              $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
//              $('.header_nav-list').after("<li class='ico_plsmns'></li>");
//              $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
//              $('.main_window').after($('.main_window-logo-wrap'));
//          }
//      }
//      if (window.matchMedia("(max-width: 1200px)").matches) {
//          for(let i = 0; i < $(window).length; i++){
//              $('.header_nav').prepend("<div class='icon_hamburger'></div>");
//              $('.icon_hamburger').wrap('<div class="icon_hamburger-wrap"></div>');
//              $('.header_nav-list').after("<li class='ico_plsmns'></li>");
//              $('.main_window-logo').wrap('<section class="main_window-logo-wrap"></section>');
//              $('.main_window').after($('.main_window-logo-wrap'));
//          }
//          $('.icon_hamburger-wrap').on(myEvent, function(){
//              $(this).children('.icon_hamburger').toggleClass('opened-sub');
//              $(this).next().toggleClass('opened-sub');
//              let mbleHght = $(this).height();
//              let mbleLeng = $(this).next().children().length;
//              let myLnkHgt = (mbleLeng + 1) * mbleHght;
//              $(this).toggleClass('opened-sub');
//              $(this).next().toggleClass('opened-sub');
//              if($(this).hasClass('opened-sub')){
//                      document.querySelector('.icon_hamburger').animate([
//                          { transform: 'rotate(0deg)'},
//                          { transform: 'rotate(-45deg)'}],
//                          200);
//                      $(this).next()
//                          .css( { display: 'flex' } )
//                          .animate(
//                              { maxHeight: myLnkHgt },
//                              600);
//                      } else {
//                          document.querySelector('.icon_hamburger').animate([
//                              { transform: 'rotate(-45deg)'},
//                              { transform: 'rotate(0deg)'}],
//                              200);
//                          $(this).next()
//                              .css( { display: 'none' } )
//                              .animate(
//                              { maxHeight: 0 },
//                              );
//                  }
//              });
//              $('.ico_plsmns').each(function(){
//                  $(this).on(myEvent, function(){
//                      $(this).toggleClass('opened-slide');
//                      $(this).prev().toggleClass('opened-slide');
//                      let myNavlst = $(this).prev();
//                      let mbleHght = $(this).height();
//                      let mbleLeng = $(this).prev().children([1]).children().length;
//                      let myLnkHgt = (mbleLeng + 1) * mbleHght;
//                      myNavlst.toggleClass('hover');
//                      if($(this).hasClass('opened-slide')){
//                         document.querySelector('.icon_hamburger').animate([
//                             { transform: 'rotate(0deg)'},
//                             { transform: 'rotate(-45deg)'}],
//                             200);
//                      } else {
//                         document.querySelector('.icon_hamburger').animate([
//                             { transform: 'rotate(45deg)'},
//                             { transform: 'rotate(0deg)'}],
//                             200);
//                      }
//                  });
//              });
//      } else {
//          $('.main_window-wrap').append($('.main_window-logo'));
//          $('.icon_hamburger-wrap').remove;
//          $('.main_window-logo-wrap').remove();
//          if($('.ico_plsmns').length < 1){
//              $('.ico_plsmns').remove();
//          }
//          //---slideUp/slideDownここから-------------------------------------------------------------------------------
//          let headerNavList = '.header_nav-list';
//          let headNavLstSub = '.header_nav-list-sub';
//          $(headerNavList).each(function(){
//              $(this).on({
//                  'mouseenter':function(){
//                      $(this).find(headNavLstSub).slideDown(200);
//                  },
//                  'mouseleave':function(){
//                      $(this).find(headNavLstSub).hide();
//                  }
//              });
//                  // 'hover', function(){
//                  //     $(this).find('.header_nav-list-sub').slideToggle(200);
//          });
//          //---ここまでslideUp/slideDown-------------------------------------------------------------------------------
//      }
//function resizeAnime(){
//let widthInner = $(window).innerWidth();
//let myBtnWth = $('.btn').width();
//let myBtnHgt = $('.btn').height();
// $('.btn').each(function(){
//     let myBtnWth = $(this).width();
//     let myBtnHgt = $(this).height();
//     if( rtBtnWth > myBtnWth){
//         document.querySelector('.btn').animate([
//             { width:rtBtnWth + 'px' , height:rtBtnHgt + 'px' },
//             { width:myBtnWth + 'px' , height:myBtnHgt + 'px' }],2000);
//     } else if(rtBtnWth < myBtnWth){
//         document.querySelector('.btn').animate([
//             { width:rtBtnWth + 'px' , height:rtBtnHgt + 'px' },
//             { width:myBtnWth + 'px' , height:myBtnHgt + 'px' }],2000);
//     }
// });
//};
