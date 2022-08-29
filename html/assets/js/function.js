"use strict";
/** 브라우저의 스크린 Height 값을 구함 : 로그인, 회원가입 레이아웃에 사용
function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', () => setScreenSize());
*/

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


/* 영상 설명 More & Less */
class readMore {
  constructor() {
      this.content = '.readmore__content';
      this.buttonToggle = '.readmore__toggle';
  }
  
  moreEl() {
      this.setNodes();
      this.init();
      this.addEventListeners();
  }
  
  setNodes() {
      this.nodes = {
          contentToggle: document.querySelector(this.content)
      };
      this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
  }
  
  init() {
      const { contentToggle } = this.nodes;
      this.stateContent = contentToggle.innerHTML;
      contentToggle.innerHTML = `${this.stateContent.substring(0, 250)}...`;
  }

  addEventListeners() {
      this.buttonToggle.addEventListener('click', this.onClick.bind(this))
  }

  onClick(event) {
      const targetEvent = event.currentTarget;
      const { contentToggle } = this.nodes

      if (targetEvent.getAttribute('aria-checked') === 'true') {
          targetEvent.setAttribute('aria-checked', 'false')
          contentToggle.innerHTML = this.stateContent;
          this.buttonToggle.innerHTML = '설명 줄이기 <i class="icon arrow-up"></i>';
      } else {
          targetEvent.setAttribute('aria-checked', 'true')
          contentToggle.innerHTML = `${this.stateContent.substring(0, 250)}...`;
          this.buttonToggle.innerHTML = '설명 더보기 <i class="icon arrow-down"></i>';
          window.scrollTo({top: 0, behavior:'smooth'});
      }
  }
}

const readmoreCont = document.querySelector(".readmore__content");
if (readmoreCont) {
  const initReadMore = new readMore();
  initReadMore.moreEl();
}


/* 검색 필터 Drop Down */
const label = document.querySelectorAll('.filter-dropdown__label');
label.forEach(function(lb){
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.filter-dropdown__item');
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