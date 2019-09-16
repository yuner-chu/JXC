//主轮播图
new Swiper('.jxc-banner-main', {
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    loop : true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable :true,
        bulletClass : 'bullet',
        bulletActiveClass: 'active'
    }
});

//学员分享轮播图
new Swiper('.jxc-share', {
    slidesPerView: 3,
    centeredSlides : true,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    }
});



//学员反馈轮播图
new Swiper('.jxc-feedback', {
    slidesPerView: 3,
    centeredSlides : true,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev'
    }
});

//专项课介绍轮播图
new Swiper('.jxc-special', {
    slidesPerView: 3,
    centeredSlides : true,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-gray-next',
        prevEl: '.swiper-button-gray-prev',
    },
});
