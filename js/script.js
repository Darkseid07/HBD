// ==================== OPENING SCREEN SEQUENCE ====================
document.addEventListener('DOMContentLoaded', () => {
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');
  const line4 = document.getElementById('line4');
  const openBtn = document.getElementById('open-surprise');
  const openingScreen = document.getElementById('opening-screen');
  const mainContent = document.getElementById('main-content');

  // Sequence of reveals
  setTimeout(() => line1.classList.add('visible'), 400);
  setTimeout(() => line2.classList.add('visible'), 1600);
  setTimeout(() => line3.classList.add('visible'), 3000);
  setTimeout(() => line4.classList.add('visible'), 4500);
  setTimeout(() => openBtn.classList.add('visible'), 5800);

  // Open the surprise
  openBtn.addEventListener('click', () => {
    openingScreen.style.transition = 'opacity 1s ease, transform 1s ease';
    openingScreen.style.opacity = '0';
    openingScreen.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
      openingScreen.classList.add('hidden');
      mainContent.classList.remove('hidden');
      // Force reflow then fade in
      void mainContent.offsetWidth;
      mainContent.classList.add('visible');
      
      // Start observing sections for scroll animations
      initScrollReveal();
      
      // Soft scroll to top of main content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  });

  // Love cards interaction
  initLoveCards();
});

// ==================== LOVE CARDS POPUP ====================
function initLoveCards() {
  const cards = document.querySelectorAll('.love-card');
  const popup = document.getElementById('love-message-popup');
  const popupText = document.getElementById('love-popup-text');
  const closeBtn = document.querySelector('.close-popup');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const message = card.getAttribute('data-message');
      popupText.textContent = message;
      popup.classList.remove('hidden');
      // Prevent body scroll while popup open
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', closePopup);
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });

  function closePopup() {
    popup.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
      closePopup();
    }
  });
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.ld-card, .gallery-item, .miss-card, .love-card, .timeline-item, .wish-card, .if-item, .photo-message-block, .final-card'
  );

  // Add reveal class initially
  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after reveal for performance
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// ==================== SMOOTH TOUCH FOR MOBILE ====================
// Prevent accidental double-tap zoom on buttons
document.querySelectorAll('button, .love-card').forEach(el => {
  el.addEventListener('touchend', (e) => {
    // Small delay to feel more responsive
  }, { passive: true });
});
