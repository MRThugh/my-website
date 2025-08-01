// script.js

// نمایش انیمیشن fade-in هنگام اسکرول
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fade => {
  observer.observe(fade);
});

// تغییر حالت تاریک/روشن با دکمه سوییچ

const toggle = document.getElementById('toggle-darkmode');

// چک کردن تم ذخیره شده و اعمال آن هنگام بارگذاری صفحه
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
});

const progressBars = document.querySelectorAll('.progress');

const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target;
      const value = progress.getAttribute('data-progress');
      progress.style.width = value;
      progressObserver.unobserve(progress);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));

function showToast() {
  const toast = document.getElementById("welcomeToast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 6000);
}

function closeToast() {
  document.getElementById("welcomeToast").classList.remove("show");
}

window.addEventListener("load", () => {
  setTimeout(showToast, 2000);
});

const textArray = [
  "من علی کامرانی هستم",
  "برنامه‌نویس و علاقه‌مند به طراحی",
  "متخصص تولید محتوای دیجیتال",
  "آماده‌ی یادگیری و چالش‌های جدید!"
];

let currentText = 0;
let currentChar = 0;
const typingElement = document.getElementById("typing-text");

function type() {
  if (currentChar < textArray[currentText].length) {
    typingElement.textContent += textArray[currentText].charAt(currentChar);
    currentChar++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (currentChar > 0) {
    typingElement.textContent = textArray[currentText].substring(0, currentChar - 1);
    currentChar--;
    setTimeout(erase, 40);
  } else {
    currentText = (currentText + 1) % textArray.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});

const feedbackForm = document.getElementById("feedback-form");
const feedbackMsg = document.getElementById("feedback-success");

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();
  feedbackMsg.classList.remove("hidden");
  feedbackForm.reset();

  setTimeout(() => {
    feedbackMsg.classList.add("hidden");
  }, 4000);
});


  const MIN_DISPLAY_TIME = 2000; // حداقل زمان نمایش ۲ ثانیه
  const startTime = Date.now();

  window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    const timeSpent = Date.now() - startTime;
    const delay = Math.max(0, MIN_DISPLAY_TIME - timeSpent);

    setTimeout(() => {
      if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500); // هماهنگ با transition
      }
    }, delay);
  });

