/* === Mobile nav toggle === */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
});

/* === original script continues below (scroll-blur, calculator, faq, etc.) === */\/* ——— Mortgage calculator with count-up ——— */
document.getElementById('calc-form').addEventListener('submit', e=>{
  e.preventDefault();
  const P = +prop.value - +dep.value;
  const r = (+rate.value/100)/12;
  const n = +term.value*12;
  const m = (P*r)/(1-Math.pow(1+r,-n));
  const out = document.getElementById('calc-out');
  let t=0, end=Math.round(m);
  out.textContent='';
  out.style.display='block';
  const step = setInterval(()=>{
    t += Math.ceil(end/48);
    if(t>=end){t=end;clearInterval(step);}
    out.textContent = `£${t.toLocaleString('en-GB')} / month`;
  },14);
});

/* ——— FAQ toggles ——— */
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');
  });
});

/* ——— Mobile nav ——— */
const navBtn=document.querySelector('.nav-toggle'), nav=document.querySelector('.nav');
navBtn?.addEventListener('click',()=>nav.classList.toggle('open'));

/* ——— Cookie banner ——— */
const banner=document.getElementById('cookie-banner');
if(!localStorage.getItem('omfCookies')) banner.classList.add('show');
document.getElementById('cookie-accept').addEventListener('click',()=>{
  localStorage.setItem('omfCookies','1');banner.classList.remove('show');
});

/* ——— Lead-form analytic event ——— */
document.getElementById('lead-form').addEventListener('submit',()=>{
  window.dispatchEvent(new Event('leadFormSubmitted'));
});

/* ——— Scroll-reveal ——— */
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target);}
  });
},{threshold:0.15});
document.querySelectorAll('.fade-up').forEach(el=>revealObs.observe(el));

/* —— Navbar glass blur on scroll —— */
const head = document.querySelector('.header');
window.addEventListener('scroll', () => head.classList.toggle('scrolled', window.scrollY > 10));

/* —— Scroll-reveal —— */
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target);}
  });
},{threshold:0.15});
document.querySelectorAll('.fade-up').forEach(el=>revealObs.observe(el));

/* === Cookie consent === */
function getCookie(name){
  return document.cookie.split('; ').find(r=>r.startsWith(name+'='))?.split('=')[1];
}
function setCookie(name,val,days){
  const d=new Date();d.setTime(d.getTime()+days*864e5);
  document.cookie=`${name}=${val};expires=${d.toUTCString()};path=/`;
}

const banner=document.getElementById('cookie-banner');
const acceptBtn=document.getElementById('cookie-accept');

if(!getCookie('ga_consent')){
  document.body.classList.add('show-banner');
}
acceptBtn.addEventListener('click',()=>{
  setCookie('ga_consent','yes',365);
  document.body.classList.remove('show-banner');
  enableTracking();                 // fire GA-4 only after consent
});

