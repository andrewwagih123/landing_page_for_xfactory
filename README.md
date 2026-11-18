# XFACTORY • Modern Streetwear & Contemporary Apparel Landing Page
> **Established 2023** | Precision Tailoring Meets Urban Culture

Welcome to the official source code for the **XFACTORY** Clothing Store landing page. This project is built using modern semantic HTML5, high-performance vanilla CSS3, and dynamic vanilla JavaScript. It requires no build tools or package managers to run—simply open `index.html` in any web browser.

---

## 🌟 Key Features

1. **Brand Identity & Aesthetic**:
   - Recreated vector SVG logo (`assets/logo.svg` and `assets/logo-white.svg`) modeled directly on the brand identity.
   - Integrated authentic store photography (`assets/brand-store.jpg`) inside the flagship atelier section.
   - Luxury dark mode aesthetic with midnight navy (`#0a1118`, `#122338`), icy blue accents (`#38bdf8`), and warm gold touches (`#c5a059`).

2. **Interactive E-Commerce Functionality**:
   - **Slide-Out Cart Drawer**:
     - Real-time cart calculations (Subtotal, Estimated Shipping, Promo Discounts, Grand Total).
     - Live Free Worldwide Shipping progress indicator ($150 target).
     - Quantity stepper (`+` / `−`), individual item removal, and empty state fallback.
     - Working coupon engine supporting promo codes:
       - `XFACTORY20` (20% OFF)
       - `WELCOME15` (15% OFF)
       - `XFACTORY10` (10% OFF)
   - **Currency Switcher**:
     - Live currency toggle in the top bar: USD (`$`), EUR (`€`), GBP (`£`), and EGP (`E£`).
     - Dynamically updates all product prices across the entire page, cart, and modals on the fly!
   - **Interactive Quick View Modal**:
     - High-definition image display, technical fabric & fit specifications, interactive colorway swatches, size selectors (S, M, L, XL, XXL), and direct Add-To-Bag.
   - **Category Filter Tabs**:
     - Filter between *All Drops*, *Hoodies & Sweats*, *Outerwear*, *Pants & Cargos*, *Boxy Tees*, and *Accessories*.
   - **Interactive Wishlist**:
     - Heart toggles with instant feedback and animated header counter.
   - **Quick Search Modal**:
     - Real-time search by typing product names, categories, or keywords.
   - **Interactive Size & Fit Guide**:
     - Instant unit toggle between Metric (CM) and Imperial (Inches).
   - **VIP Syndicate Newsletter**:
     - Form validation that instantly reveals a 15% discount code (`WELCOME15`).
   - **Toast Notifications**:
     - Sleek floating micro-interactions for cart, wishlist, and currency changes.

---

## 📁 File Structure

```
xfactory-landing-page/
├── index.html            # Main semantic HTML5 markup
├── styles.css            # Responsive CSS styling & animations
├── script.js             # State management, cart, search, quick view
├── README.md             # Project documentation & setup instructions
└── assets/
    ├── logo.svg          # Dark navy vector emblem (Primary)
    ├── logo-white.svg    # White vector emblem (Dark backgrounds)
    ├── brand-store.jpg   # Authentic store photo from the concept store
    └── prod-placeholder.svg # High-res vector offline placeholder
```

---

## 🚀 How to Run the Project

### Option 1: Direct Browser Launch
Simply double click or open `index.html` in Google Chrome, Microsoft Edge, Safari, or Firefox.

### Option 2: Local HTTP Server (Optional)
If you prefer running with a local development server:
```bash
# Using Python 3
cd "C:\Users\Andrew Wagih\.gemini\antigravity\scratch\xfactory-landing-page"
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 🛠️ Customization Guide

- **Adding New Products**: Open `script.js` and add an object to the `PRODUCTS_DATA` array.
- **Updating Brand Colors**: Open `styles.css` and modify the CSS variables in the `:root` block.
- **Modifying Promo Codes**: In `script.js`, locate the `applyCoupon()` function to add or change codes.

---
*Created for XFACTORY Clothing Store • Est. 2023*
