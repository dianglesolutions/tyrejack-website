
(function(){
  const body = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved==='light') body.classList.add('light');
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
  });

  // Carousel
  const track = document.querySelector('.carousel-track');
  if(track){
    const slides = Array.from(track.children);
    const dots = document.querySelectorAll('.carousel .dot');
    let idx = 0;
    function go(i){
      idx = (i+slides.length)%slides.length;
      track.style.transform = `translateX(-${idx*100}%)`;
      dots.forEach((d,j)=>d.classList.toggle('active', j===idx));
    }
    let timer = setInterval(()=>go(idx+1), 4000);
    track.addEventListener('pointerdown', (e)=>{
      clearInterval(timer);
      const startX = e.clientX;
      function onMove(ev){ if(ev.clientX - startX > 40) go(idx-1); else if(startX-ev.clientX>40) go(idx+1);}
      function onUp(){ window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); timer=setInterval(()=>go(idx+1),4000); }
      window.addEventListener('pointermove', onMove); window.addEventListener('pointerup', onUp);
    });
  }

  // Booking form submit
  const form = document.getElementById('bookingForm');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      if(!data.name || !data.phone){
        alert('Please enter your name and phone.'); return;
      }
      try{
        const res = await fetch('/api/booking', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)});
        const j = await res.json();
        alert(j.message || 'Request received!');
        form.reset();
      }catch(err){
        alert('Could not submit right now. Please call 8000TYRE.');
      }
    });
  }
})();
