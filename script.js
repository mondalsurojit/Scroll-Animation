let leftSection = document.getElementById('leftsection');
let rightSection = document.getElementById('rightsection');
let circularSection = document.getElementById('circularsection');
let p3 = document.getElementById("p3");

let leftSectionColor = "";
let circularSectionColor = "";
let rightSectionColor = "";

window.addEventListener('scroll', function (event) {
    let scrollPosition = window.scrollY;
    leftSection.style.backgroundColor = scrollAction(scrollPosition).leftSectionColor;
    circularSection.style.backgroundColor = scrollAction(scrollPosition).circularSectionColor;
    rightSection.style.backgroundColor = scrollAction(scrollPosition).rightSectionColor;
});

function scrollAction(scrollPosition) {
    if (scrollPosition < 585 * 1) {
        leftSectionColor = '#6211a7';
        circularSectionColor = '#6011a5';
        rightSectionColor = '#c6c6c8';
        p3.innerHTML = "ABC 123";
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 1 && scrollPosition < 585 * 2) {
        leftSectionColor = '#4c27cd';
        circularSectionColor = '#4926cc';
        rightSectionColor = '#1b0361';
        p3.innerHTML = "ABC 234";
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 2 && scrollPosition < 585 * 3) {
        leftSectionColor = '#0e1139';
        circularSectionColor = '#0d1038';
        rightSectionColor = '#141647';
        p3.innerHTML = "ABC 345";
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 3 && scrollPosition < 585 * 4) {
        leftSectionColor = '#15253a';
        circularSectionColor = '#142439';
        rightSectionColor = '#0d131a';
        p3.innerHTML = "ABC 456";
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 4 && scrollPosition < 585 * 5) {
        leftSectionColor = '#114ba0';
        circularSectionColor = '#1356c0';
        rightSectionColor = '#2dcede';
        p3.innerHTML = "ABC 567";
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 5 && scrollPosition < 585 * 6) {
        leftSectionColor = '#012b91';
        circularSectionColor = '#01298f';
        rightSectionColor = '#000000';
        p3.innerHTML = "ABC 678";
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
    else if (scrollPosition > 585 * 6 && scrollPosition < 585 * 7) {
        leftSectionColor = '#00824b';
        circularSectionColor = '#00824b';
        rightSectionColor = '#00b668';
        p3.innerHTML = "ABC 23478";
        return { leftSectionColor, circularSectionColor, rightSectionColor };
    }
}

// function animation1() {
gsap.from(p3, {
    y: 30,
    opacity: 0,
    delay: 1,
})
gsap.from("#img2, #img3", {
    y: 100,
    opacity: 0,
    delay: 1,
    stagger: 0.2
})

// scrollTrigger: {
//     trigger: "#p3",
//     scroller: "body",
//     start: "top 10%",
//     end: "bottom 80%",
//     scrub: true
// },
