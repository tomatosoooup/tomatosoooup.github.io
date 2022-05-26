// functions for links
$(document).ready(function(){
    $('.carousel_inner').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        speed: 800,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover:true,
    });
    $("#menu_").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 400);
    });
    $("#change-slider").on("click","a", function (event) {
		event.preventDefault();
    let id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);

	});
});

// functions for popup
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0){
    for(let index = 0; index < popupLinks.length; index++){
        const popupLink=popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupName=popupLink.getAttribute('href').replace('#','');
            const curentPopup=document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon=document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
    for(let index = 0; index < popupCloseIcon.length; index++){
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive){
            popupClose(popupActive, false);
        }   else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function(e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock(){
    const lockPaddingValue = window.innerWidth - document.querySelector(".popup-wrapper").offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for(let index = 0; index < lockPadding.length; index++){
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock(){
    setTimeout(function(){
        if (lockPadding.length > 0) {
        for(let index = 0; index < lockPadding.length; index++){
            const el=lockPadding[index];
            el.style.paddingRight='0px';
        }
    }
        body.style.paddingRight ='0px';
        body.classList.remove('lock');
    }, timeout);

    unlock=false;
    setTimeout(function(){
        unlock=true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

// Кнопки
const changeFormSignIn = document.querySelector('#signIn-span') //active
const changeFormSignUp = document.querySelector('#signUp-span') //inactive
// Формы
const formSignIn = document.querySelector('#formIn') //active
const formSignUp = document.querySelector('#formUp') //inactive

function changeSignIn(){
    if (changeFormSignIn){
        // Работа с формами
        formSignIn.classList.remove('form__signin__fade')
        formSignIn.classList.add('form__signin')
        formSignUp.classList.remove('form__signup')
        formSignUp.classList.add('form__signup__fade')
        // Работа с кнопками
        changeFormSignIn.classList.remove('signin-inactive')
        changeFormSignIn.classList.add('signin-active')
        changeFormSignUp.classList.remove('signup-active')
        changeFormSignUp.classList.add('signup-inactive')
    }
}
function changeSignUp(){
    if (changeFormSignUp){
        // Работа с формами
        formSignUp.classList.remove('form__signup__fade')
        formSignUp.classList.add('form__signup')
        formSignIn.classList.remove('form__signin')
        formSignIn.classList.add('form__signin__fade')
        // Работа с кнопками
        changeFormSignUp.classList.remove('signup-inactive')
        changeFormSignUp.classList.add('signup-active')
        changeFormSignIn.classList.remove('signin-active')
        changeFormSignIn.classList.add('signin-inactive')
    }
}