function changeImg1() {
  var image = document.getElementById("myImg");
  image.src.match("images/tab-img1.png");
  image.src = "images/tab-img1.png";
  var divDetailes = document.getElementsByClassName("div-detaails");
  if (image.src.match("images/tab-img1.png")) {
    divDetailes[0].style.opacity = "1";
    divDetailes[1].style.opacity = "0.5";
    divDetailes[2].style.opacity = "0.5";
  }
}

function changeImg2() {
  var image = document.getElementById("myImg");
  image.src.match("images/tab-img2.png");
  image.src = "images/tab-img2.png";
  var divDetailes = document.getElementsByClassName("div-detaails");
  if (image.src.match("images/tab-img2.png")) {
    divDetailes[1].style.opacity = "1";
    divDetailes[0].style.opacity = "0.5";
    divDetailes[2].style.opacity = "0.5";
  }
}

function changeImg3() {
  var image = document.getElementById("myImg");
  image.src.match("images/tab-img3.png");
  image.src = "images/tab-img3.png";
  var divDetailes = document.getElementsByClassName("div-detaails");
  if (image.src.match("images/tab-img3.png")) {
    divDetailes[2].style.opacity = "1";
    divDetailes[0].style.opacity = "0.5";
    divDetailes[1].style.opacity = "0.5";
  }
}

$(document).ready(function () {
  $(".slickSlider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$(".variable-width").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});
