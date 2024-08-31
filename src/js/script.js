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
    crossPolicyFooter = document.querySelectorAll(".crossPolicyFooter")

policyFooter.forEach(footer => {
    privacyPolicyFooter.forEach(PolicyFooter => {
        footer.addEventListener("click", function (e) {
            e.preventDefault()
            PolicyFooter.classList.toggle("privacyPolicyBlockFooter")
        })
        crossPolicyFooter.forEach(footerCroos => {
            PolicyFooter.classList.toggle("privacyPolicyBlockFooter")
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

// Відкриття сабменю при кліку на стрілочку

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

// Слайдер на головній сторінці(машини)

const excavator = [...document.querySelectorAll(".excavator")]

if (page == "/index.html" || page == "/") {
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
    crossOrder = document.querySelectorAll(".crossOrder")

repairOrder.forEach(order => {
    console.log("femklj");
    bgAbsoluteOrder.forEach(bg => {
        order.addEventListener("click", function (e) {
            e.preventDefault()
            console.log("1");
            bg.classList.toggle("repairOrderRecentBgBg")
            orderPopap.classList.toggle("orderPopapBlock")
        })
    })
})
crossOrder.forEach(cross => {
    bgAbsoluteOrder.forEach(bg => {
        cross.addEventListener("click", function () {
            bg.classList.toggle("repairOrderRecentBgBg")
            orderPopap.classList.toggle("orderPopapBlock")
        })
        bg.addEventListener("click", function () {
            console.log("kdsmflk");
            orderPopap.classList.toggle("orderPopapBlock")
            bg.classList.toggle("repairOrderRecentBgBg")
        })
    })
})

// слайдер картинок товару


// клік на заголовок фільтру відкривається фільтер на весь екран

document.querySelectorAll(".mainMenu > li").forEach(mainLi => {
    // Select the submenu that is immediately following this menu item
    const submenu = mainLi.querySelector(".catalogSubMenu");  
    const arrowSub = mainLi.querySelector("span"); // Assuming the arrow is a span directly inside the li

    if (arrowSub) {
        mainLi.addEventListener("click", function (e) {
            e.preventDefault();
    
            // Toggle visibility of the submenu
            submenu.classList.toggle("catalogSubBlock");
            arrowSub.classList.toggle("arrowRotate");

            // Optionally close other submenus if you want to ensure only one submenu is open at a time
            document.querySelectorAll(".catalogSubMenu").forEach(sub => {
                if (sub !== submenu) {
                    sub.classList.remove("catalogSubBlock");
                }
            });

            // Optionally reset arrow rotation for other items
            document.querySelectorAll(".mainMenu > li span").forEach(span => {
                if (span !== arrowSub) {
                    span.classList.remove("arrowRotate");
                }
            });
        });
    }
});

