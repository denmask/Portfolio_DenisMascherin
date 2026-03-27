const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0; 
let ringX  = 0, ringY  = 0;  

document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;

  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';

  requestAnimationFrame(animateRing);
}

animateRing();

const nav       = document.getElementById('main-nav');
const scrollBtn = document.getElementById('scroll-top');
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  nav.classList.toggle('scrolled', scrollY > 40);
  scrollBtn.classList.toggle('visible', scrollY > 400);
  let currentSection = '';
  sections.forEach(function(section) {
    if (scrollY >= section.offsetTop - 120) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(function(link) {
    const isActive = link.getAttribute('href') === '#' + currentSection;
    link.style.color = isActive ? 'var(--ink)' : '';
  });
});

scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(function(el) {
  observer.observe(el);
});

const techs = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
  'Figma', 'C#', 'Dart', 'Flutter', 'Blazor',
  'PostgreSQL', 'MSSQL', 'UX/UI', 'Testing',
  'GDPR', 'Google Suite', 'Git', 'Responsive Design'
];

const strip = document.getElementById('techStrip');
const doubled = [...techs, ...techs];

strip.innerHTML = doubled
  .map(function(tech) {
    return '<span class="tech-pill">' + tech + '</span>';
  })
  .join('');

document.querySelectorAll('.hero-title .line').forEach(function(line, index) {
  line.style.animation = 'fadeUp 0.8s ' + (0.05 * index) + 's cubic-bezier(0.16, 1, 0.3, 1) both';
});