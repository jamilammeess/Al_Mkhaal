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
    document.body.classList.toggle("alibaba-mode", currentMode === "alibaba");

    const offersSection = document.getElementById("offers");
    const tableNumberGroup = document.getElementById("tableNumberGroup");
    const alibabaDeliveryFields = document.getElementById("alibabaDeliveryFields");

    const cartSubtotalRow = document.getElementById("cartSubtotalRow");
    const deliveryFeeRow = document.getElementById("deliveryFeeRow");
    const alibabaFeeRow = document.getElementById("alibabaFeeRow");

    if (currentMode === "alibaba") {
        if (offersSection) offersSection.style.display = "block";
        if (tableNumberGroup) tableNumberGroup.style.display = "none";
        if (alibabaDeliveryFields) alibabaDeliveryFields.style.display = "block";

        // إخفاء تفاصيل الأسعار من السلة
        if (cartSubtotalRow) cartSubtotalRow.style.display = "none";
        if (deliveryFeeRow) deliveryFeeRow.style.display = "none";
        if (alibabaFeeRow) alibabaFeeRow.style.display = "none";

    } else {
        if (offersSection) offersSection.style.display = "block";
        if (tableNumberGroup) tableNumberGroup.style.display = "block";
        if (alibabaDeliveryFields) alibabaDeliveryFields.style.display = "none";

        // الوضع العادي يبقى كما كان
        if (cartSubtotalRow) cartSubtotalRow.style.display = "flex";
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

    /* =====================================================
       CART CORE — إضافة المنتجات وتحديث زر السلة والكميات
    ===================================================== */
    function updateCartCounter() {
        const count = getCartCount();

        if (cartCount) cartCount.textContent = String(count);

        if (cartBadge) {
            cartBadge.textContent = String(count);
            cartBadge.style.display = count > 0 ? "flex" : "none";
        }

        if (floatingCart) {
            const hasItems = count > 0;

            floatingCart.classList.toggle("is-hidden", !hasItems);
            floatingCart.classList.toggle("has-items", hasItems);
            floatingCart.setAttribute("aria-hidden", hasItems ? "false" : "true");
            floatingCart.tabIndex = hasItems ? 0 : -1;

            // دعم ملفات CSS القديمة التي تعتمد على display مباشرة.
            floatingCart.style.display = hasItems ? "flex" : "none";
        }

        const subtotal = calculateSubtotal();
        const pieces = calculateTotalPieces();

        const subtotalElement = document.getElementById("cartSubtotal");
        const totalElement = document.getElementById("cartTotal");
        const deliveryElement = document.getElementById("cartDeliveryFee");
        const alibabaFeeElement = document.getElementById("cartAlibabaFee");

        if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
        if (deliveryElement) deliveryElement.textContent = formatPrice(deliveryFee);

        const serviceFee = calculateAlibabaServiceFee(subtotal, pieces);

        if (alibabaFeeElement) alibabaFeeElement.textContent = formatPrice(serviceFee);
        if (totalElement) totalElement.textContent = formatPrice(subtotal + deliveryFee + serviceFee);
    }

    function addToCart(product, button) {
        if (!product || !product.id) return;

        const id = String(product.id);
        const existing = cart.find(item => String(item.id) === id);

        if (existing) {
            existing.quantity = safeNumber(existing.quantity, 0) + 1;
        } else {
            cart.push({
                id,
                name: String(product.name || "منتج"),
                price: safeNumber(product.price, 0),
                image: String(product.image || ""),
                quantity: 1
            });
        }

        renderCart();

        if (button) {
            const oldText = button.innerHTML;

            button.classList.add("added");
            button.innerHTML = "<span>✓</span> تمت الإضافة";

            window.setTimeout(() => {
                button.innerHTML = oldText;
                button.classList.remove("added");
            }, 900);
        }

        if (floatingCart) floatingCart.classList.add("cart-bounce");

        window.setTimeout(() => {
            floatingCart && floatingCart.classList.remove("cart-bounce");
        }, 450);
    }

    function increaseQuantity(id) {
        const item = cart.find(product => String(product.id) === String(id));

        if (!item) return;

        item.quantity = safeNumber(item.quantity, 0) + 1;
        renderCart();
    }

    function decreaseQuantity(id) {
        const item = cart.find(product => String(product.id) === String(id));

        if (!item) return;

        item.quantity = safeNumber(item.quantity, 0) - 1;

        if (item.quantity <= 0) {
            cart = cart.filter(product => String(product.id) !== String(id));
        }

        renderCart();
    }

    function removeFromCart(id) {
        cart = cart.filter(item => String(item.id) !== String(id));
        renderCart();
    }

    // لأن أزرار الكمية والحذف تُنشأ ديناميكياً وتستخدم onclick داخل HTML.
    window.addToCart = addToCart;
    window.increaseQuantity = increaseQuantity;
    window.decreaseQuantity = decreaseQuantity;
    window.removeFromCart = removeFromCart;

    function getCartCount() {
        return cart.reduce((total, item) => total + safeNumber(item.quantity, 0), 0);
    }

    function calculateSubtotal() {
        return cart.reduce((total, item) => {
            return total + (safeNumber(item.price, 0) * safeNumber(item.quantity, 0));
        }, 0);
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

                    ${currentMode !== "alibaba" ? `
                        <strong>
                            ${formatPrice(item.price * item.quantity)}
                        </strong>
                    ` : ""}
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
    let deliveryAddressGroup = null;
    let deliveryFallbackMessage = null;

    function injectDeliveryUI() {
        if (currentMode !== "alibaba") return;

        const customerAddress = document.getElementById("customerAddress");
        deliveryAddressGroup = customerAddress
        ? customerAddress.closest(".form-group")
        : null;

    if (deliveryAddressGroup) {
        deliveryAddressGroup.style.display = "none";
        }

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
        deliveryFallbackMessage = document.createElement("p");

deliveryFallbackMessage.id = "deliveryFallbackMessage";
deliveryFallbackMessage.textContent =
    "تعذر تحديد موقعك تلقائياً. يرجى كتابة عنوان التوصيل بالتفصيل حتى يتمكن المطعم من إيصال طلبك.";

deliveryFallbackMessage.style.cssText = `
    display: none;
    margin: 10px 0;
    padding: 12px;
    border-radius: 10px;
    background: #fff3cd;
    color: #856404;
    font-size: 13px;
    line-height: 1.8;
`;

if (deliveryAddressGroup) {
    deliveryAddressGroup.insertAdjacentElement(
        "beforebegin",
        deliveryFallbackMessage
    );
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

    if (!deliverySummaryElement) return;

    // إخفاء تفاصيل التوصيل من سلة علي بابا فقط
    if (currentMode === "alibaba") {
        deliverySummaryElement.style.display = "none";
        deliverySummaryElement.innerHTML = "";
        return;
    }

    deliverySummaryElement.style.display = "";
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

                    console.warn(
                        "تعذر حساب الطريق من مزود خرائط، ستتم تجربة المزود البديل:",
                        error
                    );
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

                customerCoordinates = {
                    latitude: userLat,
                    longitude: userLon
                };

                window.customerLocationLink = `https://www.google.com/maps?q=${userLat},${userLon}`;

                setDeliveryStatus("تم تحديد موقعك. جارٍ حساب مسار القيادة الفعلي إلى المطعم...");

                fetchRouteDistance(
                    RESTAURANT_LOCATION.latitude,
                    RESTAURANT_LOCATION.longitude,
                    userLat,
                    userLon,
                    function (error, distanceKm) {
                        if (error || !Number.isFinite(distanceKm)) {
                            handleLocationFailure(
                                new Error(
                                    "تم تحديد الموقع، لكن تعذر الحصول على مسار قيادة موثوق. يمكنك إرسال الطلب بالعنوان المكتوب، وسيتم تأكيد أجرة التوصيل مع المطعم."
                                )
                            );

                            return;
                        }

                        deliveryDistanceKm = distanceKm;

                        const chargedKm = Math.ceil(distanceKm);

                        deliveryFee = chargedKm * DELIVERY_PRICE_PER_KM;
                        customerLocationStatus = "success";
                        if (deliveryAddressGroup) {
                       deliveryAddressGroup.style.display = "none";
                                }

                        if (deliveryFallbackMessage) {
                            deliveryFallbackMessage.style.display = "none";
                                }

                        if (getLocationBtn) {
                            getLocationBtn.disabled = false;
                            getLocationBtn.textContent = `✓ تم حساب مسافة الطريق (${distanceKm.toFixed(1)} كم)`;
                        }

                        setDeliveryStatus(
                            `تم تحديد موقعك وحساب مسافة الطريق بنجاح: ${distanceKm.toFixed(1)} كم. أجرة التوصيل ${formatPrice(deliveryFee)}.`
                        );

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
        getLocationBtn.textContent =
            "📍 إعادة تحديد موقعي وحساب التوصيل";
    }

    // إظهار حقل العنوان اليدوي عند فشل تحديد الموقع
    if (deliveryAddressGroup) {
        deliveryAddressGroup.style.display = "block";
    }

    if (deliveryFallbackMessage) {
        deliveryFallbackMessage.style.display = "block";
    }

    const reason = error && error.message
        ? error.message
        : "تعذر تحديد الموقع أو حساب مسار القيادة.";

    setDeliveryStatus(
        `${reason} يمكنك كتابة عنوانك يدوياً للمتابعة.`,
        true
    );

    updateCartCounter();
    updateDeliverySummary();
}

    // إنشاء واجهة التوصيل وربط زر الموقع، دون الحاجة إلى تعديل HTML أو CSS.
    injectDeliveryUI();

    renderCart();

    document.addEventListener("click", function(e) {
        const btn = e.target.closest(
            ".add-to-cart-btn, .drink-add-btn, .small-add-to-cart-btn"
        );

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

    /* =====================================================
       FINAL INVOICE DIALOG — الفاتورة النهائية قبل واتساب
    ===================================================== */

    let invoiceDialog = null;

    function ensureInvoiceDialog() {
        if (invoiceDialog) return invoiceDialog;

        invoiceDialog = document.createElement("div");

        invoiceDialog.id = "invoiceDialog";
        invoiceDialog.className = "invoice-overlay";
        invoiceDialog.setAttribute("aria-hidden", "true");

        invoiceDialog.innerHTML = `
            <section class="invoice-dialog" role="dialog" aria-modal="true" aria-labelledby="invoiceTitle">
                <header class="invoice-dialog-header">
                    <div class="invoice-heading-icon">🧾</div>
                    <div>
                        <h2 id="invoiceTitle">الفاتورة النهائية</h2>
                        <p>تأكد من تفاصيل طلبك قبل الإرسال</p>
                    </div>
                    <button type="button" class="invoice-close" id="closeInvoice" aria-label="إغلاق">✕</button>
                </header>

                <div class="invoice-dialog-content" id="invoiceContent"></div>

                <footer class="invoice-dialog-actions">
                    <button type="button" class="invoice-back-btn" id="invoiceBack">العودة لتعديل الطلب</button>
                    <button type="button" class="invoice-confirm-btn" id="invoiceConfirm">✓ تأكيد وإرسال عبر واتساب</button>
                </footer>
            </section>
        `;

        document.body.appendChild(invoiceDialog);

        const close = () => {
            invoiceDialog.classList.remove("show");
            invoiceDialog.setAttribute("aria-hidden", "true");
        };

        invoiceDialog.querySelector("#closeInvoice").addEventListener("click", close);
        invoiceDialog.querySelector("#invoiceBack").addEventListener("click", close);

        invoiceDialog.addEventListener("click", event => {
            if (event.target === invoiceDialog) close();
        });

        invoiceDialog.querySelector("#invoiceConfirm").addEventListener("click", sendWhatsAppOrder);

        return invoiceDialog;
    }

    function getOrderCustomerData() {
        return {
            name: document.getElementById("customerName")?.value.trim() || "",
            phone: document.getElementById("customerPhone")?.value.trim() || "",
            address: document.getElementById("customerAddress")?.value.trim() || "",
            table: document.getElementById("customerTable")?.value.trim() || "",
            notes: document.getElementById("customerNotes")?.value.trim() || "لا توجد ملاحظات"
        };
    }

    function validateOrder() {
        if (!cart.length) {
            alert("سلة الطلب فارغة!");
            return false;
        }

        const customer = getOrderCustomerData();

        if (!customer.name) {
            alert("يرجى إدخال اسم الزبون.");
            document.getElementById("customerName")?.focus();
            return false;
        }

        if (currentMode === "alibaba") {
            if (!customer.phone) {
                alert("يرجى إدخال رقم الهاتف.");
                document.getElementById("customerPhone")?.focus();
                return false;
            }

            if (!customer.address && customerLocationStatus !== "success") {
                alert("يرجى إدخال عنوان التوصيل أو تحديد الموقع الجغرافي بنجاح.");
                document.getElementById("customerAddress")?.focus();
                return false;
            }

            if (customerLocationStatus === "pending") {
                alert("يرجى الانتظار حتى تنتهي عملية تحديد الموقع وحساب مسار الطريق، أو إلغاء المحاولة والمتابعة بالعنوان.");
                return false;
            }

        } else if (!customer.table) {
            alert("يرجى إدخال رقم الطاولة.");
            document.getElementById("customerTable")?.focus();
            return false;
        }

        return true;
    }

    function renderInvoice() {
        const dialog = ensureInvoiceDialog();
        const content = dialog.querySelector("#invoiceContent");

        const customer = getOrderCustomerData();
        const subtotal = calculateSubtotal();
        const pieces = calculateTotalPieces();
        const alibabaFee = calculateAlibabaServiceFee(subtotal, pieces);

        const finalTotal = subtotal + (
            currentMode === "alibaba"
                ? deliveryFee + alibabaFee
                : 0
        );

        const itemRows = cart.map(item => `
            <div class="invoice-item">
                <div class="invoice-item-main">
                    <strong>${escapeHTML(item.name)}</strong>
                    <span>${safeNumber(item.quantity)} × ${formatPrice(item.price)}</span>
                </div>

                <strong class="invoice-item-total">
                    ${formatPrice(safeNumber(item.price) * safeNumber(item.quantity))}
                </strong>
            </div>
        `).join("");

        const customerRows = currentMode === "alibaba" ? `
            <div class="invoice-detail">
                <span>👤 الاسم</span>
                <strong>${escapeHTML(customer.name)}</strong>
            </div>

            <div class="invoice-detail">
                <span>📱 الهاتف</span>
                <strong>${escapeHTML(customer.phone)}</strong>
            </div>

            <div class="invoice-detail">
                <span>📍 العنوان</span>
                <strong>${escapeHTML(customer.address || "تم تحديد الموقع الجغرافي")}</strong>
            </div>

            <div class="invoice-detail">
                <span>🗺️ الموقع</span>
                <strong>
                    ${customerLocationStatus === "success"
                        ? `<a href="${escapeHTML(window.customerLocationLink)}" target="_blank" rel="noopener">فتح الموقع على الخريطة</a>`
                        : "غير محدد — يعتمد التوصيل على العنوان المكتوب"}
                </strong>
            </div>
        ` : `
            <div class="invoice-detail">
                <span>👤 الاسم</span>
                <strong>${escapeHTML(customer.name)}</strong>
            </div>

            <div class="invoice-detail">
                <span>🪑 رقم الطاولة</span>
                <strong>${escapeHTML(customer.table)}</strong>
            </div>
        `;

        content.innerHTML = `
            <section class="invoice-section">
                <h3>🍽️ تفاصيل الأصناف</h3>
                ${itemRows}
            </section>

            <section class="invoice-section">
                <h3>👤 بيانات ${currentMode === "alibaba" ? "التوصيل" : "الطلب"}</h3>
                ${customerRows}

                <div class="invoice-detail invoice-notes">
                    <span>📝 الملاحظات</span>
                    <strong>${escapeHTML(customer.notes)}</strong>
                </div>
            </section>

            <section class="invoice-section invoice-totals">
                <div class="invoice-detail">
                    <span>قيمة المنتجات</span>
                    <strong>${formatPrice(subtotal)}</strong>
                </div>

                ${currentMode === "alibaba" ? `
                    <div class="invoice-detail">
                        <span>🚚 رسوم التوصيل</span>
                        <strong>${formatPrice(deliveryFee)}</strong>
                    </div>

                    <div class="invoice-detail">
                        <span>⚙️ رسوم خدمة علي بابا</span>
                        <strong>${formatPrice(alibabaFee)}</strong>
                    </div>

                    ${customerLocationStatus !== "success"
                        ? `<p class="invoice-warning">⚠️ لم يتم احتساب مسافة الطريق؛ ستُؤكد أجرة التوصيل مع المطعم.</p>`
                        : ""}
                ` : ""}

                <div class="invoice-final-total">
                    <span>الإجمالي النهائي</span>
                    <strong>${formatPrice(finalTotal)}</strong>
                </div>
            </section>
        `;

        dialog.classList.add("show");
        dialog.setAttribute("aria-hidden", "false");
    }

    function buildWhatsAppMessage() {
        const customer = getOrderCustomerData();

        const subtotal = calculateSubtotal();
        const pieces = calculateTotalPieces();
        const alibabaFee = calculateAlibabaServiceFee(subtotal, pieces);

        let message = "";

        if (currentMode === "alibaba") {
            const locationLink = customerLocationStatus === "success"
                ? window.customerLocationLink
                : "غير محدد؛ يرجى الاعتماد على العنوان المكتوب وتأكيد أجرة التوصيل مع المطعم";

            const finalTotal = subtotal + deliveryFee + alibabaFee;

            message = `*طلب جديد عبر منصة علي بابا*\n\n` +
                `*اسم المطعم:* بروستد المكحل\n` +
                `*اسم الزبون:* ${customer.name}\n` +
                `*رقم الهاتف:* ${customer.phone}\n` +
                `*العنوان:* ${customer.address || "تم تحديد الموقع الجغرافي"}\n` +
                `*الموقع الجغرافي:* ${locationLink}\n` +
                `*ملاحظات:* ${customer.notes}\n\n` +
                `*تفاصيل الطلب:*\n`;

            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} × ${item.quantity} — ${(item.price * item.quantity).toLocaleString("ar")} ل.س\n`;
            });

            message += `\n------------------\n` +
                `🛒 قيمة المنتجات: *${subtotal.toLocaleString("ar")} ل.س*\n` +
                `🚚 أجرة التوصيل المحسوبة: *${deliveryFee.toLocaleString("ar")} ل.س*\n` +
                `${customerLocationStatus === "success" ? "" : "⚠️ لم يتم احتساب أجرة التوصيل عبر مسار قيادة؛ يرجى تأكيدها مع المطعم.\n"}` +
                `⚙️ رسوم خدمة علي بابا: *${alibabaFee.toLocaleString("ar")} ل.س*\n` +
                `💰 الإجمالي النهائي: *${finalTotal.toLocaleString("ar")} ل.س*`;

            return {
                phone: ALIBABA_WHATSAPP,
                message
            };
        }

        message = `*طلب محلي (صالة)*\n\n` +
            `*اسم المطعم:* بروستد المكحل\n` +
            `*اسم الزبون:* ${customer.name}\n` +
            `*رقم الطاولة:* ${customer.table}\n` +
            `*ملاحظات:* ${customer.notes}\n\n` +
            `*تفاصيل الطلب:*\n`;

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} × ${item.quantity} — ${(item.price * item.quantity).toLocaleString("ar")} ل.س\n`;
        });

        message += `\n------------------\n💰 الإجمالي النهائي: *${subtotal.toLocaleString("ar")} ل.س*`;

        return {
            phone: RESTAURANT_WHATSAPP,
            message
        };
    }

    function sendWhatsAppOrder() {
        if (!validateOrder()) return;

        const { phone, message } = buildWhatsAppMessage();

        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

        if (invoiceDialog) {
            invoiceDialog.classList.remove("show");
            invoiceDialog.setAttribute("aria-hidden", "true");
        }

        trackEvent("purchase_intent", {
            currency: "SYP",
            value: calculateSubtotal(),
            items_count: calculateTotalPieces(),
            order_mode: currentMode
        });
    }

    if (whatsappOrder) {
        whatsappOrder.addEventListener("click", function () {
            if (!validateOrder()) return;
            renderInvoice();
        });
    }

    if (floatingCart && cartOverlay) {
        floatingCart.addEventListener("click", () => {
            cartOverlay.classList.add("show");
        });
    }

    if (closeCart && cartOverlay) {
        closeCart.addEventListener("click", () => {
            cartOverlay.classList.remove("show");
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener("click", (e) => {
            if (e.target === cartOverlay) {
                cartOverlay.classList.remove("show");
            }
        });
    }

});