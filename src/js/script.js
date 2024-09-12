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
            bg.addEventListener("click", function () {
                bg.classList.toggle("feedbackBlock")
                form.classList.toggle("feedbackBlock")
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
            e.preventDefault()
            privacy.classList.toggle("privacyPolicyBlock")
        })
        crossPolicy.forEach(cross => {
            cross.addEventListener("click", function () {
                privacy.classList.toggle("privacyPolicyBlock")
            })
        })
    })
})

// Відкриття політики конфідеційності в попапі в футері

const policyFooter = document.querySelectorAll(".policyFooter"),
    privacyPolicyFooter = document.querySelectorAll(".privacyPolicyFooter"),
    crossPolicyFooter = document.querySelectorAll(".crossPolicyFooter"),
    bgAbsoluteFooter = document.querySelectorAll(".bgAbsoluteFooter")

policyFooter.forEach(footer => {
    privacyPolicyFooter.forEach(PolicyFooter => {
        bgAbsoluteFooter.forEach(bg => {
            footer.addEventListener("click", function (e) {
                e.preventDefault()
                PolicyFooter.classList.toggle("privacyPolicyBlockFooter")
                bg.classList.toggle("bgAbsoluteFooterBlock")
            })
            crossPolicyFooter.forEach(footerCroos => {
                footerCroos.addEventListener("click", () => {
                    bg.classList.toggle("bgAbsoluteFooterBlock")
                    PolicyFooter.classList.toggle("privacyPolicyBlockFooter")
                })
            })
            bg.addEventListener("click", () => {
                bg.classList.toggle("bgAbsoluteFooterBlock")
                PolicyFooter.classList.toggle("privacyPolicyBlockFooter")
            })
        })
    })
})

// Відкриття політики конфідеційності в попапі на сторінці контакти

const policyArrContacts = document.querySelectorAll(".policyContacts"),
    privacyPolicyBlockContacts = document.querySelectorAll(".privacyPolicyContacts"),
    crossPolicyContacts = document.querySelectorAll(".crossPolicyContacts"),
    bgPolicyContact = document.querySelector(".feedbackContacts")
    
policyArrContacts.forEach(policy => {
    privacyPolicyBlockContacts.forEach(privacy => {
        policy.addEventListener("click", function (e) {
            e.preventDefault();
            privacy.classList.toggle("privacyPolicyBlockContacts")
            bgPolicyContact.classList.toggle("feedbackBlockContacts")
        })
        crossPolicyContacts.forEach(cross => {
            cross.addEventListener("click", function () {
                privacy.classList.toggle("privacyPolicyBlockContacts")
                bgPolicyContact.classList.toggle("feedbackBlockContacts")
            })
        })
            
    })
})
privacyPolicyBlockContacts.forEach(privacy => {
    bgPolicyContact.addEventListener("click", () => {
        privacy.classList.toggle("privacyPolicyBlockContacts")
        bgPolicyContact.classList.toggle("feedbackBlockContacts")
    })
})
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
    recentBgBg = document.querySelectorAll(".recent-bg-bg"),
    color = document.querySelectorAll(".color"),
    sparePartsMenu = document.querySelectorAll(".sparePartsMenu"),
    arrowArr = document.querySelectorAll(".arrow"),
    colorA = document.querySelectorAll(".colorA")
    
let recentBg = document.querySelector(".recent-bg")

