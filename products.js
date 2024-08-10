document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const categoryTitle = document.getElementById('category-title');

    if (category) {
        categoryTitle.textContent = `CATEGORY  ` +  category.toUpperCase()  ;
    }

    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            let products = [];
            if (data[0] && data[0][category]) {
                products = data[0][category];
            } else {
                console.error('Category data not found:', category);
                return;
            }

            const productsContainer = document.getElementById('products');
            productsContainer.innerHTML = ''; // Clear existing content

            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';

                productDiv.innerHTML = `
                    <a href="buying-pg.html?id=${product.id}&category=${category}"><img src="${product.thumbnail}" alt="${product.title}" class="thumbnail"></a>
                    <div class="product-content">
                        <h2><a href="buying-pg.html?id=${product.id}&category=${category}">${product.title}</a></h2>
                        <p> Rs. ${product.price}</p>
                    </div>
                `;

                const img = productDiv.querySelector('.thumbnail');
                img.addEventListener('mouseover', () => {
                    img.src = product.images[1]; // Change to the second image on hover
                });
                img.addEventListener('mouseout', () => {
                    img.src = product.thumbnail; // Revert back to the thumbnail image
                });

                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});

document.getElementById('search-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const searchBar = document.querySelector('.search-bar');
    if (searchBar.style.display === 'none' || !searchBar.style.display) {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
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