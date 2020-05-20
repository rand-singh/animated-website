let controller, slideScene;

function animateSlides() {
  // init controller
  controller = new ScrollMagic.Controller();

  // select elements
  const sliders = document.querySelectorAll(".slide"),
    nav = document.querySelector(".nav-header");

  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img"),
      img = slide.querySelector("img"),
      revealText = slide.querySelector(".reveal-text");

    //gsap
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });

    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlides();