if (recentBg !== null) {
    headerSubMenu.forEach(subMenu => {
        headerMenu[0].addEventListener("click", function () {
            subMenu.classList.toggle("subMenuBlock")
            for (i = 0; i < color.length; i++) {
                color[i].classList.toggle("colorFocus")
            }
            for (i = 0; i < colorA.length; i++) {
                colorA[i].classList.toggle("colorFocusA")
            }

            recentBg.classList.toggle("recent-bg-click")
        })
        color.forEach(burger => {
            burger.addEventListener("click", function () {
                subMenu.classList.toggle("subMenuBlock")
                for (i = 0; i < color.length; i++) {
                    color[i].classList.toggle("colorFocus")
                }
                for (i = 0; i < colorA.length; i++) {
                    colorA[i].classList.toggle("colorFocusA")
                }
                
                recentBg.classList.toggle("recent-bg-click")
            })
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


// Відкриття сабменю при кліку на стрілочку

const arrowHeader = document.querySelectorAll(".arrow")

arrowHeader.forEach(arrow => {
    arrow.addEventListener("click", function () {
        const sparePartsMenu = arrow.parentElement.nextElementSibling
        sparePartsMenu.classList.toggle("sparePartsMenuBlock")
    })
})

// Регулярка на імʼя, можна вводити лише букви 

const yourName = document.querySelectorAll(".yourName")

yourName.forEach(nameInput => {
    nameInput.addEventListener('input', function(event) {
      const inputValue = this.value;
      const allowedChars = /[^0-9-_+=@#$%^&*(){}/.,?!\s"']/; // Дозволені символи (букви українського та латинського алфавітів)
    
      for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (!allowedChars.test(char)) {
          // Видалити недозволений символ
          this.value = inputValue.slice(0, i) + inputValue.slice(i + 1);
          break; // Зупинити цикл, якщо знайдено недозволений символ
        }
      }
    });
})

// Регулярка для номеру телефону, можна вводити + та та цифри

const yourNumber = document.querySelectorAll(".yourNumber")

yourNumber.forEach(number => {
    number.addEventListener("input", function (e) {
        const inputValue = this.value;
        
        // Перевірка першого символу
        const startsWithPlus = inputValue.startsWith('+');
        
        // Регулярні вирази для перевірки вводу
        const allowedChars = startsWithPlus ? /^\+?\d{0,12}$/ : /^\d{0,10}$/;
        
        // Оновлення значення відповідно до регулярного виразу
        if (!allowedChars.test(inputValue)) {
            this.value = inputValue.slice(0, -1);
        }
    });
});

// Ремонтуємо техніку при кліку на кнопку замовити відкривається попап

const repairOrder = document.querySelectorAll(".repairOrder"),
    orderPopap = document.querySelector(".formContactsAbsolute1"),
    bgAbsoluteOrder = document.querySelectorAll(".bgAbsoluteOrder"),
    crossOrder = document.querySelectorAll(".crossOrder"),
    policyRepair = document.querySelector(".policyRepair"),
    privacyPolicyRepair = document.querySelector(".privacyPolicyRepair"),
    crossPolicyRepair = document.querySelector(".crossPolicyRepair"),
    policyBG = document.querySelector(".policyBG")
    // policyBGBlock

repairOrder.forEach(order => {
    bgAbsoluteOrder.forEach(bg => {
        order.addEventListener("click", function (e) {
            e.preventDefault()
            bg.classList.toggle("repairOrderRecentBgBg")
            orderPopap.classList.toggle("orderPopapBlock")
        })
    })
})
if (privacyPolicyRepair) {
    policyRepair.addEventListener("click", (e) => {
        e.preventDefault()
        privacyPolicyRepair.classList.toggle("privacyPolicyRepairBlock")
        policyBG.classList.toggle("policyBGBlock")
    })
    crossPolicyRepair.addEventListener("click", () => {
        privacyPolicyRepair.classList.toggle("privacyPolicyRepairBlock")
        policyBG.classList.toggle("policyBGBlock")
    })
    policyBG.addEventListener("click", () => {
        privacyPolicyRepair.classList.toggle("privacyPolicyRepairBlock")
        policyBG.classList.toggle("policyBGBlock")
    })
}
crossOrder.forEach(cross => {
    bgAbsoluteOrder.forEach(bg => {
        cross.addEventListener("click", function () {
            bg.classList.toggle("repairOrderRecentBgBg")
            orderPopap.classList.toggle("orderPopapBlock")
        })
        bg.addEventListener("click", function () {
            orderPopap.classList.toggle("orderPopapBlock")
            bg.classList.toggle("repairOrderRecentBgBg")
        })
        
    })
})

// клік на заголовок фільтру відкривається фільтер на весь екран

const filterButton = document.querySelector(".filterButton"),
    form = document.querySelector(".clickForm")

if (filterButton) {
    filterButton.addEventListener("click", function () {
        form.classList.toggle("formBlock")
        filterButton.classList.toggle("marginNone")
    })
}

// Клік по стрілочці у фільтрі

const arrowWrap = document.querySelectorAll(".arrowWrap")

arrowWrap.forEach(arrow => {
    arrow.addEventListener("click", function () {
        sub = arrow.parentElement.nextElementSibling
        sub.classList.toggle("catalogSubBlock")
        const arrRotate = [...arrow.children]
        arrRotate[0].classList.toggle("arrowRotate")
    })
})

// Клік на більше, якщо checkbox менше 5, більше не показується в іншому випадку +2 та скрол

const checkBlock = [...document.querySelectorAll(".checkBlock")],
    more = document.querySelectorAll(".more")

for (i = 0; i < checkBlock.length; i++) {
    if (checkBlock[i].childElementCount <= 5) {
        more[i].style.display = "none"
    }
}
more.forEach(moreButton => {
    moreButton.addEventListener("click", () => {
        moreButton.previousElementSibling.classList.add("moreBlock")
        moreButton.style.display = "none"
    })
})

// слайдер картинок товару
window.addEventListener("load", () => {

    let sliderImage = document.querySelectorAll(".slider-container img"),
        sliderB = document.querySelector("#slider")

    if (sliderImage.length > 0) {
        sliderImage.forEach(img => {
            img.addEventListener("click", () => {
                sliderTouch()
            })
        })
        const slider = new InfinitySlider("#slider", {
            gap: 0,                                
            isArrows: true,                    
            baseCardWidth: "100%"
        });
        slider.init();
        window.onresize = function () {
            slider.init();
            sliderTouch()
        };
        sliderTouch()

        sliderB.addEventListener("touchstart", ()=>{
            sliderTouch()
        })
        sliderB.addEventListener("click", () => {
            sliderTouch()
        })
        const sliderCards = new InfinitySlider("#sliderCards", {
            gap: 20,                                
            isArrows: true,                    
            baseCardWidth: "300rem"
        });
        sliderCards.init();
        sliderTouch()
        window.onresize = function () {
            sliderCards.init();
            sliderTouch()
        };
    }
    // Клфк на маленьку картинку відкривається в великій

})

function sliderTouch () {
    let sliderImage = document.querySelectorAll(".sliderImage img")
        
    const bigSliderImage = document.querySelector(".bigImage img")
    // cardsNoneCliderContainer.height = cardSliderHeight
    sliderImage.forEach(img => {
        img.addEventListener("click", () => {
            srcImage = img.getAttribute("src")
            bigSliderImage.setAttribute("src", srcImage)
        })
        img.height = img.width
    })
}

// Слайдер на головній сторінці(машини)

let excavator = [...document.querySelectorAll(".excavator")]
console.log(excavator);
if (excavator.length > 0){
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
