gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("load", () => {
//     document.querySelector("#preloader").style.cssText = "display:none;";
// });

let leftSection = document.getElementById('leftsection');
let rightSection = document.getElementById('rightsection');
let circularSection = document.getElementById('circularsection');
let p3 = document.getElementById("p3");

let leftSectionColor, circularSectionColor, rightSectionColor;

gsap.to("#p1, #p2, #p3, #p4, #casestudy, #img1", {
    y: 30,
    opacity: 0,
    scrub: 1,
    scrollTrigger: {
        trigger: "#section1",
        scroller: "body",
        start: "top top",
        end: "bottom 10%",
        scrub: true,
        markers: true
    },
})

gsap.to("#img2, #img3", {
    y: 200,
    opacity: 0,
    scrub: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#section1",
        scroller: "body",
        start: "top top",
        end: "bottom 10%",
        scrub: true,
        markers: true
    },
})

gsap.to("#img4", {
    y: 100,
    opacity: 0,
    scrub: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        start: "top top",
        end: "bottom 10%",
        scrub: true,
        markers: true
    },
})
gsap.to("#img5", {
    y: 50,
    opacity: 0,
    scrub: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        start: "top top",
        end: "bottom 10%",
        scrub: true,
        markers: true
    },
})
function scrollAction(scrollPosition) {
    if (scrollPosition < 585 * 1 - 300) {
        leftSectionColor = '#6211a7';
        circularSectionColor = '#6011a5';
        rightSectionColor = '#c6c6c8';
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 1 - 300 && scrollPosition < 585 * 2) {
        leftSectionColor = '#4c27cd';
        circularSectionColor = '#4926cc';
        rightSectionColor = '#1b0361';
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 2 - 300 && scrollPosition < 585 * 3) {
        leftSectionColor = '#0e1139';
        circularSectionColor = '#0d1038';
        rightSectionColor = '#141647';
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 3 - 300 && scrollPosition < 585 * 4) {
        leftSectionColor = '#15253a';
        circularSectionColor = '#142439';
        rightSectionColor = '#0d131a';
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 4 - 300 && scrollPosition < 585 * 5) {
        leftSectionColor = '#114ba0';
        circularSectionColor = '#1356c0';
        rightSectionColor = '#2dcede';
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 5 - 300 && scrollPosition < 585 * 6) {
        leftSectionColor = '#012b91';
        circularSectionColor = '#01298f';
        rightSectionColor = 'url(images/interior.jpg) no-repeat';
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 6 - 300 && scrollPosition < 585 * 7) {
        leftSectionColor = '#00824b';
        circularSectionColor = '#00824b';
        rightSectionColor = '#00b668';
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
}
// window.addEventListener('load', () => {
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    leftSection.style.background = scrollAction(scrollPosition).leftSectionColor;
    circularSection.style.background = scrollAction(scrollPosition).circularSectionColor;
    rightSection.style.background = scrollAction(scrollPosition).rightSectionColor;
    rightSection.style.backgroundSize = 'cover';
});
// });









