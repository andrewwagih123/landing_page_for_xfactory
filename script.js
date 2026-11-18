/**
 * XFACTORY CLOTHING STORE - INTERACTIVE CLIENT JAVASCRIPT
 * Est. 2023 | Modern Minimalist & Urban Luxury Streetwear
 */

// ==========================================
// 1. PRODUCTS DATASET
// ==========================================
const PRODUCTS_DATA = [
  {
    id: 'xf-01',
    name: 'X-01 Heavyweight Oversized Hoodie',
    category: 'hoodies',
    price: 110,
    originalPrice: 135,
    rating: 4.9,
    reviews: 142,
    badge: 'BESTSELLER',
    badgeType: 'badge-limited',
    colors: ['#2b3543', '#dcd8cf', '#111827'],
    colorNames: ['Washed Slate', 'Vintage Cream', 'Obsidian Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    primaryImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
    description: 'Custom-milled from 460 GSM combed French Terry cotton. Features an architectural drop-shoulder cut, double-layered hood without drawstrings for a clean profile, and heavyweight ribbed cuffs.',
    fabric: '100% Organic French Terry Cotton (460 GSM)',
    fit: 'Relaxed Oversized Silhouette. True to streetwear size.'
  },
  {
    id: 'xf-02',
    name: 'Atelier Waterproof Modular Trench',
    category: 'outerwear',
    price: 220,
    originalPrice: 260,
    rating: 5.0,
    reviews: 89,
    badge: 'NEW DROP',
    badgeType: 'badge-new',
    colors: ['#0f172a', '#3f4637'],
    colorNames: ['Midnight Navy', 'Tactical Olive'],
    sizes: ['M', 'L', 'XL'],
    primaryImage: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
    description: 'Technical stormproof membrane with sealed seams. Includes magnetic storm flap closures, detachable storm hood, and internal carry harness straps for versatile urban transitions.',
    fabric: '3-Layer High-Density Matte Nylon with DWR Coating',
    fit: 'Relaxed Tailored Cut designed for layered styling.'
  },
  {
    id: 'xf-03',
    name: 'Architectural Wide-Leg Cargo Pant',
    category: 'trousers',
    price: 140,
    originalPrice: 165,
    rating: 4.8,
    reviews: 114,
    badge: 'SALE 15%',
    badgeType: 'badge-sale',
    colors: ['#334155', '#1e293b'],
    colorNames: ['Concrete Grey', 'Stealth Charcoal'],
    sizes: ['30', '32', '34', '36'],
    primaryImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    description: 'Engineered with double-pleated knees, hidden zippered gussets, and deep 3D bellows pockets. Features an adjustable bungee hem to switch effortlessly between wide and tapered fits.',
    fabric: 'Heavy Cotton Ripstop & Twill Blend',
    fit: 'Wide-leg relaxed fit with customizable cuff cinch.'
  },
  {
    id: 'xf-04',
    name: 'Core Heavyweight 320GSM Boxy Tee',
    category: 'tees',
    price: 65,
    originalPrice: null,
    rating: 4.9,
    reviews: 218,
    badge: 'ESSENTIAL',
    badgeType: 'badge-new',
    colors: ['#f1f5f9', '#18181b', '#2e3a2f'],
    colorNames: ['Raw Chalk White', 'Washed Black', 'Military Forest'],
    sizes: ['S', 'M', 'L', 'XL'],
    primaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
    description: 'The cornerstone tee. Cut from heavyweight 320 GSM ringspun jersey with a snug 1.25" bound ribbed collar that never sags. Pre-shrunk with a subtle vintage mineral wash.',
    fabric: '100% Combed Ringspun Heavy Jersey Cotton',
    fit: 'Boxy drop-shoulder cut with elongated elbow sleeves.'
  },
  {
    id: 'xf-05',
    name: 'Structured Wool Blend Overshirt',
    category: 'outerwear',
    price: 175,
    originalPrice: 200,
    rating: 4.9,
    reviews: 73,
    badge: 'LIMITED',
    badgeType: 'badge-limited',
    colors: ['#374151', '#78350f'],
    colorNames: ['Charcoal Heather', 'Tobacco Brown'],
    sizes: ['S', 'M', 'L', 'XL'],
    primaryImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
    description: 'Substantial 520 GSM melton wool weave with custom horn-finish buttons and satin-lined inner yoke for frictionless layering over hoodies or knits.',
    fabric: '70% Recycled Melton Wool, 30% Polyamide',
    fit: 'Straight boxy jacket silhouette.'
  },
  {
    id: 'xf-06',
    name: 'Relaxed Double-Pleat Wool Trouser',
    category: 'trousers',
    price: 155,
    originalPrice: null,
    rating: 4.8,
    reviews: 64,
    badge: null,
    badgeType: '',
    colors: ['#1f2937', '#9ca3af'],
    colorNames: ['Dark Iron', 'Mist Grey'],
    sizes: ['30', '32', '34', '36'],
    primaryImage: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    description: 'Tailored drape meet relaxed contemporary street styling. Deep double forward pleats, blind hem, and hidden elasticated side waistband for supreme comfort.',
    fabric: 'Fine Tropical Wool Blend with slight natural stretch',
    fit: 'Fluid relaxed drape tapering gently toward ankle.'
  },
  {
    id: 'xf-07',
    name: 'Minimalist Matte Leather Crossbody',
    category: 'accessories',
    price: 95,
    originalPrice: 115,
    rating: 5.0,
    reviews: 96,
    badge: 'POPULAR',
    badgeType: 'badge-new',
    colors: ['#09090b', '#7c2d12'],
    colorNames: ['Matte Obsidian', 'Cognac Tan'],
    sizes: ['ONE SIZE'],
    primaryImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop',
    description: 'Handcrafted full-grain calfskin with gunmetal hardware and waterproof YKK Excella zippers. Sized to hold phone, passport, sunglasses, and keys with dedicated compartments.',
    fabric: 'Full-Grain Italian Calfskin Leather',
    fit: 'Adjustable seatbelt-weave tactical nylon strap.'
  },
  {
    id: 'xf-08',
    name: 'Acid-Wash Distressed Vintage Crewneck',
    category: 'hoodies',
    price: 115,
    originalPrice: 140,
    rating: 4.9,
    reviews: 131,
    badge: 'RESTOCK',
    badgeType: 'badge-sale',
    colors: ['#475569', '#3b0764'],
    colorNames: ['Acid Mineral Grey', 'Washed Violet'],
    sizes: ['S', 'M', 'L', 'XL'],
    primaryImage: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=800&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    description: 'Each piece undergoes a bespoke acid wash bath for individual unique fade patterns. Finished with subtle hand-distressed grinding on cuffs and neckline.',
    fabric: '400 GSM Heavyweight Terry Fleece',
    fit: 'Classic 90s vintage boxy athletic cut.'
  }
];

// ==========================================
// 2. CURRENCY CONVERSION CONFIGURATION
// ==========================================
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, decimals: 0 },
  EUR: { symbol: '€', rate: 0.92, decimals: 0 },
  GBP: { symbol: '£', rate: 0.79, decimals: 0 },
  EGP: { symbol: 'E£', rate: 48.5, decimals: 0 }
};

