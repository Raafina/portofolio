// navbar
const header = document.querySelector('header');
const fixNav = header.offsetTop;
const toTop = document.querySelector('#toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > fixNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
});

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// click outside hamburger
window.addEventListener('click', (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// dark mode
const html = document.documentElement;
const darkToggle = document.getElementById('darkToggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

function updateTheme(isDark) {
  if (isDark) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  }
}

// Cek localStorage untuk mode sebelumnya
const isDarkMode =
  localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

darkToggle.checked = isDarkMode;
updateTheme(isDarkMode);

// Event listener untuk toggle
darkToggle.addEventListener('change', () => {
  updateTheme(darkToggle.checked);
});

// send email
const apiURL = 'https://formspree.io/f/xjkgaakp';
document
  .getElementById('contactForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const messageBox = document.getElementById('formMessage');

      if (response.ok) {
        messageBox.innerHTML = '✅ Message sent successfully!';
        messageBox.classList.add('text-green-600');
        form.reset();
      } else {
        messageBox.innerHTML = '❌ Message failed to send.';
        messageBox.classList.add('text-red-600');
      }
    } catch (error) {
      document.getElementById('formMessage').innerHTML =
        '❌ Something wrong. Try Again';
      document.getElementById('formMessage').classList.add('text-red-600');
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', function () {
      const accordionItem = this.parentElement;
      accordionItem.classList.toggle('active');
    });
  });
});
