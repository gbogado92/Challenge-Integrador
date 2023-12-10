



new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    autoplay: 2500,
    hoverpause: true,
    gap:6,
    breakpoints:{
        600:{
            perView: 1
        },

        1024:{
            perView: 2
        }
       
    }
}).mount();