function showTab(id, event, scroll) {
    document.querySelectorAll('.research, .project, .art').forEach(el => {
      el.classList.remove('active');
    });
    document.querySelectorAll('.tab-item').forEach(btn => {
      btn.classList.remove('active');
    });
  
    document.getElementById(id).classList.add('active');
    
    document.querySelector(`.tab-item[onclick*="${id}"]`).classList.add('active');
  
    if (scroll) {
        document.querySelector('.tab-menu').scrollIntoView({ behavior: 'smooth' });
    }
}

showTab('research', { target: document.querySelector('.tab-item')}, false);

document.querySelectorAll('.carousel-container').forEach(container => {
    container.querySelector('#prev').addEventListener('click', () => {
      container.querySelector('.carousel').scrollBy({ left: -300, behavior: 'smooth' });
    });
    container.querySelector('#next').addEventListener('click', () => {
      container.querySelector('.carousel').scrollBy({ left: 300, behavior: 'smooth' });
    });
  });