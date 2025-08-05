#!/usr/bin/env bash
set -e
mkdir -p css js

# tokens.css (only if missing)
if [ ! -f css/tokens.css ]; then cat > css/tokens.css <<'TOK'
:root{--mint:#D4F5E5;--sea:#5AC8A0;--charcoal:#1E1E1E;--off:#FAFAFA;--lime:#C6FF00;
  font-family:'Inter',system-ui,sans-serif;}
*,*::before,*::after{box-sizing:border-box;margin:0}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none}}
TOK
fi

# UI styles (truncated for demo)
cat > css/style.css <<'CSS'
.brand-bar{background:var(--charcoal);height:64px;display:flex;align-items:center}
/* …paste the rest of style.css content here… */
CSS

# JS
cat > js/main.js <<'JS'
document.addEventListener('DOMContentLoaded',()=>{const r=document.querySelector('.ribbon');
  window.addEventListener('scroll',()=>{window.scrollY>window.innerHeight/2?
    r.classList.add('show-ribbon'):r.classList.remove('show-ribbon');});
  document.getElementById('year').textContent=new Date().getFullYear();});
JS
