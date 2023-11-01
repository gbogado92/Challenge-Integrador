new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: 2500,
    hoverpause: true,
    gap:30,
    breakpoint:{
      991:{
            perview: 2
         },
        768:{
            perview: 1
       }
    }
}).mount()