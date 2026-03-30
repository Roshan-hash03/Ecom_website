/* ═══════════════════════════════════════════════════════
   TECHVAULT — app.js
   Features:
     1. Product data (JSON — easy to expand)
     2. Skeleton loader simulation
     3. Render product grid
     4. Filter by category
     5. Sort products
     6. Quick View modal
     7. Nav scroll effect
     8. Mobile menu
═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────
   1. PRODUCT DATA — JSON format
   HOW TO ADD YOUR OWN PRODUCTS:
   - Copy any product object below
   - Replace title, brand, price, image, amazonUrl
   - Set category to: "bestseller" | "new" | "audio" | "charging" | "workspace"
   - Add multiple tags if needed
   - Get your Amazon affiliate link from Amazon Associates dashboard
───────────────────────────────────────────────────── */
const products = [
  {
    id: 1,
    title: "Trendy Queen: Women's 2-Piece Summer Lounge Set",
    brand: "Trendy Queen",
    category: ["bestseller", "summer collection"],
    tags: ["best", "sale"],
    price: 31.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviewCount: 1097,
    image: "1.jpg",
    amazonUrl: "https://amzn.to/4bRK9gT?tag=YOUR-ASSOCIATE-TAG",
    description: "Summer-Ready Comfort & Style—Experience the smooth, breathable feel of our signature rayon-spandex blend, perfectly tailored for warm weather",
    features: [
      "Summer-Ready Comfort & Style—Experience the smooth, breathable feel of our signature rayon-spandex blend, perfectly tailored for warm weather",
      "This lightweight set offers gentle stretch and all-day ease, keeping you cool and comfortable whether you're relaxing at home or out in the sun",
      "Versatile & Effortless—The chic, minimalist design transitions seamlessly from cozy loungewear to casual outings. Pair with sneakers for a day out or sandals for a beach stroll",
      "Available in a range of sizes and colors, our 2-piece set is designed to flatter every body type. Embrace the ultimate combination of comfort and style this summer"
    ]
    
  },
  {
    id: 2,
    title: "Pahajim Women Fashion Purses and Handbags",
    brand: "Pahajim",
    category: ["bestseller", "new"],
    tags: ["new"],
    price: 32.99,
    originalPrice: null,
    rating: 4.3,
    reviewCount: 4271,
    image: "2.jpg",
    amazonUrl: "",
    description: "Pahajim Women Fashion Purses and Handbags Shoulder Tote Bags Top Handle Satchel for Women",
    features: [
      "【CLASSIC DESIGN AND ELEGANT STYLE】- Use high quality artificial leather(environmentally-friendly synthetic leather, ",
      "not genuine leather). Imitation elephant skin texture design, unique style reflects your taste. The top handle of this bag is solid and durable,",
      " connects with beautiful gold hardware. Top zipper closure. Furthermore, this working satchel purse has a matching removable shoulder strap.",
      "【SPACIOUS INTERIOR】- The interior of this handbag is roomy and can hold your daily essentials such as wallet, phone, keys, makeup, sunglasses, etc. ",
    ]
  },
  {
    id: 3,
    title: "Trendy Woven Evening Clutch Purses Women Underarm Shoulder Handbag",
    brand: " Upbull",
    category: ["bestseller", "workspace"],
    tags: ["best"],
    price: 42.99,
    originalPrice: null,
    rating: 4.3,
    reviewCount: 934,
    image: "3.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09HM94VDS?tag=YOUR-ASSOCIATE-TAG",
    description: "Trendy Woven Evening Clutch Purses Women Underarm Shoulder Handbag Cute Satchels Crossbody Purse PU Leather Wallet",
    features: [
      "Fashion Trendy Suede Leather Woven Bag: The surface of the clutch purses for women is Suede leather, high-quality, wear-resistant, fashionable, unique, versatile.",
      "It is suitable for matching with all kinds of clothing styles and season to make you look more beautiful. Fashion, Cute, Beautiful Shoulder Evening Bag",
      "Ideal Gift: This adjustable crossbody purse makes an awesome, unique gift that is useful and stylish. This small shoulder bag can go with any outfits. It sits nicely on every style. Cute and fashion Christmas, birthday, anniversary gifts",
      
    ]
  },
  {
    id: 4,
    title: "QINSEN Women's Square Neck Sleeveless Double-Layer Tank Top",
    brand: "QINSEN",
    category: ["clothing", "bestseller"],
    tags: ["best", "sale"],
    price: 18.99,
    originalPrice: 23.00,
    rating: 4.2,
    reviewCount: 3913,
    image: "4.jpg",
    amazonUrl: "",
    description: "QINSEN Women's Square Neck Sleeveless Double-Layer Tank Tops Basic Tight T Shirts",
    features: [
      "Exceptionally Soft and Stretchy Fabric: Offer yourself the luxury of supreme comfort with our QINSEN sleeveless square-neck top",
      "Crafted from a high-quality blend that's both delicately soft and impressively stretchy, this top promises a snug fit that gracefully accommodates your movements throughout the day",
      "Flattering Sleeveless Square Neck: The sophisticated square neckline of our top beautifully accentuates the neck and collarbone, offering a modern and refined look.",
      "Whether you're dressing it up with a blazer for the office or keeping it casual with jeans, this versatile piece effortlessly elevates your style while ensuring you stay comfortable and chic all day long"
    ]
  },
  {
    id: 5,
    title: "PINKMSTYLE Womens Square Neck Tank Tops Sleeveless Blouse Shirts",
    brand: "PINKMSTYLE",
    category: ["clothing", "new"],
    tags: ["new", "sale"],
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.3,
    reviewCount: 1985,
    image: "5.jpg",
    amazonUrl: "",
    description: "PINKMSTYLE Womens Square Neck Tank Tops Cute Double Layer Seamless Workout Tops Summer Sleeveless Shirts",
    features: [
      "♥Double-layer design provides full coverage and confidence — thick yet breathable fabric eliminates see-through concerns, even in light colors. Wear it comfortably on its own without extra layers or camisoles.",
      "♥The square neckline adds a touch of elegance and sophistication, flattering all body types while providing a modern twist on the classic tank top silhouette. Perfect for dressing up or down.",
      "♥Crafted from a premium blend of materials, our tank tops are designed for all-day comfort. The fabric is soft against the skin, offers excellent stretch for freedom of movement, and maintains its shape wash after wash.",
      "♥Available in a variety of colors and sizes, our square neck tank tops are versatile essentials for any wardrobe. Whether you're pairing them with jeans for a casual look or layering under a blazer for a night out, these tops are your go-to choice for effortless style and comfort."
    ]
  },
  {
    id: 6,
    title: "AUTOMET 2 Piece Sets For Women Lounge Wear Matching Sets Casual Outfits",
    brand: "AUTOMET",
    category: ["clothing", "new"],
    tags: ["new", "sale"],
    price: 28.99,
    originalPrice: 49.99,
    rating: 4.2,
    reviewCount: 2177,
    image: "6.jpg",
    amazonUrl: "",
    description: "AUTOMET 2 Piece Sets For Women Lounge Wear Matching Sets Casual Outfits",
    features: [
      "2 Piece Sets For Women Lounge Wear Matching Sets Casual Outfits",
      "Perfect for dressing up or down.",
      "Crafted from a premium blend of materials, our tank tops are designed for all-day comfort. The fabric is soft against the skin, offers excellent stretch for freedom of movement, and maintains its shape wash after wash.",
      "Available in a variety of colors and sizes, our square neck tank tops are versatile essentials for any wardrobe. Whether you're pairing them with jeans for a casual look or layering under a blazer for a night out, these tops are your go-to choice for effortless style and comfort."
    ]
  },
  {
    id: 7,
    title: "Siliteelon Striped Button Down Shirts for Women Dress Shirts",
    brand: "Siliteelon",
    category: ["clothing", "new"],
    tags: ["new", "sale"],
    price: 23.99,
    originalPrice: 27.99,
    rating: 4.2,
    reviewCount: 2299,
    image: "cl7.jpg",
    amazonUrl: "",
    description: "Siliteelon Striped Button Down Shirts for Women Dress Shirts Long Sleeve Casual Collared Office Work Shirt with Pocket",
    features: [
      "♥Wrinkle-Free and Breathable: This high-quality striped shirt women is made from a wrinkle-free, non-iron, breathable fabric. The V-neck design with fashionable stripes enhances your charm effortlessly",
      "♥Stylish Design: Featuring a button up front, collared neck, chest pocket, curved hem, old money style, this cotton striped dress shirt combines functionality with a classic regular fit cut, showcasing your fashion and charm",
      "♥Multiple Ways to Wear: The long sleeve womens button down shirt is suitable for all seasons. These stripe blouses for women fashion can be rolled up for a cool laid back style, casual long sleeve button down shirts make you look more chic, stylish and sexy"
    ]
  },
  {
    id: 8,
    title: "PRETTYGARDEN 2026 Blazers for Women Business Casual Long Sleeve Lapel Suit Jacket",
    brand: "PRETTYGARDEN",
    category: ["clothing", "new"],
    tags: ["new", "sale"],
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.2,
    reviewCount: 1876,
    image: "8.jpg",
    amazonUrl: "",
    description: "PRETTYGARDEN 2026 Blazers for Women Business Casual Long Sleeve Lapel Open Front Suit Jacket Work Blazer with Pockets",
    features: [
      "Features: Open Front Blazer For Women/Breasted Coat Women/Long Sleeve Blazers For Women/Buttons Blazer For Women/Womens Suit Jacket With Pockets/Fitted Blazers For Women/Notch Lapel Blazer For Women/Womens Outerwear Loose Fitting/Cardigan Blazer Women",
      "Highlights: The Blazers For Women Casual Feature A Classic Notch Lapel Design With An Open Front And Fitted Cut, Ideal For Making A Statement While Maintaining A Professional Look. While The Loose And Comfy Fit Ensures Ease Of Wear All The Day",
      "Occasion: This Women Blazer Jacket Is Suitable For Most Occasions: Womens Blazers For Work Casual/Travel Jacket For Women/Holiday Blazers For Women/Work Office Suit Jacket For Women/Business Casual Blazer For Women/Vacation Outfits For Women"
    ]
  },
  {
    id: 9,
    title: "Zeagoo Satin Blouses for Women Silk Button Down Shirts Long Sleeve V Neck Dress Shirts",
    brand: "Zeagoo",
    category: ["clothing", "new"],
    tags: ["new", "sale"],
    price: 29.99,
    originalPrice: null,
    rating: 4.3,
    reviewCount: 52310,
    image: "cl9.jpg",
    amazonUrl: "",
    description: "Zeagoo Satin Blouses for Women Silk Button Down Shirts Long Sleeve Business Casual Tops",
    features: [
      "To ensure your satin shirt arrives in perfect condition, please note that slight wrinkles may occur during shipping. We recommend gently steaming or ironing the shirt on low heat (using a protective cloth) for a polished look.",
      "Luxurious Satin Fabric - Crafted from smooth, lightweight satin with a subtle sheen, this shirt offers a sleek, elegant drape that elevates both casual and formal looks.",
      "Tailored Silhouette - Features a sharp, fitted cut for a polished appearance—ideal for layering under blazers or wearing solo for a refined, put-together style."
    ]
  },
  {
    id: 10,
    title: "BOSTANTEN Vegan Leather Purses for Women Soft Top Handle Satchel Shoulder Bag",
    brand: "BOSTANTEN",
    category: ["accessories", "new"],
    tags: ["new", "sale"],
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviewCount: 2934,
    image: "10.jpg",
    amazonUrl: "",
    description: "BOSTANTEN Vegan Leather Purses for Women Soft Top Handle Satchel Crossbody Zipper Handbag with Detachable Shoulder Strap",
    features: [
      "Soft Leather and Smooth Touch: The small handbag is crafted from premium leather that is delicate and soft to the touch, radiating a natural, warm sheen. The women handbag's smooth surface is easy to care for, ensuring the bag maintains its pristine appearance for a long time.",
      "Removable Adjustable Strap: This beautiful bag comes with a removable thin shoulder strap, transforming this women purse into a comfortable crossbody or shoulder bag, freeing up your hands. You can even use it as a leather handbag for a more stylish and playful look",
      "A Versatile Companion: This satchel bag's classic color scheme and minimalist design make it suitable for both formal and casual wear. Whether you're in the office, enjoying a weekend at a café, shopping, or even taking a short trip, it blends perfectly into any occasion"
    ]
  },
  {
    id: 11,
    title: "ALDO Women's Legoirii Tote Bag Handbag Shoulder Bag",
    brand: "ALDO",
    category: ["accessories", "new"],
    tags: ["new", "sale"],
    price: 52.99,
    originalPrice: 62.99,
    rating: 4.6,
    reviewCount: 5621,
    image: "11.jpg",
    amazonUrl: "",
    description: "ALDO Women's Legoirii Tote Bag Handbag Shoulder Bag with Top Handle and Detachable Strap for Work Travel",
    features: [
      "This spaciously stylish tote bag boasts ample storage space and shoulder strap for extra utility",   
      "Made of synthetic materials",
      "1 compartment: stylish and functional to store your cell phone, wallet, or any other essential you need near by",
      "Medium: the perfect medium sized handbag for everyday life",
      "Size: 10.9'' L x 4'' W x 12.4'' H (28cm x 10.5cm x 32cm)"
    ]
  },
  {
    id: 12,
    title: "High Heel Mules for Women Slip On Open Pointed Toe Classy Patent Leather Sandals",
    brand: "Riekhany Store",
    category: ["Shoes", "bestseller"],
    tags: ["best"],
    price: 54.99,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 4102,
    image: "12.jpg",
    amazonUrl: "",
    description: "High Heel Mules for Women Slip On Open Pointed Toe Classy Patent Leather Stiletto Pumps Formal Slingback Mule Sandals Dress Walking Shoes",
    features: [
      "Patent Faux Leather Upper   ",
      " Design: The open pointed toe design of these high heel mules adds a touch of elegance and sophistication, making them perfect for formal occasions or a night out on the town. The sleek silhouette elongates the legs and complements a variety of outfits, from dresses to tailored pants.",
      "Design: The slip-on design of these mules allows for easy on and off, providing convenience without sacrificing style. The secure fit ensures that the shoes stay comfortably in place while walking, making them a practical choice for those who want to look chic without the hassle of straps or buckles.",
      "Rubber Sole ",
      "High Heels, Heel Height is About 3 inches"
    ]
  }
];

