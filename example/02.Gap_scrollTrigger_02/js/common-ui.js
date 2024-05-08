gsap.registerPlugin(ScrollTrigger);

let circleGsap = gsap
  .timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.cont02',
      pin: false, // pin the trigger element while active
      start: 'top 50%', // when the top of the trigger hits the top of the viewport
      end: '30% 0%', // end after scrolling 500px beyond the start
      scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    },
  })
  .fromTo(
    '.cont02 .circle',
    { width: '0', height: '0', duration: '10', top: '0%' },
    {
      width: '2500px',
      height: '2500px',
      duration: '10',
      top: '0',
    },
    0
  );

let circleTextGsap = gsap
  .timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.cont02 .title',
      pin: false, // pin the trigger element while active
      start: 'top 60%', // when the top of the trigger hits the top of the viewport
      end: '100% 60%', // end after scrolling 500px beyond the start
      scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    },
  })
  .fromTo(
    '.cont02 .title',
    { duration: '5', top: '40%', opacity: '0%' },
    {
      duration: '5',
      top: '60%',
      opacity: '100%',
    },
    0
  );
