const page = window.location.pathname //визначити на якій сторінці зараз находимось
// Клік на кнопку зворотній звʼязок, поява попапу та заднього фону

const feedback = document.querySelectorAll(".feedback"),
    formContactsAbsolute = document.querySelectorAll(".formContactsAbsolute"),
    bgAbsolute = document.querySelectorAll(".bgAbsolute"),
    crossForm = document.querySelectorAll(".crossForm")


feedback.forEach(back => {
    formContactsAbsolute.forEach(form => {
        bgAbsolute.forEach(bg => {
            back.addEventListener("click", function (e) {
                e.preventDefault();
                form.classList.toggle("feedbackBlock")
                bg.classList.toggle("feedbackBlock")
            })
            crossForm.forEach(cross => {
                cross.addEventListener("click", function () {
                    form.classList.toggle("feedbackBlock")
                    bg.classList.toggle("feedbackBlock")
                })
            })
        })
    })
})

// Відкриття політики конфідеційності в попапі

const policyArr = document.querySelectorAll(".policy"),
    privacyPolicyBlock = document.querySelectorAll(".privacyPolicy"),
    crossPolicy = document.querySelectorAll(".crossPolicy")

policyArr.forEach(policy => {
    privacyPolicyBlock.forEach(privacy => {
        policy.addEventListener("click", function (e) {
            e.preventDefault();
            privacy.classList.toggle("privacyPolicyBlock")
        })
        crossPolicy.forEach(cross => {
            cross.addEventListener("click", function () {
                privacy.classList.toggle("privacyPolicyBlock")
            })
        })
    })
})

// Відкриття політики конфідеційності в попапі на сторінці контакти
if (page == "/contacts.html") {
    const policyArrContacts = document.querySelectorAll(".policyContacts"),
        privacyPolicyBlockContacts = document.querySelectorAll(".privacyPolicyContacts"),
        crossPolicyContacts = document.querySelectorAll(".crossPolicyContacts")
    
    policyArrContacts.forEach(policy => {
        privacyPolicyBlockContacts.forEach(privacy => {
            bgAbsolute.forEach(bg => {
                policy.addEventListener("click", function (e) {
                    e.preventDefault();
                    privacy.classList.toggle("privacyPolicyBlockContacts")
                    bg.classList.toggle("feedbackBlock")
                })
                crossPolicyContacts.forEach(cross => {
                    cross.addEventListener("click", function () {
                        privacy.classList.toggle("privacyPolicyBlockContacts")
                        bg.classList.toggle("feedbackBlock")
                    })
                })
            })
        })
    })
}

// Клік на кнопку пошук, поява поля вводу(Клік на пошук закриває поле)

const searchBlocksWrap = document.querySelectorAll(".searchBlockWrap"),
    searchArr = document.querySelectorAll(".search"),
    searchButton = document.querySelectorAll(".searchButton")

searchArr.forEach(search => {
    search.addEventListener("click", function () {
        searchBlocksWrap.forEach(searchBlock => {
            searchBlock.classList.toggle("searchBlocksWrapClick")
            searchButton.forEach(button => {
                button.addEventListener("click", function(){
                    searchBlock.classList.toggle("searchBlocksWrapClick")
                })
            })
        })
    })
})

// Відкриття меню

const headerMenu = document.querySelectorAll("#headerMenu"),
    headerSubMenu = document.querySelectorAll("#headerSubMenu"),
    recentBg = document.querySelector(".recent-bg"),
    recentBgBg = document.querySelectorAll(".recent-bg-bg"),
    color = document.querySelectorAll(".color"),
    sparePartsMenu = document.querySelectorAll(".sparePartsMenu"),
    arrowArr = document.querySelectorAll(".arrow"),
    colorA = document.querySelectorAll(".colorA")

if (page == "/index.html" || page == "/") { 
    headerMenu.forEach(menu => {
        headerSubMenu.forEach(subMenu => {
            menu.addEventListener("click", function () {
                subMenu.classList.toggle("subMenuBlock")
                for (i = 0; i < color.length; i++) {
                    color[i].classList.toggle("colorFocus")
                }
                for (i = 0; i < colorA.length; i++) {
                    colorA[i].classList.toggle("colorFocusA")
                }
                
                recentBg.classList.toggle("recent-bg-click")
            })
            recentBg.addEventListener("click", function () {
                recentBg.classList.toggle("recent-bg-click")
                subMenu.classList.toggle("subMenuBlock")
                sparePartsMenu.forEach(spare => {
                    spare.classList.toggle("sparePartsMenuClick")
                })
                arrowArr.forEach(arrow => {
                    arrow.classList.toggle("arrowBottom")
                })
                for (i = 0; i < color.length; i++) {
                    color[i].classList.toggle("colorFocus")
                }
                for (i = 0; i < colorA.length; i++) {
                    colorA[i].classList.toggle("colorFocusA")
                }
            })
            
        })
    })
} else {
    headerMenu.forEach(menu => {
        headerSubMenu.forEach(subMenu => {
            menu.addEventListener("click", function () {
                subMenu.classList.toggle("subMenuBlock")
                for (i = 0; i < color.length; i++) {
                    color[i].classList.toggle("colorFocus")
                }
                for (i = 0; i < colorA.length; i++) {
                    colorA[i].classList.toggle("colorFocusA")
                }
                recentBgBg.forEach(bg => {
                    bg.classList.toggle("recent-bg-bg-click")
                })
            })
            recentBgBg.forEach(bg => {
                bg.addEventListener("click", function () {
                    bg.classList.toggle("recent-bg-bg-click")
                    subMenu.classList.toggle("subMenuBlock")
                    sparePartsMenu.forEach(spare => {
                        spare.classList.toggle("sparePartsMenuClick")
                    })
                    arrowArr.forEach(arrow => {
                        arrow.classList.toggle("arrowBottom")
                    })
                    for (i = 0; i < color.length; i++) {
                        color[i].classList.toggle("colorFocus")
                    }
                    for (i = 0; i < colorA.length; i++) {
                        colorA[i].classList.toggle("colorFocusA")
                    }
                })
            })
        })
    })
}

const absoluteHeight = document.querySelectorAll(".absoluteHeight")

arrowArr.forEach(arrow => {
    sparePartsMenu.forEach(spare => {
        arrow.addEventListener("click", function () {
            arrow.classList.toggle("arrowBottom")
            spare.classList.toggle("sparePartsMenuClick")
            absoluteHeight.forEach(abHeight => {
                abHeight.classList.toggle("abHeight")
            })
        })
    })
})

if (page == "/index.html" || page == "/") {
    const excavator = [...document.querySelectorAll(".excavator")]
        let excavatorI = 0
    
    animateElement()
    setInterval(() => {
        if (excavatorI == excavator.length-1) {
            excavatorI = 0
        } else {
            excavatorI++
        }
        animateElement();
    }, 2500)
    
    function animateElement() {
        excavator[excavatorI].style.right = "50%"  
        excavator[excavatorI].style.transform = "translate(50%, -55%)"
        setTimeout(() => {
            excavator[excavatorI].style.right = "-100%"  
            excavator[excavatorI].style.transform = "translate(100%, -85%) scale(0.5)"
        }, 2400)
    }
}