const container = document.getElementById("container");
const container_height = container.getBoundingClientRect().height;

const background = document.getElementById("background");
const chicken_on_trellis = document.getElementById("chicken-on-trellis");
const tree_trunk = document.getElementById("tree-trunk");
const far_island = document.getElementById("far-island");
const bird_shrine = document.getElementById("bird-shrine");
const chickens = document.getElementById("chickens");

const elephant_god = document.getElementById("elephant-god");
const grass = document.getElementById("grass");
const lizard = document.getElementById("lizard");
const lotus = document.getElementById("lotus");
const pottery = document.getElementById("pottery");


container.addEventListener("scroll", ()=> {
    const baseSpeed = container.scrollTop;
    // tree_trunk.style.transform = `translateY(${baseSpeed *1}px)`; 
    // this makes it staying in place!!!
    
    background.style.transform = `translateY(${baseSpeed *0.80}px)`;

    chicken_on_trellis.style.transform = `translateY(${baseSpeed *0.18}px)`;
    far_island.style.transform = `translateY(${baseSpeed *0.14}px)`;
    chickens.style.transform = `translateY(${baseSpeed *0.17}px)`;
    
    // bird_shrine.style.transform = `translateY(${baseSpeed *0.20}px)`;
    // this image must stay true to its position in order to establish the true length of the container
    // otherwise, we need to make at least one layer that extends to our desired length

    pottery.style.transform = `translateY(${baseSpeed *0.025}px)`;
    lotus.style.transform = `translateY(${baseSpeed *0.07}px)`;
    elephant_god.style.transform = `translateY(${baseSpeed *0.06}px)`;
    lizard.style.transform = `translate(${baseSpeed/200}px, ${baseSpeed*0.01}px)`;

    // console.log("Container top (baseSpeed):", baseSpeed);

});