/* ─────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────── */
let currentFilter = 'all';
let currentSort   = 'default';

/**
 * Build a star string from a numeric rating
 * @param {number} rating
 * @returns {string} e.g. "★★★★½"
 */
function buildStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/**
 * Format price with dollar sign and 2 decimals
 */
function fmt(price) {
  return '$' + price.toFixed(2);
}

/**
 * Calculate discount percentage
 */
function discountPct(original, current) {
  return Math.round((1 - current / original) * 100);
}

/**
 * Build tag HTML
 */
function buildTags(tags) {
  if (!tags || tags.length === 0) return '';
  return tags.map(t => {
    const map = { sale: 'Sale', new: 'New', best: 'Best Seller' };
    const cls = { sale: 'tag-sale', new: 'tag-new', best: 'tag-best' };
    return `<span class="tag ${cls[t]}">${map[t]}</span>`;
  }).join('');
}

/* ─────────────────────────────────────────────────────
   2. SKELETON LOADER
───────────────────────────────────────────────────── */
function renderSkeletons(count = 8) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = Array(count).fill('').map(() => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton skeleton-line short" style="margin-top:1.2rem;"></div>
      <div class="skeleton skeleton-line medium"></div>
      <div class="skeleton skeleton-line full"></div>
      <div class="skeleton skeleton-line short"></div>
      <div class="skeleton skeleton-btn"></div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────
   3. RENDER PRODUCT GRID
───────────────────────────────────────────────────── */
function renderProducts(items) {
  const grid      = document.getElementById('productGrid');
  const emptyEl   = document.getElementById('emptyState');
  const countEl   = document.getElementById('resultsCount');

  if (items.length === 0) {
    grid.innerHTML = '';
    emptyEl.style.display = 'block';
    countEl.innerHTML = 'Showing <strong>0</strong> products';
    return;
  }

  emptyEl.style.display = 'none';
  countEl.innerHTML = `Showing <strong>${items.length}</strong> product${items.length !== 1 ? 's' : ''}`;

  grid.innerHTML = items.map(p => {
    const hasDiscount = p.originalPrice && p.originalPrice > p.price;
    const discount    = hasDiscount ? discountPct(p.originalPrice, p.price) : 0;

    return `
      <article class="product-card" data-id="${p.id}">

        <!-- Tags -->
        <div class="card-tags">${buildTags(p.tags)}</div>

        <!-- Quick View overlay -->
        <div class="quick-view-overlay">
          <button class="quick-view-btn" onclick="openModal(${p.id})">
            Quick View
          </button>
        </div>

        <!-- Image — aspect-ratio 1:1 trick for consistent grid -->
        <div class="card-img-wrap">
          <img
            class="product-card-img"
            src="${p.image}"
            alt="${p.title}"
            loading="lazy"
          />
        </div>

        <!-- Card Body -->
        <div class="card-body">
          <p class="card-brand">${p.brand}</p>
          <h3 class="card-title">${p.title}</h3>

          <div class="card-rating">
            <span class="stars">${buildStars(p.rating)}</span>
            <span class="rating-count">(${p.reviewCount.toLocaleString()})</span>
          </div>

          <div class="card-price-row">
            <span class="price-current">${fmt(p.price)}</span>
            ${hasDiscount ? `
              <span class="price-original">${fmt(p.originalPrice)}</span>
              <span class="price-discount">-${discount}%</span>
            ` : ''}
          </div>

          <!-- Amazon Affiliate Button
               rel="nofollow sponsored" — Google SEO standard for affiliate links -->
          <a
            href="${p.amazonUrl}"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            class="btn-amazon"
            aria-label="View ${p.title} on Amazon"
          >
            <span class="btn-amazon-icon">🛒</span>
            Check Price on Amazon
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/* ─────────────────────────────────────────────────────
   4. FILTER FUNCTION
───────────────────────────────────────────────────── */
function filterAndSort() {
  let result = [...products];

  /* Filter */
  if (currentFilter !== 'all') {
    result = result.filter(p => p.category.includes(currentFilter));
  }

  /* Sort */
  switch (currentSort) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    default:
      /* Featured — keep original order */
      break;
  }

  renderProducts(result);
}

/* ─────────────────────────────────────────────────────
   5. SORT
───────────────────────────────────────────────────── */
document.getElementById('sortSelect').addEventListener('change', function() {
  currentSort = this.value;
  filterAndSort();
});

/* ─────────────────────────────────────────────────────
   6. FILTER BUTTON CLICKS
   Works for both desktop nav and mobile drawer
───────────────────────────────────────────────────── */
function attachFilterListeners() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      /* Update active state on ALL filter buttons matching this filter */
      const filter = this.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === filter);
      });

      currentFilter = filter;
      filterAndSort();

      /* Close mobile drawer after selection */
      document.getElementById('mobileFilters').classList.remove('open');
    });
  });
}

/* ─────────────────────────────────────────────────────
   7. QUICK VIEW MODAL
───────────────────────────────────────────────────── */
function openModal(productId) {
  const p       = products.find(item => item.id === productId);
  if (!p) return;

  const overlay = document.getElementById('modalOverlay');
  const inner   = document.getElementById('modalInner');
  const hasDiscount = p.originalPrice && p.originalPrice > p.price;

  inner.innerHTML = `
    <div class="modal-layout">
      <!-- Image side -->
      <div class="modal-img-side">
        <img
          class="modal-img"
          src="${p.image}"
          alt="${p.title}"
        />
      </div>

      <!-- Info side -->
      <div class="modal-info-side">
        <p class="modal-brand">${p.brand}</p>
        <h2 class="modal-title">${p.title}</h2>

        <div class="modal-rating">
          <span class="stars">${buildStars(p.rating)}</span>
          <span>${p.rating} · ${p.reviewCount.toLocaleString()} reviews</span>
        </div>

        <div class="modal-price">
          ${fmt(p.price)}
          ${hasDiscount ? `<span style="font-size:1rem;color:#86868B;text-decoration:line-through;margin-left:.5rem;">${fmt(p.originalPrice)}</span>` : ''}
        </div>

        <p class="modal-desc">${p.description}</p>

        <ul class="modal-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>

        <div class="modal-cta">
          <a
            href="${p.amazonUrl}"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            class="btn-amazon"
            style="max-width:100%;"
          >
            <span class="btn-amazon-icon">🛒</span>
            View on Amazon
          </a>
          <p style="font-size:.7rem;color:#86868B;margin-top:.6rem;text-align:center;">
            Opens Amazon in a new tab. Price verified on Amazon.
          </p>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* Close modal with Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ─────────────────────────────────────────────────────
   8. NAV SCROLL EFFECT
───────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ─────────────────────────────────────────────────────
   9. MOBILE HAMBURGER MENU
───────────────────────────────────────────────────── */
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('mobileFilters').classList.toggle('open');
});

/* Close mobile filters if clicking outside */
document.addEventListener('click', function(e) {
  const nav     = document.getElementById('navbar');
  const filters = document.getElementById('mobileFilters');
  if (!nav.contains(e.target) && !filters.contains(e.target)) {
    filters.classList.remove('open');
  }
});

/* ─────────────────────────────────────────────────────
   INIT — Show skeleton, then render products
───────────────────────────────────────────────────── */
(function init() {
  renderSkeletons(8);
  attachFilterListeners();

  /* Simulate loading delay (500ms) — gives skeleton loader effect
     In real project: replace this with a fetch() call to your JSON/API */
  setTimeout(() => {
    filterAndSort();
  }, 600);
})();
