//pagetop
const page = document.querySelector('#js-page');

page.addEventListener('click', scroll_to_top);
function scroll_to_top(){
    window.scroll({top:0, behavior:'smooth'})
};

window.addEventListener('scroll', scroll_event);

function scroll_event(){
    if(window.pageYOffset < 200){
        page.style.opacity = '0';
    }else if(window.pageYOffset > 200){
        page.style.opacity = '1';
    };
};

//fadeIn
window.onload=function(){
    const scroll = document.querySelectorAll('#js-fadeIn');
     
    const Animation = function() {
      for(var i = 0; i < scroll.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
      scroll[i].classList.add('active');
      };
      };
      };
      window.addEventListener('scroll', Animation);
    };

//header
const background = document.querySelector('#js-background');

window.addEventListener('scroll', scroll_event);

function scroll_event(){
    if(window.pageYOffset < 80){
        background.classList.remove('background-color');
    }else if(window.pageYOffset > 80){
        background.classList.add('background-color')};
};

//ハンバーガーメニュー
const ham = document.querySelector('#js-hamburger');
const gnav = document.querySelector('#js-nav');

let done = true;
ham.addEventListener('click', () =>{
    gnav.classList.add('active');
    setTimeout(() => {
        done = false;
    },100)
});
document.addEventListener('click', () =>{
    if(done === false) {
        gnav.classList.remove('active');
        setTimeout(() => {
            done = true;
        },100);
    };
});
