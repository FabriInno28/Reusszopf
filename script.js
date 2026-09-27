const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected','true');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

const modal = document.querySelector('.modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');

function openModal(type){
  if(type === 'gewerbe'){
    modalTitle.textContent = 'Interesse an dieser Gewerbefläche?';
    modalDescription.textContent = 'Diese Fläche wird durch die Baugenossenschaft Reussbühl vermietet. Sprechen Sie mit uns über Ihre Pläne und erfahren Sie mehr über die Möglichkeiten an diesem Standort.';
    modalLink.innerHTML = 'Zur Gewerbefläche <span>→</span>';
  } else {
    modalTitle.textContent = 'Interesse an dieser Wohnung?';
    modalDescription.textContent = 'Diese Wohnung wird durch die Baugenossenschaft Reussbühl vermietet. Bei Fragen oder für die Bewerbung erreichen Sie uns direkt.';
    modalLink.innerHTML = 'Zur Bewerbung <span>→</span>';
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

document.querySelectorAll('[data-modal]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.modal)));
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
modalLink.addEventListener('click', e => e.preventDefault());
