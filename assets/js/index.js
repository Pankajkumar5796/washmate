let nav = document.querySelector(".navbar");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
};

$('.review_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : [
        '<ion-icon name="chevron-back-outline"></ion-icon>',
        '<ion-icon name="chevron-forward-outline"></ion-icon>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.blog-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    // navText : [
    //     '<ion-icon name="chevron-back-outline"></ion-icon>',
    //     '<ion-icon name="chevron-forward-outline"></ion-icon>'
    // ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

