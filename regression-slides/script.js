// ===================================
// ANOVA Slide Presentation Script
// ===================================

(function () {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  // DOM elements
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentSlideEl = document.getElementById('currentSlide');
  const totalSlidesEl = document.getElementById('totalSlides');
  const progressFill = document.getElementById('progressFill');
  const dotsContainer = document.getElementById('slideDots');

  // Initialize
  totalSlidesEl.textContent = totalSlides;
  createDots();
  updateSlide(0);

  // --- Dot indicators ---
  function createDots() {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  // --- Navigation ---
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides || index === currentIndex) return;

    const direction = index > currentIndex ? 'forward' : 'backward';
    const prevSlide = slides[currentIndex];
    const nextSlide = slides[index];

    // Remove all transition classes
    prevSlide.classList.remove('active', 'exit-left');
    nextSlide.classList.remove('active', 'exit-left');

    // Animate out
    if (direction === 'forward') {
      prevSlide.classList.add('exit-left');
    }

    // Animate in
    nextSlide.classList.add('active');

    // Re-trigger content animation
    const content = nextSlide.querySelector('.slide-content');
    if (content) {
      content.style.animation = 'none';
      // Force reflow
      void content.offsetHeight;
      content.style.animation = '';
    }

    currentIndex = index;
    updateSlide(currentIndex);
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      goToSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }

  function updateSlide(index) {
    currentSlideEl.textContent = index + 1;

    // Progress bar
    const progress = ((index + 1) / totalSlides) * 100;
    progressFill.style.width = progress + '%';

    // Buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === totalSlides - 1;

    // Dots
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  // --- Event Listeners ---

  // Button clicks
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
    }
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const diffX = touchStartX - e.changedTouches[0].screenX;
    const diffY = touchStartY - e.changedTouches[0].screenY;

    // Only trigger if horizontal swipe is dominant
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, { passive: true });

  // Mouse wheel
  let wheelTimeout = null;
  document.addEventListener('wheel', (e) => {
    if (wheelTimeout) return;

    wheelTimeout = setTimeout(() => {
      wheelTimeout = null;
    }, 600);

    if (e.deltaY > 0 || e.deltaX > 0) {
      nextSlide();
    } else if (e.deltaY < 0 || e.deltaX < 0) {
      prevSlide();
    }
  }, { passive: true });
})();
