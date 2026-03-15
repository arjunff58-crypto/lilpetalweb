/**
 * Main JavaScript for LilPetal Crafts
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Header Scroll Effect ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 2. Mobile Navigation Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  let isNavOpen = false;

  function toggleNav() {
    isNavOpen = !isNavOpen;
    mobileNavOverlay.classList.toggle('active');
    
    // Change icon based on state
    if (isNavOpen) {
      mobileToggle.innerHTML = '<i data-lucide="x"></i>';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      mobileToggle.innerHTML = '<i data-lucide="menu"></i>';
      document.body.style.overflow = '';
    }
    // Re-initialize lucide icons for the new innerHTML
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleNav);
  }

  // Close mobile nav when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isNavOpen) toggleNav();
    });
  });


  // --- 3. Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% is visible
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

});
