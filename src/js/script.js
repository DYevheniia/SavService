// header-line

const headerMenu = document.getElementById("headerMenu"),
    headerSubMenu = document.getElementById("headerSubMenu"),
    recentBg = document.querySelector(".recent-bg"),
    color = [...document.querySelectorAll(".color")]

headerMenu.addEventListener("click", function (e) {
    e.preventDefault()
    let toggleSubMenu = headerSubMenu.classList.toggle("toggleSubMenu")
    if (toggleSubMenu) {
        headerSubMenu.style.display = "block"
        recentBg.style.display = "block"
        color[0].style.color = "#F9B50A"
        for (i = 1; i < color.length; i++) {
            color[i].style.background = "#F9B50A"
        }
    } else {
        headerSubMenu.style.display = "none"
        recentBg.style.display = "none"
    }
})
recentBg.addEventListener("click", function () {
    toggleSubMenu = headerSubMenu.classList.toggle("toggleSubMenu")
    if (toggleSubMenu) {
        headerSubMenu.style.display = "block"
        recentBg.style.display = "block"

    } else {
        headerSubMenu.style.display = "none"
        recentBg.style.display = "none"
    }
})

// header-content

const excavator = [...document.querySelectorAll(".excavator")]
    let excavatorI = 0
    animateElement()
setInterval(() => {
    if (excavatorI == excavator.length-1) {
        excavatorI = 0
    } else {
        excavatorI++
    }
    console.log(excavatorI + " " + excavator.length);
    animateElement();
}, 8000)

function animateElement() {
    excavator[excavatorI].style.right = "50%"  
    excavator[excavatorI].style.transform = "translate(50%, -55%)"
    setTimeout(() => {
        excavator[excavatorI].style.right = "-100%"  
        excavator[excavatorI].style.transform = "translate(100%, -85%) scale(0.5)"
    }, 5000)
}