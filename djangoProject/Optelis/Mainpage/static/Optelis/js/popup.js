﻿const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
const lockPaddingTwo = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup, popupLink);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup, popupLink) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add("open");
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
  let parent = popupLink.parentNode; // родительский блок ссылки
  document.querySelector(".popup__content").innerHTML = ""; // очищаю содержимое попапа
  let popup__elem = document.querySelector(".popup__content").innerHTML; // получаю содержимое (пустое)
  document.querySelector(".popup__content").innerHTML =
    popup__elem + parent.innerHTML;
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth -
    document.querySelector(".popup-wrapper").offsetWidth +
    "px";

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

// второй попап
const popupLinksTwo = document.querySelectorAll(".popup-link-2");

let unlockTwo = true;

const timeoutTwo = 800;

if (popupLinksTwo.length > 0) {
  for (let index = 0; index < popupLinksTwo.length; index++) {
    const popupLinkTwo = popupLinksTwo[index];
    popupLinkTwo.addEventListener("click", function (e) {
      const popupNameTwo = popupLinkTwo.getAttribute("href").replace("#", "");
      const currentPopupTwo = document.getElementById(popupNameTwo);
      popupOpenTwo(currentPopupTwo);
      e.preventDefault();
    });
  }
}

const popupCloseIconTwo = document.querySelectorAll(".close-popup2");
if (popupCloseIconTwo.length > 0) {
  for (let index = 0; index < popupCloseIconTwo.length; index++) {
    const el = popupCloseIconTwo[index];
    el.addEventListener("click", function (e) {
      popupCloseTwo(el.closest(".popup2"));
      e.preventDefault();
    });
  }
}

function popupOpenTwo(currentPopupTwo) {
  if (currentPopupTwo && unlockTwo) {
    const popupActiveTwo = document.querySelector(".popup2.open2");
    if (popupActiveTwo) {
      popupCloseTwo(popupActiveTwo, false);
    } else {
      bodyLock();
    }
    currentPopupTwo.classList.add("open2");
    currentPopupTwo.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content2")) {
        popupCloseTwo(e.target.closest(".popup2"));
      }
    });
  }
}

function popupCloseTwo(popupActiveTwo, doUnlockTwo = true) {
  if (unlockTwo) {
    popupActiveTwo.classList.remove("open2");
    if (doUnlockTwo) {
      bodyUnLockTwo();
    }
  }
}

function bodyLockTwo() {
  const lockPaddingValueTwo =
    window.innerWidth -
    document.querySelector(".popup-wrapper2").offsetWidth +
    "px";

  if (lockPaddingTwo.length > 0) {
    for (let index = 0; index < lockPaddingTwo.length; index++) {
      const el = lockPaddingTwo[index];
      el.style.paddingRight = lockPaddingValueTwo;
    }
  }
  body.style.paddingRight = lockPaddingValueTwo;
  body.classList.add("lockTwo");

  unlockTwo = false;
  setTimeout(function () {
    unlockTwo = true;
  }, timeoutTwo);
}

function bodyUnLockTwo() {
  setTimeout(function () {
    if (lockPaddingTwo.length > 0) {
      for (let index = 0; index < lockPaddingTwo.length; index++) {
        const el = lockPaddingTwo[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
    body.classList.remove("lockTwo");
  }, timeout);

  unlockTwo = false;
  setTimeout(function () {
    unlockTwo = true;
  }, timeoutTwo);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
    const popupActiveTwo = document.querySelector(".popup2.open2");
    popupCloseTwo(popupActiveTwo);
  }
});
