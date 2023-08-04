let masterTimeline = gsap.timeline();

const initialization = () => {
  // Initialize a bunch of CSS properties to prepare for scoll magic!
  gsap.set(".narration", {opacity: 0});

  gsap.set(document.querySelectorAll(".scene"), {
    height: '100vh',
    backgroundColor: 'transparent',
    display: 'block'
  })

  gsap.set('#s4 img', {
    width: "auto",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%",
    opacity: 0
  })

  gsap.set('#s4 img:first-child', {opacity: 1})

  gsap.set('#s5', {opacity: 0})
}

const scene0 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#s0",
      scrub: 1,
      pin: ".content-wrapper",
      pinSpacing: false,
    }
  });

  tl.to(['#s0 .content > img', '#s0 .content > h1'], {y: -100, opacity: 0, stagger: 0.1})
    .to('#s0 .content > p', { keyframes:[
                                {y: -300, opacity: 1, duration: 0.5, ease: "power2.inOut"},
                                {y: -500, opacity: 0, duration:0.1}]}, "<0.3")
    .to('.content-wrapper', { backgroundColor: '#0a49b3', ease: "power1.inOut"}, "<")
    .to('#cloud1', {y: "-30%", x: '-30%', opacity: 0.4, ease: "power1.inOut"}, "<")
    .to('#cloud2', {y: "-40%", x: '30%', opacity: 0.3, ease: "power1.inOut"}, "<");

  return tl;
}

const scene1 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#s1',
      scrub: 1,
      start: 'top 70%',
      end: 'bottom top',
      markers: true
    }
  });

  tl.to('.content-wrapper', { backgroundColor: '#000'}) // Think about it: should this tween go to the previous scene, and be a keyframe instead?
    .from('#s1-lamp', {'--clip': "0%"}, "<")
    .from('#s1-speech1', {opacity: 0, top: 20, ease: "power1.inOut"}, "<")
    .from('#s1-speech2', {opacity: 0, top: 20, ease: "power1.inOut", delay: 0.1}, "<")
    .to('#s1', {y: "-70%", ease: "none"}, "<")
    .to('#s1-plant', {x: "-15%"}, "<")

  return tl;
};

const scene2 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#s2',
      scrub: 1,
    }
  });

  tl.to('.content-wrapper', {backgroundColor: "#b7e823"})
    .to('#s2 img', {y: "300"}, ">")

    return tl;
}

const scene3 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#s3',
      scrub: 1
    }
  });

  tl.to('#s3', {y:"-500", duration: 0.1})
    .to('#s3 img', {y: "500"},">")  
    .to('.content-wrapper', {backgroundColor: "#eee1df"}, "<")
    

    return tl;
}

const scene4 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#s4',
      scrub: 1,
    }
  });

  tl.to('.content-wrapper', {backgroundColor: "#eeeedf"})
    .to('#s4 img', {opacity: "0.5", stagger: 0.2},"<")

    return tl;
}



const scene5 = document.querySelector('#s5');
const scene6 = document.querySelector("#s6");
const scene7 = document.querySelector("#s7");




masterTimeline
  .add(initialization())
  .add(scene0())
  .add(scene1())
  .add(scene2())
  .add(scene3())
  .add(scene4());