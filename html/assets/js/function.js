"use strict";
let sbartrigger = document.querySelector('.js-drawer-trigger');
let sbarclose = document.querySelector('.js-drawer-close');
let sidebar = document.querySelector('.sidebar');
let dimlayer = document.querySelector('.dim-layer');

if(sidebar){
  let classOpen = [sidebar, dimlayer];

  sbartrigger.addEventListener('click', function(e){
    classOpen.forEach(e => e.classList.add('is-active'));
    document.body.classList.add('overflow-hidden');
  });

  let classCloseClick = [dimlayer, sbarclose];
  classCloseClick.forEach(function(el) {
    el.addEventListener('click', function(els) {
      classOpen.forEach(els => els.classList.remove('is-active'));
      document.body.classList.remove('overflow-hidden');
    });
  });
}


/* 펼침 */
let elToggle = document.getElementsByClassName('js-showhide');

for(var i=0; i<elToggle.length; i++){
  elToggle[i].nextElementSibling.style.display = "none";

  elToggle[i].addEventListener('click', function(){
    let targetEl = this.nextElementSibling
    if (targetEl.style.display=='block') {
      targetEl.style.display='none';
    }
    else {
      targetEl.style.display='block';
    }
    
    let previousEl = targetEl.previousElementSibling
    previousEl.classList.toggle('is-open')
    
  })
}


/* 커스텀 셀렉트 */
const label = document.querySelectorAll('.select-dropdown__label');
label.forEach(function(lb){
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.select-dropdown__item');
        clickLabel(lb, optionItems);
    })
});
const clickLabel = (lb, optionItems) => {
    if(lb.parentNode.classList.contains('expanded')) {
        lb.parentNode.classList.remove('expanded');
        optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('expanded');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('expanded');
}


/* 모달 테스트용 */
let modal = document.getElementById('modal');
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";  
}


/* 비밀번호 Show & Hide */
var parentForm = document.querySelector(".form");

function pwShow(input, showText) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    showText.classList.add('expanded');
  } else {
    input.setAttribute("type", "password");
    showText.classList.remove('expanded');
  }
}

if(parentForm){
  parentForm.addEventListener("click", event => {
    if (event.target.matches('.js-pwToggle')) {
      var btnElm = event.target;
      var inputElm = btnElm.previousElementSibling;
      pwShow(inputElm, btnElm);
    }
  });
}