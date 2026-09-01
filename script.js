
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal, section > *, article').forEach(el => {
  if(!el.classList.contains('hero-image')) { el.classList.add('reveal'); io.observe(el); }
});
