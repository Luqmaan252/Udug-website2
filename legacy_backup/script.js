
        // Products Data with detailed information using local images
        const products = [
            {
                id: 1,
                name: "Traditional Uunsi Catar",
                brand: "Traditional Somali",
                price: 45.00,
                originalPrice: 55.00,
                image: "/images/perfume1.jpg",
                category: "Catar",
                tag: "Traditional",
                description: "Authentic Somali Uunsi Catar made with traditional methods passed down through generations. This premium incense features a rich blend of frankincense, myrrh, and exotic Somali spices. Perfect for special occasions, weddings, and religious ceremonies.",
                images: [
                    "perfume1.jpg",
                    "perfume2.jpg",
                    "perfume3.jpg",
                    "perfume4.jpg"
                ],
                specs: [
                    { label: "Type", value: "Traditional Catar/Incense" },
                    { label: "Scent Type", value: "Woody, Spicy, Floral" },
                    { label: "Origin", value: "Mogadishu, Somalia" },
                    { label: "Weight", value: "50g" },
                    { label: "Duration", value: "8-10 hours" },
                    { label: "Ingredients", value: "Frankincense, Myrrh, Sandalwood, Oud" }
                ]
            },
            {
                id: 2,
                name: "Premium Xiddig Catar",
                brand: "Xiddig Catar",
                price: 65.00,
                originalPrice: 75.00,
                image: "/images/perfume2.jpg",
                category: "Catar",
                tag: "Best Seller",
                description: "Luxury Xiddig Catar with a modern twist on traditional Somali fragrance. Features a unique blend of star anise, amber, and rare Somali flowers. Long-lasting scent that evolves throughout the day.",
                images: [
                    "perfume2.jpg",
                    "perfume3.jpg",
                    "perfume4.jpg",
                    "perfume5.jpg"
                ],
                specs: [
                    { label: "Type", value: "Premium Catar" },
                    { label: "Scent Type", value: "Floral, Oriental, Spicy" },
                    { label: "Origin", value: "Hargeisa, Somaliland" },
                    { label: "Weight", value: "75g" },
                    { label: "Duration", value: "12+ hours" },
                    { label: "Ingredients", value: "Star Anise, Amber, Rose, Jasmine" }
                ]
            },
            {
                id: 3,
                name: "Chanel Chance Eau Tendre",
                brand: "Chanel",
                price: 220.00,
                originalPrice: 250.00,
                image: "perfume3.jpg",
                category: "perfume",
                tag: "Luxury",
                description: "Chance Eau Tendre is a romantic, floral fragrance for women. A tender and unexpected floral-fruity fragrance, with the lively and joyful character of grapefruit and quince and the softness of jasmine and white musk.",
                images: [
                    "perfume3.jpg",
                    "perfume4.jpg",
                    "perfume5.jpg",
                    "perfume6.jpg"
                ],
                specs: [
                    { label: "Brand", value: "Chanel" },
                    { label: "Fragrance Type", value: "Eau de Parfum" },
                    { label: "Scent Family", value: "Floral Fruity" },
                    { label: "Size", value: "100ml" },
                    { label: "Gender", value: "Women" },
                    { label: "Top Notes", value: "Grapefruit, Quince" }
                ]
            },
            {
                id: 4,
                name: "Dior J'adore Original",
                brand: "Dior",
                price: 195.00,
                originalPrice: 220.00,
                image: "perfume4.jpg",
                category: "perfume",
                tag: "Classic",
                description: "J'adore is a radiant fragrance that celebrates the splendor of women. A sunny, fresh, and floral bouquet with dominant notes of ylang-ylang, Damascus rose, and jasmine sambac.",
                images: [
                    "perfume4.jpg",
                    "perfume5.jpg",
                    "perfume6.jpg",
                    "perfume7.jpg"
                ],
                specs: [
                    { label: "Brand", value: "Dior" },
                    { label: "Fragrance Type", value: "Eau de Parfum" },
                    { label: "Scent Family", value: "Floral" },
                    { label: "Size", value: "100ml" },
                    { label: "Gender", value: "Women" },
                    { label: "Top Notes", value: "Ylang-Ylang, Rose, Jasmine" }
                ]
            },
            {
                id: 5,
                name: "Special Biyo Macaan Scent",
                brand: "Traditional Somali",
                price: 35.00,
                originalPrice: 40.00,
                image: "perfume5.jpg",
                category: "Catar",
                tag: "Traditional",
                description: "Biyo Macaan (Sweet Water) is a traditional Somali fragrance water used for special occasions. Light, refreshing scent with notes of rosewater, sandalwood, and Somali spices.",
                images: [
                    "perfume5.jpg",
                    "perfume6.jpg",
                    "perfume7.jpg",
                    "perfume8.jpg"
                ],
                specs: [
                    { label: "Type", value: "Fragrance Water" },
                    { label: "Scent Type", value: "Fresh, Floral, Sweet" },
                    { label: "Origin", value: "Garowe, Somalia" },
                    { label: "Volume", value: "200ml" },
                    { label: "Usage", value: "Special Occasions" },
                    { label: "Ingredients", value: "Rosewater, Sandalwood, Spices" }
                ]
            },
            {
                id: 6,
                name: "Gees Catar Luxury",
                brand: "Gees Catar",
                price: 55.00,
                originalPrice: 65.00,
                image: "perfume6.jpg",
                category: "Catar",
                tag: "Popular",
                description: "Premium Gees Catar with a sophisticated blend of oud, amber, and rare Somali incense. Creates an atmosphere of luxury and tradition with every use.",
                images: [
                    "perfume6.jpg",
                    "perfume7.jpg",
                    "perfume8.jpg",
                    "perfume9.jpg"
                ],
                specs: [
                    { label: "Type", value: "Luxury Catar" },
                    { label: "Scent Type", value: "Woody, Amber, Oriental" },
                    { label: "Origin", value: "Bosaso, Somalia" },
                    { label: "Weight", value: "60g" },
                    { label: "Duration", value: "10-12 hours" },
                    { label: "Ingredients", value: "Oud, Amber, Incense, Spices" }
                ]
            },
            {
                id: 7,
                name: "Viktor & Rolf Flower Bomb",
                brand: "Viktor & Rolf",
                price: 185.00,
                originalPrice: 210.00,
                image: "perfume7.jpg",
                category: "perfume",
                tag: "Best Seller",
                description: "Flowerbomb is an explosive, floral fragrance. A sweet and sensual scent that explodes upon the senses with an abundance of flowers, evoking a feeling of happiness and joy.",
                images: [
                    "perfume7.jpg",
                    "perfume8.jpg",
                    "perfume9.jpg",
                    "perfume10.jpg"
                ],
                specs: [
                    { label: "Brand", value: "Viktor & Rolf" },
                    { label: "Fragrance Type", value: "Eau de Parfum" },
                    { label: "Scent Family", value: "Floral Oriental" },
                    { label: "Size", value: "100ml" },
                    { label: "Gender", value: "Women" },
                    { label: "Top Notes", value: "Bergamot, Tea" }
                ]
            },
            {
                id: 8,
                name: "Yves Saint Laurent Black Opium",
                brand: "Yves Saint Laurent",
                price: 175.00,
                originalPrice: 200.00,
                image: "perfume8.jpg",
                category: "perfume",
                tag: "New",
                description: "Black Opium is a captivating and addictive fragrance with notes of coffee, white flowers, and vanilla. A bold, glamorous, and rock'n'roll fragrance for the modern woman.",
                images: [
                    "perfume8.jpg",
                    "perfume9.jpg",
                    "perfume10.jpg",
                    "perfume11.jpg"
                ],
                specs: [
                    { label: "Brand", value: "Yves Saint Laurent" },
                    { label: "Fragrance Type", value: "Eau de Parfum" },
                    { label: "Scent Family", value: "Oriental Vanilla" },
                    { label: "Size", value: "90ml" },
                    { label: "Gender", value: "Women" },
                    { label: "Top Notes", value: "Coffee, Pink Pepper" }
                ]
            },
            {
                id: 9,
                name: "1 Million Perfume",
                brand: "Paco Rabanne",
                price: 120.00,
                originalPrice: 140.00,
                image: "perfume9.jpg",
                category: "perfume",
                tag: "Popular",
                description: "1 Million by Paco Rabanne is a fresh, spicy, and leathery fragrance for men. A sensual scent that combines freshness with warm spicy notes.",
                images: [
                    "perfume9.jpg",
                    "perfume10.jpg",
                    "perfume11.jpg",
                    "perfume12.jpg"
                ],
                specs: [
                    { label: "Brand", value: "Paco Rabanne" },
                    { label: "Fragrance Type", value: "Eau de Toilette" },
                    { label: "Scent Family", value: "Fresh Spicy" },
                    { label: "Size", value: "100ml" },
                    { label: "Gender", value: "Men" },
                    { label: "Top Notes", value: "Grapefruit, Mint, Blood Orange" }
                ]
            },
            {
                id: 10,
                name: "9PM Perfume",
                brand: "Afnan",
                price: 85.00,
                originalPrice: 95.00,
                image: "perfume10.jpg",
                category: "perfume",
                tag: "Popular",
                description: "9PM by Afnan is a captivating fragrance that embodies the mystery and allure of the evening hours. A perfect blend of sweet and spicy notes.",
                images: [
                    "/images/perfume10.jpg",
                    "/images/perfume11.jpg",
                    "/images/perfume12.jpg",
                    "/images/perfume13.jpg"
                ],
                specs: [
                    { label: "Brand", value: "Afnan" },
                    { label: "Fragrance Type", value: "Eau de Parfum" },
                    { label: "Scent Family", value: "Oriental Spicy" },
                    { label: "Size", value: "100ml" },
                    { label: "Gender", value: "Men" },
                    { label: "Top Notes", value: "Apple, Bergamot, Lavender" }
                ]
            }
        ];

        // User Authentication System
        class UserAuth {
            constructor() {
                this.users = JSON.parse(localStorage.getItem('ududPerfumesUsers')) || [];
                this.currentUser = JSON.parse(localStorage.getItem('ududPerfumesCurrentUser')) || null;
            }
            
            // Save users to localStorage
            saveUsers() {
                localStorage.setItem('ududPerfumesUsers', JSON.stringify(this.users));
            }
            
            // Save current user to localStorage
            saveCurrentUser() {
                localStorage.setItem('ududPerfumesCurrentUser', JSON.stringify(this.currentUser));
            }
            
            // Clear current user
            clearCurrentUser() {
                this.currentUser = null;
                localStorage.removeItem('ududPerfumesCurrentUser');
            }
            
            // Register a new user
            register(name, email, phone, password) {
                // Check if email already exists
                if (this.users.some(user => user.email === email)) {
                    return { success: false, message: 'Email already registered' };
                }
                
                // Check if phone already exists
                if (this.users.some(user => user.phone === phone)) {
                    return { success: false, message: 'Phone number already registered' };
                }
                
                // Create new user
                const newUser = {
                    id: Date.now(),
                    name,
                    email,
                    phone,
                    password,
                    createdAt: new Date().toISOString(),
                    orders: []
                };
                
                // Add to users array
                this.users.push(newUser);
                this.saveUsers();
                
                // Auto login after registration
                this.currentUser = newUser;
                this.saveCurrentUser();
                
                return { success: true, message: 'Registration successful', user: newUser };
            }
            
            // Login user
            login(email, password) {
                const user = this.users.find(user => user.email === email && user.password === password);
                
                if (user) {
                    this.currentUser = user;
                    this.saveCurrentUser();
                    return { success: true, message: 'Login successful', user };
                }
                
                return { success: false, message: 'Invalid email or password' };
            }
            
            // Logout user
            logout() {
                this.clearCurrentUser();
                return { success: true, message: 'Logout successful' };
            }
            
            // Check if user is logged in
            isLoggedIn() {
                return this.currentUser !== null;
            }
            
            // Get current user
            getCurrentUser() {
                return this.currentUser;
            }
            
            // Update user profile
            updateProfile(userId, updates) {
                const userIndex = this.users.findIndex(user => user.id === userId);
                
                if (userIndex !== -1) {
                    // Check if email is being changed and already exists
                    if (updates.email && updates.email !== this.users[userIndex].email) {
                        if (this.users.some(user => user.email === updates.email && user.id !== userId)) {
                            return { success: false, message: 'Email already registered' };
                        }
                    }
                    
                    // Check if phone is being changed and already exists
                    if (updates.phone && updates.phone !== this.users[userIndex].phone) {
                        if (this.users.some(user => user.phone === updates.phone && user.id !== userId)) {
                            return { success: false, message: 'Phone number already registered' };
                        }
                    }
                    
                    // Update user
                    this.users[userIndex] = { ...this.users[userIndex], ...updates };
                    
                    // Update current user if it's the same user
                    if (this.currentUser && this.currentUser.id === userId) {
                        this.currentUser = this.users[userIndex];
                        this.saveCurrentUser();
                    }
                    
                    this.saveUsers();
                    return { success: true, message: 'Profile updated successfully', user: this.users[userIndex] };
                }
                
                return { success: false, message: 'User not found' };
            }
            
            // Add order to user
            addOrder(userId, order) {
                const userIndex = this.users.findIndex(user => user.id === userId);
                
                if (userIndex !== -1) {
                    if (!this.users[userIndex].orders) {
                        this.users[userIndex].orders = [];
                    }
                    
                    this.users[userIndex].orders.push(order);
                    this.saveUsers();
                    
                    // Update current user if it's the same user
                    if (this.currentUser && this.currentUser.id === userId) {
                        this.currentUser = this.users[userIndex];
                        this.saveCurrentUser();
                    }
                    
                    return { success: true, message: 'Order added successfully' };
                }
                
                return { success: false, message: 'User not found' };
            }
        }

        // Cart Data
        let cart = [];
        let cartCount = 0;
        let subtotal = 0;
        let tax = 0;
        let shipping = 5.00;
        let total = 0;
        let currentProductId = null;
        let quantity = 1;
        let currentPaymentMethod = 'evc';

        // Initialize User Authentication
        const userAuth = new UserAuth();

        // DOM Elements
        const mainShopPage = document.querySelector('.main-shop-page');
        const productDetailPage = document.querySelector('.product-detail-page');
        const paymentPage = document.querySelector('.payment-page');
        const productsGrid = document.querySelector('.products-grid');
        const cartIcon = document.querySelector('.cart-icon');
        const cartCountElement = document.querySelector('.cart-count');
        const cartModal = document.querySelector('.cart-modal');
        const overlay = document.querySelector('.overlay');
        const closeCart = document.querySelector('.close-cart');
        const cartItemsContainer = document.querySelector('.cart-items');
        const subtotalPriceElement = document.querySelector('.subtotal-price');
        const taxAmountElement = document.querySelector('.tax-amount');
        const shippingAmountElement = document.querySelector('.shipping-amount');
        const totalPriceElement = document.querySelector('.total-price');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('nav ul');
        const loginBtn = document.getElementById('login-btn');
        const loginModal = document.querySelector('.login-modal');
        const closeLogin = document.querySelector('.close-login');
        const loginTabs = document.querySelectorAll('.login-tab');
        const loginForm = document.querySelector('.login-form');
        const registerForm = document.querySelector('.register-form');
        const loginButton = document.getElementById('login-button');
        const registerButton = document.getElementById('register-button');
        
        // User profile elements
        const userProfiles = document.querySelectorAll('.user-profile');
        const userAvatars = document.querySelectorAll('.user-avatar');
        const userNames = document.querySelectorAll('.user-name');
        const userDropdowns = document.querySelectorAll('.user-dropdown');
        const logoutButtons = document.querySelectorAll('#logout-btn, #detail-logout-btn, #payment-logout-btn');
        
        // Product detail elements
        const backToShop = document.getElementById('back-to-shop');
        const mainProductImage = document.getElementById('main-product-image');
        const productThumbnails = document.getElementById('product-thumbnails');
        const productBrand = document.getElementById('product-brand');
        const productName = document.getElementById('product-name');
        const productDescription = document.getElementById('product-description');
        const productCurrentPrice = document.getElementById('product-current-price');
        const productOriginalPrice = document.getElementById('product-original-price');
        const discountBadge = document.getElementById('discount-badge');
        const productSpecs = document.getElementById('product-specs');
        const decreaseQtyBtn = document.getElementById('decrease-qty');
        const increaseQtyBtn = document.getElementById('increase-qty');
        const quantityInput = document.getElementById('quantity-input');
        const addToCartDetailBtn = document.getElementById('add-to-cart-detail');
        const buyNowBtn = document.getElementById('buy-now-btn');
        const backToHome = document.getElementById('back-to-home');
        const detailBackToHome = document.getElementById('detail-back-to-home');
        
        // Payment page elements
        const paymentOrderItems = document.getElementById('payment-order-items');
        const paymentSubtotal = document.getElementById('payment-subtotal');
        const paymentTax = document.getElementById('payment-tax');
        const paymentShipping = document.getElementById('payment-shipping');
        const paymentTotal = document.getElementById('payment-total');
        const paymentTabs = document.querySelectorAll('.payment-tab');
        const paymentForms = document.querySelectorAll('.payment-form');
        const payNowBtn = document.getElementById('pay-now-btn');
        const cancelPaymentBtn = document.getElementById('cancel-payment-btn');
        const backToCartBtn = document.getElementById('back-to-cart');
        const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');
        
        // Payment success modal elements
        const paymentSuccessModal = document.querySelector('.payment-success-modal');
        const successOrderId = document.getElementById('success-order-id');
        const successPaymentMethod = document.getElementById('success-payment-method');
        const successAmountPaid = document.getElementById('success-amount-paid');
        const continueShoppingBtn = document.getElementById('continue-shopping-btn');
        
        // Form validation elements
        const loginEmailGroup = document.getElementById('login-email-group');
        const loginPasswordGroup = document.getElementById('login-password-group');
        const loginEmailError = document.getElementById('login-email-error');
        const loginPasswordError = document.getElementById('login-password-error');
        const loginSuccessMessage = document.getElementById('login-success-message');
        const loginErrorMessage = document.getElementById('login-error-message');
        
        const regNameGroup = document.getElementById('reg-name-group');
        const regEmailGroup = document.getElementById('reg-email-group');
        const regPhoneGroup = document.getElementById('reg-phone-group');
        const regPasswordGroup = document.getElementById('reg-password-group');
        const regConfirmPasswordGroup = document.getElementById('reg-confirm-password-group');
        const regNameError = document.getElementById('reg-name-error');
        const regEmailError = document.getElementById('reg-email-error');
        const regPhoneError = document.getElementById('reg-phone-error');
        const regPasswordError = document.getElementById('reg-password-error');
        const regConfirmPasswordError = document.getElementById('reg-confirm-password-error');
        const registerSuccessMessage = document.getElementById('register-success-message');
        const registerErrorMessage = document.getElementById('register-error-message');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            updateCartCount();
            
            // Load cart from localStorage if available
            const savedCart = localStorage.getItem('ududPerfumesCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCart();
            }
            
            // Check if user is logged in
            checkLoginStatus();
            
            // Setup navigation
            setupNavigation();
            
            // Setup payment tabs
            setupPaymentTabs();
            
            // Setup user dropdowns
            setupUserDropdowns();
            
            // Add error handlers for images
            setupImageErrorHandlers();
        });

        // Setup image error handlers
        function setupImageErrorHandlers() {
            document.querySelectorAll('img').forEach(img => {
                img.onerror = function() {
                    this.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                };
            });
        }

        // Check login status and update UI
        function checkLoginStatus() {
            if (userAuth.isLoggedIn()) {
                const user = userAuth.getCurrentUser();
                updateUserProfileUI(user);
                
                // Hide login icon, show user profile
                document.querySelectorAll('.user-icon').forEach(icon => {
                    icon.style.display = 'none';
                });
                
                userProfiles.forEach(profile => {
                    profile.classList.add('active');
                });
                
                // Update user info
                userAvatars.forEach(avatar => {
                    avatar.textContent = user.name.charAt(0).toUpperCase();
                });
                
                userNames.forEach(nameElement => {
                    nameElement.textContent = user.name;
                });
            } else {
                // Show login icon, hide user profile
                document.querySelectorAll('.user-icon').forEach(icon => {
                    icon.style.display = 'block';
                });
                
                userProfiles.forEach(profile => {
                    profile.classList.remove('active');
                });
            }
        }

        // Update user profile UI
        function updateUserProfileUI(user) {
            userAvatars.forEach(avatar => {
                avatar.textContent = user.name.charAt(0).toUpperCase();
            });
            
            userNames.forEach(nameElement => {
                nameElement.textContent = user.name;
            });
        }

        // Setup user dropdowns
        function setupUserDropdowns() {
            // Toggle dropdown when clicking on user name
            userNames.forEach(nameElement => {
                nameElement.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const dropdown = this.closest('.user-profile').querySelector('.user-dropdown');
                    dropdown.classList.toggle('active');
                });
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                userDropdowns.forEach(dropdown => {
                    if (!dropdown.contains(e.target) && !e.target.closest('.user-name')) {
                        dropdown.classList.remove('active');
                    }
                });
            });
        }

        // Render products to the page
        function renderProducts() {
            productsGrid.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.setAttribute('data-id', product.id);
                
                const displayPrice = product.originalPrice ? 
                    `<div class="product-price-details">
                        <div class="price">$${product.price.toFixed(2)}</div>
                        <div class="original-price">$${product.originalPrice.toFixed(2)}</div>
                    </div>` :
                    `<div class="price">$${product.price.toFixed(2)}</div>`;
                
                productCard.innerHTML = `
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                        <div class="product-tag">${product.tag}</div>
                    </div>
                    <div class="product-info">
                        <div class="product-brand">${product.brand}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">
                            ${displayPrice}
                            <button class="add-to-cart" data-id="${product.id}">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to product cards for detail view
            document.querySelectorAll('.product-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't trigger if clicking the add to cart button
                    if (!e.target.closest('.add-to-cart')) {
                        const productId = parseInt(this.getAttribute('data-id'));
                        showProductDetail(productId);
                    }
                });
            });
            
            // Add event listeners to "Add to Cart" buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent triggering product detail view
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }

        // Show product detail page
        function showProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product) return;
            
            currentProductId = productId;
            quantity = 1;
            quantityInput.value = quantity;
            
            // Update product detail page content
            mainProductImage.src = product.images[0];
            mainProductImage.alt = product.name;
            
            productBrand.textContent = product.brand;
            productName.textContent = product.name;
            productDescription.textContent = product.description;
            
            // Update prices
            productCurrentPrice.textContent = `$${product.price.toFixed(2)}`;
            
            if (product.originalPrice) {
                productOriginalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
                const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
                discountBadge.textContent = `${discount}% OFF`;
                discountBadge.style.display = 'inline-block';
            } else {
                productOriginalPrice.textContent = '';
                discountBadge.style.display = 'none';
            }
            
            // Update thumbnails
            productThumbnails.innerHTML = '';
            product.images.forEach((image, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = `product-thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.innerHTML = `<img src="${image}" alt="Product Thumbnail ${index + 1}" onerror="this.src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">`;
                thumbnail.addEventListener('click', () => {
                    mainProductImage.src = image;
                    document.querySelectorAll('.product-thumbnail').forEach(thumb => {
                        thumb.classList.remove('active');
                    });
                    thumbnail.classList.add('active');
                });
                productThumbnails.appendChild(thumbnail);
            });
            
            // Update specifications
            productSpecs.innerHTML = '';
            product.specs.forEach(spec => {
                const specItem = document.createElement('div');
                specItem.className = 'spec-item';
                specItem.innerHTML = `
                    <span class="spec-label">${spec.label}:</span>
                    <span class="spec-value">${spec.value}</span>
                `;
                productSpecs.appendChild(specItem);
            });
            
            // Switch to product detail page
            mainShopPage.style.display = 'none';
            productDetailPage.style.display = 'block';
            paymentPage.style.display = 'none';
            window.scrollTo(0, 0);
        }

        // Go back to shop page
        function goBackToShop() {
            mainShopPage.style.display = 'block';
            productDetailPage.style.display = 'none';
            paymentPage.style.display = 'none';
            window.scrollTo(0, 0);
        }

        // Show payment page
        function showPaymentPage() {
            if (cart.length === 0) {
                showNotification('Your cart is empty. Add some products first!');
                return;
            }
            
            updatePaymentPage();
            
            mainShopPage.style.display = 'none';
            productDetailPage.style.display = 'none';
            paymentPage.style.display = 'block';
            window.scrollTo(0, 0);
            
            // Close cart modal if open
            cartModal.classList.remove('active');
            overlay.classList.remove('active');
        }

        // Update payment page with cart data
        function updatePaymentPage() {
            paymentOrderItems.innerHTML = '';
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.innerHTML = `
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-qty">${item.quantity} x $${item.price.toFixed(2)}</div>
                    <div class="order-item-price">$${itemTotal.toFixed(2)}</div>
                `;
                
                paymentOrderItems.appendChild(orderItem);
            });
            
            // Calculate totals
            subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            tax = subtotal * 0.05;
            total = subtotal + tax + shipping;
            
            // Update payment page totals
            paymentSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            paymentTax.textContent = `$${tax.toFixed(2)}`;
            paymentShipping.textContent = `$${shipping.toFixed(2)}`;
            paymentTotal.textContent = `$${total.toFixed(2)}`;
        }

        // Setup payment tabs
        function setupPaymentTabs() {
            paymentTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const method = tab.getAttribute('data-method');
                    currentPaymentMethod = method;
                    
                    // Update active tab
                    paymentTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Show corresponding form
                    paymentForms.forEach(form => {
                        form.classList.remove('active');
                        if (form.id === `${method}-form`) {
                            form.classList.add('active');
                        }
                    });
                });
            });
        }

        // Add product to cart
        function addToCart(productId, qty = 1) {
            const product = products.find(p => p.id === productId);
            
            if (product) {
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += qty;
                } else {
                    cart.push({
                        ...product,
                        quantity: qty
                    });
                }
                
                // Save to localStorage
                localStorage.setItem('ududPerfumesCart', JSON.stringify(cart));
                
                updateCart();
                updateCartCount();
                
                // Show confirmation
                showNotification(`${product.name} added to cart!`);
            }
        }

        // Update cart count in header
        function updateCartCount() {
            cartCount = cart.reduce((total, item) => total + item.quantity, 0);
            document.querySelectorAll('.cart-count').forEach(element => {
                element.textContent = cartCount;
            });
        }

        // Update cart modal
        function updateCart() {
            cartItemsContainer.innerHTML = '';
            subtotal = 0;
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Your cart is empty</p>';
                subtotalPriceElement.textContent = '$0.00';
                taxAmountElement.textContent = '$0.00';
                shippingAmountElement.textContent = '$5.00';
                totalPriceElement.textContent = '$5.00';
                return;
            }
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                subtotal += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-fees">+ Tax & Shipping</div>
                        <div class="cart-item-actions">
                            <button class="cart-quantity-btn decrease" data-id="${item.id}">-</button>
                            <div class="cart-item-quantity">${item.quantity}</div>
                            <button class="cart-quantity-btn increase" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Calculate totals
            tax = subtotal * 0.05; // 5% tax
            total = subtotal + tax + shipping;
            
            // Update displayed totals
            subtotalPriceElement.textContent = `$${subtotal.toFixed(2)}`;
            taxAmountElement.textContent = `$${tax.toFixed(2)}`;
            shippingAmountElement.textContent = `$${shipping.toFixed(2)}`;
            totalPriceElement.textContent = `$${total.toFixed(2)}`;
            
            // Add event listeners to cart item buttons
            document.querySelectorAll('.decrease').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateCartItemQuantity(productId, -1);
                });
            });
            
            document.querySelectorAll('.increase').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateCartItemQuantity(productId, 1);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }

        // Update quantity of cart item
        function updateCartItemQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    localStorage.setItem('ududPerfumesCart', JSON.stringify(cart));
                    updateCart();
                    updateCartCount();
                }
            }
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('ududPerfumesCart', JSON.stringify(cart));
            updateCart();
            updateCartCount();
            showNotification('Item removed from cart');
        }

        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 90px;
                right: 20px;
                background-color: var(--accent-gold);
                color: var(--primary-color);
                padding: 12px 20px;
                border-radius: 5px;
                box-shadow: var(--shadow);
                z-index: 10000;
                transition: all 0.3s ease;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 13px;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Setup navigation
        function setupNavigation() {
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#home' || targetId === '#') {
                        goBackToShop();
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } else if (targetId.startsWith('#')) {
                        goBackToShop();
                        setTimeout(() => {
                            const targetSection = document.querySelector(targetId);
                            if (targetSection) {
                                window.scrollTo({
                                    top: targetSection.offsetTop - 70,
                                    behavior: 'smooth'
                                });
                            }
                        }, 100);
                    }
                    
                    // Close mobile menu if open
                    document.querySelectorAll('nav ul').forEach(menu => {
                        menu.classList.remove('active');
                    });
                });
            });
            
            // Back to shop button
            backToShop.addEventListener('click', function(e) {
                e.preventDefault();
                goBackToShop();
            });
            
            // Back to cart button
            backToCartBtn.addEventListener('click', function(e) {
                e.preventDefault();
                goBackToShop();
                // Open cart modal
                cartModal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Logo click to go home
            backToHome.addEventListener('click', function(e) {
                e.preventDefault();
                goBackToShop();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            detailBackToHome.addEventListener('click', function(e) {
                e.preventDefault();
                goBackToShop();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Payment page navigation
            document.getElementById('payment-back-home-link').addEventListener('click', function(e) {
                e.preventDefault();
                goBackToShop();
            });
            
            document.getElementById('payment-back-shop-link').addEventListener('click', function(e) {
                e.preventDefault();
                goBackToShop();
            });
            
            document.getElementById('payment-cart-link').addEventListener('click', function(e) {
                e.preventDefault();
                goBackToShop();
                // Open cart modal
                cartModal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }

        // Quantity controls
        decreaseQtyBtn.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
            }
        });
        
        increaseQtyBtn.addEventListener('click', () => {
            quantity++;
            quantityInput.value = quantity;
        });

        // Add to cart from detail page
        addToCartDetailBtn.addEventListener('click', () => {
            if (currentProductId) {
                addToCart(currentProductId, quantity);
            }
        });

        // Buy now from detail page
        buyNowBtn.addEventListener('click', () => {
            if (currentProductId) {
                const product = products.find(p => p.id === currentProductId);
                if (product) {
                    addToCart(currentProductId, quantity);
                    showPaymentPage();
                }
            }
        });

        // Cart modal functionality
        document.querySelectorAll('.cart-icon').forEach(icon => {
            icon.addEventListener('click', () => {
                cartModal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        overlay.addEventListener('click', () => {
            cartModal.classList.remove('active');
            overlay.classList.remove('active');
            loginModal.classList.remove('active');
            paymentSuccessModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Proceed to checkout button
        proceedCheckoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty. Add some products first!');
                return;
            }
            
            cartModal.classList.remove('active');
            overlay.classList.remove('active');
            showPaymentPage();
        });

        // Pay now button
        payNowBtn.addEventListener('click', () => {
            // Validate form based on payment method
            let isValid = false;
            let paymentDetails = {};
            
            switch(currentPaymentMethod) {
                case 'evc':
                    const evcPhone = document.getElementById('evc-phone').value;
                    const evcName = document.getElementById('evc-name').value;
                    
                    if (evcPhone && evcName) {
                        isValid = true;
                        paymentDetails = {
                            method: 'EVC Plus',
                            phone: evcPhone,
                            name: evcName
                        };
                    } else {
                        alert('Please fill in all required fields for EVC Plus payment');
                    }
                    break;
                    
                case 'card':
                    const cardNumber = document.getElementById('card-number').value;
                    const cardExpiry = document.getElementById('card-expiry').value;
                    const cardCvc = document.getElementById('card-cvc').value;
                    const cardName = document.getElementById('card-name').value;
                    
                    if (cardNumber && cardExpiry && cardCvc && cardName) {
                        isValid = true;
                        paymentDetails = {
                            method: 'Credit/Debit Card',
                            cardNumber: cardNumber.replace(/\s/g, '').slice(-4),
                            name: cardName
                        };
                    } else {
                        alert('Please fill in all required fields for card payment');
                    }
                    break;
                    
                case 'zaad':
                    const zaadPhone = document.getElementById('zaad-phone').value;
                    const zaadName = document.getElementById('zaad-name').value;
                    
                    if (zaadPhone && zaadName) {
                        isValid = true;
                        paymentDetails = {
                            method: 'ZAAD Service',
                            phone: zaadPhone,
                            name: zaadName
                        };
                    } else {
                        alert('Please fill in all required fields for ZAAD payment');
                    }
                    break;
                    
                case 'cash':
                    const cashAddress = document.getElementById('cash-address').value;
                    const cashPhone = document.getElementById('cash-phone').value;
                    
                    if (cashAddress && cashPhone) {
                        isValid = true;
                        paymentDetails = {
                            method: 'Cash on Delivery',
                            address: cashAddress,
                            phone: cashPhone
                        };
                    } else {
                        alert('Please fill in all required fields for Cash on Delivery');
                    }
                    break;
            }
            
            if (isValid) {
                // Generate order ID
                const orderId = 'UDUD-' + new Date().getFullYear() + '-' + Math.floor(10000 + Math.random() * 90000);
                
                // Update success modal
                successOrderId.textContent = orderId;
                successPaymentMethod.textContent = paymentDetails.method;
                successAmountPaid.textContent = `$${total.toFixed(2)}`;
                
                // Show payment processing animation
                payNowBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Payment...';
                payNowBtn.disabled = true;
                
                // Simulate payment processing delay
                setTimeout(() => {
                    // Show success modal
                    paymentSuccessModal.classList.add('active');
                    overlay.classList.add('active');
                    
                    // Reset pay now button
                    payNowBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Now';
                    payNowBtn.disabled = false;
                    
                    // Add order to user's account if logged in
                    if (userAuth.isLoggedIn()) {
                        const user = userAuth.getCurrentUser();
                        const order = {
                            id: orderId,
                            items: [...cart],
                            total: total,
                            paymentMethod: paymentDetails.method,
                            date: new Date().toISOString(),
                            status: 'Processing'
                        };
                        
                        userAuth.addOrder(user.id, order);
                    }
                    
                    // Clear cart after successful payment
                    cart = [];
                    localStorage.removeItem('ududPerfumesCart');
                    updateCart();
                    updateCartCount();
                }, 2000);
            }
        });

        // Cancel payment button
        cancelPaymentBtn.addEventListener('click', () => {
            goBackToShop();
        });

        // Continue shopping button
        continueShoppingBtn.addEventListener('click', () => {
            paymentSuccessModal.classList.remove('active');
            overlay.classList.remove('active');
            goBackToShop();
        });

        // Login/Register tabs functionality
        loginTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.getAttribute('data-tab');
                
                // Update active tab
                loginTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding form
                if (tabName === 'login') {
                    loginForm.classList.add('active');
                    registerForm.classList.remove('active');
                    
                    // Clear error messages
                    clearLoginErrors();
                    clearRegisterErrors();
                } else {
                    loginForm.classList.remove('active');
                    registerForm.classList.add('active');
                    
                    // Clear error messages
                    clearLoginErrors();
                    clearRegisterErrors();
                }
            });
        });

        // Clear login error messages
        function clearLoginErrors() {
            loginEmailError.classList.remove('active');
            loginPasswordError.classList.remove('active');
            loginSuccessMessage.classList.remove('active');
            loginErrorMessage.classList.remove('active');
            loginEmailGroup.classList.remove('error');
            loginPasswordGroup.classList.remove('error');
        }

        // Clear register error messages
        function clearRegisterErrors() {
            regNameError.classList.remove('active');
            regEmailError.classList.remove('active');
            regPhoneError.classList.remove('active');
            regPasswordError.classList.remove('active');
            regConfirmPasswordError.classList.remove('active');
            registerSuccessMessage.classList.remove('active');
            registerErrorMessage.classList.remove('active');
            regNameGroup.classList.remove('error');
            regEmailGroup.classList.remove('error');
            regPhoneGroup.classList.remove('error');
            regPasswordGroup.classList.remove('error');
            regConfirmPasswordGroup.classList.remove('error');
        }

        // Validate email format
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        // Validate phone format (Somali phone numbers)
        function validatePhone(phone) {
            const re = /^\+252\s?\d{2}\s?\d{3}\s?\d{4}$/;
            return re.test(phone);
        }

        // Login modal functionality
        document.querySelectorAll('.user-icon').forEach(icon => {
            icon.addEventListener('click', () => {
                loginModal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Always show login form first when opening modal
                loginTabs.forEach(t => t.classList.remove('active'));
                loginTabs[0].classList.add('active');
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                
                // Clear error messages
                clearLoginErrors();
                clearRegisterErrors();
            });
        });

        closeLogin.addEventListener('click', () => {
            loginModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Login form submission
        loginButton.addEventListener('click', () => {
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            
            // Clear previous errors
            clearLoginErrors();
            
            let hasError = false;
            
            // Validate email
            if (!email) {
                loginEmailError.textContent = 'Email is required';
                loginEmailError.classList.add('active');
                loginEmailGroup.classList.add('error');
                hasError = true;
            } else if (!validateEmail(email)) {
                loginEmailError.textContent = 'Please enter a valid email address';
                loginEmailError.classList.add('active');
                loginEmailGroup.classList.add('error');
                hasError = true;
            }
            
            // Validate password
            if (!password) {
                loginPasswordError.textContent = 'Password is required';
                loginPasswordError.classList.add('active');
                loginPasswordGroup.classList.add('error');
                hasError = true;
            } else if (password.length < 6) {
                loginPasswordError.textContent = 'Password must be at least 6 characters';
                loginPasswordError.classList.add('active');
                loginPasswordGroup.classList.add('error');
                hasError = true;
            }
            
            if (hasError) return;
            
            // Attempt login
            const result = userAuth.login(email, password);
            
            if (result.success) {
                // Show success message
                loginSuccessMessage.classList.add('active');
                
                // Update UI
                setTimeout(() => {
                    loginModal.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    
                    // Update user profile in header
                    checkLoginStatus();
                    
                    // Show welcome notification
                    showNotification(`Welcome back, ${result.user.name}!`);
                }, 1500);
            } else {
                // Show error message
                loginErrorMessage.textContent = result.message;
                loginErrorMessage.classList.add('active');
            }
        });

        // Register form submission
        registerButton.addEventListener('click', () => {
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const phone = document.getElementById('reg-phone').value.trim();
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            
            // Clear previous errors
            clearRegisterErrors();
            
            let hasError = false;
            
            // Validate name
            if (!name) {
                regNameError.textContent = 'Name is required';
                regNameError.classList.add('active');
                regNameGroup.classList.add('error');
                hasError = true;
            } else if (name.length < 3) {
                regNameError.textContent = 'Name must be at least 3 characters';
                regNameError.classList.add('active');
                regNameGroup.classList.add('error');
                hasError = true;
            }
            
            // Validate email
            if (!email) {
                regEmailError.textContent = 'Email is required';
                regEmailError.classList.add('active');
                regEmailGroup.classList.add('error');
                hasError = true;
            } else if (!validateEmail(email)) {
                regEmailError.textContent = 'Please enter a valid email address';
                regEmailError.classList.add('active');
                regEmailGroup.classList.add('error');
                hasError = true;
            }
            
            // Validate phone
            if (!phone) {
                regPhoneError.textContent = 'Phone number is required';
                regPhoneError.classList.add('active');
                regPhoneGroup.classList.add('error');
                hasError = true;
            } else if (!validatePhone(phone)) {
                regPhoneError.textContent = 'Please enter a valid Somali phone number (e.g., +252 61 123 4567)';
                regPhoneError.classList.add('active');
                regPhoneGroup.classList.add('error');
                hasError = true;
            }
            
            // Validate password
            if (!password) {
                regPasswordError.textContent = 'Password is required';
                regPasswordError.classList.add('active');
                regPasswordGroup.classList.add('error');
                hasError = true;
            } else if (password.length < 6) {
                regPasswordError.textContent = 'Password must be at least 6 characters';
                regPasswordError.classList.add('active');
                regPasswordGroup.classList.add('error');
                hasError = true;
            }
            
            // Validate confirm password
            if (!confirmPassword) {
                regConfirmPasswordError.textContent = 'Please confirm your password';
                regConfirmPasswordError.classList.add('active');
                regConfirmPasswordGroup.classList.add('error');
                hasError = true;
            } else if (password !== confirmPassword) {
                regConfirmPasswordError.textContent = 'Passwords do not match';
                regConfirmPasswordError.classList.add('active');
                regConfirmPasswordGroup.classList.add('error');
                hasError = true;
            }
            
            if (hasError) return;
            
            // Attempt registration
            const result = userAuth.register(name, email, phone, password);
            
            if (result.success) {
                // Show success message
                registerSuccessMessage.classList.add('active');
                
                // Update UI
                setTimeout(() => {
                    loginModal.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    
                    // Update user profile in header
                    checkLoginStatus();
                    
                    // Show welcome notification
                    showNotification(`Welcome to UDUD PERFUMES, ${result.user.name}!`);
                }, 1500);
            } else {
                // Show error message
                registerErrorMessage.textContent = result.message;
                registerErrorMessage.classList.add('active');
            }
        });

        // Logout functionality
        logoutButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Logout user
                userAuth.logout();
                
                // Update UI
                checkLoginStatus();
                
                // Close dropdown
                userDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                
                // Show notification
                showNotification('You have been logged out');
            });
        });

        // Social login buttons
        document.querySelectorAll('.social-btn.google').forEach(btn => {
            btn.addEventListener('click', () => {
                showNotification('Google login would open here');
            });
        });
        
        document.querySelectorAll('.social-btn.facebook').forEach(btn => {
            btn.addEventListener('click', () => {
                showNotification('Facebook login would open here');
            });
        });

        // Mobile menu toggle
        document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const nav = this.closest('header').querySelector('nav ul');
                nav.classList.toggle('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                document.querySelectorAll('header').forEach(header => {
                    header.style.padding = '10px 0';
                    header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                });
            } else {
                document.querySelectorAll('header').forEach(header => {
                    header.style.padding = '15px 0';
                    header.style.boxShadow = 'var(--shadow)';
                });
            }
        });

        // Add some demo users for testing
        function initializeDemoUsers() {
            if (userAuth.users.length === 0) {
                userAuth.register('Mohamed Ali', 'baarri252@gmail.com', '+252 61 700 0305', 'password123');
                userAuth.register('Fatima Ahmed', 'fatima@example.com', '+252 63 123 4567', 'password123');
            }
        }
        
        // Initialize demo users on page load
        initializeDemoUsers();

  

