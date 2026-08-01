(function(){
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', ()=>{
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
    });
  });
})();

(function(){
  const track = document.getElementById('expoTrack');
  const slides = Array.from(track.children);
  const dotsWrap = document.getElementById('expoDots');
  const indexLabel = document.getElementById('expoIndex');
  const caption = document.getElementById('expoCaption');
  const captions = ['Startup kampus dari berbagai jurusan','Robotika & perangkat IoT','Showcase UI/UX mahasiswa','Eksperimen AI & data'];
  let i = 0;

  slides.forEach((_, idx)=>{
    const b = document.createElement('button');
    if(idx===0) b.classList.add('active');
    b.addEventListener('click', ()=> go(idx));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function render(){
    track.style.transform = `translateX(-${i*100}%)`;
    dots.forEach((d, idx)=> d.classList.toggle('active', idx===i));
    indexLabel.textContent = `(${i+1})`;
    caption.textContent = captions[i];
  }
  function go(idx){
    i = (idx + slides.length) % slides.length;
    render();
  }

  document.getElementById('prevBtn').addEventListener('click', ()=> go(i-1));
  document.getElementById('nextBtn').addEventListener('click', ()=> go(i+1));

  // basic swipe support
  let startX = null;
  const viewport = track.parentElement;
  viewport.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
  viewport.addEventListener('touchend', e => {
    if(startX===null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if(Math.abs(dx) > 40) go(dx > 0 ? i-1 : i+1);
    startX = null;
  });

  render();
})();
