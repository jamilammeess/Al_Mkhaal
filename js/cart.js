document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
        SETTINGS & WHATSAPP NUMBERS
    ===================================================== */
    const RESTAURANT_WHATSAPP = "963982147864";
    const ALIBABA_WHATSAPP = "963982147864";

    function getMenuMode() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('source') === 'alibaba' ? 'alibaba' : 'direct';
    }

    const currentMode = getMenuMode();

    /* =====================================================
        OFFERS DATA — قائمة عروض علي بابا
    ===================================================== */
    const offersList = [
        {
            "id": "family-offer",
            "name": "وجبة العيلة الكبرى",
            "englishName": "FAMILY MEGA OFFER",
            "price": 2500,
            "image": "images/offers/family_offer.jpg",
            "description": "توليفة مميزة تشمل الوجبات الرئيسية مع المشروبات والبطاطا بأسعار تنافسية",
            "isNew": true,
            "isFeatured": true,
            "badge": "خصم خاص",
            "alt": "وجبة العيلة الكبرى"
        },
        {
            "id": "alibaba-combo",
            "name": "عرض علي بابا المزدوج",
            "englishName": "ALIBABA COMBO",
            "price": 1200,
            "image": "images/offers/combo.jpg",
            "description": "سندويشين مع بطاطا ومشروب غازي بسعر مميز لفترة محدودة",
            "isNew": false,
            "isFeatured": true,
            "badge": "عرض حصري",
            "alt": "عرض علي بابا المزدوج"
        }
    ];

    /* =====================================================
        MENU DATA — قائمة المنتجات
    ===================================================== */
    const burgersList = [
        {
            "id": "shwarma-meal",
            "name": "وجبة شاورما",
            "englishName": "MEXICAN MEAL",
            "price": 400,
            "image": "images/meals/shwirma.jpg",
            "description": "وجبة شاورما بتتبيلة مميزة مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": true,
            "badge": "الاكثر طلبا",
            "alt": "وجبة شاورما"
        },
        {
            "id": "half-broasted",
            "name": "نصف بروستد",
            "englishName": "HALF BROASTED",
            "price": 750,
            "image": "images/meals/KFC.jpg",
            "description": " وجبة نصف بروستد مقرمشة مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": true,
            "badge": "الأكثر طلباً",
            "alt": "نصف بروستد"
        },
        {
            "id": "half-grilled-chicken",
            "name": "نصف فروج مشوي",
            "englishName": "HALF GRILLED CHICKEN",
            "price": 700,
            "image": "images/meals/bupique_chiken.jpg",
            "description": "نصف فروج مشوي بتتبيلة مميزة وع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": true,
            "badge": "مشاوي",
            "alt": "نصف فروج مشوي"
        },
        {
            "id": "half-kilo-shish",
            "name": "نصف كيلو شقف",
            "englishName": "HALF KILO SHISH",
            "price": 1500,
            "image": "images/meals/slice_meet.jpg",
            "description": "نصف كيلو من لحم الغنم شقف مشوي",
            "isNew": false,
            "isFeatured": true,
            "badge": "مشاوي",
            "alt": "نصف كيلو شقف"
        },
        {
            "id": "half-kilo-kabab",
            "name": "نصف كيلو كباب خاروف",
            "englishName": "HALF KILO KABAB",
            "price": 1500,
            "image": "images/meals/kabab.jpg",
            "description": "نصف كيلو من لحم الغنم الكباب المشوي",
            "isNew": false,
            "isFeatured": true,
            "badge": "مشاوي",
            "alt": "نصف كيلو كباب"
        },
        {
            "id": "half-kilo-sfiha",
            "name": "نصف كيلو صفيحة",
            "englishName": "HALF KILO SFIHA",
            "price": 1500,
            "image": "images/meals/sfeha.jpg",
            "description": "نصف كيلو صفيحة باللحم",
            "isNew": false,
            "isFeatured": false,
            "badge": "",
            "alt": "نصف كيلو صفيحة"
        },
        {
            "id": "shish-meal",
            "name": "وجبة شيش",
            "englishName": "SHISH MEAL",
            "price": 400,
            "image": "images/meals/sheesh.jpg",
            "description": "قطع شيش متبلة ومشوية مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": true,
            "badge": "مشاوي",
            "alt": "وجبة شيش"
        },
        {
            "id": "fajita-meal",
            "name": "وجبة فاهيتا",
            "englishName": "FAJITA MEAL",
            "price": 400,
            "image": "images/meals/fhita.jpg",
            "description": " قطع دجاج مع الخضار وتتبيلة الفاهيتا مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": true,
            "badge": "",
            "alt": "وجبة فاهيتا"
        },
        {
            "id": "crispy-meal",
            "name": "وجبة كريسبي",
            "englishName": "CRISPY MEAL",
            "price": 400,
            "image": "images/meals/crispy.jpg",
            "description": "قطع دجاج مقرمشة مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": true,
            "badge": "",
            "alt": "وجبة كريسبي"
        },
        {
            "id": "scallop-meal",
            "name": "وجبة سكالوب",
            "englishName": "SCALLOP MEAL",
            "price": 400,
            "image": "images/meals/scaloop.jpg",
            "description": "وجبة سكالوب دجاج مقرمش مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": false,
            "badge": "",
            "alt": "وجبة سكالوب"
        },
        {
            "id": "zinger-meal",
            "name": "وجبة زنجر",
            "englishName": "ZINGER MEAL",
            "price": 400,
            "image": "images/meals/zenjer.jpg",
            "description": "دجاج زنجر مقرمش بتتبيلة حارة مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": true,
            "badge": "",
            "alt": "وجبة زنجر"
        },
        {
            "id": "mexican-meal",
            "name": "وجبة مكسيكي",
            "englishName": "MEXICAN MEAL",
            "price": 400,
            "image": "images/meals/mexico.jpg",
            "description": "وجبة دجاج بتتبيلة مكسيكية مميزة مع البطاطا والميونيز",
            "isNew": false,
            "isFeatured": false,
            "badge": "",
            "alt": "وجبة مكسيكي"
        }
    ];

    const mealsList = [
        {
            "id": "potato-sandwich",
            "name": "سندويش بطاطا",
            "englishName": "POTATO SANDWICH",
            "price": 150,
            "image": "images/sandwish/botato.jpg",
            "description": "بطاطا مقرمشة بخبز السمون مع الجبن السائل والصوص الخاص",
            "alt": "سندويش بطاطا"
        },
        {
            "id": "shawarma-sandwich",
            "name": "سندويش شاورما",
            "englishName": "SHAWARMA SANDWICH",
            "price": 250,
            "image": "images/sandwish/shawarmaSandwich.jpg",
            "description": "شرائح شاورما متبلة مع الصوص الخاص داخل الخبز",
            "alt": "سندويش شاورما"
        },
        {
            "id": "crispy-sandwich",
            "name": "سندويش كريسبي",
            "englishName": "CRISPY SANDWICH",
            "price": 350,
            "image": "images/sandwish/crispy.jpg",
            "description": "دجاج كريسبي مقرمش مع الخضار والصوص الخاص",
            "alt": "سندويش كريسبي"
        },
        {
            "id": "shish-sandwich",
            "name": "سندويش شيش",
            "englishName": "SHISH SANDWICH",
            "price": 350,
            "image": "images/sandwish/sheesh.jpg",
            "description": "قطع دجاج شيش متبلة مع الخضار والصوص الخاص",
            "alt": "سندويش شيش"
        },
        {
            "id": "fajita-sandwich",
            "name": "سندويش فاهيتا",
            "englishName": "FAJITA SANDWICH",
            "price": 350,
            "image": "images/sandwish/fahita.jpg",
            "description": "دجاج فاهيتا مع الخضار والصوص المميز",
            "alt": "سندويش فاهيتا"
        },
        {
            "id": "scallop-sandwich",
            "name": "سندويش سكالوب",
            "englishName": "SCALLOP SANDWICH",
            "price": 350,
            "image": "images/sandwish/scaloop.jpg",
            "description": "قطعة سكالوب دجاج مقرمشة مع الخضار والصوص الخاص",
            "alt": "سندويش سكالوب"
        },
        {
            "id": "zinger-sandwich",
            "name": "سندويش زنجر",
            "englishName": "ZINGER SANDWICH",
            "price": 350,
            "image": "images/sandwish/zenjer.jpg",
            "description": "دجاج زنجر مقرمش مع الخضار والصوص الحار الخاص",
            "alt": "سندويش زنجر"
        },
        {
            "id": "mexican-sandwich",
            "name": "سندويش مكسيكي",
            "englishName": "MEXICAN SANDWICH",
            "price": 350,
            "image": "images/sandwish/mexico.jpg",
            "description": "دجاج بتتبيلة مكسيكية مع الخضار والصوص المميز",
            "alt": "سندويش مكسيكي"
        }
    ];

    const drinksList = [
        { "id": "cola-liter", "name": "كولا ليتر", "price": 110 },
        { "id": "sprite", "name": "سبرايت", "price": 90 },
        { "id": "water", "name": "ماء", "price": 50 },
        { "id": "cola-can", "name": "بيبسي / كولا تنك", "price": 90 }
    ];

    const RESTAURANT_LOCATION = {
        latitude: 32.633352420849704,
        longitude: 36.10342464451504
    };

    const DELIVERY_PRICE_PER_KM = 30;

    let deliveryFee = 0;
    let deliveryDistanceKm = 0;
    let cart = [];

    // حالات تحديد موقع العميل: not_attempted / pending / success / failed
    let customerLocationAttempted = false;
    let customerLocationStatus = "not_attempted";
    let customerCoordinates = null;

    let deliveryLocationButton = null;
    let deliveryStatusElement = null;
    let deliverySummaryElement = null;

    window.customerLocationLink = "غير محدد";

    applyModeUI();

    function applyModeUI() {
        const offersSection = document.getElementById("offers");
        const tableNumberGroup = document.getElementById("tableNumberGroup");
        const alibabaDeliveryFields = document.getElementById("alibabaDeliveryFields");
        const deliveryFeeRow = document.getElementById("deliveryFeeRow");
        const alibabaFeeRow = document.getElementById("alibabaFeeRow");

        if (currentMode === 'alibaba') {
            if (offersSection) offersSection.style.display = "block";
            if (tableNumberGroup) tableNumberGroup.style.display = "none";
            if (alibabaDeliveryFields) alibabaDeliveryFields.style.display = "block";
            if (deliveryFeeRow) deliveryFeeRow.style.display = "flex";
            if (alibabaFeeRow) alibabaFeeRow.style.display = "flex";
        } else {
            if (offersSection) offersSection.style.display = "block";
            if (tableNumberGroup) tableNumberGroup.style.display = "block";
            if (alibabaDeliveryFields) alibabaDeliveryFields.style.display = "none";
            if (deliveryFeeRow) deliveryFeeRow.style.display = "none";
            if (alibabaFeeRow) alibabaFeeRow.style.display = "none";
        }
    }

    function trackEvent(eventName, parameters = {}) {
        if (typeof window.gtag !== "function") return;
        try {
            window.gtag("event", eventName, parameters);
        } catch (error) {
            console.warn("Google Analytics event error:", error);
        }
    }

    const floatingCart = document.getElementById("floatingCart");
    const cartOverlay = document.getElementById("cartOverlay");
    const closeCart = document.getElementById("closeCart");
    const cartItems = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");
    const cartCount = document.getElementById("cartCount");
    const cartBadge = document.getElementById("cartBadge");
    const whatsappOrder = document.getElementById("whatsappOrder");
    let getLocationBtn = document.getElementById("getLocationBtn");

    // عناصر واجهة التوصيل التي ينشئها JavaScript عند الحاجة.
    const cartTotalElement = document.getElementById("cartTotal");

    function safeNumber(value, fallback = 0) {
        const number = Number(value);
        return Number.isFinite(number) ? number : fallback;
    }

    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function formatPrice(price) {
        const numericPrice = safeNumber(price);
        return numericPrice.toLocaleString("ar") + " ل.س";
    }
        function renderMenuProducts() {
        const offersGrid = document.getElementById("offersGrid");
        const burgersGrid = document.getElementById("burgersGrid");
        const mealsGrid = document.getElementById("mealsGrid");
        const drinksGrid = document.getElementById("drinksGrid");

        if (offersGrid) {
            if (currentMode === 'alibaba') {
                offersGrid.innerHTML = offersList.map(item => `
                    <article class="product-card offer-special-card" data-id="${escapeHTML(item.id)}" data-name="${escapeHTML(item.name)}" data-price="${safeNumber(item.price)}" data-image="${escapeHTML(item.image)}">
                        <div class="product-image">
                            ${item.isNew ? '<span class="product-badge new">جديد</span>' : (item.badge ? `<span class="product-badge">${escapeHTML(item.badge)}</span>` : '')}
                            <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.alt || item.name)}" loading="lazy">
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <div>
                                    <h3>${escapeHTML(item.name)}</h3>
                                    <span>${escapeHTML(item.englishName || "")}</span>
                                </div>
                                <strong>${safeNumber(item.price).toLocaleString("ar")}<small> ل.س</small></strong>
                            </div>
                            <p>${escapeHTML(item.description || "")}</p>
                            <button class="add-to-cart-btn" type="button"><span>🛒</span> أضف العرض</button>
                        </div>
                    </article>
                `).join("");
            } else {
                offersGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; background: linear-gradient(135deg, #fff3cd 0%, #fff8e1 100%); color: #856404; border: 2px dashed #ffc107; padding: 30px; border-radius: 16px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.05); margin: 10px 0;">
                        <span style="font-size: 3rem; display: block; margin-bottom: 12px;">🔥🛵</span>
                        <h3 style="font-size: 1.4rem; color: #795548; margin-bottom: 8px; font-weight: 800;">عروض علي بابا الحصرية</h3>
                        <p style="font-size: 1.05rem; color: #555; margin-bottom: 20px; line-height: 1.6;">
                            عروض وتخفيضات العائلة الكبرى متوفرة حصرياً عند الطلب عبر منصة علي بابا للتوصيل الخارجي.
                        </p>
                        <a href="https://alibabada.netlify.app" style="display: inline-flex; align-items: center; gap: 8px; background: #ff5722; color: #fff; padding: 12px 24px; border-radius: 30px; font-weight: bold; text-decoration: none; font-size: 1rem; box-shadow: 0 4px 12px rgba(255,87,34,0.3); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                            <span>🚀</span> الانتقال إلى منصة علي بابا
                        </a>
                    </div>
                `;
            }
        }

        if (burgersGrid) {
            burgersGrid.innerHTML = burgersList.map(item => `
                <article class="product-card${item.isFeatured ? " featured" : ""}" data-id="${escapeHTML(item.id)}" data-name="${escapeHTML(item.name)}" data-price="${safeNumber(item.price)}" data-image="${escapeHTML(item.image)}">
                    <div class="product-image">
                        ${item.isNew ? '<span class="product-badge new">جديد</span>' : (item.badge ? `<span class="product-badge">${escapeHTML(item.badge)}</span>` : '')}
                        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.alt || item.name)}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <div class="product-title">
                            <div>
                                <h3>${escapeHTML(item.name)}</h3>
                                <span>${escapeHTML(item.englishName || "")}</span>
                            </div>
                            <strong>${safeNumber(item.price).toLocaleString("ar")}<small> ل.س</small></strong>
                        </div>
                        <p>${escapeHTML(item.description || "")}</p>
                        <button class="add-to-cart-btn" type="button"><span>🛒</span> أضف إلى الطلب</button>
                    </div>
                </article>
            `).join("");
        }

        if (mealsGrid) {
            mealsGrid.innerHTML = mealsList.map(item => `
                <article class="product-card" data-id="${escapeHTML(item.id)}" data-name="${escapeHTML(item.name)}" data-price="${safeNumber(item.price)}" data-image="${escapeHTML(item.image)}">
                    <div class="product-image">
                        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.alt || item.name)}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <div class="product-title">
                            <div>
                                <h3>${escapeHTML(item.name)}</h3>
                                <span>${escapeHTML(item.englishName || "")}</span>
                            </div>
                            <strong>${safeNumber(item.price).toLocaleString("ar")}<small> ل.س</small></strong>
                        </div>
                        <p>${escapeHTML(item.description || "")}</p>
                        <button class="add-to-cart-btn" type="button"><span>🛒</span> أضف إلى الطلب</button>
                    </div>
                </article>
            `).join("");
        }

        if (drinksGrid) {
            drinksGrid.innerHTML = drinksList.map(item => `
                <div class="drink-item" data-id="${escapeHTML(item.id)}" data-name="${escapeHTML(item.name)}" data-price="${safeNumber(item.price)}" data-image="${escapeHTML(item.image || "")}">
                    <span>${escapeHTML(item.name)}</span>
                    <strong>${formatPrice(item.price)}</strong>
                    <button class="drink-add-btn" type="button" aria-label="أضف ${escapeHTML(item.name)} إلى الطلب">🛒</button>
                </div>
            `).join("");
        }
    }

    renderMenuProducts();

    const categoryLinks = document.querySelectorAll(".categories .category");
    categoryLinks.forEach(link => {
        link.addEventListener("click", function() {
            categoryLinks.forEach(el => el.classList.remove("active"));
            this.classList.add("active");
        });
    });

    function getCartCount() {
        return cart.reduce((total, item) => total + safeNumber(item.quantity, 0), 0);
    }

    function calculateSubtotal() {
        return cart.reduce((total, item) => total + (safeNumber(item.price, 0) * safeNumber(item.quantity, 0)), 0);
    }

    function calculateTotalPieces() {
        return cart.reduce((sum, item) => sum + safeNumber(item.quantity, 0), 0);
    }

    function calculateAlibabaServiceFee(subtotal, totalPieces) {
        if (currentMode !== 'alibaba') return 0;
        if (subtotal > 1000) {
            return Math.round(subtotal * 0.03);
        } else {
            return totalPieces * 10;
        }
    }
    /* =====================================================
   ALIBABA — ORDER REVIEW SECTION
   مراجعة الطلب داخل السلة
===================================================== */

    function updateCartCounter() {
        const count = getCartCount();
        const subtotal = calculateSubtotal();
        const totalPieces = calculateTotalPieces();
        const alibabaFee = calculateAlibabaServiceFee(subtotal, totalPieces);

        if (cartCount) {
            cartCount.textContent = count === 0 ? "السلة فارغة" : (count === 1 ? "صنف واحد" : count + " أصناف");
        }
        if (cartBadge) {
            cartBadge.textContent = count;
        }
        if (floatingCart) {
            floatingCart.classList.toggle("has-items", count > 0);
        }

        const subtotalEl = document.getElementById("cartSubtotal");
        const deliveryFeeEl = document.getElementById("cartDeliveryFee");
        const alibabaFeeEl = document.getElementById("cartAlibabaFee");
        const totalEl = document.getElementById("cartTotal");

        if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
        if (deliveryFeeEl) deliveryFeeEl.textContent = formatPrice(deliveryFee);
        if (alibabaFeeEl) alibabaFeeEl.textContent = formatPrice(alibabaFee);

        let finalTotal = subtotal;
        if (currentMode === 'alibaba') {
            finalTotal += deliveryFee + alibabaFee;
        }
        if (totalEl) {
            totalEl.textContent = formatPrice(finalTotal);
        }
    
    }

    function addToCart(product, buttonElement) {
        if (!product || !product.id) return;
        const productId = String(product.id);
        const productPrice = safeNumber(product.price, 0);

        const existingProduct = cart.find(item => String(item.id) === productId);

        if (existingProduct) {
            existingProduct.quantity = safeNumber(existingProduct.quantity, 0) + 1;
        } else {
            cart.push({
                id: productId,
                name: String(product.name || "منتج"),
                price: productPrice,
                image: product.image ? String(product.image) : "",
                quantity: 1
            });
        }

        if (buttonElement) {
            buttonElement.classList.add("added");
            const originalText = buttonElement.innerHTML;
            if (!buttonElement.querySelector("span.check")) {
                buttonElement.innerHTML = "<span>✓ تم الإضافة</span>";
            }
            setTimeout(() => {
                buttonElement.classList.remove("added");
                buttonElement.innerHTML = originalText;
            }, 1000);
        }

        renderCart();
    }

    window.removeFromCart = function(productId) {
        cart = cart.filter(item => String(item.id) !== String(productId));
        renderCart();
    };

    window.increaseQuantity = function(productId) {
        const product = cart.find(item => String(item.id) === String(productId));
        if (product) {
            product.quantity = safeNumber(product.quantity, 0) + 1;
            renderCart();
        }
    };

    window.decreaseQuantity = function(productId) {
        const product = cart.find(item => String(item.id) === String(productId));
        if (!product) return;
        const currentQuantity = safeNumber(product.quantity, 1);
        if (currentQuantity > 1) {
            product.quantity = currentQuantity - 1;
            renderCart();
        } else {
            removeFromCart(productId);
        }
    };
function renderCart() {
    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = "flex";
        cartItems.style.display = "none";
    } else {
        if (cartEmpty) cartEmpty.style.display = "none";
        cartItems.style.display = "flex";

        cart.forEach(item => {
            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <div class="cart-item-image">
                    ${item.image
                        ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}">`
                        : '<span>🍔</span>'}
                </div>

                <div class="cart-item-info">
                    <h4>${escapeHTML(item.name)}</h4>

                    <span class="cart-item-price">
                        ${formatPrice(item.price)}
                    </span>

                    <div class="quantity-controls">
                        <button
                            type="button"
                            class="quantity-btn"
                            onclick="decreaseQuantity('${item.id}')"
                        >-</button>

                        <span class="quantity-number">
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            class="quantity-btn"
                            onclick="increaseQuantity('${item.id}')"
                        >+</button>
                    </div>
                </div>

                <div class="cart-item-actions">
                    <button
                        type="button"
                        class="remove-item"
                        onclick="removeFromCart('${item.id}')"
                        aria-label="حذف المنتج"
                    >🗑️</button>

                    <strong>
                        ${formatPrice(item.price * item.quantity)}
                    </strong>
                </div>
            `;

            cartItems.appendChild(cartItem);
        });
    }

    updateCartCounter();
}
        /* =====================================================
       DELIVERY LOCATION & ROAD ROUTING
       لا يوجد أي رجوع لحساب الخط المستقيم.
       أجرة التوصيل لا تحسب إلا من مسار قيادة فعلي.
    ===================================================== */

    function injectDeliveryUI() {
        if (currentMode !== "alibaba") return;

        const customerAddress = document.getElementById("customerAddress");

        // استخدم زر HTML الموجود إن وجد، وإلا أنشئ الزر بعد حقل العنوان.
        getLocationBtn =
            document.getElementById("getLocationBtn") ||
            document.getElementById("detectCustomerLocation");

        if (!getLocationBtn && customerAddress) {
            deliveryLocationButton = document.createElement("button");
            deliveryLocationButton.id = "detectCustomerLocation";
            deliveryLocationButton.type = "button";
            deliveryLocationButton.textContent = "📍 تحديد موقعي وحساب التوصيل";
            deliveryLocationButton.style.cssText = [
                "display:block",
                "width:100%",
                "margin-top:10px",
                "padding:12px 14px",
                "border:0",
                "border-radius:10px",
                "background:#7C0434",
                "color:#fff",
                "font:inherit",
                "font-weight:700",
                "cursor:pointer"
            ].join(";");

            customerAddress.insertAdjacentElement("afterend", deliveryLocationButton);
            getLocationBtn = deliveryLocationButton;
        }

        // وحّد لون الزر الموجود مسبقاً مع اللون العنابي لبقية أزرار المنيو.
        if (getLocationBtn) {
            getLocationBtn.style.backgroundColor = "#7C0434";
            getLocationBtn.style.color = "#fff";
            getLocationBtn.style.border = "0";
            getLocationBtn.style.borderRadius = "10px";
            getLocationBtn.style.fontWeight = "700";
            getLocationBtn.style.cursor = "pointer";
            getLocationBtn.style.width = "100%";
            getLocationBtn.style.padding = "12px 14px";
        }

        deliveryStatusElement = document.getElementById("deliveryLocationStatus");
        if (!deliveryStatusElement && getLocationBtn) {
            deliveryStatusElement = document.createElement("p");
            deliveryStatusElement.id = "deliveryLocationStatus";
            deliveryStatusElement.setAttribute("role", "status");
            deliveryStatusElement.setAttribute("aria-live", "polite");
            deliveryStatusElement.style.cssText = [
                "margin:8px 0 0",
                "font:inherit",
                "font-size:13px",
                "line-height:1.7",
                "color:#555"
            ].join(";");
            getLocationBtn.insertAdjacentElement("afterend", deliveryStatusElement);
        }

        deliverySummaryElement = document.getElementById("deliverySummary");
        if (!deliverySummaryElement) {
            deliverySummaryElement = document.createElement("div");
            deliverySummaryElement.id = "deliverySummary";
            deliverySummaryElement.style.cssText = [
                "margin-top:10px",
                "padding:12px",
                "border-radius:10px",
                "background:#fff7f0",
                "color:#3b302b",
                "font:inherit",
                "font-size:14px",
                "line-height:1.9"
            ].join(";");

            if (cartTotalElement && cartTotalElement.parentElement) {
                cartTotalElement.parentElement.insertAdjacentElement("afterend", deliverySummaryElement);
            } else if (whatsappOrder && whatsappOrder.parentElement) {
                whatsappOrder.parentElement.insertBefore(deliverySummaryElement, whatsappOrder);
            } else if (customerAddress) {
                customerAddress.insertAdjacentElement("afterend", deliverySummaryElement);
            }
        }

        if (getLocationBtn && !getLocationBtn.dataset.locationHandlerAttached) {
            getLocationBtn.addEventListener("click", detectCustomerLocation);
            getLocationBtn.dataset.locationHandlerAttached = "true";
        }

        updateDeliverySummary();
    }

    function setDeliveryStatus(message, isError = false) {
        if (!deliveryStatusElement) {
            deliveryStatusElement = document.getElementById("deliveryLocationStatus");
        }

        if (deliveryStatusElement) {
            deliveryStatusElement.textContent = message;
            deliveryStatusElement.style.color = isError ? "#b42318" : "#555";
        }
    }

    function updateDeliverySummary() {
        if (!deliverySummaryElement) {
            deliverySummaryElement = document.getElementById("deliverySummary");
        }
        if (!deliverySummaryElement || currentMode !== "alibaba") return;

        const distanceText = deliveryDistanceKm > 0
            ? `${deliveryDistanceKm.toFixed(1)} كم عبر الطريق`
            : "لم يتم حساب مسار الطريق بعد";

        const feeText = deliveryDistanceKm > 0
            ? formatPrice(deliveryFee)
            : formatPrice(0);

        deliverySummaryElement.innerHTML = `
            <div><strong>📍 مسافة التوصيل:</strong> ${escapeHTML(distanceText)}</div>
            <div><strong>🚚 أجرة التوصيل:</strong> ${escapeHTML(feeText)}</div>
            <div style="font-size:12px;color:#666;margin-top:4px">
                يتم احتساب الأجرة على أساس مسار القيادة الفعلي، مع تقريب الكيلومترات إلى الأعلى.
            </div>
        `;
    }

    // طلب الموقع من المتصفح: يبدأ بدقة عالية ثم يعيد المحاولة بإعدادات أكثر مرونة.
    function requestBrowserLocation(onSuccess, onError) {
        if (!navigator.geolocation) {
            onError(new Error("المتصفح لا يدعم تحديد الموقع الجغرافي."));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            onSuccess,
            function (firstError) {
                console.warn("تعذر جلب الموقع بالدقة العالية، ستتم إعادة المحاولة:", firstError);
                navigator.geolocation.getCurrentPosition(
                    onSuccess,
                    function (secondError) {
                        onError(secondError || firstError);
                    },
                    {
                        enableHighAccuracy: false,
                        timeout: 20000,
                        maximumAge: 60000
                    }
                );
            },
            {
                enableHighAccuracy: true,
                timeout: 12000,
                maximumAge: 0
            }
        );
    }

    // استدعاء خدمة توجيه طرق القيادة. لا نستخدم حساب المسافة بخط مستقيم مطلقاً.
    async function requestRoadRoute(url) {
        const response = await fetch(url, { method: "GET" });
        if (!response.ok) {
            throw new Error(`خدمة الطرق أعادت حالة HTTP ${response.status}`);
        }

        const data = await response.json();
        if (
            data.code !== "Ok" ||
            !Array.isArray(data.routes) ||
            !data.routes.length ||
            !Number.isFinite(Number(data.routes[0].distance))
        ) {
            throw new Error("لم يتم العثور على مسار قيادة صالح بين المطعم والعميل.");
        }

        return Number(data.routes[0].distance) / 1000;
    }

    function fetchRouteDistance(lat1, lon1, lat2, lon2, callback) {
        const coordinates = `${lon1},${lat1};${lon2},${lat2}`;
        const routeProviders = [
            `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=false&alternatives=false&steps=false`,
            `https://routing.openstreetmap.de/routed-car/route/v1/driving/${coordinates}?overview=false&alternatives=false&steps=false`
        ];

        (async function () {
            let lastError = null;

            for (const routeUrl of routeProviders) {
                try {
                    const distanceKm = await requestRoadRoute(routeUrl);
                    if (!(distanceKm > 0)) {
                        throw new Error("المسافة التي أعادتها خدمة الطرق غير صالحة.");
                    }
                    callback(null, distanceKm);
                    return;
                } catch (error) {
                    lastError = error;
                    console.warn("تعذر حساب الطريق من مزود خرائط، ستتم تجربة المزود البديل:", error);
                }
            }

            callback(lastError || new Error("تعذر حساب مسار القيادة حالياً."), null);
        })();
    }
        function detectCustomerLocation() {
        if (currentMode !== "alibaba") return;

        customerLocationAttempted = true;
        customerLocationStatus = "pending";
        customerCoordinates = null;
        window.customerLocationLink = "غير محدد";
        deliveryFee = 0;
        deliveryDistanceKm = 0;

        if (getLocationBtn) {
            getLocationBtn.disabled = true;
            getLocationBtn.textContent = "⏳ جارٍ تحديد الموقع وحساب مسار الطريق...";
        }

        setDeliveryStatus("جارٍ طلب موقعك من الجهاز ثم حساب مسافة القيادة عبر الطرق...");
        updateCartCounter();
        updateDeliverySummary();

        requestBrowserLocation(
            function (position) {
                const userLat = Number(position.coords.latitude);
                const userLon = Number(position.coords.longitude);

                if (!Number.isFinite(userLat) || !Number.isFinite(userLon)) {
                    handleLocationFailure(new Error("إحداثيات الموقع غير صالحة."));
                    return;
                }

                customerCoordinates = { latitude: userLat, longitude: userLon };
                window.customerLocationLink = `https://www.google.com/maps?q=${userLat},${userLon}`;

                setDeliveryStatus("تم تحديد موقعك. جارٍ حساب مسار القيادة الفعلي إلى المطعم...");

                fetchRouteDistance(
                    RESTAURANT_LOCATION.latitude,
                    RESTAURANT_LOCATION.longitude,
                    userLat,
                    userLon,
                    function (error, distanceKm) {
                        if (error || !Number.isFinite(distanceKm)) {
                            handleLocationFailure(new Error("تم تحديد الموقع، لكن تعذر الحصول على مسار قيادة موثوق. يمكنك إرسال الطلب بالعنوان المكتوب، وسيتم تأكيد أجرة التوصيل مع المطعم."));
                            return;
                        }

                        deliveryDistanceKm = distanceKm;
                        const chargedKm = Math.ceil(distanceKm);
                        deliveryFee = chargedKm * DELIVERY_PRICE_PER_KM;
                        customerLocationStatus = "success";

                        if (getLocationBtn) {
                            getLocationBtn.disabled = false;
                            getLocationBtn.textContent = `✓ تم حساب مسافة الطريق (${distanceKm.toFixed(1)} كم)`;
                        }

                        setDeliveryStatus(`تم تحديد موقعك وحساب مسافة الطريق بنجاح: ${distanceKm.toFixed(1)} كم. أجرة التوصيل ${formatPrice(deliveryFee)}.`);
                        updateCartCounter();
                        updateDeliverySummary();
                    }
                );
            },
            handleLocationFailure
        );
    }

    function handleLocationFailure(error) {
        customerLocationStatus = "failed";
        deliveryFee = 0;
        deliveryDistanceKm = 0;

        if (getLocationBtn) {
            getLocationBtn.disabled = false;
            getLocationBtn.textContent = "📍 إعادة تحديد موقعي وحساب التوصيل";
        }

        const reason = error && error.message
            ? error.message
            : "تعذر تحديد الموقع أو حساب مسار القيادة.";

        setDeliveryStatus(`${reason} يمكنك متابعة الطلب باستخدام العنوان المكتوب، وستُحدد أجرة التوصيل مع المطعم.`, true);
        updateCartCounter();
        updateDeliverySummary();
    }

    // إنشاء واجهة التوصيل وربط زر الموقع، دون الحاجة إلى تعديل HTML أو CSS.
    injectDeliveryUI();

    document.addEventListener("click", function(e) {
        const btn = e.target.closest(".add-to-cart-btn, .drink-add-btn, .small-add-to-cart-btn");
        if (btn) {
            const card = btn.closest(".product-card, .drink-item, .small-product");
            if (card) {
                addToCart({
                    id: card.dataset.id,
                    name: card.dataset.name,
                    price: card.dataset.price,
                    image: card.dataset.image
                }, btn);
            }
        }
    });

    if (whatsappOrder) {
        whatsappOrder.addEventListener("click", function () {
            if (cart.length === 0) {
                alert("سلة الطلب فارغة!");
                return;
            }

            const customerName = document.getElementById("customerName")?.value.trim() || "";
            if (!customerName) {
                alert("يرجى إدخال اسم الزبون.");
                return;
            }

            const subtotal = calculateSubtotal();
            const totalPieces = calculateTotalPieces();
            const alibabaFee = calculateAlibabaServiceFee(subtotal, totalPieces);
            const customerNotes = document.getElementById("customerNotes")?.value.trim() || "لا توجد ملاحظات";

            let whatsappMessage = "";
            let targetPhone = "";

            if (currentMode === 'alibaba') {
                targetPhone = ALIBABA_WHATSAPP;
                const customerPhone = document.getElementById("customerPhone")?.value.trim() || "";
                const customerAddress = document.getElementById("customerAddress")?.value.trim() || "";

                if (!customerPhone) {
                    alert("يرجى إدخال رقم الهاتف.");
                    document.getElementById("customerPhone")?.focus();
                    return;
                }

                if (!customerAddress) {
                    alert("يرجى إدخال عنوان التوصيل.");
                    document.getElementById("customerAddress")?.focus();
                    return;
                }

                if (!customerLocationAttempted || customerLocationStatus === "not_attempted") {
                    alert("يرجى الضغط على زر تحديد الموقع مرة واحدة على الأقل. إذا تعذر تحديد الموقع يمكنك متابعة الطلب بالعنوان المكتوب.");
                    return;
                }

                if (customerLocationStatus === "pending") {
                    alert("يرجى الانتظار حتى تنتهي عملية تحديد الموقع وحساب مسار الطريق.");
                    return;
                }

                const locationLink = customerLocationStatus === "success"
                    ? window.customerLocationLink
                    : (window.customerLocationLink !== "غير محدد"
                        ? `${window.customerLocationLink} (تعذر حساب مسار الطريق؛ يرجى تأكيد أجرة التوصيل)`
                        : "تعذر تحديد الموقع الجغرافي؛ يرجى الاعتماد على العنوان المكتوب");

                let finalTotal = subtotal + deliveryFee + alibabaFee;

                whatsappMessage = `*طلب جديد عبر منصة علي بابا*\n\n` +
                    `*اسم المطعم:* بروستد المكحل\n` +
                    `*اسم الزبون:* ${customerName}\n` +
                    `*رقم الهاتف:* ${customerPhone}\n` +
                    `*العنوان:* ${customerAddress}\n` +
                    `*الموقع الجغرافي:* ${locationLink}\n` +
                    `*ملاحظات:* ${customerNotes}\n\n` +
                    `*تفاصيل الطلب:*\n`;

                cart.forEach((item, index) => {
                    whatsappMessage += `${index + 1}. ${item.name} × ${item.quantity} - ${(item.price).toLocaleString()} ل.س\n`;
                });

                whatsappMessage += `\n------------------\n` +
                    `🛒 قيمة المنتجات: *${subtotal.toLocaleString()} ل.س*\n` +
                    `🚚 أجرة التوصيل المحسوبة: *${deliveryFee.toLocaleString()} ل.س*\n` +
                    `${customerLocationStatus === "success" ? "" : "⚠️ لم يتم احتساب أجرة التوصيل عبر مسار قيادة؛ يرجى تأكيدها مع المطعم.\n"}` +
                    `⚙️ رسوم خدمة علي بابا: *${alibabaFee.toLocaleString()} ل.س*\n` +
                    `💰 الإجمالي النهائي: *${finalTotal.toLocaleString()} ل.س*`;

            } else {
                targetPhone = RESTAURANT_WHATSAPP;
                const customerTable = document.getElementById("customerTable")?.value.trim() || "";

                if (!customerTable) {
                    alert("يرجى إدخال رقم الطاولة.");
                    return;
                }

                whatsappMessage = `*طلب محلي (صالة)*\n\n` +
                    `*اسم المطعم:* بروستد المكحل\n` +
                    `*اسم الزبون:* ${customerName}\n` +
                    `*رقم الطاولة:* ${customerTable}\n` +
                    `*ملاحظات:* ${customerNotes}\n\n` +
                    `*تفاصيل الطلب:*\n`;

                cart.forEach((item, index) => {
                    whatsappMessage += `${index + 1}. ${item.name} × ${item.quantity} - ${(item.price ).toLocaleString()} ل.س\n`;
                });

                whatsappMessage += `\n------------------\n` +
                    `💰 الإجمالي النهائي: *${subtotal.toLocaleString()} ل.س*`;
            }

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    if (floatingCart && cartOverlay) {
        floatingCart.addEventListener("click", () => cartOverlay.classList.add("show"));
    }
    if (closeCart && cartOverlay) {
        closeCart.addEventListener("click", () => cartOverlay.classList.remove("show"));
    }
    if (cartOverlay) {
        cartOverlay.addEventListener("click", (e) => {
            if (e.target === cartOverlay) cartOverlay.classList.remove("show");
        });
    }

});