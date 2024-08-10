document.getElementById('search-btn').addEventListener('click', function (e) {
  e.preventDefault();
  const searchBar = document.querySelector('.search-bar');
  if (searchBar.style.display === 'none' || !searchBar.style.display) {
    searchBar.style.display = 'block';
  } else {
    searchBar.style.display = 'none';
  }
});


//   window.addEventListener('scroll', function() {
//     const search = document.querySelector('.search');
//     if (window.scrollY > 50) {
//         search.classList.add('fixed');
//         search.classList.remove('transparent');
//     } else {
//         search.classList.remove('fixed');
//         search.classList.add('transparent');
//     }
// });


let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const search = document.querySelector('.search');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    search.classList.remove('fixed');
    search.classList.add('transparent');
  } else if (scrollTop < lastScrollTop) {
    search.classList.add('fixed');
    search.classList.remove('transparent');
  } else {
    search.classList.remove('fixed');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});




document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const backBtn = document.getElementById('back-btn');
  const frontBtn = document.getElementById('front-btn');

  const slideWidth = document.querySelector('.slide-item').offsetWidth;

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide-item').length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  backBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 2; 
    }
    updateSlider();
  });

  frontBtn.addEventListener('click', function() {
    if (currentIndex < totalSlides - 2) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    updateSlider();
  });

  // Initial setup
  updateSlider();
});





document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const hamburgerNav = document.getElementById('hamburger-nav');

  hamburgerMenu.addEventListener('click', function() {
      if (hamburgerNav.style.display === 'block') {
          hamburgerNav.style.display = 'none';
      } else {
          hamburgerNav.style.display = 'block';
      }
  });

  document.addEventListener('click', function(event) {
    if (!hamburgerMenu.contains(event.target) && !hamburgerNav.contains(event.target)) {
      hamburgerNav.style.display = 'none';
    }
  });
});
