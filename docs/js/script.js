const feedback=document.querySelectorAll(".feedback"),formContactsAbsolute=document.querySelectorAll(".formContactsAbsolute"),bgAbsolute=document.querySelectorAll(".bgAbsolute"),crossForm=document.querySelectorAll(".crossForm");feedback.forEach((e=>{formContactsAbsolute.forEach((o=>{bgAbsolute.forEach((t=>{e.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("feedbackBlock"),t.classList.toggle("feedbackBlock")})),crossForm.forEach((e=>{e.addEventListener("click",(function(){o.classList.toggle("feedbackBlock"),t.classList.toggle("feedbackBlock")}))})),t.addEventListener("click",(function(){t.classList.toggle("feedbackBlock"),o.classList.toggle("feedbackBlock")}))}))}))}));const policyArr=document.querySelectorAll(".policy"),privacyPolicyBlock=document.querySelectorAll(".privacyPolicy"),crossPolicy=document.querySelectorAll(".crossPolicy");policyArr.forEach((e=>{privacyPolicyBlock.forEach((o=>{e.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("privacyPolicyBlock")})),crossPolicy.forEach((e=>{e.addEventListener("click",(function(){o.classList.toggle("privacyPolicyBlock")}))}))}))}));const policyFooter=document.querySelectorAll(".policyFooter"),privacyPolicyFooter=document.querySelectorAll(".privacyPolicyFooter"),crossPolicyFooter=document.querySelectorAll(".crossPolicyFooter"),bgAbsoluteFooter=document.querySelectorAll(".bgAbsoluteFooter");policyFooter.forEach((e=>{privacyPolicyFooter.forEach((o=>{bgAbsoluteFooter.forEach((t=>{e.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("privacyPolicyBlockFooter"),t.classList.toggle("bgAbsoluteFooterBlock")})),crossPolicyFooter.forEach((e=>{e.addEventListener("click",(()=>{t.classList.toggle("bgAbsoluteFooterBlock"),o.classList.toggle("privacyPolicyBlockFooter")}))})),t.addEventListener("click",(()=>{t.classList.toggle("bgAbsoluteFooterBlock"),o.classList.toggle("privacyPolicyBlockFooter")}))}))}))}));const policyArrContacts=document.querySelectorAll(".policyContacts"),privacyPolicyBlockContacts=document.querySelectorAll(".privacyPolicyContacts"),crossPolicyContacts=document.querySelectorAll(".crossPolicyContacts"),bgPolicyContact=document.querySelector(".feedbackContacts");policyArrContacts.forEach((e=>{privacyPolicyBlockContacts.forEach((o=>{e.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("privacyPolicyBlockContacts"),bgPolicyContact.classList.toggle("feedbackBlockContacts")})),crossPolicyContacts.forEach((e=>{e.addEventListener("click",(function(){o.classList.toggle("privacyPolicyBlockContacts"),bgPolicyContact.classList.toggle("feedbackBlockContacts")}))}))}))})),privacyPolicyBlockContacts.forEach((e=>{bgPolicyContact.addEventListener("click",(()=>{e.classList.toggle("privacyPolicyBlockContacts"),bgPolicyContact.classList.toggle("feedbackBlockContacts")}))}));const searchBlocksWrap=document.querySelectorAll(".searchBlockWrap"),searchArr=document.querySelectorAll(".search"),searchButton=document.querySelectorAll(".searchButton");searchArr.forEach((e=>{e.addEventListener("click",(function(){searchBlocksWrap.forEach((e=>{e.classList.toggle("searchBlocksWrapClick"),searchButton.forEach((o=>{o.addEventListener("click",(function(){e.classList.toggle("searchBlocksWrapClick")}))}))}))}))}));const headerMenu=document.querySelectorAll("#headerMenu"),headerSubMenu=document.querySelectorAll("#headerSubMenu"),recentBgBg=document.querySelectorAll(".recent-bg-bg"),color=document.querySelectorAll(".color"),sparePartsMenu=document.querySelectorAll(".sparePartsMenu"),arrowArr=document.querySelectorAll(".arrow"),colorA=document.querySelectorAll(".colorA");let recentBg=document.querySelector(".recent-bg");null!==recentBg?headerSubMenu.forEach((e=>{headerMenu[0].addEventListener("click",(function(){for(e.classList.toggle("subMenuBlock"),i=0;i<color.length;i++)color[i].classList.toggle("colorFocus");for(i=0;i<colorA.length;i++)colorA[i].classList.toggle("colorFocusA");recentBg.classList.toggle("recent-bg-click")})),color.forEach((o=>{o.addEventListener("click",(function(){for(e.classList.toggle("subMenuBlock"),i=0;i<color.length;i++)color[i].classList.toggle("colorFocus");for(i=0;i<colorA.length;i++)colorA[i].classList.toggle("colorFocusA");recentBg.classList.toggle("recent-bg-click")}))})),recentBg.addEventListener("click",(function(){for(recentBg.classList.toggle("recent-bg-click"),e.classList.toggle("subMenuBlock"),sparePartsMenu.forEach((e=>{e.classList.toggle("sparePartsMenuClick")})),arrowArr.forEach((e=>{e.classList.toggle("arrowRotate")})),i=0;i<color.length;i++)color[i].classList.toggle("colorFocus");for(i=0;i<colorA.length;i++)colorA[i].classList.toggle("colorFocusA")}))})):headerMenu.forEach((e=>{headerSubMenu.forEach((o=>{e.addEventListener("click",(function(){for(o.classList.toggle("subMenuBlock"),i=0;i<color.length;i++)color[i].classList.toggle("colorFocus");for(i=0;i<colorA.length;i++)colorA[i].classList.toggle("colorFocusA");recentBgBg.forEach((e=>{e.classList.toggle("recent-bg-bg-click")}))})),recentBgBg.forEach((e=>{e.addEventListener("click",(function(){for(e.classList.toggle("recent-bg-bg-click"),o.classList.toggle("subMenuBlock"),sparePartsMenu.forEach((e=>{e.classList.toggle("sparePartsMenuClick")})),i=0;i<color.length;i++)color[i].classList.toggle("colorFocus");for(i=0;i<colorA.length;i++)colorA[i].classList.toggle("colorFocusA")}))}))}))}));const arrowHeader=document.querySelectorAll(".arrow");arrowHeader.forEach((e=>{e.addEventListener("click",(function(){const o=e.parentElement.nextElementSibling;e.children,[...e.children].forEach((e=>{e.classList.toggle("arrowRotateBottom")})),o.classList.toggle("sparePartsMenuBlock")}))}));const yourName=document.querySelectorAll(".yourName");yourName.forEach((e=>{e.addEventListener("input",(function(e){const o=this.value,t=/[^0-9-_+=@#$%^&*(){}/.,?!\s"']/;for(let e=0;e<o.length;e++){const c=o[e];if(!t.test(c)){this.value=o.slice(0,e)+o.slice(e+1);break}}}))}));const yourNumber=document.querySelectorAll(".yourNumber");yourNumber.forEach((e=>{e.addEventListener("input",(function(e){const o=this.value;(o.startsWith("+")?/^\+?\d{0,12}$/:/^\d{0,10}$/).test(o)||(this.value=o.slice(0,-1))}))}));const repairOrder=document.querySelectorAll(".repairOrder"),orderPopap=document.querySelector(".formContactsAbsolute1"),bgAbsoluteOrder=document.querySelectorAll(".bgAbsoluteOrder"),crossOrder=document.querySelectorAll(".crossOrder"),policyRepair=document.querySelector(".policyRepair"),privacyPolicyRepair=document.querySelector(".privacyPolicyRepair"),crossPolicyRepair=document.querySelector(".crossPolicyRepair"),policyBG=document.querySelector(".policyBG");repairOrder.forEach((e=>{bgAbsoluteOrder.forEach((o=>{e.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("repairOrderRecentBgBg"),orderPopap.classList.toggle("orderPopapBlock")}))}))})),privacyPolicyRepair&&(policyRepair.addEventListener("click",(e=>{e.preventDefault(),privacyPolicyRepair.classList.toggle("privacyPolicyRepairBlock"),policyBG.classList.toggle("policyBGBlock")})),crossPolicyRepair.addEventListener("click",(()=>{privacyPolicyRepair.classList.toggle("privacyPolicyRepairBlock"),policyBG.classList.toggle("policyBGBlock")})),policyBG.addEventListener("click",(()=>{privacyPolicyRepair.classList.toggle("privacyPolicyRepairBlock"),policyBG.classList.toggle("policyBGBlock")}))),crossOrder.forEach((e=>{bgAbsoluteOrder.forEach((o=>{e.addEventListener("click",(function(){o.classList.toggle("repairOrderRecentBgBg"),orderPopap.classList.toggle("orderPopapBlock")})),o.addEventListener("click",(function(){orderPopap.classList.toggle("orderPopapBlock"),o.classList.toggle("repairOrderRecentBgBg")}))}))}));const filterButton=document.querySelector(".filterButton"),form=document.querySelector(".clickForm");filterButton&&filterButton.addEventListener("click",(function(){form.classList.toggle("formBlock"),filterButton.classList.toggle("marginNone")}));const catalogMenu=document.querySelectorAll(".catalogMenu");let arrowWrap=0;catalogMenu.forEach((e=>{e.nextElementSibling&&(arrowWrap=document.createElement("div"),arrowWrap.classList.add("arrowWrap"),e.appendChild(arrowWrap),arrowSpan=document.createElement("span"),arrowWrap.appendChild(arrowSpan)),arrowWrap=document.querySelectorAll(".arrowWrap")})),0!==arrowWrap&&arrowWrap.forEach((e=>{e.addEventListener("click",(function(){arrowSpan=e.querySelector("span"),arrowSpan.classList.toggle("arrowRotate"),sub=e.parentElement.nextElementSibling,sub.classList.toggle("catalogSubBlock")}))}));let orderButton=document.querySelectorAll(".orderButtonForm"),delivery=document.querySelector('input[name="delivery"]:checked'),payment=document.querySelector('input[name="payment"]:checked');1==orderButton.length&&orderButton[0].addEventListener("click",(function(e){delivery=document.querySelector('input[name="delivery"]:checked'),payment=document.querySelector('input[name="payment"]:checked'),delivery||payment?delivery?payment||(e.preventDefault(),alert("Будь ласка, виберіть спосіб оплати.")):(e.preventDefault(),alert("Будь ласка, виберіть спосіб доставки.")):(e.preventDefault(),alert("Будь ласка, виберіть спосіб доставки та спосіб оплати."))}));const checkBlock=[...document.querySelectorAll(".checkBlock")],more=document.querySelectorAll(".more");for(i=0;i<checkBlock.length;i++)checkBlock[i].childElementCount<=5&&(more[i].style.display="none");function sliderTouch(){let e=document.querySelectorAll(".sliderImage img");const o=document.querySelector(".bigImage img");e.forEach((e=>{e.addEventListener("click",(()=>{srcImage=e.getAttribute("src"),o.setAttribute("src",srcImage),altImage=e.getAttribute("alt"),o.setAttribute("alt",srcImage)})),e.height=e.width}))}more.forEach((e=>{e.addEventListener("click",(()=>{e.previousElementSibling.classList.add("moreBlock"),e.style.display="none"}))})),window.addEventListener("load",(()=>{let e=document.querySelectorAll(".slider-container img"),o=document.querySelector("#slider");if(e.length>0){e.forEach((e=>{e.addEventListener("click",(()=>{sliderTouch()}))}));const t=new InfinitySlider("#slider",{gap:0,isArrows:!0,baseCardWidth:"100%"});t.init(),window.onresize=function(){t.init(),sliderTouch()},sliderTouch(),o.addEventListener("touchstart",(()=>{sliderTouch()})),o.addEventListener("click",(()=>{sliderTouch()}));const c=new InfinitySlider("#sliderCards",{gap:20,isArrows:!0,baseCardWidth:"300rem"});c.init(),sliderTouch(),window.onresize=function(){c.init(),sliderTouch()}}}));let bigSliderImage=document.querySelector(".bigImage img"),popapImage=document.querySelector(".popapImage"),popapImageBg=document.querySelector(".popapImageBg"),popapImageCross=document.querySelector(".popapImageCross"),popapImg=document.querySelector(".popapImage img");null!==bigSliderImage&&(bigSliderImage.addEventListener("click",(()=>{popapImage.classList.toggle("popapImageBlock"),popapImageBg.classList.toggle("popapImageBgBlock"),srcImage=bigSliderImage.getAttribute("src"),altImage=bigSliderImage.getAttribute("alt"),popapImg.setAttribute("src",srcImage),popapImg.setAttribute("alt",altImage)})),popapImageCross.addEventListener("click",(()=>{popapImage.classList.toggle("popapImageBlock"),popapImageBg.classList.toggle("popapImageBgBlock")})),popapImageBg.addEventListener("click",(()=>{popapImage.classList.toggle("popapImageBlock"),popapImageBg.classList.toggle("popapImageBgBlock")})));let excavator=[...document.querySelectorAll(".excavator")];if(excavator.length>0){let e=0;function animateElement(){excavator[e].style.right="50%",excavator[e].style.transform="translate(50%, -55%)",setTimeout((()=>{excavator[e].style.right="-100%",excavator[e].style.transform="translate(100%, -85%) scale(0.5)"}),2400)}animateElement(),setInterval((()=>{e==excavator.length-1?e=0:e++,animateElement()}),2500)}
class InfinitySlider{constructor(t,s={}){this.settings={...InfinitySlider.defaultSettings,...s},this.slider=document.querySelector(t),this.positionCards=0,this.sliderContainer=this.slider.querySelector(".slider-container"),this.sliderCards=this.sliderContainer.children,this.realCardsLength=this.sliderCards.length,this.heightCards=0,this.widthSliderContainer,this.cardsCount,this.widthCards,this.distanceCards,this.cloneCard,this.prevBtnSlider,this.nextBtnSlider,this.sliderInterval,this.maxHeight,this.sliderDots,this.touchPoint}static defaultSettings={gap:0,isArrows:!1,isDots:!1,distanceToDots:0,isAutoplay:!1,autoplaySpeed:3e3,baseCardWidth:null,transitionCard:"all 1s ease-in-out",isEffectFadeOut:!1};init(){if(this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,null==this.settings.baseCardWidth&&(this.settings.baseCardWidth=this.widthSliderContainer),this.slider.querySelectorAll(".clone").forEach((t=>{t.remove()})),localStorage[this.slider.id+"Interval"]&&clearInterval(localStorage[this.slider.id+"Interval"]),this.slider.style.position="relative",this.sliderContainer.style.overflow="hidden",this.sliderContainer.style.position="relative",this.sliderContainer.style.width="100%",this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.distanceCards=this.settings.gap,this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isArrows&&this.creationArrows(),this.prevBtnSlider=this.slider.querySelector(".left.slider_navigation"),this.nextBtnSlider=this.slider.querySelector(".right.slider_navigation"),this.settings.isArrows&&this.sliderCards.length<=this.cardsCount?(this.prevBtnSlider.style.display="none",this.nextBtnSlider.style.display="none"):this.settings.isArrows&&(this.prevBtnSlider.style.display="block",this.nextBtnSlider.style.display="block"),this.settings.isDots&&this.realCardsLength>1){this.creationDots(),this.sliderDots=document.querySelectorAll(".slider-dot");for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].classList.contains("activeFade")&&(this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t].classList.remove("activeFade"));this.sliderDots[0].classList.add("activeFade"),this.sliderCards[0].classList.add("activeFade")}this.settings.isEffectFadeOut||(this.creationClons(),this.shuffleCard()),this.sliderCards=this.sliderContainer.children,this.heightCards=0;for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].style.width=this.widthCards+"px",this.sliderCards[t].style.position="absolute",this.maxHeight=this.sliderCards[t].getBoundingClientRect().height,this.heightCards<this.maxHeight&&(this.heightCards=this.maxHeight),this.sliderCards[t].style.transition="none",setTimeout((()=>{this.sliderCards[t].style.transition=this.settings.transitionCard}),1);this.settings.isDots?this.sliderContainer.style.height=this.heightCards+this.settings.distanceToDots+"px":this.sliderContainer.style.height=this.heightCards+"px",this.sliderDots=document.querySelectorAll(".slider-dot"),this.sliderDots.forEach((t=>{t.onclick=()=>{clearInterval(localStorage[this.slider.id+"Interval"]);for(let t=0;t<this.realCardsLength;t++)this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t].classList.remove("activeFade");this.sliderCards[t.dataset.order].classList.add("activeFade"),t.classList.add("activeFade")}})),this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay(),this.slider.addEventListener("touchend",(()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()})),this.touchSlider=this.touchSlider.bind(this),this.slider.addEventListener("touchstart",(t=>{this.touchPoint=t.touches[0].pageX,this.slider.addEventListener("touchmove",this.touchSlider),clearInterval(localStorage[this.slider.id+"Interval"])})),this.slider.onmouseenter=()=>{clearInterval(localStorage[this.slider.id+"Interval"])},this.slider.onmouseleave=()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()}}creationClons(){let t=1;do{this.cloneCard=this.sliderCards[this.sliderCards.length-t].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("afterbegin",this.cloneCard),this.realCardsLength=this.sliderCards.length-this.slider.querySelectorAll(".clone").length,t++}while(t<=this.realCardsLength&&this.settings.isSlidesToScrollAll);if(this.settings.isSlidesToScrollAll)for(t=0;t<this.realCardsLength;)this.cloneCard=this.sliderCards[t].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("beforeend",this.cloneCard),t++}creationArrows(){if(this.slider.querySelectorAll(".slider_navigation").length<1){this.prevBtnSlider=document.createElement("span"),this.nextBtnSlider=document.createElement("span"),this.prevBtnSlider.className="left slider_navigation",this.nextBtnSlider.className="right slider_navigation",this.slider.insertAdjacentElement("afterbegin",this.prevBtnSlider),this.slider.insertAdjacentElement("beforeend",this.nextBtnSlider);let t=!0;const s=()=>{t=!1,setTimeout((()=>{t=!0}),1e3*parseFloat(this.sliderCards[0].style.transitionDuration))};this.prevBtnSlider.onclick=()=>{t&&(this.changeSlide("left"),s())},this.nextBtnSlider.onclick=()=>{t&&(this.changeSlide("right"),s())}}}creationDots(){if(!this.slider.querySelector(".dots-container")){let t=document.createElement("div");t.style.position="absolute",t.className="dots-container",t.style.bottom="0",this.slider.insertAdjacentElement("beforeend",t);for(let s=0;s<this.realCardsLength;s++){const i=document.createElement("span");i.className="slider-dot",i.dataset.order=s,t.insertAdjacentElement("beforeend",i)}}}shuffleCard(){this.sliderCards=this.sliderContainer.children,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isSlidesToScrollAll&&(this.positionCards=0-(this.distanceCards+this.widthCards)*this.realCardsLength);for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].style.left=this.positionCards+"px",this.positionCards+=this.distanceCards+this.widthCards}changeSlide(t){this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.sliderCards=this.sliderContainer.children;let s=0;for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].classList.contains("activeFade")&&(s=t);if("left"==t)if(this.settings.isSlidesToScrollAll)for(let t=0;t<this.cardsCount;t++)this.sliderContainer.insertAdjacentElement("afterbegin",this.sliderCards[this.sliderCards.length-1]);else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[s].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[s].classList.add("activeFade")),800),this.sliderCards[s].classList.remove("activeFade"),this.sliderDots[s].classList.remove("activeFade"),this.sliderCards[s-1]?s--:s=this.sliderCards.length-1;else{this.sliderCards[this.sliderCards.length-1].remove();let t=this.sliderCards[this.sliderCards.length-1].cloneNode(!0);t.classList.add("clone"),this.sliderContainer.insertAdjacentElement("afterbegin",t),this.sliderCards[1].classList.remove("clone")}else if("right"==t)if(this.settings.isSlidesToScrollAll)for(let t=0;t<this.cardsCount;t++)this.sliderContainer.insertAdjacentElement("beforeend",this.sliderCards[0]);else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[s].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[s].classList.add("activeFade")),800),this.sliderCards[s].classList.remove("activeFade"),this.sliderDots[s].classList.remove("activeFade"),this.sliderCards[s+1]?s++:s=0;else{this.sliderCards[0].remove();let t=this.sliderCards[0].cloneNode(!0);t.classList.add("clone"),this.sliderContainer.insertAdjacentElement("beforeend",t),this.sliderCards[this.sliderCards.length-2].classList.remove("clone")}this.settings.isEffectFadeOut||this.shuffleCard()}startAutoPlay(){if(clearInterval(localStorage[this.slider.id+"Interval"]),this.settings.isEffectFadeOut){let t=0;for(let s=0;s<this.sliderCards.length;s++)this.sliderCards[s].classList.contains("activeFade")&&(t=s);const s=t=>{setTimeout((()=>this.sliderCards[t].classList.add("activeFade")),1e3),setTimeout((()=>this.sliderDots[t].classList.add("activeFade")),1e3)};this.sliderInterval=setInterval((()=>{this.sliderCards[t].classList.remove("activeFade"),this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t+1]?t++:t=0,s(t)}),this.settings.autoplaySpeed)}else this.sliderInterval=setInterval((()=>{this.changeSlide("right")}),this.settings.autoplaySpeed);localStorage[this.slider.id+"Interval"]=this.sliderInterval}touchSlider(t){this.touchPoint+20<t.touches[0].pageX?(this.changeSlide("left"),this.slider.removeEventListener("touchmove",this.touchSlider)):this.touchPoint-20>t.touches[0].pageX&&(this.changeSlide("right"),this.slider.removeEventListener("touchmove",this.touchSlider))}}