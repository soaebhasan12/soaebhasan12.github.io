document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project-card');
    const seeMoreBtn = document.querySelector('.see-more-btn');
    let visibleProjects = 4; // Initial visible projects
    
    // Hide projects beyond initial visible count
    projects.forEach((project, index) => {
        if(index >= visibleProjects) {
            project.classList.add('hidden');
        }
    });

    seeMoreBtn.addEventListener('click', () => {
        // Toggle visibility for all projects
        projects.forEach(project => {
            project.classList.toggle('hidden');
        });

        // Change button text
        if(seeMoreBtn.textContent === 'See More') {
            seeMoreBtn.textContent = 'See Less';
            seeMoreBtn.style.backgroundColor = '#e74c3c'; // Change color when expanded
        } else {
            seeMoreBtn.textContent = 'See More';
            seeMoreBtn.style.backgroundColor = '#3498db';
        }
    });
});















// Certificates Carousel
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('certificatesCarousel');
  const dotsContainer = document.getElementById('certificatesDots');
  const certificates = document.querySelectorAll('.certificate-card');
  
  // Only create dots if on mobile
  if (window.innerWidth < 992) {
    certificates.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if(index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        carousel.scrollTo({
          left: index * (certificates[0].offsetWidth + 20),
          behavior: 'smooth'
        });
        updateDots(index);
      });
      dotsContainer.appendChild(dot);
    });
    
    // Update dots on scroll
    carousel.addEventListener('scroll', () => {
      const scrollPosition = carousel.scrollLeft;
      const cardWidth = certificates[0].offsetWidth + 20;
      const activeIndex = Math.round(scrollPosition / cardWidth);
      updateDots(activeIndex);
    });
  }
  
  function updateDots(activeIndex) {
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 992) {
      dotsContainer.innerHTML = '';
    } else if (dotsContainer.children.length === 0) {
      certificates.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          carousel.scrollTo({
            left: index * (certificates[0].offsetWidth + 20),
            behavior: 'smooth'
          });
          updateDots(index);
        });
        dotsContainer.appendChild(dot);
      });
    }
  });
  
// Initialize lightbox click handlers
  document.querySelectorAll('.certificate-card img').forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      openLightbox(this);
    });
  });
});

// Lightbox functionality
function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event && event.target.classList.contains('lightbox-close')) {
    event.stopPropagation();
  }
  
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Initialize lightbox for certificate images
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.certificate-image img').forEach(img => {
    img.addEventListener('click', function(e) {
      e.stopPropagation();
      openLightbox(this);
    });
  });
  
  // Close lightbox with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}); 