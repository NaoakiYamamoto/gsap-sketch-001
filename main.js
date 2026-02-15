gsap.set(".word", { opacity: 1 });

const tl = gsap.timeline();

tl.from(".word", {
    y: 18,
    opacity: 0,
    duration: 0.9,
    ease: "power1.out"
})
    .to(".word", {
        y: 18,
        opacity: 0,
        duration: 0.9,
        delay: 0.6,
        ease: "power1.in"
    });
