document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const category = urlParams.get('category');

    fetch(`http://localhost:3000/products`)
        .then(response => response.json())
        .then(data => {
            let product;
            if (data[0] && data[0][category]) {
                product = data[0][category].find(p => p.id == productId);
            } else {
                console.error('Product data not found');
                return;
            }

            if (product) {
                document.getElementById('product-title').textContent = product.title;
                document.getElementById('product-description').textContent = product.description;
                document.getElementById('product-price').textContent = product.price;
                document.getElementById('main-image').src = product.thumbnail;

                const productImages = document.getElementById('product-images');
                const setActiveImage = (imgElement, imgUrl) => {
                    document.querySelectorAll('.product-images img').forEach(img => img.classList.remove('active'));
                    imgElement.classList.add('active');
                    document.getElementById('main-image').src = imgUrl;
                };

                const thumbnailImg = document.createElement('img');
                thumbnailImg.src = product.thumbnail;
                thumbnailImg.addEventListener('click', () => setActiveImage(thumbnailImg, product.thumbnail));
                thumbnailImg.classList.add('active');
                productImages.appendChild(thumbnailImg);

                product.images.forEach(imgUrl => {
                    const img = document.createElement('img');
                    img.src = imgUrl;
                    img.addEventListener('click', () => setActiveImage(img, imgUrl));
                    productImages.appendChild(img);
                });

                const sizeOptions = document.querySelectorAll('.size-option');
                sizeOptions.forEach(option => {
                    option.addEventListener('click', () => {
                        sizeOptions.forEach(opt => opt.classList.remove('selected'));
                        option.classList.add('selected');
                    });
                });

                let quantity = 1;
                const quantityElement = document.getElementById('product-quantity');
                const increaseButton = document.getElementById('increase-quantity');
                const decreaseButton = document.getElementById('decrease-quantity');
                const addToCartButton = document.getElementById('add-to-cart');

                increaseButton.addEventListener('click', () => {
                    if (quantity < product.stock) {
                        quantity++;
                        quantityElement.textContent = quantity;
                    }
                    if (quantity === product.stock) {
                        increaseButton.disabled = true;
                    }
                    if (quantity > 0) {
                        decreaseButton.disabled = false;
                        addToCartButton.disabled = false;
                    }
                });

                decreaseButton.addEventListener('click', () => {
                    if (quantity > 0) {
                        quantity--;
                        quantityElement.textContent = quantity;
                    }
                    if (quantity === 0) {
                        decreaseButton.disabled = true;
                        addToCartButton.disabled = true;
                    }
                 z
                });

                addToCartButton.addEventListener('click', () => {
                    alert(`Added ${quantity} ${product.title} to cart.`);
                });
            } else {
                console.error('Product not found');
            }
        })
        .catch(error => console.error('Error loading product details:', error));
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