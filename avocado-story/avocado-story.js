let speed = 100;

// Hide a bunch of things before the story starts
gsap.set('#scene0 .content > p', {opacity: 0});


// Scene 0
let scene0 = gsap.timeline();
ScrollTrigger.create({
  animation: scene0,
  trigger: '.content-wrapper',
  start: 'top top',
  end: '15% 100%',
  scrub: 1,
  pin: '#scene0',
  pinSpacing: false,
});

scene0.to('#scene0 .content > img', { y: -1 * speed, opacity: 0  }, 0);
scene0.to('#scene0 .content > h1', { y: -2 * speed, opacity: 0  }, 0);
scene0.to('#scene0 .content > p', { 
    keyframes:[{y: -3 * speed, opacity: 1},{y: -3.5 * speed, opacity: 0}]  
}, 0);

scene0.to('.content-wrapper', {
    keyframes: [{backgroundColor: '#0a49b3'}, {backgroundColor: '#000'}]
}, 0.3);
scene0.to('#cloud1', {y: -0.5 * speed, x: '-30%', opacity: 0.4}, 0);
scene0.to('#cloud2', {y: -1 * speed, x: '30%', opacity: 0.3}, 0);
