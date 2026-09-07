/**
 * MAISON VÉLÈNE — LUXURY COMMERCE CORE JAVASCRIPT
 * Atelier de Prêt-à-Porter · Paris & New York
 */

(function () {
  'use strict';

  /* ==========================================================================
     CATALOG PRODUCT REPOSITORY
     ========================================================================== */
  const PRODUCTS = [
    {
      id: 'velene-cashmere-trench',
      title: 'The Vélène Double-Faced Cashmere Trench',
      category: 'women',
      categoryLabel: "Women's Outerwear",
      price: 890,
      originalPrice: null,
      image: 'images/product_coat_front.jpg',
      badge: 'Bestseller',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Camel', hex: '#C28D58' },
        { name: 'Charcoal', hex: '#2A2928' },
        { name: 'Ivory', hex: '#F2EDE4' }
      ],
      description: 'Handcrafted in Biella, Italy from 100% double-faced brushed Mongolian cashmere. Features storm flaps, horn buttons, and an unstructured architectural drape.'
    },
    {
      id: 'velene-silk-slip-dress',
      title: 'Charmeuse Bias-Cut Silk Slip Dress',
      category: 'women',
      categoryLabel: "Women's Evening",
      price: 460,
      originalPrice: 520,
      image: 'images/product_silk_dress.jpg',
      badge: 'New In',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Champagne', hex: '#EBE5D8' },
        { name: 'Noir', hex: '#121212' }
      ],
      description: 'Spun from 22mm heavyweight mulberry silk with raw-edge French hems. Designed to float effortlessly over the feminine contour.'
    },
    {
      id: 'velene-wool-blazer',
      title: 'Architectural Charcoal Wool Blazer',
      category: 'women',
      categoryLabel: "Women's Tailoring",
      price: 680,
      originalPrice: null,
      image: 'images/product_wool_blazer.jpg',
      badge: 'Atelier Signature',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Heather Charcoal', hex: '#4A4846' },
        { name: 'Midnight', hex: '#1C222B' }
      ],
      description: 'Sculptural sharp shoulders and a tapered waistline crafted from high-twist virgin wool sourced from historic Biellese mills.'
    },
    {
      id: 'velene-linen-shirt',
      title: 'Relaxed Alabaster Linen Atelier Shirt',
      category: 'men',
      categoryLabel: "Men's Sartorial",
      price: 240,
      originalPrice: null,
      image: 'images/product_linen_shirt.jpg',
      badge: null,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Alabaster', hex: '#FAF8F5' },
        { name: 'Sage', hex: '#879183' },
        { name: 'Sky', hex: '#C5D0D6' }
      ],
      description: 'Woven in Normandy from long-staple organic flax linen. Breathable, relaxed silhouette finished with mother-of-pearl buttons.'
    },
    {
      id: 'velene-leather-bag',
      title: 'The Paloma Sculptural Calfskin Tote',
      category: 'accessories',
      categoryLabel: 'Leather Goods',
      price: 950,
      originalPrice: null,
      image: 'images/product_leather_bag.jpg',
      badge: 'Limited Edition',
      sizes: ['One Size'],
      colors: [
        { name: 'Cognac Tan', hex: '#9E5D2A' },
        { name: 'Noir Obsidian', hex: '#121212' }
      ],
      description: 'Hand-burnished Italian calfskin leather with subtle brass hardware. Features magnetic interior clasps and suede microfiber lining.'
    },
    {
      id: 'velene-wool-overcoat-men',
      title: 'Men’s Minimalist Structured Wool Coat',
      category: 'men',
      categoryLabel: "Men's Outerwear",
      price: 840,
      originalPrice: 920,
      image: 'images/category_men.jpg',
      badge: 'Curated',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Charcoal Grey', hex: '#3E3C3A' },
        { name: 'Camel', hex: '#C28D58' }
      ],
      description: 'An enduring masculine silhouette cut from dense double-faced melton wool with a clean three-button closure.'
    },
    {
      id: 'velene-wool-trousers',
      title: 'Pleated Wide-Leg Wool Flannel Trousers',
      category: 'men',
      categoryLabel: "Men's Sartorial",
      price: 360,
      originalPrice: null,
      image: 'images/product_wool_trousers.jpg',
      badge: null,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Deep Taupe', hex: '#595551' },
        { name: 'Noir', hex: '#121212' }
      ],
      description: 'Double reverse pleats and an extended waistband tab provide a fluid, elegant architectural break over tailoring shoes.'
    },
    {
      id: 'velene-cashmere-knit',
      title: 'Heirloom Ribbed Merino Crewneck',
      category: 'kids',
      categoryLabel: 'Youth Edition',
      price: 220,
      originalPrice: null,
      image: 'images/product_knit_sweater.jpg',
      badge: 'New In',
      sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
      colors: [
        { name: 'Oatmeal Heather', hex: '#D8CEBE' },
        { name: 'Navy', hex: '#1B2433' }
      ],
      description: 'Ultra-soft non-scratching fine merino wool crafted with reinforced ribbing for everyday elegance and resilience.'
    },
    {
      id: 'velene-chelsea-boots',
      title: 'Calfskin Heritage Chelsea Boots',
      category: 'accessories',
      categoryLabel: 'Footwear',
      price: 490,
      originalPrice: null,
      image: 'images/product_chelsea_boots.jpg',
      badge: 'Artisan Made',
      sizes: ['39', '40', '41', '42', '43', '44'],
      colors: [
        { name: 'Onyx Black', hex: '#111111' },
        { name: 'Deep Espresso', hex: '#362319' }
      ],
      description: 'Goodyear welted Tuscan calfskin leather with elastic gussets and custom leather-stacked heels.'
    },
    {
      id: 'velene-ivory-suit',
      title: 'Monochrome Ivory Wool Tailored Suit',
      category: 'women',
      categoryLabel: "Women's Atelier",
      price: 1150,
      originalPrice: null,
      image: 'images/category_women.jpg',
      badge: 'Runway',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Pure Ivory', hex: '#F5F1EB' }
      ],
      description: 'The pinnacle of Parisian atelier tailoring. Pairable jacket and pleated cigarette trousers in 100% fine crepe wool.'
    },
    {
      id: 'velene-youth-trousers',
      title: 'Youth Pleated Wool Tailored Slacks',
      category: 'kids',
      categoryLabel: 'Youth Edition',
      price: 180,
      originalPrice: null,
      image: 'images/category_kids.jpg',
      badge: null,
      sizes: ['6Y', '8Y', '10Y', '12Y'],
      colors: [
        { name: 'Warm Tobacco', hex: '#8B5A2B' }
      ],
      description: 'Comfort-stretch waistband and Italian wool-cotton blend fabric tailored for sophisticated family celebrations.'
    },
    {
      id: 'velene-editorial-trench',
      title: 'The Slate Storm Double Trench',
      category: 'women',
      categoryLabel: "Women's Outerwear",
      price: 920,
      originalPrice: null,
      image: 'images/lookbook_trending.jpg',
      badge: 'Lookbook',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: [
        { name: 'Slate Grey', hex: '#585E66' },
        { name: 'Midnight', hex: '#16191E' }
      ],
      description: 'Dramatically proportioned storm flaps, belted wrist cinches, and water-repellent gabardine weave.'
    }
  ];

  /* ==========================================================================
     STATE MANAGEMENT & CART
     ========================================================================== */
  const CART_KEY = 'maison_velene_cart_v1';
  
  let cart = [];
  try {
    const saved = localStorage.getItem(CART_KEY);
    if (saved) {
      cart = JSON.parse(saved);
    } else {
      // Default initial item for instant preview
      cart = [
        {
          id: 'velene-cashmere-trench',
          title: 'The Vélène Double-Faced Cashmere Trench',
          price: 890,
          image: 'images/product_coat_front.jpg',
          size: 'M',
          color: 'Camel',
          quantity: 1
        }
      ];
      saveCart();
    }
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {}
  }

  function getCartSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function getCartTotalCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  /* ==========================================================================
     UI NOTIFICATIONS (TOASTS)
     ========================================================================== */
  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  /* ==========================================================================
     CART DRAWER CONTROLLER
     ========================================================================== */
  function openCartDrawer() {
    const overlay = document.querySelector('.cart-drawer-overlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      renderCart();
    }
  }

  function closeCartDrawer() {
    const overlay = document.querySelector('.cart-drawer-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function addToCart(item) {
    const existingIndex = cart.findIndex(
      i => i.id === item.id && i.size === item.size && i.color === item.color
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += (item.quantity || 1);
    } else {
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        size: item.size || 'M',
        color: item.color || 'Camel',
        quantity: item.quantity || 1
      });
    }

    saveCart();
    updateBadge();
    renderCart();
    openCartDrawer();
    showToast(`"${item.title}" added to your shopping bag.`);
  }

  function updateItemQty(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateBadge();
    renderCart();
  }

  function removeItem(index) {
    if (!cart[index]) return;
    const title = cart[index].title;
    cart.splice(index, 1);
    saveCart();
    updateBadge();
    renderCart();
    showToast(`Removed "${title}" from bag.`);
  }

  function updateBadge() {
    const count = getCartTotalCount();
    document.querySelectorAll('.cart-badge-count').forEach(badge => {
      badge.textContent = count;
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 300);
    });
  }

  function renderCart() {
    const itemsList = document.querySelector('.cart-items-container');
    const subtotalEl = document.querySelector('.cart-subtotal-val');
    const meterFill = document.querySelector('.shipping-progress-fill');
    const meterText = document.querySelector('.shipping-meter-text');

    if (!itemsList) return;

    const subtotal = getCartSubtotal();
    if (subtotalEl) {
      subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
    }

    // Free shipping calculation threshold $250
    const threshold = 250;
    if (meterFill && meterText) {
      if (subtotal >= threshold) {
        meterFill.style.width = '100%';
        meterText.innerHTML = '✨ <strong>Complimentary Worldwide Courier</strong> unlocked!';
      } else {
        const diff = threshold - subtotal;
        const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
        meterFill.style.width = `${pct}%`;
        meterText.innerHTML = `Add <strong>$${diff}</strong> more for complimentary courier`;
      }
    }

    if (cart.length === 0) {
      itemsList.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <h4>Your bag is empty</h4>
          <p>Explore our latest silhouettes to discover timeless pieces.</p>
          <a href="shop.html" class="btn btn-primary btn-sm" style="margin-top: 1rem;" onclick="closeCartDrawer()">Explore Catalog</a>
        </div>
      `;
      return;
    }

    itemsList.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <h4>${item.title}</h4>
          <div class="cart-item-meta">${item.color} · Size ${item.size}</div>
          <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
          <div class="cart-qty-control">
            <button type="button" class="qty-btn" onclick="MaisonVelene.updateItemQty(${idx}, -1)">−</button>
            <span class="qty-number">${item.quantity}</span>
            <button type="button" class="qty-btn" onclick="MaisonVelene.updateItemQty(${idx}, 1)">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" onclick="MaisonVelene.removeItem(${idx})" aria-label="Remove item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    `).join('');
  }

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  function openMobileNav() {
    const nav = document.querySelector('.mobile-nav-drawer');
    if (nav) {
      nav.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    const nav = document.querySelector('.mobile-nav-drawer');
    if (nav) {
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ==========================================================================
     QUICK VIEW MODAL
     ========================================================================== */
  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let modal = document.getElementById('quick-view-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quick-view-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-box">
        <button type="button" class="modal-close-btn" onclick="MaisonVelene.closeModal('quick-view-modal')">&times;</button>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: start;">
          <div style="aspect-ratio: 3/4; overflow: hidden; background: var(--color-surface);">
            <img src="${product.image}" alt="${product.title}" style="width:100%; height:100%; object-fit: cover;">
          </div>
          <div>
            <div class="eyebrow">${product.categoryLabel || 'Atelier Collection'}</div>
            <h3 style="margin-bottom: 0.5rem;">${product.title}</h3>
            <div style="font-size: 1.35rem; font-weight: 600; margin-bottom: 1rem; color: var(--color-noir);">$${product.price}</div>
            <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">${product.description}</p>
            
            <div class="selector-label">Size: <span id="qv-selected-size">${product.sizes[0]}</span></div>
            <div class="size-selector-grid" style="margin-bottom: 1.5rem;">
              ${product.sizes.map((s, i) => `
                <button type="button" class="size-option-btn ${i === 0 ? 'active' : ''}" onclick="MaisonVelene.selectQuickSize(this, '${s}')">${s}</button>
              `).join('')}
            </div>

            <button type="button" class="btn btn-primary btn-full" onclick="MaisonVelene.addQuickViewToCart('${product.id}')">
              Add to Shopping Bag — $${product.price}
            </button>
            <a href="product.html?id=${product.id}" class="btn-text" style="display: block; text-align: center; margin-top: 1rem;">View Full Atelier Details &rarr;</a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function selectQuickSize(btn, size) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.size-option-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const label = document.getElementById('qv-selected-size');
    if (label) label.textContent = size;
  }

  function addQuickViewToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const selectedSize = document.getElementById('qv-selected-size')?.textContent || product.sizes[0];
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: product.colors[0]?.name || 'Standard',
      quantity: 1
    });
    closeModal('quick-view-modal');
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ==========================================================================
     SHOP CATALOG FILTER & SORT CONTROLLER (shop.html)
     ========================================================================== */
  function initShopCatalog() {
    const grid = document.getElementById('shop-products-grid');
    if (!grid) return;

    let activeCategory = 'all';
    let activeSize = 'all';
    let maxPrice = 1200;
    let searchQuery = '';
    let currentSort = 'featured';

    const countEl = document.getElementById('shop-product-count');
    const searchInput = document.getElementById('shop-search-input');
    const priceSlider = document.getElementById('shop-price-slider');
    const priceDisplay = document.getElementById('shop-price-display');
    const sortSelect = document.getElementById('shop-sort-select');

    function filterAndRender() {
      let filtered = PRODUCTS.filter(p => {
        // Category filter
        if (activeCategory !== 'all' && p.category !== activeCategory) return false;
        // Size filter
        if (activeSize !== 'all' && !p.sizes.includes(activeSize)) return false;
        // Price filter
        if (p.price > maxPrice) return false;
        // Search filter
        if (searchQuery) {
          const matchTitle = p.title.toLowerCase().includes(searchQuery);
          const matchCat = p.categoryLabel.toLowerCase().includes(searchQuery);
          if (!matchTitle && !matchCat) return false;
        }
        return true;
      });

      // Sorting
      if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (currentSort === 'newest') {
        filtered.reverse();
      }

      if (countEl) {
        countEl.textContent = `${filtered.length} Silhouettes`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 5rem 1rem;">
            <h3>No Silhouettes Match Your Criteria</h3>
            <p style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Try relaxing your filters or search keywords.</p>
            <button type="button" class="btn btn-outline btn-sm" onclick="MaisonVelene.resetFilters()">Clear All Filters</button>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(p => `
        <article class="product-card">
          <div class="product-image-box">
            ${p.badge ? `<span class="product-badge ${p.badge === 'Bestseller' ? 'product-badge-accent' : ''}">${p.badge}</span>` : ''}
            <a href="product.html?id=${p.id}">
              <img src="${p.image}" alt="${p.title}" class="product-thumb" loading="lazy">
            </a>
            <div class="product-actions-bar">
              <button type="button" class="product-action-btn" onclick="MaisonVelene.openQuickView('${p.id}')">Quick View</button>
              <button type="button" class="product-action-btn" onclick="MaisonVelene.addToCart({ id: '${p.id}', title: '${p.title.replace(/'/g, "\\'")}', price: ${p.price}, image: '${p.image}', size: '${p.sizes[0]}', color: '${p.colors[0]?.name || 'Standard'}' })">Add to Bag</button>
            </div>
          </div>
          <div class="product-meta">
            <span class="product-category-tag">${p.categoryLabel}</span>
            <h4 class="product-title"><a href="product.html?id=${p.id}">${p.title}</a></h4>
            <div class="product-price-row">
              <span class="product-price">$${p.price}</span>
              ${p.originalPrice ? `<span class="product-price-original">$${p.originalPrice}</span>` : ''}
            </div>
            <div class="product-swatches">
              ${p.colors.map(c => `<span class="swatch-circle" style="background-color: ${c.hex};" title="${c.name}"></span>`).join('')}
            </div>
          </div>
        </article>
      `).join('');
    }

    // Category button clicks
    document.querySelectorAll('.filter-link[data-category]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.filter-link[data-category]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        filterAndRender();
      });
    });

    // Size pill clicks
    document.querySelectorAll('.size-pill[data-size]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
          btn.classList.remove('active');
          activeSize = 'all';
        } else {
          document.querySelectorAll('.size-pill[data-size]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeSize = btn.getAttribute('data-size');
        }
        filterAndRender();
      });
    });

    // Price slider
    if (priceSlider && priceDisplay) {
      priceSlider.addEventListener('input', e => {
        maxPrice = Number(e.target.value);
        priceDisplay.textContent = `$${maxPrice}`;
        filterAndRender();
      });
    }

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterAndRender();
      });
    }

    // Sort select
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        currentSort = e.target.value;
        filterAndRender();
      });
    }

    // Initial render
    filterAndRender();

    // Expose reset
    window.MaisonVelene.resetFilters = function () {
      activeCategory = 'all';
      activeSize = 'all';
      maxPrice = 1200;
      searchQuery = '';
      currentSort = 'featured';
      if (priceSlider) priceSlider.value = 1200;
      if (priceDisplay) priceDisplay.textContent = '$1,200';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      document.querySelectorAll('.filter-link[data-category]').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === 'all');
      });
      document.querySelectorAll('.size-pill[data-size]').forEach(b => b.classList.remove('active'));
      filterAndRender();
      showToast('Filters have been reset.');
    };
  }

  /* ==========================================================================
     PRODUCT DETAIL PAGE CONTROLLER (product.html)
     ========================================================================== */
  function initProductDetailPage() {
    const mainGalleryImg = document.getElementById('product-main-view');
    if (!mainGalleryImg) return;

    // Multi-angle thumbnail clicker
    document.querySelectorAll('.thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const newSrc = btn.getAttribute('data-full-img');
        if (newSrc) {
          mainGalleryImg.style.opacity = '0.4';
          setTimeout(() => {
            mainGalleryImg.src = newSrc;
            mainGalleryImg.style.opacity = '1';
          }, 150);
        }
      });
    });

    // Size selector buttons
    let selectedSize = 'M';
    document.querySelectorAll('.size-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.textContent.trim();
        const alertEl = document.getElementById('stock-alert-text');
        if (alertEl) {
          if (selectedSize === 'M' || selectedSize === 'S') {
            alertEl.textContent = `Only 2 pieces remain in size ${selectedSize} at our Paris Atelier`;
          } else {
            alertEl.textContent = `Complimentary tailoring consultation available for size ${selectedSize}`;
          }
        }
      });
    });

    // Color swatches selector
    let selectedColor = 'Camel';
    document.querySelectorAll('.color-swatch-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch-opt').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColor = btn.getAttribute('data-color-name');
        const colorLabel = document.getElementById('active-color-name');
        if (colorLabel) colorLabel.textContent = selectedColor;
      });
    });

    // Quantity selector
    const qtyInput = document.getElementById('product-qty-input');
    const qtyMinus = document.getElementById('qty-minus-btn');
    const qtyPlus = document.getElementById('qty-plus-btn');

    if (qtyMinus && qtyInput) {
      qtyMinus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value, 10) || 1;
        if (val > 1) qtyInput.value = val - 1;
      });
    }

    if (qtyPlus && qtyInput) {
      qtyPlus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value, 10) || 1;
        if (val < 10) qtyInput.value = val + 1;
      });
    }

    // Add to Cart button on detail page
    const detailAddBtn = document.getElementById('btn-add-to-cart-detail');
    if (detailAddBtn) {
      detailAddBtn.addEventListener('click', () => {
        const title = document.getElementById('p-title')?.textContent || 'The Vélène Double-Faced Cashmere Trench';
        const price = 890;
        const qty = parseInt(qtyInput?.value, 10) || 1;
        addToCart({
          id: 'velene-cashmere-trench',
          title: title,
          price: price,
          image: mainGalleryImg.src,
          size: selectedSize,
          color: selectedColor,
          quantity: qty
        });
      });
    }

    // Direct Buy Now button
    const directBuyBtn = document.getElementById('btn-buy-now-detail');
    if (directBuyBtn) {
      directBuyBtn.addEventListener('click', () => {
        const title = document.getElementById('p-title')?.textContent || 'The Vélène Double-Faced Cashmere Trench';
        addToCart({
          id: 'velene-cashmere-trench',
          title: title,
          price: 890,
          image: mainGalleryImg.src,
          size: selectedSize,
          color: selectedColor,
          quantity: 1
        });
        openCartDrawer();
      });
    }
  }

  function initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.parentElement;
        item.classList.toggle('active');
      });
    });
  }

  /* ==========================================================================
     FORM VALIDATION & HANDLERS
     ========================================================================== */
  function initForms() {
    // Contact Form
    const contactForm = document.getElementById('atelier-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('c-name')?.value.trim();
        const email = document.getElementById('c-email')?.value.trim();
        const message = document.getElementById('c-message')?.value.trim();

        if (!name || !email || !message) {
          showToast('Please complete all required fields.', 'error');
          return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Transmitting to Concierge...';
        }

        setTimeout(() => {
          contactForm.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Message Transmitted';
          }
          const successBox = document.querySelector('.form-success-alert');
          if (successBox) {
            successBox.style.display = 'block';
            successBox.innerHTML = `
              <strong>Thank you, ${name}.</strong> Your request has been directed to our Private Client Advisory in Paris. An atelier concierge will respond within 24 hours.
            `;
          }
          showToast('Your message was received by our Concierge.');
        }, 800);
      });
    }

    // Newsletter Forms (all pages)
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input || !input.value.includes('@')) {
          showToast('Please enter a valid email address.', 'error');
          return;
        }
        const email = input.value;
        form.reset();
        showToast(`Privilege unlocked! Code VELENE10 sent to ${email}`);
      });
    });
  }

  function initScrollToTop() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'scroll-to-top';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.setAttribute('title', 'Back to top');
    btn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     GLOBAL INITIALIZATION
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    updateBadge();

    // Mobile nav trigger
    document.querySelector('.mobile-toggle')?.addEventListener('click', openMobileNav);
    document.querySelector('.mobile-nav-close')?.addEventListener('click', closeMobileNav);
    document.querySelector('.mobile-nav-drawer')?.addEventListener('click', e => {
      if (e.target.classList.contains('mobile-nav-drawer')) closeMobileNav();
    });

    // Cart triggers
    document.querySelectorAll('.cart-open-trigger').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        openCartDrawer();
      });
    });

    document.querySelector('.cart-drawer-close')?.addEventListener('click', closeCartDrawer);
    document.querySelector('.cart-drawer-overlay')?.addEventListener('click', e => {
      if (e.target.classList.contains('cart-drawer-overlay')) closeCartDrawer();
    });

    // Modal close overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target.classList.contains('modal-overlay')) {
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });

    // Escape key closes modals and drawers
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeMobileNav();
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
        document.body.style.overflow = '';
      }
    });

    // Checkout button simulation
    document.querySelector('.btn-checkout-cart')?.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your bag is currently empty.');
        return;
      }
      showToast('Proceeding to 256-bit Encrypted Private Checkout...');
      setTimeout(() => {
        alert('Thank you for experiencing Maison Vélène. In production, this securely redirects to Stripe / Apple Pay checkout.');
      }, 700);
    });

    // Page-specific & component initializers
    initScrollToTop();
    initAccordions();
    initShopCatalog();
    initProductDetailPage();
    initForms();
    initFlagshipMap();
  });

  function initFlagshipMap() {
    const mapIframe = document.getElementById('flagship-map-iframe');
    const mapButtons = document.querySelectorAll('.switch-map-btn');
    const mapTitle = document.getElementById('map-location-title');
    const mapDesc = document.getElementById('map-location-desc');

    if (!mapIframe || mapButtons.length === 0) return;

    const mapData = {
      paris: {
        title: 'Paris Private Appointments',
        desc: 'Located near Place Vendôme, our Paris salon showcases one-of-a-kind runway samples, bespoke fabric swatches, and private fitting rooms overlooking historic courtyards.',
        url: 'https://maps.google.com/maps?q=248%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris%2C%20France&t=&z=15&ie=UTF8&iwloc=&output=embed'
      },
      ny: {
        title: 'New York Madison Salon',
        desc: 'Situated on upper Madison Avenue, our Manhattan sanctuary provides personal wardrobe consulting, trunk show access, and private courier delivery throughout North America.',
        url: 'https://maps.google.com/maps?q=830%20Madison%20Avenue%2C%20New%20York%2C%20NY%2010021&t=&z=15&ie=UTF8&iwloc=&output=embed'
      }
    };

    mapButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.map;
        if (!mapData[key]) return;

        mapButtons.forEach(b => {
          b.classList.remove('btn-primary', 'active');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-primary', 'active');

        mapIframe.src = mapData[key].url;
        if (mapTitle) mapTitle.textContent = mapData[key].title;
        if (mapDesc) mapDesc.textContent = mapData[key].desc;
      });
    });
  }

  /* Export public API */
  window.MaisonVelene = {
    addToCart,
    updateItemQty,
    removeItem,
    openCartDrawer,
    closeCartDrawer,
    openMobileNav,
    closeMobileNav,
    openQuickView,
    closeModal,
    selectQuickSize,
    addQuickViewToCart,
    showToast,
    PRODUCTS
  };
})();
