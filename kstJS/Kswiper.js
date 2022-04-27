var swiper = new Swiper(".sec2 .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
   
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".sec2  .swiper-pagination",
      clickable: true,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 80,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
    navigation: {
      nextEl: ".sec2 .swiper-button-next",
      prevEl: ".sec2 .swiper-button-prev",
    },
    
  });