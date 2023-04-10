$(function(){

    //헤더 픽스

    //하단 사이트 슬라이드
    $('.site_slide').slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });
    $('.banner').slick({
        Infinity: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
    });

}); //제이쿼리 끝