document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MENU DATA — عدّل المنتجات من هنا فقط
       isNew: true لإظهار شارة «جديد» على البرغر
       isFeatured: true لإضافة تنسيق المنتج المميز
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
        "id": "half-kilo-shish",
        "name": "نصف كيلو كباب خاروف",
        "englishName": "HALF KILO SHISH",
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
]

    const specialDrinksList = [
        // {
        //     "id": "mohito-strawberry",
        //     "name": "موهيتو بطعم الفريز",
        //     "englishName": "MOHITO STRAWBERRY",
        //     "price": 300,
        //     "image": "images/drinks/mohito.jpg",
        //     "alt": "موهيتو بطعم الفريز"
        // },
        // {
        //     "id": "passion-juice",
        //     "name": "عصير بنكهة فاكهة الباشون الطازجة",
        //     "englishName": "PASSION JUICE",
        //     "price": 300,
        //     "image": "images/drinks/bation.jpg",
        //     "alt": "عصير باشون"
        // },
        // {
        //     "id": "ocean-juice",
        //     "name": "العصير الأزرق المنعش بنكهة المحيط",
        //     "englishName": "OCEAN JUICE",
        //     "price": 300,
        //     "image": "images/drinks/blueSerron.jpg",
        //     "alt": "العصير الأزرق"
        // }
    ];

    const drinksList = [
        {
            "id": "cola-liter",
            "name": "كولا ليتر",
            "price": 110
        },
        {
            "id": "sprite",
            "name": "سبرايت",
            "price": 90
        },
        {
            "id": "water",
            "name": "ماء",
            "price": 50
        },
        {
            "id": "cola-can",
            "name": "بيبسي / كولا تنك",
            "price": 90
        }
    ];


    /* =========================
       SETTINGS
    ========================== */

    // رقم واتساب المطعم
    // يجب أن يكون بدون (+) وبدون مسافات
    const WHATSAPP_NUMBER = "+963940015220";

    // موقع مطعم مولانا برغر
    const RESTAURANT_LOCATION = {
        latitude: 32.633352420849704,
        longitude: 36.10342464451504
    };

    // أجرة التوصيل لكل كيلومتر أو جزء منه
    const DELIVERY_PRICE_PER_KM = 30;

    let customerLocation = null;
    let deliveryDistanceKm = null;
    let deliveryChargedKm = null;
    let deliveryFee = null;
    let isCalculatingDelivery = false;
    let deliveryStatusElement = null;
    let deliverySummaryElement = null;
    let deliveryLocationButton = null;


    /* =========================
       GOOGLE ANALYTICS
    ========================== */

    /*
     * إرسال Event إلى Google Analytics
     *
     * لا يتم إرسال:
     * - اسم الزبون
     * - رقم الهاتف
     * - العنوان
     * - الملاحظات
     */

    function trackEvent(eventName, parameters = {}) {

        if (typeof window.gtag !== "function") {
            return;
        }

        try {

            window.gtag(
                "event",
                eventName,
                parameters
            );

        } catch (error) {

            console.warn(
                "Google Analytics event error:",
                error
            );

        }

    }


    /*
     * تجهيز منتجات السلة بالشكل المناسب
     * لـ Google Analytics Ecommerce
     */

    function getAnalyticsItems() {

        return cart.map(function (item) {

            return {

                item_id:
                    String(item.id || ""),

                item_name:
                    String(item.name || "منتج"),

                price:
                    safeNumber(
                        item.price,
                        0
                    ),

                quantity:
                    safeNumber(
                        item.quantity,
                        1
                    )

            };

        });

    }


    /* =========================
       CART DATA
    ========================== */

    // السلة تبدأ فارغة مع كل جلسة جديدة.
    let cart = [];


    /* =========================
       ELEMENTS
    ========================== */

    const floatingCart =
        document.getElementById("floatingCart");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const closeCart =
        document.getElementById("closeCart");

    const cartItems =
        document.getElementById("cartItems");

    const cartEmpty =
        document.getElementById("cartEmpty");

    const cartCount =
        document.getElementById("cartCount");

    const cartBadge =
        document.getElementById("cartBadge");

    const cartTotal =
        document.getElementById("cartTotal");

    const whatsappOrder =
        document.getElementById("whatsappOrder");


    /* =========================
       SAFE NUMBER
    ========================== */

    function safeNumber(value, fallback = 0) {

        const number = Number(value);

        return Number.isFinite(number)
            ? number
            : fallback;

    }


    /* =========================
       ESCAPE HTML
    ========================== */

    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================
       FORMAT PRICE
    ========================== */

    function formatPrice(price) {

        const numericPrice =
            safeNumber(price);

        return (
            numericPrice.toLocaleString("ar") +
            " ل.س"
        );

    }



    /* =========================
       RENDER MENU FROM LISTS
       يتم إنشاء بطاقات المنتجات من القوائم أعلاه
    ========================== */

    function renderMenuProducts() {

        const burgersGrid = document.getElementById("burgersGrid");
        const mealsGrid = document.getElementById("mealsGrid");
        const specialDrinksGrid = document.getElementById("specialDrinksGrid");
        const drinksGrid = document.getElementById("drinksGrid");

        if (burgersGrid) {
            burgersGrid.innerHTML = burgersList.map(function (item) {
                const name = escapeHTML(item.name);
                const englishName = escapeHTML(item.englishName || "");
                const image = escapeHTML(item.image || "");
                const description = escapeHTML(item.description || "");
                const badgeText = item.isNew ? "جديد" : (item.badge || "");
                const badgeHTML = badgeText
                    ? `<span class="product-badge">${escapeHTML(badgeText)}</span>`
                    : "";

                return `
                    <article
                        class="product-card${item.isFeatured ? " featured" : ""}"
                        data-id="${escapeHTML(item.id)}"
                        data-name="${name}"
                        data-price="${safeNumber(item.price)}"
                        data-image="${image}">
                        <div class="product-image">
                            ${badgeHTML}
                            <img src="${image}" alt="${escapeHTML(item.alt || item.name)}" loading="lazy">
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <div>
                                    <h3>${name}</h3>
                                    <span>${englishName}</span>
                                </div>
                                <strong>${formatPrice(item.price).replace(" ل.س", "")}<small> ل.س</small></strong>
                            </div>
                            <p>${description}</p>
                            <button class="add-to-cart-btn" type="button">
                                <span>🛒</span>
                                أضف إلى الطلب
                            </button>
                        </div>
                    </article>
                `;
            }).join("");
        }

        if (mealsGrid) {
            mealsGrid.innerHTML = mealsList.map(function (item) {
                const name = escapeHTML(item.name);
                const image = escapeHTML(item.image || "");
                return `
                    <article
                        class="product-card"
                        data-id="${escapeHTML(item.id)}"
                        data-name="${name}"
                        data-price="${safeNumber(item.price)}"
                        data-image="${image}">
                        <div class="product-image">
                            <img src="${image}" alt="${escapeHTML(item.alt || item.name)}" loading="lazy">
                        </div>
                        <div class="product-info">
                            <div class="product-title">
                                <div>
                                    <h3>${name}</h3>
                                    <span>${escapeHTML(item.englishName || "")}</span>
                                </div>
                                <strong>${formatPrice(item.price).replace(" ل.س", "")}<small> ل.س</small></strong>
                            </div>
                            <p>${escapeHTML(item.description || "")}</p>
                            <button class="add-to-cart-btn" type="button">
                                <span>🛒</span>
                                أضف إلى الطلب
                            </button>
                        </div>
                    </article>
                `;
            }).join("");
        }

        if (specialDrinksGrid) {
            specialDrinksGrid.innerHTML = specialDrinksList.map(function (item) {
                const name = escapeHTML(item.name);
                const image = escapeHTML(item.image || "");
                return `
                    <article
                        class="small-product"
                        data-id="${escapeHTML(item.id)}"
                        data-name="${name}"
                        data-price="${safeNumber(item.price)}"
                        data-image="${image}">
                        <div class="small-product-image">
                            <img src="${image}" alt="${escapeHTML(item.alt || item.name)}" loading="lazy">
                        </div>
                        <div>
                            <h3>${name}</h3>
                            <span>${escapeHTML(item.englishName || "")}</span>
                        </div>
                        <strong>${formatPrice(item.price).replace(" ل.س", "")}<small> ل.س</small></strong>
                        <button class="small-add-to-cart-btn" type="button" aria-label="أضف ${name} إلى الطلب">🛒</button>
                    </article>
                `;
            }).join("");
        }

        if (drinksGrid) {
            drinksGrid.innerHTML = drinksList.map(function (item) {
                return `
                    <div
                        class="drink-item"
                        data-id="${escapeHTML(item.id)}"
                        data-name="${escapeHTML(item.name)}"
                        data-price="${safeNumber(item.price)}"
                        data-image="${escapeHTML(item.image || "")}">
                        <span>${escapeHTML(item.name)}</span>
                        <strong>${formatPrice(item.price)}</strong>
                        <button class="drink-add-btn" type="button" aria-label="أضف ${escapeHTML(item.name)} إلى الطلب">🛒</button>
                    </div>
                `;
            }).join("");
        }
    }

    // عرض المنتجات قبل ربط أحداث أزرار الإضافة إلى السلة
    renderMenuProducts();

    /* =========================
       GET CART COUNT
    ========================== */

    function getCartCount() {

        return cart.reduce(
            function (total, item) {

                const quantity =
                    safeNumber(
                        item.quantity,
                        0
                    );

                return total + quantity;

            },
            0
        );

    }


    /* =========================
       GET CART TOTAL
    ========================== */

    function getCartTotal() {

        return cart.reduce(
            function (total, item) {

                const price =
                    safeNumber(
                        item.price,
                        0
                    );

                const quantity =
                    safeNumber(
                        item.quantity,
                        0
                    );

                return total +
                    (price * quantity);

            },
            0
        );

    }


    /* =========================
       UPDATE CART COUNTER
    ========================== */

    function updateCartCounter() {

        const count =
            getCartCount();


        if (cartCount) {

            if (count === 0) {

                cartCount.textContent =
                    "السلة فارغة";

            } else if (count === 1) {

                cartCount.textContent =
                    "صنف واحد";

            } else if (
                count >= 2 &&
                count <= 10
            ) {

                cartCount.textContent =
                    count + " أصناف";

            } else {

                cartCount.textContent =
                    count + " صنف";

            }

        }


        if (cartBadge) {

            cartBadge.textContent =
                count;

        }


        if (floatingCart) {

            floatingCart.classList.toggle(
                "has-items",
                count > 0
            );

        }

        // عرض الإجمالي النهائي مع التوصيل إن تم حسابه
        if (cartTotal) {
            cartTotal.textContent = formatPrice(
                getCartTotal() + (deliveryFee === null ? 0 : deliveryFee)
            );
        }

        updateDeliverySummary();

    }


    /* =========================
       ADD TO CART
    ========================== */

    function addToCart(product) {

        if (!product || !product.id) {

            console.error(
                "بيانات المنتج غير صالحة:",
                product
            );

            return;

        }


        const productId =
            String(product.id);


        const productPrice =
            safeNumber(
                product.price,
                0
            );


        const existingProduct =
            cart.find(
                function (item) {

                    return String(item.id) ===
                        productId;

                }
            );


        /*
         * المنتج موجود مسبقًا
         */

        if (existingProduct) {

            existingProduct.quantity =
                safeNumber(
                    existingProduct.quantity,
                    0
                ) + 1;


            /*
             * Analytics:
             * إضافة كمية جديدة للمنتج
             */

            trackEvent(
                "add_to_cart",
                {
                    currency: "SYP",

                    value: productPrice,

                    items: [
                        {
                            item_id: productId,

                            item_name:
                                String(
                                    product.name ||
                                    "منتج"
                                ),

                            price: productPrice,

                            quantity: 1
                        }
                    ]
                }
            );

        }


        /*
         * المنتج جديد
         */

        else {

            cart.push({

                id: productId,

                name:
                    String(
                        product.name || "منتج"
                    ),

                price:
                    productPrice,

                image:
                    product.image
                        ? String(product.image)
                        : "",

                quantity: 1

            });


            /*
             * Analytics:
             * إضافة منتج جديد
             */

            trackEvent(
                "add_to_cart",
                {
                    currency: "SYP",

                    value: productPrice,

                    items: [
                        {
                            item_id: productId,

                            item_name:
                                String(
                                    product.name ||
                                    "منتج"
                                ),

                            price: productPrice,

                            quantity: 1
                        }
                    ]
                }
            );

        }


        renderCart();

        showAddAnimation();

    }


    /* =========================
       REMOVE PRODUCT
    ========================== */

    function removeFromCart(productId) {

        const product =
            cart.find(
                function (item) {

                    return String(item.id) ===
                        String(productId);

                }
            );


        /*
         * تسجيل الحذف قبل حذف المنتج
         */

        if (product) {

            trackEvent(
                "remove_from_cart",
                {
                    currency: "SYP",

                    value:
                        safeNumber(
                            product.price,
                            0
                        ) *
                        safeNumber(
                            product.quantity,
                            1
                        ),

                    items: [
                        {
                            item_id:
                                String(
                                    product.id
                                ),

                            item_name:
                                String(
                                    product.name ||
                                    "منتج"
                                ),

                            price:
                                safeNumber(
                                    product.price,
                                    0
                                ),

                            quantity:
                                safeNumber(
                                    product.quantity,
                                    1
                                )
                        }
                    ]
                }
            );

        }


        cart = cart.filter(
            function (item) {

                return String(item.id) !==
                    String(productId);

            }
        );


        renderCart();

    }


    /* =========================
       INCREASE QUANTITY
    ========================== */

    function increaseQuantity(productId) {

        const product =
            cart.find(
                function (item) {

                    return String(item.id) ===
                        String(productId);

                }
            );


        if (!product) {

            return;

        }


        product.quantity =
            safeNumber(
                product.quantity,
                0
            ) + 1;


        /*
         * Analytics
         */

        trackEvent(
            "quantity_change",
            {
                currency: "SYP",

                change_type: "increase",

                value:
                    safeNumber(
                        product.price,
                        0
                    ),

                items: [
                    {
                        item_id:
                            String(product.id),

                        item_name:
                            String(
                                product.name ||
                                "منتج"
                            ),

                        price:
                            safeNumber(
                                product.price,
                                0
                            ),

                        quantity:
                            product.quantity
                    }
                ]
            }
        );


        renderCart();

    }


    /* =========================
       DECREASE QUANTITY
    ========================== */

    function decreaseQuantity(productId) {

        const product =
            cart.find(
                function (item) {

                    return String(item.id) ===
                        String(productId);

                }
            );


        if (!product) {

            return;

        }


        const currentQuantity =
            safeNumber(
                product.quantity,
                1
            );


        if (currentQuantity > 1) {

            product.quantity =
                currentQuantity - 1;


            /*
             * Analytics
             */

            trackEvent(
                "quantity_change",
                {
                    currency: "SYP",

                    change_type: "decrease",

                    value:
                        safeNumber(
                            product.price,
                            0
                        ),

                    items: [
                        {
                            item_id:
                                String(product.id),

                            item_name:
                                String(
                                    product.name ||
                                    "منتج"
                                ),

                            price:
                                safeNumber(
                                    product.price,
                                    0
                                ),

                            quantity:
                                product.quantity
                        }
                    ]
                }
            );


            renderCart();

        }


        else {

            removeFromCart(productId);

        }

    }


    /* =========================
       RENDER CART
    ========================== */

    function renderCart() {

        if (!cartItems) {

            return;

        }


        cartItems.innerHTML = "";


        if (cart.length === 0) {

            if (cartEmpty) {

                cartEmpty.style.display =
                    "flex";

            }

            cartItems.style.display =
                "none";

        }


        else {

            if (cartEmpty) {

                cartEmpty.style.display =
                    "none";

            }


            cartItems.style.display =
                "flex";


            cart.forEach(
                function (item) {

                    const cartItem =
                        document.createElement("div");


                    cartItem.className =
                        "cart-item";


                    const itemId =
                        escapeHTML(
                            item.id
                        );


                    const itemName =
                        escapeHTML(
                            item.name
                        );


                    const itemImage =
                        escapeHTML(
                            item.image
                        );


                    const price =
                        safeNumber(
                            item.price,
                            0
                        );


                    const quantity =
                        Math.max(
                            1,
                            safeNumber(
                                item.quantity,
                                1
                            )
                        );


                    const itemTotal =
                        price * quantity;


                    const imageHTML =
                        itemImage
                            ? `
                                <img
                                    src="${itemImage}"
                                    alt="${itemName}"
                                    loading="lazy"
                                    onerror="
                                        this.style.display='none';
                                        this.nextElementSibling.style.display='inline-flex';
                                    "
                                >

                                <span
                                    style="display:none;"
                                    aria-hidden="true"
                                >
                                    🍔
                                </span>
                              `
                            : `
                                <span
                                    aria-hidden="true"
                                >
                                    🍔
                                </span>
                              `;


                    cartItem.innerHTML = `
                        <div class="cart-item-image">

                            ${imageHTML}

                        </div>


                        <div class="cart-item-info">

                            <h4>
                                ${itemName}
                            </h4>


                            <span class="cart-item-price">
                                ${formatPrice(price)}
                            </span>


                            <div
                                class="quantity-controls"
                                aria-label="تعديل كمية ${itemName}"
                            >

                                <button
                                    type="button"
                                    class="quantity-btn increase-btn"
                                    data-id="${itemId}"
                                    aria-label="زيادة كمية ${itemName}"
                                    title="زيادة الكمية"
                                >
                                    +
                                </button>


                                <span
                                    class="quantity-number"
                                    aria-live="polite"
                                >
                                    ${quantity}
                                </span>


                                <button
                                    type="button"
                                    class="quantity-btn decrease-btn"
                                    data-id="${itemId}"
                                    aria-label="إنقاص كمية ${itemName}"
                                    title="إنقاص الكمية"
                                >
                                    −
                                </button>

                            </div>

                        </div>


                        <div class="cart-item-actions">

                            <strong
                                class="cart-item-total"
                                title="إجمالي المنتج"
                            >
                                ${formatPrice(itemTotal)}
                            </strong>


                            <button
                                type="button"
                                class="remove-item"
                                data-id="${itemId}"
                                aria-label="حذف ${itemName} من السلة"
                                title="حذف المنتج"
                            >
                                🗑️
                            </button>

                        </div>
                    `;


                    cartItems.appendChild(
                        cartItem
                    );

                }
            );

        }


        if (cartTotal) {

            cartTotal.textContent =
                formatPrice(
                    getCartTotal()
                );

        }


        updateCartCounter();

    }


    /* =========================
       CART ITEM EVENTS
       EVENT DELEGATION
    ========================== */

    if (cartItems) {

        cartItems.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(
                        "button"
                    );


                if (!button) {

                    return;

                }


                const productId =
                    button.dataset.id;


                if (!productId) {

                    return;

                }


                if (
                    button.classList.contains(
                        "increase-btn"
                    )
                ) {

                    increaseQuantity(
                        productId
                    );

                }


                else if (
                    button.classList.contains(
                        "decrease-btn"
                    )
                ) {

                    decreaseQuantity(
                        productId
                    );

                }


                else if (
                    button.classList.contains(
                        "remove-item"
                    )
                ) {

                    removeFromCart(
                        productId
                    );

                }

            }
        );

    }


    /* =========================
       ADD PRODUCT EVENTS
    ========================== */

    const addButtons =
        document.querySelectorAll(
            ".add-to-cart-btn, .small-add-to-cart-btn, .drink-add-btn"
        );


    addButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const productElement =
                        button.closest(
                            ".product-card, .small-product, .drink-item"
                        );


                    if (!productElement) {

                        console.error(
                            "لم يتم العثور على عنصر المنتج."
                        );

                        return;

                    }


                    const product = {

                        id:
                            productElement.dataset.id,

                        name:
                            productElement.dataset.name,

                        price:
                            productElement.dataset.price,

                        image:
                            productElement.dataset.image || ""

                    };


                    if (
                        !product.id ||
                        !product.name ||
                        product.price === undefined ||
                        product.price === ""
                    ) {

                        console.error(
                            "بيانات المنتج ناقصة:",
                            product
                        );

                        return;

                    }


                    if (
                        !Number.isFinite(
                            Number(product.price)
                        )
                    ) {

                        console.error(
                            "سعر المنتج غير صالح:",
                            product
                        );

                        return;

                    }


                    addToCart(
                        product
                    );


                    animateButton(
                        button
                    );

                }
            );

        }
    );


    /* =========================
       CATEGORY ANALYTICS
    ========================== */

    const categoryLinks =
        document.querySelectorAll(
            ".categories .category"
        );


    categoryLinks.forEach(
        function (categoryLink) {

            categoryLink.addEventListener(
                "click",
                function () {

                    const categoryName =
                        categoryLink
                            .querySelector("span:last-child");

                    const categoryText =
                        categoryName
                            ? categoryName.textContent.trim()
                            : categoryLink.textContent.trim();


                    const categoryId =
                        (
                            categoryLink.getAttribute("href") ||
                            ""
                        ).replace("#", "");


                    trackEvent(
                        "category_click",
                        {
                            category_name:
                                categoryText,

                            category_id:
                                categoryId
                        }
                    );

                }
            );

        }
    );


    /* =========================
       ADD BUTTON ANIMATION
    ========================== */

    function animateButton(button) {

        if (!button) {

            return;

        }


        const originalText =
            button.innerHTML;


        button.disabled = true;


        button.classList.add(
            "added"
        );


        button.innerHTML =
            "✓ تمت الإضافة";


        setTimeout(
            function () {

                button.innerHTML =
                    originalText;


                button.classList.remove(
                    "added"
                );


                button.disabled =
                    false;

            },
            1200
        );

    }


    /* =========================
       CART ADD ANIMATION
    ========================== */

    function showAddAnimation() {

        if (!floatingCart) {

            return;

        }


        floatingCart.classList.remove(
            "cart-bounce"
        );


        void floatingCart.offsetWidth;


        floatingCart.classList.add(
            "cart-bounce"
        );


        setTimeout(
            function () {

                floatingCart.classList.remove(
                    "cart-bounce"
                );

            },
            500
        );

    }


    /* =========================
       OPEN CART
    ========================== */

    if (floatingCart) {

        floatingCart.addEventListener(
            "click",
            function () {

                if (!cartOverlay) {

                    return;

                }


                renderCart();


                /*
                 * Analytics:
                 * فتح السلة
                 */

                trackEvent(
                    "view_cart",
                    {
                        currency: "SYP",

                        value:
                            getCartTotal(),

                        items:
                            getAnalyticsItems()
                    }
                );


                cartOverlay.classList.add(
                    "show"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }


    /* =========================
       CLOSE CART
    ========================== */

    if (closeCart) {

        closeCart.addEventListener(
            "click",
            closeCartPanel
        );

    }


    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    cartOverlay
                ) {

                    closeCartPanel();

                }

            }
        );

    }


    function closeCartPanel() {

        if (cartOverlay) {

            cartOverlay.classList.remove(
                "show"
            );

        }


        document.body.style.overflow =
            "";

    }


    /* =========================
       ESC KEY - CLOSE CART
    ========================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                cartOverlay &&
                cartOverlay.classList.contains(
                    "show"
                )
            ) {

                closeCartPanel();

            }

        }
    );


    /* =========================
       GET CUSTOMER DATA
    ========================== */

    function getCustomerData() {

        const customerNameElement =
            document.getElementById(
                "customerName"
            );


        const customerPhoneElement =
            document.getElementById(
                "customerPhone"
            );


        const customerAddressElement =
            document.getElementById(
                "customerAddress"
            );


        const customerNotesElement =
            document.getElementById(
                "customerNotes"
            );


        return {

            name:
                customerNameElement
                    ? customerNameElement.value.trim()
                    : "",

            phone:
                customerPhoneElement
                    ? customerPhoneElement.value.trim()
                    : "",

            address:
                customerAddressElement
                    ? customerAddressElement.value.trim()
                    : "",

            notes:
                customerNotesElement
                    ? customerNotesElement.value.trim()
                    : "",

            nameElement:
                customerNameElement,

            phoneElement:
                customerPhoneElement,

            addressElement:
                customerAddressElement,

            notesElement:
                customerNotesElement

        };

    }


    /* =========================
       VALIDATE CUSTOMER DATA
    ========================== */

    function validateCustomerData(customer) {

        if (!customer.name) {

            alert(
                "يرجى إدخال الاسم"
            );


            if (customer.nameElement) {

                customer.nameElement.focus();

            }


            return false;

        }


        if (!customer.phone) {

            alert(
                "يرجى إدخال رقم الهاتف"
            );


            if (customer.phoneElement) {

                customer.phoneElement.focus();

            }


            return false;

        }


        if (!customer.address) {

            alert(
                "يرجى إدخال عنوان التوصيل"
            );


            if (customer.addressElement) {

                customer.addressElement.focus();

            }


            return false;

        }


        return true;

    }


    /* =========================
       DELIVERY LOCATION & FEE
       تحديد موقع العميل وحساب مسافة الطريق
    ========================== */

    function injectDeliveryUI() {

        const customerAddress =
            document.getElementById("customerAddress");

        if (
            customerAddress &&
            !document.getElementById("detectCustomerLocation")
        ) {

            deliveryLocationButton =
                document.createElement("button");

            deliveryLocationButton.id =
                "detectCustomerLocation";

            deliveryLocationButton.type =
                "button";

            deliveryLocationButton.textContent =
                "📍 تحديد موقعي وحساب التوصيل";

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


            deliveryStatusElement =
                document.createElement("p");

            deliveryStatusElement.id =
                "deliveryLocationStatus";

            deliveryStatusElement.setAttribute(
                "role",
                "status"
            );

            deliveryStatusElement.setAttribute(
                "aria-live",
                "polite"
            );

            deliveryStatusElement.style.cssText = [
                "margin:8px 0 0",
                "font:inherit",
                "font-size:13px",
                "line-height:1.7",
                "color:#555"
            ].join(";");


            customerAddress.insertAdjacentElement(
                "afterend",
                deliveryLocationButton
            );

            deliveryLocationButton.insertAdjacentElement(
                "afterend",
                deliveryStatusElement
            );

            deliveryLocationButton.addEventListener(
                "click",
                detectCustomerLocation
            );

        }


        if (!document.getElementById("deliverySummary")) {

            deliverySummaryElement =
                document.createElement("div");

            deliverySummaryElement.id =
                "deliverySummary";

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


            if (cartTotal && cartTotal.parentElement) {

                cartTotal.parentElement.insertAdjacentElement(
                    "afterend",
                    deliverySummaryElement
                );

            } else if (
                whatsappOrder &&
                whatsappOrder.parentElement
            ) {

                whatsappOrder.parentElement.insertBefore(
                    deliverySummaryElement,
                    whatsappOrder
                );

            }

        } else {

            deliverySummaryElement =
                document.getElementById("deliverySummary");

        }

        updateDeliverySummary();

    }


    function setDeliveryStatus(message, isError = false) {

        if (!deliveryStatusElement) {

            deliveryStatusElement =
                document.getElementById(
                    "deliveryLocationStatus"
                );

        }

        if (deliveryStatusElement) {

            deliveryStatusElement.textContent =
                message;

            deliveryStatusElement.style.color =
                isError ? "#b42318" : "#555";

        }

    }


    function updateDeliverySummary() {

        if (!deliverySummaryElement) {

            deliverySummaryElement =
                document.getElementById("deliverySummary");

        }

        if (!deliverySummaryElement) {

            return;

        }

        const productsTotal =
            getCartTotal();


        if (deliveryFee === null) {

            deliverySummaryElement.innerHTML =
                `<div>🛒 قيمة المنتجات: <strong>${formatPrice(productsTotal)}</strong></div>` +
                `<div>🚚 أجرة التوصيل: <strong>تُحسب بعد تحديد الموقع</strong></div>` +
                `<div style="border-top:1px solid #ead8ce;margin-top:6px;padding-top:6px">` +
                `💰 الإجمالي بعد التوصيل: <strong>${formatPrice(productsTotal)} + أجرة التوصيل</strong></div>`;

            return;

        }


        deliverySummaryElement.innerHTML =
            `<div>🛒 قيمة المنتجات: <strong>${formatPrice(productsTotal)}</strong></div>` +
            `<div>📏 مسافة الطريق: <strong>${deliveryDistanceKm.toFixed(2)} كم</strong></div>` +
            `<div>🧮 المسافة المعتمدة للحساب: <strong>${deliveryChargedKm} كم</strong></div>` +
            `<div>🚚 أجرة التوصيل: <strong>${formatPrice(deliveryFee)}</strong></div>` +
            `<div style="border-top:1px solid #ead8ce;margin-top:6px;padding-top:6px">` +
            `💰 الإجمالي النهائي: <strong>${formatPrice(productsTotal + deliveryFee)}</strong></div>`;

    }


    async function detectCustomerLocation() {

        if (isCalculatingDelivery) {

            return;

        }


        if (!navigator.geolocation) {

            setDeliveryStatus(
                "المتصفح لا يدعم تحديد الموقع. يرجى استخدام متصفح حديث.",
                true
            );

            return;

        }


        if (deliveryLocationButton) {

            deliveryLocationButton.disabled =
                true;

            deliveryLocationButton.textContent =
                "⏳ جارٍ تحديد الموقع...";

        }


        setDeliveryStatus(
            "يرجى السماح بالوصول إلى موقعك عند ظهور رسالة المتصفح."
        );


        navigator.geolocation.getCurrentPosition(

            async function (position) {

                customerLocation = {

                    latitude:
                        position.coords.latitude,

                    longitude:
                        position.coords.longitude,

                    mapUrl:
                        `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`

                };


                await calculateDeliveryRoute();


                if (deliveryLocationButton) {

                    deliveryLocationButton.disabled =
                        false;

                    deliveryLocationButton.textContent =
                        "📍 إعادة تحديد موقعي وحساب التوصيل";

                }

            },


            function (error) {

                let message =
                    "تعذر تحديد موقعك.";


                if (
                    error.code ===
                    error.PERMISSION_DENIED
                ) {

                    message =
                        "لم تسمح بالوصول إلى الموقع. فعّل إذن الموقع من إعدادات المتصفح ثم أعد المحاولة.";

                } else if (
                    error.code ===
                    error.POSITION_UNAVAILABLE
                ) {

                    message =
                        "موقعك غير متاح حالياً. تحقق من تشغيل خدمة الموقع وحاول مجدداً.";

                } else if (
                    error.code ===
                    error.TIMEOUT
                ) {

                    message =
                        "استغرق تحديد الموقع وقتاً طويلاً. حاول مجدداً.";

                }


                customerLocation = null;
                deliveryDistanceKm = null;
                deliveryChargedKm = null;
                deliveryFee = null;


                setDeliveryStatus(
                    message,
                    true
                );

                updateDeliverySummary();


                if (deliveryLocationButton) {

                    deliveryLocationButton.disabled =
                        false;

                    deliveryLocationButton.textContent =
                        "📍 إعادة محاولة تحديد الموقع";

                }

            },


            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            }

        );

    }


    async function calculateDeliveryRoute() {

        if (!customerLocation) {

            return false;

        }


        isCalculatingDelivery =
            true;

        setDeliveryStatus(
            "تم تحديد موقعك. جارٍ حساب مسافة الطريق وأجرة التوصيل..."
        );


        try {

            const origin =
                `${RESTAURANT_LOCATION.longitude},${RESTAURANT_LOCATION.latitude}`;

            const destination =
                `${customerLocation.longitude},${customerLocation.latitude}`;

            const routeURL =
                `https://router.project-osrm.org/route/v1/driving/${origin};${destination}?overview=false&alternatives=false&steps=false`;


            const response =
                await fetch(
                    routeURL,
                    {
                        method: "GET",
                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "تعذر الاتصال بخدمة حساب المسافة."
                );

            }


            const data =
                await response.json();


            if (
                data.code !== "Ok" ||
                !data.routes ||
                !data.routes.length
            ) {

                throw new Error(
                    "لم يتم العثور على مسار طريق بين موقعك والمطعم."
                );

            }


            const distanceMeters =
                Number(data.routes[0].distance);


            if (
                !Number.isFinite(distanceMeters) ||
                distanceMeters < 0
            ) {

                throw new Error(
                    "أعادت خدمة الطرق مسافة غير صالحة."
                );

            }


            deliveryDistanceKm =
                distanceMeters / 1000;

            deliveryChargedKm =
                Math.ceil(deliveryDistanceKm);

            deliveryFee =
                deliveryChargedKm * DELIVERY_PRICE_PER_KM;


            setDeliveryStatus(
                `تم حساب التوصيل بنجاح: ${deliveryDistanceKm.toFixed(2)} كم، وأجرة التوصيل ${formatPrice(deliveryFee)}.`
            );


            updateDeliverySummary();
            updateCartCounter();


            trackEvent(
                "delivery_route_calculated",
                {
                    distance_km:
                        Number(deliveryDistanceKm.toFixed(2)),

                    charged_km:
                        deliveryChargedKm,

                    delivery_fee:
                        deliveryFee,

                    currency:
                        "SYP"
                }
            );


            return true;

        } catch (error) {

            console.error(
                "Delivery route calculation error:",
                error
            );


            deliveryDistanceKm = null;
            deliveryChargedKm = null;
            deliveryFee = null;


            setDeliveryStatus(
                "تعذر حساب مسافة الطريق حالياً. تحقق من اتصال الإنترنت وحاول مجدداً. لن يتم إرسال الطلب دون حساب أجرة التوصيل.",
                true
            );


            updateDeliverySummary();
            updateCartCounter();


            return false;

        } finally {

            isCalculatingDelivery =
                false;

        }

    }


    /* =========================
       BUILD WHATSAPP MESSAGE
    ========================== */

    function buildWhatsAppMessage(customer) {

        let message =
            "🍔 *طلب جديد - مولانا برغر*\n\n";


        message +=
            "━━━━━━━━━━━━━━\n\n";


        message +=
            "👤 *العميل:*\n" +
            customer.name +
            "\n\n";


        message +=
            "📱 *الهاتف:*\n" +
            customer.phone +
            "\n\n";


        message +=
            "📍 *العنوان:*\n" +
            customer.address +
            "\n\n";


        if (
            customerLocation &&
            customerLocation.mapUrl
        ) {

            message +=
                "🗺️ *موقع العميل على الخريطة:*\n" +
                customerLocation.mapUrl +
                "\n\n";

        }


        message +=
            "━━━━━━━━━━━━━━\n\n";


        message +=
            "🛒 *تفاصيل الطلب:*\n\n";


        cart.forEach(
            function (item, index) {

                const price =
                    safeNumber(
                        item.price,
                        0
                    );


                const quantity =
                    safeNumber(
                        item.quantity,
                        1
                    );


                const itemTotal =
                    price * quantity;


                message +=
                    `${index + 1}️⃣ *${item.name}*\n`;


                message +=
                    `الكمية: ${quantity}\n`;


                message +=
                    `سعر القطعة: ${formatPrice(price)}\n`;


                message +=
                    `الإجمالي: ${formatPrice(itemTotal)}\n\n`;

            }
        );


        message +=
            "━━━━━━━━━━━━━━\n\n";


        message +=
            "🛒 *قيمة المنتجات:*\n" +
            formatPrice(getCartTotal()) +
            "\n\n";


        message +=
            "📏 *مسافة الطريق:*\n" +
            deliveryDistanceKm.toFixed(2) +
            " كم\n";


        message +=
            "🧮 *المسافة المعتمدة للحساب:*\n" +
            deliveryChargedKm +
            " كم\n";


        message +=
            "🚚 *أجرة التوصيل:*\n" +
            formatPrice(deliveryFee) +
            "\n\n";


        message +=
            "💰 *الإجمالي النهائي مع التوصيل:*\n" +
            formatPrice(
                getCartTotal() + deliveryFee
            ) +
            "\n\n";


        if (customer.notes) {

            message +=
                "📝 *ملاحظات:*\n" +
                customer.notes +
                "\n\n";

        }


        message +=
            "━━━━━━━━━━━━━━\n\n";


        message +=
            "🍔 شكراً لاختياركم مولانا برغر 🤍";


        return message;

    }


    /* =========================
       SEND ORDER TO WHATSAPP
    ========================== */

    if (whatsappOrder) {

        whatsappOrder.addEventListener(
            "click",
            sendToWhatsApp
        );

    }


    function sendToWhatsApp() {

        /*
         * التأكد من وجود طلب
         */

        if (cart.length === 0) {

            trackEvent(
                "empty_order_attempt"
            );


            alert(
                "سلة الطلب فارغة 🛒\n\nأضف المنتجات أولاً."
            );

            return;

        }


        /*
         * الحصول على بيانات الزبون
         */

        const customer =
            getCustomerData();


        /*
         * التحقق من بيانات الزبون
         */

        if (
            !validateCustomerData(
                customer
            )
        ) {

            return;

        }


        /*
         * التأكد من تحديد الموقع وحساب أجرة التوصيل
         */

        if (
            !customerLocation ||
            deliveryFee === null ||
            deliveryDistanceKm === null
        ) {

            alert(
                "يرجى تحديد موقعك أولاً عبر زر «تحديد موقعي وحساب التوصيل» وحساب أجرة التوصيل قبل إرسال الطلب."
            );


            const locationButton =
                document.getElementById(
                    "detectCustomerLocation"
                );


            if (locationButton) {

                locationButton.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                locationButton.focus();

            }

            return;

        }


        if (isCalculatingDelivery) {

            alert(
                "جارٍ حساب أجرة التوصيل، يرجى الانتظار قليلاً ثم المحاولة مجدداً."
            );

            return;

        }


        const finalTotal =
            getCartTotal() + deliveryFee;


        trackEvent(
            "begin_checkout",
            {
                currency: "SYP",

                value:
                    finalTotal,

                items:
                    getAnalyticsItems()
            }
        );


        const analyticsItems =
            getAnalyticsItems();

        const analyticsItemCount =
            getCartCount();

        const analyticsTotal =
            finalTotal;


        const message =
            buildWhatsAppMessage(
                customer
            );


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        const whatsappWindow =
            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


        if (whatsappWindow) {

            trackEvent(
                "whatsapp_order",
                {
                    currency: "SYP",

                    value:
                        analyticsTotal,

                    items_count:
                        analyticsItemCount,

                    items:
                        analyticsItems,

                    order_channel:
                        "whatsapp",

                    delivery_fee:
                        deliveryFee,

                    delivery_distance_km:
                        Number(deliveryDistanceKm.toFixed(2))
                }
            );


            /*
             * تفريغ السلة بعد فتح واتساب
             */

            cart = [];


            renderCart();


            clearCustomerForm();


            closeCartPanel();


            setTimeout(
                function () {

                    alert(
                        "تم تجهيز طلبك بنجاح ✅\n\nتم فتح واتساب لإرسال الطلب.\n\nيمكنك التواصل معنا عبر واتساب إذا أردت إجراء أي تعديل."
                    );

                },
                250
            );

        } else {

            trackEvent(
                "whatsapp_open_failed",
                {
                    currency: "SYP",

                    value:
                        analyticsTotal,

                    items_count:
                        analyticsItemCount
                }
            );


            alert(
                "تعذر فتح واتساب تلقائيًا.\n\nيرجى السماح بالنوافذ المنبثقة لهذا الموقع ثم المحاولة مرة أخرى."
            );

        }

    }


    /* =========================
       CLEAR CUSTOMER FORM
    ========================== */

    function clearCustomerForm() {

        const customerName =
            document.getElementById(
                "customerName"
            );


        const customerPhone =
            document.getElementById(
                "customerPhone"
            );


        const customerAddress =
            document.getElementById(
                "customerAddress"
            );


        const customerNotes =
            document.getElementById(
                "customerNotes"
            );


        if (customerName) {

            customerName.value = "";

        }


        if (customerPhone) {

            customerPhone.value = "";

        }


        if (customerAddress) {

            customerAddress.value = "";

        }


        if (customerNotes) {

            customerNotes.value = "";

        }


        customerLocation = null;
        deliveryDistanceKm = null;
        deliveryChargedKm = null;
        deliveryFee = null;


        setDeliveryStatus(
            "حدد موقعك لحساب أجرة التوصيل."
        );


        updateDeliverySummary();
        updateCartCounter();


        if (deliveryLocationButton) {

            deliveryLocationButton.disabled =
                false;

            deliveryLocationButton.textContent =
                "📍 تحديد موقعي وحساب التوصيل";

        }

    }


    /* =========================
       EDIT ORDER VIA WHATSAPP
    ========================== */

    const editOrderWhatsApp =
        document.getElementById(
            "editOrderWhatsApp"
        );


    if (editOrderWhatsApp) {

        editOrderWhatsApp.addEventListener(
            "click",
            function () {

                /*
                 * Analytics:
                 * طلب تعديل عبر WhatsApp
                 */

                trackEvent(
                    "edit_order_whatsapp",
                    {
                        order_channel:
                            "whatsapp"
                    }
                );


                const message =
                    "مرحباً مولانا برغر 👋\n\n" +
                    "أرغب بتعديل طلبي الذي أرسلته مسبقاً عبر واتساب.\n\n" +
                    "يرجى مساعدتي في تعديل الطلب.\n\n" +
                    "شكراً لكم 🤍";


                const whatsappURL =
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    /* =========================
       INITIAL LOAD
    ========================== */

    cart = [];


    injectDeliveryUI();


    renderCart();


    updateCartCounter();


    updateDeliverySummary();

});