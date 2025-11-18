// Resalta el enlace del nav correspondiente a la sección visible
document.addEventListener('DOMContentLoaded', function(){
  const navLinks = Array.from(document.querySelectorAll('nav a'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  if('IntersectionObserver' in window){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const id = entry.target.id;
          navLinks.forEach(a=>{
            a.classList.toggle('active', a.getAttribute('href') === '#'+id);
          });
        }
      });
    },{threshold:0.5});

    sections.forEach(s=>observer.observe(s));
  } else {
    // Fallback sencillo: on scroll compare positions
    const onScroll = ()=>{
      const scrollPos = window.scrollY + (window.innerHeight/3);
      sections.forEach(section=>{
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.id;
        navLinks.forEach(a=>{
          a.classList.toggle('active', (scrollPos >= top && scrollPos < bottom) && a.getAttribute('href') === '#'+id);
        });
      });
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Improve keyboard focus: ensure anchors are focusable
  navLinks.forEach(a=>a.addEventListener('click', ()=>{ a.focus(); }));
});
