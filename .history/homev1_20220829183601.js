$(document).ready(function () {
  const leftContent = $(".active-nav-main").offset().left;
  $(".shop-down").offset({ left: leftContent });

  //-------sự kiện scroll---------
  const heightWin = $(window).height();
  //icon home
  const iconHome = $(".link-icon-home");
  //banner below
  const bannerBelow = $(".wrapper-fruit");

  const topBannerBelow = $(".wrapper-banner").offset().top;
  $(window).scroll(function () {
    let top = $("html, body").scrollTop();
    //scroll icon home
    if (top > 10) {
      iconHome.css({
        transform: "scale(0.7) translateY(-30px)",
      });
    } else {
      iconHome.css({
        transform: "scale(1) translateY(0)",
      });
    }
    //scroll animation banner below
    if (top + heightWin >= topBannerBelow) {
      bannerBelow.Foreach((val, index) => {
        console.log("index", index);
      });
    }
  });
});