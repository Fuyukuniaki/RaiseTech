function scriptAll(){
    if( $('.icon-hamburger--wrap').length > 0){
        $('.icon-hamburger--wrap').remove;
        for( let i = $('.icon-hamburger--wrap').length; i > 0; i-- ){
            $('.icon-hamburger--wrap').remove();
        }
        for( let i = $('.icon-plsmns').length; i > 0 ; i-- ){
            $('.icon-plsmns').remove();
        }
    }
    if( $('.js-humburger--hover').length > 0 || $('.js-hamburger__parent--open').length > 0 ){
        for( let i = $('.js-humburger--hover').length; i > 0; i-- ){
            $('.js-humburger--hover').removeClass('js-humburger--hover');
        }
        for( let i = $('.js-hamburger__parent--open').length; i > 0; i-- ){
            $('.js-hamburger__parent--open').removeClass('js-hamburger__parent--open');
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
        ohEvent = 'touchstart';
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
    $('.js-hamburger__sublist').parent().each(function(){
        $(this).off(myEvent);
        $(this).on(myEvent, function(){
            $(this).toggleClass('js-hamburger__parent');
            if($(this).hasClass('js-hamburger__parent')){
                $(this).addClass('js-hamburger__parent--open');
                $(this).find('.js-hamburger__btmlist').addClass('js-hamburger__btmlist--open');
                $(this).find('.icon-plsmns').addClass('js-plsmns--mns');
                $('.js-hamburger__parent').not(this).removeClass('js-hamburger__parent--open');
                $('.js-hamburger__btmlist--open').not($(this).find('.js-hamburger__btmlist')).removeClass('js-hamburger__btmlist--open')
                $('.js-plsmns--mns').not($(this).find('.icon-plsmns')).removeClass('js-plsmns--mns');
            } else {
                $(this).removeClass('js-hamburger__parent--open');
                $(this).find('.js-hamburger__btmlist').removeClass('js-hamburger__btmlist--open');
                $(this).find('.icon-plsmns').removeClass('js-plsmns--mns');
            }
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
    } else if ( window.matchMedia("(max-width: 1200px)").matches ) {
        hamburgerMenu();
    }
};


$(document).ready(function(){
    scriptAll();
    scriptRT();
});

$(window).on('load resize', function(){
    $('*').removeAttr('style');
    scriptAll();
    scriptRT();
});

// $('.icon-plsmns').each(function(){
//     let myNavlst = $(this).prev();
//     let mbleHght = $(this).height();
//     let mbleLeng = $(this).prev().children().eq(1).children().length;
//     let myLnkHgt = (mbleLeng + 1) * mbleHght;
//     $(this).off(ohEvent);
//     $(this).on(ohEvent, function(){
//         if( myNavlst.css('overflow') == 'hidden' ){
//             $(this).addClass('js-hamburger__parent--open');
//             myNavlst.addClass('js-hamburger__parent--open');
//             myNavlst.find('.js-hamburger__sublist--open').addClass('hover');
//             myNavlst.css({ overflow:'visible' }).animate({ 'height' : myLnkHgt }, 200);
//             if( $('.js-hamburger__parent--open')!== $(this)){
//                 $('.js-hamburger__parent--open').not($(this)).removeClass('js-hamburger__parent--open');
//             }
//             if ($('.js-hamburger__parent--open')!== myNavlst ){
//                 $('.js-hamburger__parent--open').not(myNavlst).css({ height : mbleHght, overflow : 'hidden' }).removeClass('js-hamburger__parent--open');
//             }
//             if( $('.hover')!== myNavlst.find('.js-hamburger__sublist--open') ){
//                 $('.hover').not(myNavlst.find('.js-hamburger__sublist--open')).removeClass('hover');
//             } else {
//                 myNavlst.css({ height : mbleHght, overflow : 'hidden' });
//                 $(this).removeClass('js-hamburger__parent--open');
//                 myNavlst.removeClass('js-hamburger__parent--open');
//                 myNavlst.find('.js-hamburger__sublist--open').removeClass('hover');
//             }
//         }
//     });
//     $(myNavlst).on(levEvent, function(){
//         if( myNavlst.css('overflow') == 'hidden' ){
//             myNavlst.css({ height : mbleHght, overflow : 'hidden' });
//             $(this).removeClass('js-hamburger__parent--open');
//             myNavlst.removeClass('js-hamburger__parent--open');
//             myNavlst.find('.js-hamburger__sublist--open').removeClass('hover');
//         }
//     });
// });
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

// if( $('.main_window-logo--wrap').length > 0 ){
//     $('.main_window-logo').unwrap();
//     $('.main_window--wrap').append($('.main_window-logo'));
// }

// $('.main_window--wrap').append($('.main_window-logo'));
// $('.main_window-logo--wrap').remove();

//      if( $('.icon-hamburger--wrap').length > 0){
//          for( let i = $('.icon-hamburger--wrap').length; i > 0; i-- ){
//              $('.icon-hamburger--wrap').remove();
//          }
//          for( let i = $('.icon-plsmns').length; i > 0 ; i-- ){
//              $('.icon-plsmns').remove();
//          }
//          if( $('.main_window-logo--wrap').length > 0 ){
//              for( let i = $('.main_window-logo--wrap').length; i > 0; i-- ){
//                  $('.main_window').append($('.main_window-logo'));
//                  $('.main_window-logo--wrap').remove();
//              }
//          }
//          for( let i = 0; i == $(window).length; i++ ){
//              $('.header_nav').prepend("<div class='icon-hamburger'></div>");
//              $('.icon-hamburger').wrap('<div class="icon-hamburger--wrap"></div>');
//              $('.header_nav-list').after("<li class='icon-plsmns'></li>");
//              $('.main_window-logo').wrap('<section class="main_window-logo--wrap"></section>');
//              $('.main_window').after($('.main_window-logo--wrap'));
//          }
//      }
//      if (window.matchMedia("(max-width: 1200px)").matches) {
//          for(let i = 0; i < $(window).length; i++){
//              $('.header_nav').prepend("<div class='icon-hamburger'></div>");
//              $('.icon-hamburger').wrap('<div class="icon-hamburger--wrap"></div>');
//              $('.header_nav-list').after("<li class='icon-plsmns'></li>");
//              $('.main_window-logo').wrap('<section class="main_window-logo--wrap"></section>');
//              $('.main_window').after($('.main_window-logo--wrap'));
//          }
//          $('.icon-hamburger--wrap').on(myEvent, function(){
//              $(this).children('.icon-hamburger').toggleClass('js-hamburger__sublist--open');
//              $(this).next().toggleClass('js-hamburger__sublist--open');
//              let mbleHght = $(this).height();
//              let mbleLeng = $(this).next().children().length;
//              let myLnkHgt = (mbleLeng + 1) * mbleHght;
//              $(this).toggleClass('js-hamburger__sublist--open');
//              $(this).next().toggleClass('js-hamburger__sublist--open');
//              if($(this).hasClass('js-hamburger__sublist--open')){
//                      document.querySelector('.icon-hamburger').animate([
//                          { transform: 'rotate(0deg)'},
//                          { transform: 'rotate(-45deg)'}],
//                          200);
//                      $(this).next()
//                          .css( { display: 'flex' } )
//                          .animate(
//                              { maxHeight: myLnkHgt },
//                              600);
//                      } else {
//                          document.querySelector('.icon-hamburger').animate([
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
//              $('.icon-plsmns').each(function(){
//                  $(this).on(myEvent, function(){
//                      $(this).toggleClass('js-hamburger__parent--open');
//                      $(this).prev().toggleClass('js-hamburger__parent--open');
//                      let myNavlst = $(this).prev();
//                      let mbleHght = $(this).height();
//                      let mbleLeng = $(this).prev().children([1]).children().length;
//                      let myLnkHgt = (mbleLeng + 1) * mbleHght;
//                      myNavlst.toggleClass('hover');
//                      if($(this).hasClass('js-hamburger__parent--open')){
//                         document.querySelector('.icon-hamburger').animate([
//                             { transform: 'rotate(0deg)'},
//                             { transform: 'rotate(-45deg)'}],
//                             200);
//                      } else {
//                         document.querySelector('.icon-hamburger').animate([
//                             { transform: 'rotate(45deg)'},
//                             { transform: 'rotate(0deg)'}],
//                             200);
//                      }
//                  });
//              });
//      } else {
//          $('.main_window--wrap').append($('.main_window-logo'));
//          $('.icon-hamburger--wrap').remove;
//          $('.main_window-logo--wrap').remove();
//          if($('.icon-plsmns').length < 1){
//              $('.icon-plsmns').remove();
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
