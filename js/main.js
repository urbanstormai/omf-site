document.addEventListener('DOMContentLoaded',()=>{const r=document.querySelector('.ribbon');
  window.addEventListener('scroll',()=>{window.scrollY>window.innerHeight/2?
    r.classList.add('show-ribbon'):r.classList.remove('show-ribbon');});
  document.getElementById('year').textContent=new Date().getFullYear();});
