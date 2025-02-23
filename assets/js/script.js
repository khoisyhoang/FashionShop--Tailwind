
AOS.init();
new Swiper(".swiperSection3", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1272: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    },
});
const viewerSection2 = document.querySelector(".viewerSection2");
if (viewerSection2){
    new Viewer(viewerSection2);
}