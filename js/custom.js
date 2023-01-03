$(".back2top i").click(function(){
    $("html,body").animate({
        scrollTop:0
    },1000)
})

$(window).scroll(function(){
    var scrolling = $(this).scrollTop()
    if(scrolling > 20){
        $(".back2top i").fadeIn(500)
    }else{
        $(".back2top i").fadeOut(500)
    }


    if(scrolling > 50){
        $(".navbar").addClass("nav_bg")
    }else{
        $(".navbar").removeClass("nav_bg")
    }
})


$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
  autoplay: true,
  autoplaySpeed: 1000,
});