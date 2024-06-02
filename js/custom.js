$(function () {
  $(".search").click(function () {
    $(".inputt").toggleClass("menu_icon");
  });
  // mixitup
  var mixer = mixitup(".mixit_main");

  // timer
  jQuery(function ($) {
    $("#myFlipper").flipper("init");
    $("#modalFlipper").flipper("init");
  });
  //   testimonial
  $(".test_slide").slick({
    dots: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    nextArrow: ".next",
    prevArrow: ".prev",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
          nextArrow: ".next",
          prevArrow: ".prev",
          dots: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
          arrows: false,
          dots: false,
          autoplay: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // cart
  $(".cartt").click(function () {
    $(".wi").toggle(500);
  });

  // check box
  $(document).ready(function () {
    $(":not(#selectAll)").click(function () {
      if ($(this).is(":checked")) {
        $(this).toggleClass("clicked");
      }
    });
    $("#selectAll").click(function () {
      $(":not(.clicked)").prop("checked", $("#selectAll").is(":checked"));
    });
  });
  // plus minus
  // $(document).ready(function () {
  //   var x = $(".countt").text();
  //   // plus button to increase by 1
  //   $(".plus").click(function () {
  //     $(".countt").text(++x);
  //   });
  //   // minus button to decrease by 1
  //   $(".minus").click(function () {
  //     $(".countt").text(--x);
  //   });
  // });

  // plus minus
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  let countt = document.querySelector(".countt");
  let num = 1;

  plus.addEventListener("click", () => {
    countt.innerHTML = ++num;
  });
  minus.addEventListener("click", () => {
    if (num > 1) {
      countt.innerHTML = --num;
    }
  });
});
