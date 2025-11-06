const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
let arrow;
function firstPageAnim () {
    let time = gsap.timeline();
    time.from(".nav", {
        y: "-10",
        opacity: 0, 
        duration: 1.3,
        ease: Expo.easeInOut
    })
    .to(".elem-bonding", {
        y: 0,
        ease: Expo.easeInOut,
        duration:2,
        stagger: .2,
        delay:-1
    })
    .from(".last-headings", {
            y: "-10",
            opacity: 0, 
            duration: 1.3,
            delay:-1,
            ease: Expo.easeInOut
        })
}
var timeout;
function makeMouseScew () {
    var xScale = 1;
    var yScale = 1;

    var xPrev = 0;
    var yPrev = 0;

     window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        var xScale = gsap.utils.clamp(.8, 1.2,  dets.clientX - xPrev)
        var yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - yPrev)

        xPrev = dets.clientX;
        yPrev = dets.clientY;
        
        circleFolwer(xScale, yScale)
       timeout =  setTimeout(function () {
            arrow.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100)
     })
}

function circleFolwer (xScale, yScale) {
    arrow = document.querySelector(".mini-circle");
    window.addEventListener("mousemove", function(dets){
        arrow.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`
    })
}

document.querySelectorAll(".element").forEach(function(elem) {
    elem.addEventListener("mouseleave", function(dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power1.out"
        });
    });
});
document.querySelectorAll(".element").forEach(function(elem) {
    var diffrot;
    var rotate;
    elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power1.out",
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20, 20, diffrot)
        });
    });
});

firstPageAnim();
makeMouseScew();