let currentCurrency = 'USD';

function formatPrice(amountInUSD) {
  const conf = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const converted = Math.round(amountInUSD * conf.rate);
  return `${conf.symbol}${converted.toLocaleString()}`;
}

// ==========================================
// 3. STATE MANAGEMENT (Cart, Wishlist, Filter)
// ==========================================
let cart = [
  {
    product: PRODUCTS_DATA[0],
    size: 'L',
    color: 'Washed Slate',
    qty: 1
  }
];

let wishlist = new Set(['xf-01', 'xf-02']);
let activeCategoryFilter = 'all';
let appliedPromo = null; // { code: 'XFACTORY20', discount: 0.20 }

// ==========================================
// 4. DOM ELEMENTS
// ==========================================
const productsGridEl = document.getElementById('productsGrid');
const cartDrawerEl = document.getElementById('cartDrawer');
const modalOverlayEl = document.getElementById('modalOverlay');
const cartItemsContainerEl = document.getElementById('cartItemsContainer');
const cartCountBadges = document.querySelectorAll('.cart-count-badge');
const cartSubtotalEls = document.querySelectorAll('.cart-subtotal-val');
const cartGrandTotalEl = document.getElementById('cartGrandTotal');
const cartDiscountRowEl = document.getElementById('cartDiscountRow');
const cartDiscountValEl = document.getElementById('cartDiscountVal');
const shippingCostValEl = document.getElementById('shippingCostVal');
const freeShippingBarEl = document.getElementById('freeShippingBar');
const freeShippingMsgEl = document.getElementById('freeShippingMsg');
const wishlistCountEls = document.querySelectorAll('.wishlist-count-badge');

