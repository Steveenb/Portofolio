// Animasi scroll halus untuk menu navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Animasi fade-in saat section muncul di layar
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // biar animasi hanya sekali
    }
  });
}, { threshold: 0.2 });

// tambahkan class "hidden" default di CSS, lalu observer akan ubah ke "show"
sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Animasi skill progress bar saat terlihat
const skillSections = document.querySelectorAll(".skill .progress");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("style").match(/width:\s*(\d+%)/)[1];
    }
  });
}, { threshold: 0.5 });

skillSections.forEach(bar => {
  let width = bar.style.width; // simpan width asli
  bar.style.width = "0"; // reset ke 0
  skillObserver.observe(bar);
});

// Navbar toggle (mobile)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

