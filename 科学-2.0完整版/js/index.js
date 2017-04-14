/**
 * Created by cys on 2017/4/13.
 */
$(function () {
    var wt = '';
    var sta = 0;   //手机导航的状态  0代表没有显示  1代表已经显示
    $('.mun').on('click',function() {
        if(sta == 0){
            $('.shouji-navs').slideDown();
            sta = 1;
        } else{
            $('.shouji-navs').slideUp();
            sta = 0;
        }
    });
    //手机端导航的处理   点击自动收回
    $('.shouji-nav').on('click',function () {
        if(sta == 1){
            $('.shouji-navs').slideUp();
            sta = 0;
        }
    });
    //手机端导航的处理  滑动自动收回
    $(window).on('scroll',function () {
        wt = $(window).scrollTop();
        if(wt <$(window).scrollTop()){
            $('.shouji-navs').slideUp();
            sta = 0;
        }else {
            $('.shouji-navs').slideUp();
            sta = 0;
        }
    });



    //pc端  置顶
    $('.back').on('click',function () {
            $('body').stop(true).animate({'scrollTop':0});
    });
    //手机端  置顶
    $('.shouji-back').on('click',function () {
        $('body').stop(true).animate({'scrollTop':0});
    });

    $('.nav').eq(0).on('click',function () {
            $('body').stop(true).animate({'scrollTop':0});
    });
    $('.nav').eq(1).on('click',function () {
        $('body').stop(true).animate({'scrollTop':727});
    });
    $('.nav').eq(2).on('click',function () {
        $('body').stop(true).animate({'scrollTop':727});
    });
    $('.nav').eq(3).on('click',function () {
        $('body').stop(true).animate({'scrollTop':727});
    });
    $('.nav').eq(4).on('click',function () {
        $('body').stop(true).animate({'scrollTop':1361});
    });
    $('.nav').eq(5).on('click',function () {$('body').stop(true).animate({'scrollTop':2582});
    });
    $('.nav').eq(6).on('click',function () {
        $('body').stop(true).animate({'scrollTop':3382});
    });

    //手机置顶效果
    $(window).scroll(function () {
        wt = $(window).scrollTop();
        if (wt >= 300) {
            $('.shouji-return').fadeIn();
        }else {
            $('.shouji-return').fadeOut();
        }
    });



    $('.h1,.p1,.p2').fadeIn(2500);
    $(window).scroll(function () {
         wt = $(window).scrollTop();
        if(wt >0){
            $('.h1,.p1,.p2').fadeIn(2500);
        }
        if(wt >=320){
            $('.analyze-left-h2').fadeIn(2500);
            $('.analyze-left-p').fadeIn(2500);
            $('.one').fadeIn(2500);
        }
        if(wt >540){
            $('.two').fadeIn(2500);

        }
        if(wt >640){
            $('.three').fadeIn(2500);

        }
        if(wt >897){
            $('.sever-h2').fadeIn(2500);
        }
        if(wt >917){
            $('.sever-one').fadeIn(2500);
        }
        if(wt >1207){
            $('.sever-two').fadeIn(2500);
        }
        if(wt >1407){
            $('.sever-three').fadeIn(2500);
        }
        if(wt >2137){
            $('.resources-h2').fadeIn(2500);
        }
        if(wt >2267){
            $('.tit').eq(0).fadeIn(2500);
        }
        if(wt >2467){
            $('.tit').eq(1).fadeIn(2500);
        }
        if(wt >2587){
            $('.tit').eq(2).fadeIn(2500);
        }
        if(wt >2687){
            $('.tit').eq(3).fadeIn(2500);
        }
        if(wt >2987){
            $('.contact-h2').fadeIn(2500);
            $('.contact-p').fadeIn(2500);
            $('.contact-right-tit').fadeIn(2500);
            $('.contact-right-con').fadeIn(2500);
            $('.connection').fadeIn(2500);
        }

    })
});