const quickViewModalEl = document.getElementById('quickViewModal');
const searchModalEl = document.getElementById('searchModal');
const toastContainerEl = document.getElementById('toastContainer');
const currencySelectEl = document.getElementById('currencySelector');

// ==========================================
// 5. RENDER PRODUCTS
// ==========================================
function renderProducts() {
  if (!productsGridEl) return;

  const filtered = activeCategoryFilter === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === activeCategoryFilter);

  productsGridEl.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.has(product.id);
    const badgeHtml = product.badge 
      ? `<span class="product-badge ${product.badgeType}">${product.badge}</span>` 
      : '';
    const origPriceHtml = product.originalPrice 
      ? `<span class="product-original-price">${formatPrice(product.originalPrice)}</span>` 
      : '';

    const colorDots = product.colors.map(c => 
      `<span class="color-dot" style="background-color: ${c};" title="Color option"></span>`
    ).join('');

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image-wrap">
          <div class="product-badges">
            ${badgeHtml}
          </div>
          <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  aria-label="Add to wishlist" 
                  title="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}">
            <i class="${isWishlisted ? 'fas fa-heart' : 'far fa-heart'}"></i>
          </button>
          
          <img src="${product.primaryImage}" 
               alt="${product.name}" 
               class="product-img" 
               loading="lazy" 
               onerror="this.src='assets/prod-placeholder.svg'">
          <img src="${product.hoverImage}" 
               alt="${product.name} back angle" 
               class="product-img-hover" 
               loading="lazy" 
               onerror="this.src='assets/prod-placeholder.svg'">
          
          <div class="product-quick-actions">
            <button class="btn-quick-view" onclick="openQuickView('${product.id}')">
              <i class="far fa-eye"></i> Quick View
            </button>
            <button class="btn-quick-add" onclick="quickAddToCart('${product.id}')" title="Quick Add to Bag">
              +
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-meta">
            <span class="product-category-label">${product.category}</span>
            <div class="product-rating">
              <i class="fas fa-star"></i>
              <span>${product.rating}</span>
              <span style="color: var(--text-muted); font-size: 0.72rem;">(${product.reviews})</span>
            </div>
          </div>
          <h4 class="product-title">${product.name}</h4>
          
          <div class="product-colors-swatch">
            ${colorDots}
          </div>

          <div class="product-price-row">
            <span class="product-price">${formatPrice(product.price)}</span>
            ${origPriceHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// 6. CART MANAGEMENT
// ==========================================
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const rawSubtotalUSD = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);

  // Update header badges
  cartCountBadges.forEach(el => el.textContent = totalItems);

  // Update free shipping bar ($150 threshold)
  const freeShippingThresholdUSD = 150;
  const progressPercent = Math.min(100, Math.round((rawSubtotalUSD / freeShippingThresholdUSD) * 100));
  
  if (freeShippingBarEl) {
    freeShippingBarEl.style.width = `${progressPercent}%`;
  }

  if (freeShippingMsgEl) {
    if (rawSubtotalUSD === 0) {
      freeShippingMsgEl.innerHTML = `Add items to qualify for <strong>Free Worldwide Shipping</strong>`;
    } else if (rawSubtotalUSD >= freeShippingThresholdUSD) {
      freeShippingMsgEl.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked Free Express Shipping!`;
    } else {
      const remainingUSD = freeShippingThresholdUSD - rawSubtotalUSD;
      freeShippingMsgEl.innerHTML = `Add <strong>${formatPrice(remainingUSD)}</strong> more for <strong>Free Worldwide Shipping</strong>`;
    }
  }

  // Render Cart Items
  if (!cartItemsContainerEl) return;

  if (cart.length === 0) {
    cartItemsContainerEl.innerHTML = `
      <div class="cart-empty-state">
        <i class="fas fa-shopping-bag"></i>
        <h4>Your Shopping Bag Is Empty</h4>
        <p style="margin: 8px 0 20px; font-size: 0.85rem;">Explore our latest Autumn/Winter drop and elevate your wardrobe.</p>
        <button class="btn btn-secondary" onclick="closeCart(); location.href='#shop'">
          Start Shopping
        </button>
      </div>
    `;
  } else {
    cartItemsContainerEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.product.primaryImage}" alt="${item.product.name}" class="cart-item-img" onerror="this.src='assets/prod-placeholder.svg'">
        <div class="cart-item-info">
          <h5 class="cart-item-title">${item.product.name}</h5>
          <div class="cart-item-variant">${item.color} • Size ${item.size}</div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="changeCartQty(${idx}, -1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
            </div>
            <span class="cart-item-price">${formatPrice(item.product.price * item.qty)}</span>
            <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="Remove">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Calculate Totals
  let discountUSD = 0;
  if (appliedPromo && rawSubtotalUSD > 0) {
    discountUSD = rawSubtotalUSD * appliedPromo.discount;
  }

  const shippingUSD = (rawSubtotalUSD >= freeShippingThresholdUSD || rawSubtotalUSD === 0) ? 0 : 15;
  const grandTotalUSD = Math.max(0, rawSubtotalUSD - discountUSD + shippingUSD);

  cartSubtotalEls.forEach(el => el.textContent = formatPrice(rawSubtotalUSD));
  
  if (cartDiscountRowEl && cartDiscountValEl) {
    if (appliedPromo && discountUSD > 0) {
      cartDiscountRowEl.style.display = 'flex';
      cartDiscountValEl.textContent = `-${formatPrice(discountUSD)} (${appliedPromo.code})`;
    } else {
      cartDiscountRowEl.style.display = 'none';
    }
  }

  if (shippingCostValEl) {
    shippingCostValEl.textContent = shippingUSD === 0 ? 'FREE' : formatPrice(shippingUSD);
  }

  if (cartGrandTotalEl) {
    cartGrandTotalEl.textContent = formatPrice(grandTotalUSD);
  }
}

function addToCart(productId, size, color, qty = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.product.id === productId && item.size === size && item.color === color);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ product, size, color, qty });
  }

  updateCartUI();
  showToast(`Added <strong>${product.name}</strong> (Size ${size}) to bag!`);
  openCart();
}

function quickAddToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const defaultSize = product.sizes[0] || 'M';
  const defaultColor = product.colorNames ? product.colorNames[0] : 'Standard';
  addToCart(productId, defaultSize, defaultColor, 1);
}

function changeCartQty(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
      showToast('Item removed from shopping bag');
    }
    updateCartUI();
  }
}

function removeCartItem(index) {
  if (cart[index]) {
    const name = cart[index].product.name;
    cart.splice(index, 1);
    updateCartUI();
    showToast(`Removed <strong>${name}</strong> from bag`);
  }
}

function openCart() {
  if (cartDrawerEl && modalOverlayEl) {
    cartDrawerEl.classList.add('open');
    modalOverlayEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  if (cartDrawerEl && modalOverlayEl) {
    cartDrawerEl.classList.remove('open');
    if (!quickViewModalEl?.classList.contains('open') && !searchModalEl?.classList.contains('open')) {
      modalOverlayEl.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
}

// Promo code system
function applyCoupon() {
  const input = document.getElementById('promoCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (!code) {
    showToast('Please enter a promo code');
    return;
  }

  const coupons = {
    'XFACTORY20': 0.20,
    'WELCOME15': 0.15,
    'XFACTORY10': 0.10
  };

  if (coupons[code]) {
    appliedPromo = { code, discount: coupons[code] };
    updateCartUI();
    showToast(`Success! Code <strong>${code}</strong> applied (${coupons[code]*100}% OFF)`);
    input.value = '';
  } else {
    showToast('Invalid code. Try <strong>XFACTORY20</strong> or <strong>WELCOME15</strong>');
  }
}

// ==========================================
// 7. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    showToast(`Removed <strong>${product.name}</strong> from wishlist`);
  } else {
    wishlist.add(productId);
    showToast(`Saved <strong>${product.name}</strong> to your wishlist ❤️`);
  }

  wishlistCountEls.forEach(el => el.textContent = wishlist.size);
  renderProducts();
}

// ==========================================
// 8. QUICK VIEW MODAL
// ==========================================
let currentModalProductId = null;
let currentModalSelectedSize = 'M';
let currentModalSelectedColor = '';

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  currentModalSelectedSize = product.sizes[0] || 'M';
  currentModalSelectedColor = product.colorNames[0] || 'Standard';

  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalOrigPrice = document.getElementById('modalOrigPrice');
  const modalRating = document.getElementById('modalRating');
  const modalDesc = document.getElementById('modalDesc');
  const modalFabric = document.getElementById('modalFabric');
  const modalFit = document.getElementById('modalFit');
  const modalSizesContainer = document.getElementById('modalSizePills');
  const modalColorsContainer = document.getElementById('modalColorPills');

  if (modalImg) modalImg.src = product.primaryImage;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalPrice) modalPrice.textContent = formatPrice(product.price);
  if (modalOrigPrice) {
    modalOrigPrice.textContent = product.originalPrice ? formatPrice(product.originalPrice) : '';
  }
  if (modalRating) modalRating.innerHTML = `<i class="fas fa-star" style="color:#f59e0b"></i> ${product.rating} (${product.reviews} reviews)`;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalFabric) modalFabric.textContent = product.fabric;
  if (modalFit) modalFit.textContent = product.fit;

  // Render sizes
  if (modalSizesContainer) {
    modalSizesContainer.innerHTML = product.sizes.map((sz, i) => `
      <button class="size-pill ${i === 0 ? 'selected' : ''}" onclick="selectModalSize(this, '${sz}')">${sz}</button>
    `).join('');
  }

  // Render colors
  if (modalColorsContainer) {
    modalColorsContainer.innerHTML = product.colorNames.map((name, i) => `
      <button class="size-pill ${i === 0 ? 'selected' : ''}" style="width:auto; padding: 0 16px; font-size:0.8rem;" onclick="selectModalColor(this, '${name}')">${name}</button>
    `).join('');
  }

  quickViewModalEl.classList.add('open');
  modalOverlayEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectModalSize(el, sz) {
  document.querySelectorAll('#modalSizePills .size-pill').forEach(btn => btn.classList.remove('selected'));
  el.classList.add('selected');
  currentModalSelectedSize = sz;
}

function selectModalColor(el, col) {
  document.querySelectorAll('#modalColorPills .size-pill').forEach(btn => btn.classList.remove('selected'));
  el.classList.add('selected');
  currentModalSelectedColor = col;
}

function addModalItemToCart() {
  if (currentModalProductId) {
    const qtyInput = document.getElementById('modalQtyInput');
    const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
    addToCart(currentModalProductId, currentModalSelectedSize, currentModalSelectedColor, qty);
    closeQuickView();
  }
}

function closeQuickView() {
  if (quickViewModalEl) {
    quickViewModalEl.classList.remove('open');
    if (!cartDrawerEl?.classList.contains('open')) {
      modalOverlayEl.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
}

// ==========================================
// 9. SEARCH OVERLAY
// ==========================================
function openSearch() {
  if (searchModalEl && modalOverlayEl) {
    searchModalEl.classList.add('open');
    document.getElementById('searchInput')?.focus();
    renderSearchResults('');
  }
}

function closeSearch() {
  if (searchModalEl) {
    searchModalEl.classList.remove('open');
  }
}

function handleSearchInput(e) {
  const query = e.target.value.toLowerCase().trim();
  renderSearchResults(query);
}

function renderSearchResults(query) {
  const container = document.getElementById('searchResultsContainer');
  if (!container) return;

  const results = PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 30px; color: var(--text-muted);">No products match "${query}". Try "Hoodie", "Outerwear", or "Cargo".</div>`;
    return;
  }

  container.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="closeSearch(); openQuickView('${p.id}')">
      <img src="${p.primaryImage}" class="search-result-thumb" alt="${p.name}" onerror="this.src='assets/prod-placeholder.svg'">
      <div style="flex:1;">
        <h5 style="color:#ffffff; font-size:0.95rem; font-weight:700;">${p.name}</h5>
        <span style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase;">${p.category}</span>
      </div>
      <span style="font-weight:800; color:var(--brand-blue);">${formatPrice(p.price)}</span>
    </div>
  `).join('');
}

// ==========================================
// 10. CATEGORY FILTER TABS
// ==========================================
function setCategoryFilter(category, btnElement) {
  activeCategoryFilter = category;
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderProducts();
}

// ==========================================
// 11. UNIT TOGGLE (SIZE GUIDE)
// ==========================================
function setSizeUnit(unit) {
  const cmBtn = document.getElementById('btnUnitCm');
  const inBtn = document.getElementById('btnUnitIn');
  const values = document.querySelectorAll('.size-val');

  if (unit === 'in') {
    cmBtn?.classList.remove('active');
    inBtn?.classList.add('active');
    values.forEach(el => {
      const cmVal = parseFloat(el.getAttribute('data-cm'));
      if (!isNaN(cmVal)) {
        el.textContent = (cmVal / 2.54).toFixed(1) + ' in';
      }
    });
  } else {
    inBtn?.classList.remove('active');
    cmBtn?.classList.add('active');
    values.forEach(el => {
      const cmVal = el.getAttribute('data-cm');
      if (cmVal) el.textContent = cmVal + ' cm';
    });
  }
}

// ==========================================
// 12. NEWSLETTER FORM
// ==========================================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  const feedback = document.getElementById('newsletterFeedback');
  if (!input || !input.value) return;

  const email = input.value.trim();
  if (!email.includes('@')) {
    alert('Please provide a valid email address.');
    return;
  }

  input.value = '';
  if (feedback) {
    feedback.innerHTML = `✓ Welcome to the Syndicate! Use code <strong>WELCOME15</strong> at checkout for 15% off.`;
    feedback.style.display = 'block';
  }
  showToast('Welcome to the XFACTORY Syndicate!');
}

// ==========================================
// 13. CHECKOUT SIMULATION
// ==========================================
function triggerCheckout() {
  if (cart.length === 0) {
    showToast('Your bag is empty! Add items before checkout.');
    return;
  }
  const grandTotal = document.getElementById('cartGrandTotal')?.textContent || '$0';
  const confirmation = confirm(`Ready to place your order for ${grandTotal} with Express Worldwide Delivery?`);
  if (confirmation) {
    cart = [];
    appliedPromo = null;
    updateCartUI();
    closeCart();
    showToast('🎉 Order confirmed! Thank you for choosing XFACTORY.');
  }
}

// ==========================================
// 14. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(messageHtml) {
  if (!toastContainerEl) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle" style="color:var(--brand-blue); font-size:1.1rem;"></i> <span>${messageHtml}</span>`;
  
  toastContainerEl.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 15. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial renders
  renderProducts();
  updateCartUI();
  wishlistCountEls.forEach(el => el.textContent = wishlist.size);

  // Currency select listener
  currencySelectEl?.addEventListener('change', (e) => {
    currentCurrency = e.target.value;
    renderProducts();
    updateCartUI();
    showToast(`Currency updated to <strong>${currentCurrency}</strong>`);
  });

  // Modal overlay click to close
  modalOverlayEl?.addEventListener('click', () => {
    closeCart();
    closeQuickView();
    closeSearch();
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.innerHTML = navMenu.classList.contains('open') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // Header scroll shadow effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Keyboard escape listener to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeSearch();
    }
  });
});
