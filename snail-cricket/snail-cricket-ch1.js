// Animating the shaken scene
let shaken = gsap.timeline({
    defaults: {
        ease: "elastic.out(2, 0.1)",
        yoyo: true,
        repeat: 1,
    }
});

let ch1Sn1DisturbedSleep = shaken.to('#sn01_disturbed_sleep', {backgroundColor: '#fff'})
                             .to('#sn01_disturbed_sleep .onoma', {scale: 1.5}, "<")
                             .to('#sn01_disturbed_sleep .main', {rotation: 20}, "<");

ScrollTrigger.create({
    animation: ch1Sn1DisturbedSleep,
    trigger: '#sn01_disturbed_sleep',
    start: 'top 75%',
    end: 'top 20%',
    scrub: true
});

gsap.set('#sn03_disturbed_tea .main', {opacity: 0});
let ch1Sn3DisturbedTea = shaken.to('#sn03_disturbed_tea', {backgroundColor: '#d0b862'})
                           .to('#sn03_disturbed_tea .onoma', {scale: 1.5}, "<")
                           .to('#sn03_disturbed_tea .main', {rotation: 15, opacity: 1}, "<");

ScrollTrigger.create({
    animation: ch1Sn3DisturbedTea,
    trigger: '#sn03_disturbed_tea',
    start: 'top 85%',
    end: 'bottom 60%',
    scrub: true
});

// Animating the dialog
gsap.set(document.querySelectorAll('#sn06_first_contact .dialog'), {opacity: 0});

let ch1sn6FirstContact = gsap.timeline({
    scrollTrigger: {
        trigger: '#sn06_first_contact',
        start: "top 35%",
    }
});

ch1sn6FirstContact.to('#ch1_sn06_pn00_2', {opacity: 1, y: 130, rotate: 2, ease: "bounce"})
                .to('#ch1_sn06_pn00_3', {opacity: 1, y: 120, rotation: 5, ease: "bounce"}, ">")
                .to('#ch1_sn06_pn00_4', {opacity: 1, x: 40}, ">0.75");

const finalDialog = document.querySelectorAll('#sn07 .dialog');
gsap.from(finalDialog, {
    scrollTrigger: '#ch1_sn07_pn01 .dialog', 
    opacity: 0, y: -30, stagger: 1
});