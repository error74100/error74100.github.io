gsap.registerPlugin(ScrollTrigger);

let cardGsap = gsap
  .timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.cont02 .cardWrap',
      pin: true, // pin the trigger element while active
      start: 'top 80%', // when the top of the trigger hits the top of the viewport
      end: '20% 100%', // end after scrolling 500px beyond the start
      scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    },
  })
  .to('.cont02 li:nth-child(1)', { y: '0', duration: 1, ease: 'none' }, 0.4)
  .to('.cont02 li:nth-child(2)', { y: '0', duration: 1.2, ease: 'none' }, 0.4)
  .to('.cont02 li:nth-child(3)', { y: '0', duration: 1.4, ease: 'none' }, 0.4)
  .to('.cont02 li:nth-child(4)', { y: '0', duration: 1.6, ease: 'none' }, 0.4);

let cardGsap02 = gsap
  .timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.cont03',
      pin: true, // pin the trigger element while active
      start: 'top 20%', // when the top of the trigger hits the top of the viewport
      end: '20% 100%', // end after scrolling 500px beyond the start
      scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    },
  })
  .fromTo('.cont03 .item.a', { y: '400%' }, { y: '0' }, 0.2)
  .fromTo('.cont03 .item.b', { y: '400%' }, { y: '0' }, 0.4)
  .fromTo('.cont03 .item.c', { y: '400%' }, { y: '0' }, 0.6)
  .fromTo('.cont03 .item.d', { y: '400%' }, { y: '0' }, 0.8)
  .fromTo('.cont03 .item.e', { y: '400%' }, { y: '0' }, 1.0);
