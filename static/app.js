/**
 * TUMBA Furniture Store - Frontend Application (app.js)
 * Реализация бизнес-логики:
 * Итерация 1 (Фаза 5): Каталог (S-01), Карточка (S-02), Фильтрация (S-03), Футер с 152-ФЗ (S-04), Бейджи (CR-01).
 * Итерация 2 (Фаза 6): Авторизация (S-05), Отдельный чек-бокс 152-ФЗ (S-06), ЛК (S-07), Корзина (S-08), Заказ с заглушкой (S-09), Вариации (S-10), Маска телефона (CR-03).
 */

(function () {
  'use strict';

  // --- Embedded fallback products data (works even if offline or via file://) ---
  const FALLBACK_PRODUCTS = [
    {
      id: 1,
      sku: "TUM-SOF-01",
      title: "Диван прямой «Осло»",
      category: "Диваны",
      price: 48900,
      oldPrice: 54000,
      stock: "В наличии",
      dimensions: "220 × 95 × 85 см",
      rating: 4.9,
      reviewsCount: 24,
      description: "Стильный скандинавский трехместный диван с независимым пружинным блоком Pocket Spring и каркасом из массива сосны. Идеален для ежедневного сна и уютных вечеров.",
      specs: {
        "Механизм трансформации": "Пантограф (Тик-так)",
        "Спальное место": "145 × 195 см",
        "Наполнитель": "Независимый пружинный блок + ППУ HR",
        "Каркас": "Массив сосны, березовая фанера",
        "Бельевой ящик": "Есть, ламинированный"
      },
      variations: [
        {
          name: "Серый графит (велюр)",
          colorHex: "#4A4D52",
          image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
          price: 48900
        },
        {
          name: "Изумрудный бархат",
          colorHex: "#1F4E42",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
          price: 51900
        },
        {
          name: "Бежевый шенилл",
          colorHex: "#D8CAB8",
          image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1000&q=80",
          price: 49900
        }
      ],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      sku: "TUM-SOF-02",
      title: "Диван угловой «Честер»",
      category: "Диваны",
      price: 74500,
      oldPrice: 82000,
      stock: "В наличии",
      dimensions: "280 × 175 × 90 см",
      rating: 4.8,
      reviewsCount: 18,
      description: "Просторный угловой диван с глубокой посадкой и мягкими приспинными подушками. Универсальный угол (собирается на любую сторону).",
      specs: {
        "Механизм трансформации": "Дельфин",
        "Спальное место": "155 × 225 см",
        "Наполнитель": "Высокоэластичный ППУ + синтепух",
        "Каркас": "Брус хвойных пород, металлокаркас",
        "Бельевой ящик": "Вместительная оттоманка с газлифтом"
      },
      variations: [
        {
          name: "Темно-серый меланж",
          colorHex: "#3A3D40",
          image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80",
          price: 74500
        },
        {
          name: "Оливковый велюр",
          colorHex: "#556B2F",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
          price: 76900
        }
      ],
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      sku: "TUM-TBL-01",
      title: "Обеденный стол «Лофт»",
      category: "Столы",
      price: 26900,
      oldPrice: 31000,
      stock: "В наличии",
      dimensions: "160 × 90 × 75 см",
      rating: 5.0,
      reviewsCount: 31,
      description: "Массивный обеденный стол с фактурной столешницей из массива дуба и прочным металлическим подстольем с порошковым матовым покрытием.",
      specs: {
        "Материал столешницы": "Массив дуба, покрытие матовым маслом Rubio",
        "Толщина столешницы": "40 мм",
        "Подстолье": "Стальной профиль 60×40 мм",
        "Вместимость": "до 8 персон"
      },
      variations: [
        {
          name: "Дуб натуральный",
          colorHex: "#C19A6B",
          image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80",
          price: 26900
        },
        {
          name: "Темный орех",
          colorHex: "#4A2F1B",
          image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
          price: 28500
        }
      ],
      image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      sku: "TUM-TBL-02",
      title: "Письменный стол «Сканди Модерн»",
      category: "Столы",
      price: 19400,
      oldPrice: null,
      stock: "В наличии",
      dimensions: "120 × 60 × 76 см",
      rating: 4.7,
      reviewsCount: 15,
      description: "Эргономичный рабочий стол для домашнего кабинета. Оборудован двумя бесшумными выдвижными ящиками с доводчиками и скрытым органайзером для проводов.",
      specs: {
        "Материал": "МДФ эмаль + массив ясеня",
        "Ящики": "2 шт. со скрытыми направляющими Hettich",
        "Нагрузка": "до 80 кг"
      },
      variations: [
        {
          name: "Белый матовый + Ясень",
          colorHex: "#F5F5F5",
          image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
          price: 19400
        }
      ],
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      sku: "TUM-WDR-01",
      title: "Шкаф трехдверный «Нордик»",
      category: "Шкафы",
      price: 52000,
      oldPrice: 59000,
      stock: "Под заказ (5 дней)",
      dimensions: "150 × 60 × 220 см",
      rating: 4.9,
      reviewsCount: 12,
      description: "Вместительный гардеробный шкаф с продуманным наполнением: штанга для длинной одежды, антресольные полки и блок из 4 выдвижных ящиков.",
      specs: {
        "Корпус": "ЛДСП Egger 16 мм (класс эмиссии E0.5)",
        "Фасады": "Фрезерованный МДФ в матовой плёнке Soft-Touch",
        "Петли": "Sensys с встроенными демпферами плавного закрытия"
      },
      variations: [
        {
          name: "Светлый дуб + Белый",
          colorHex: "#E8D8C8",
          image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
          price: 52000
        },
        {
          name: "Графит софт-тач",
          colorHex: "#383B3E",
          image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
          price: 54500
        }
      ],
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      sku: "TUM-CHR-01",
      title: "Кресло для отдыха «Хюгге»",
      category: "Кресла",
      price: 21500,
      oldPrice: 25000,
      stock: "В наличии",
      dimensions: "85 × 80 × 95 см",
      rating: 4.9,
      reviewsCount: 42,
      description: "Анатомическое кресло с «ушами» (wingback chair), создающее атмосферу уединения и комфорта. Идеально для чтения книг у камина.",
      specs: {
        "Каркас": "Березовая фанера высшего сорта",
        "Опоры": "Массив бука под прозрачным лаком",
        "Ткань": "Износостойкий антивандальный велюр (50 000 циклов Martindale)"
      },
      variations: [
        {
          name: "Терракота",
          colorHex: "#C85A32",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
          price: 21500
        },
        {
          name: "Океанический синий",
          colorHex: "#1F3A52",
          image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
          price: 22500
        }
      ],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      sku: "TUM-CHR-02",
      title: "Стул обеденный «Эймс Вуд» (комплект 2 шт.)",
      category: "Стулья",
      price: 11900,
      oldPrice: 14000,
      stock: "В наличии",
      dimensions: "46 × 53 × 82 см",
      rating: 4.8,
      reviewsCount: 56,
      description: "Легендарный эргономичный дизайн. Монолитная раковина из первичного полипропилена на ножках из массива бука со стальными перемычками.",
      specs: {
        "Количество в комплекте": "2 шт.",
        "Материал сиденья": "Ударопрочный матовый эко-полипропилен",
        "Опоры": "Натуральный бук, порошковое покрытие металла",
        "Максимальная нагрузка": "130 кг"
      },
      variations: [
        {
          name: "Белый",
          colorHex: "#FAFAFA",
          image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80",
          price: 11900
        },
        {
          name: "Черный уголь",
          colorHex: "#222222",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
          price: 11900
        }
      ],
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      sku: "TUM-TMB-01",
      title: "Тумба под ТВ «Линейка»",
      category: "Тумбы",
      price: 18700,
      oldPrice: 22000,
      stock: "В наличии",
      dimensions: "180 × 40 × 50 см",
      rating: 4.9,
      reviewsCount: 19,
      description: "Длинная низкая тумба под телевизор диагональю до 75 дюймов. Реечные фасады пропускают сигнал ИК-пульта внутрь отделений.",
      specs: {
        "Материал": "Шпонированный МДФ (дуб) + металл",
        "Фасады": "Реечные жалюзийные створки",
        "Кабель-менеджмент": "3 отверстия с заглушками"
      },
      variations: [
        {
          name: "Дуб крафт + черный металл",
          colorHex: "#9E7B54",
          image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80",
          price: 18700
        }
      ],
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      sku: "TUM-TMB-02",
      title: "Прикроватная тумба «Мини»",
      category: "Тумбы",
      price: 7800,
      oldPrice: null,
      stock: "В наличии",
      dimensions: "45 × 40 × 48 см",
      rating: 4.7,
      reviewsCount: 27,
      description: "Компактная прикроватная тумба с открытой нишей для книг и закрытым ящиком для личных вещей. Мягкие скругленные углы безопасны для спальни.",
      specs: {
        "Материал": "Массив березы, матовая эмаль",
        "Ящик": "Направляющие с доводчиком Push-to-Open",
        "Высота ножек": "18 см (проезжает робот-пылесос)"
      },
      variations: [
        {
          name: "Белый матовый",
          colorHex: "#F9F9F9",
          image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=1000&q=80",
          price: 7800
        }
      ],
      image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 10,
      sku: "TUM-BED-01",
      title: "Кровать двуспальная «Сканди Сон»",
      category: "Кровати",
      price: 38900,
      oldPrice: 45000,
      stock: "В наличии",
      dimensions: "160 × 200 см (габарит 174 × 212 × 105 см)",
      rating: 5.0,
      reviewsCount: 38,
      description: "Кровать с мягким объемным изголовьем в скандинавском стиле. В комплекте ортопедическое основание с гибкими березовыми ламелями.",
      specs: {
        "Спальное место": "160 × 200 см",
        "Изголовье": "Мягкое, съемный чехол на липучках",
        "Основание": "Металлокаркас с ламелями из березы",
        "Материал обивки": "Фактурная рогожка с водоотталкивающей пропиткой"
      },
      variations: [
        {
          name: "Светло-серый",
          colorHex: "#D3D5D7",
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
          price: 38900
        }
      ],
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // --- State ---
  const state = {
    products: [],
    categories: ["Все", "Диваны", "Столы", "Шкафы", "Кресла", "Стулья", "Тумбы", "Кровати"],
    selectedCategory: "Все",
    searchQuery: "",
    sortBy: "default",
    cart: JSON.parse(localStorage.getItem('tumba_cart') || '[]'),
    currentUser: JSON.parse(localStorage.getItem('tumba_user') || 'null'),
    token: localStorage.getItem('tumba_token') || null,
    currentModalProduct: null,
    selectedVariation: null,
    modalQuantity: 1
  };

  // --- Formatters ---
  function formatMoney(amount) {
    return new Intl.NumberFormat('ru-RU').format(Math.round(amount)) + ' ₽';
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✓' : (type === 'error' ? '⚠️' : 'ℹ️');
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // --- API & Data Loader ---
  async function loadProducts() {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        state.products = data.items || FALLBACK_PRODUCTS;
      } else {
        state.products = FALLBACK_PRODUCTS;
      }
    } catch (e) {
      // Fallback for file:// or direct browser open
      state.products = FALLBACK_PRODUCTS;
    }
    renderCategories();
    renderProducts();
    updateCartUI();
    updateUserUI();
  }

  // --- Filter and Sort ---
  function getFilteredProducts() {
    let list = [...state.products];

    if (state.selectedCategory && state.selectedCategory !== 'Все') {
      list = list.filter(p => p.category === state.selectedCategory);
    }

    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
      );
    }

    if (state.sortBy === 'price_asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price_desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }

  // --- Render Categories (S-03) ---
  function renderCategories() {
    const container = document.getElementById('categories-nav');
    container.innerHTML = state.categories.map(cat => `
      <button class="category-pill ${state.selectedCategory === cat ? 'active' : ''}" onclick="window.app.filterByCategory('${cat}')">
        ${cat}
      </button>
    `).join('');
  }

  // --- Render Products Grid (S-01, S-02, CR-01, S-10) ---
  function renderProducts() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const activeFiltersBar = document.getElementById('active-filters-bar');
    const activeFiltersChips = document.getElementById('active-filters-chips');

    const filtered = getFilteredProducts();

    // Active filters display
    const hasFilters = state.selectedCategory !== 'Все' || state.searchQuery !== '';
    if (hasFilters) {
      activeFiltersBar.style.display = 'flex';
      let chipsHtml = '';
      if (state.selectedCategory !== 'Все') {
        chipsHtml += `<span class="filter-chip">${state.selectedCategory} <span class="filter-chip-remove" onclick="window.app.filterByCategory('Все')">&times;</span></span>`;
      }
      if (state.searchQuery) {
        chipsHtml += `<span class="filter-chip">Поиск: «${state.searchQuery}» <span class="filter-chip-remove" onclick="window.app.clearSearch()">&times;</span></span>`;
      }
      activeFiltersChips.innerHTML = chipsHtml;
    } else {
      activeFiltersBar.style.display = 'none';
    }

    if (filtered.length === 0) {
      grid.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    grid.innerHTML = filtered.map(product => {
      const stockClass = product.stock.includes('наличии') ? 'badge-stock-in' : 'badge-stock-order';
      const swatchesHtml = product.variations && product.variations.length > 1
        ? `<div class="card-swatches" title="Доступно вариаций: ${product.variations.length}">
            ${product.variations.map(v => `<span class="swatch-dot" style="background-color: ${v.colorHex};" title="${v.name}"></span>`).join('')}
            <small style="font-size: 0.72rem; color: var(--text-muted); margin-left: 4px;">${product.variations.length} цв.</small>
          </div>`
        : '';

      return `
        <div class="product-card" data-id="${product.id}">
          <div class="card-image-wrap" onclick="window.app.openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.title}" class="card-image" loading="lazy">
            <div class="card-badges">
              <span class="badge-stock ${stockClass}">${product.stock}</span>
              ${product.dimensions ? `<span class="badge-dim">📏 ${product.dimensions}</span>` : ''}
            </div>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span>${product.category}</span>
              <span class="card-rating">★ ${product.rating} <small>(${product.reviewsCount})</small></span>
            </div>
            <h3 class="card-title" onclick="window.app.openProductModal(${product.id})">${product.title}</h3>
            <p class="card-desc">${product.description}</p>
            ${swatchesHtml}
            <div class="card-price-row">
              <span class="card-price">${formatMoney(product.price)}</span>
              ${product.oldPrice ? `<span class="card-old-price">${formatMoney(product.oldPrice)}</span>` : ''}
            </div>
            <div class="card-actions">
              <button class="btn btn-outline" onclick="window.app.openProductModal(${product.id})">Подробнее</button>
              <button class="btn btn-primary" onclick="window.app.quickAddToCart(${product.id})">В корзину</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Product Modal & Variations (S-02 & S-10) ---
  function openProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.currentModalProduct = product;
    state.selectedVariation = (product.variations && product.variations.length > 0) ? product.variations[0] : null;
    state.modalQuantity = 1;

    renderProductModal();
    openModal('product-modal-backdrop');
  }

  function renderProductModal() {
    const product = state.currentModalProduct;
    if (!product) return;

    const modalContent = document.getElementById('product-modal-content');
    const currentPrice = state.selectedVariation ? state.selectedVariation.price : product.price;
    const currentImg = state.selectedVariation ? state.selectedVariation.image : product.image;

    const variationsHtml = product.variations && product.variations.length > 1 ? `
      <div class="variation-group">
        <label class="variation-label">
          Вариант обивки / цвета: 
          <strong id="selected-var-name" style="color: var(--primary);">${state.selectedVariation.name}</strong>
        </label>
        <div class="variation-swatches-grid">
          ${product.variations.map((v, idx) => `
            <div class="variation-swatch-item ${state.selectedVariation && state.selectedVariation.name === v.name ? 'active' : ''}" 
                 onclick="window.app.selectVariation(${idx})">
              <span class="swatch-color-pill" style="background-color: ${v.colorHex};"></span>
              <span>${v.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const specsHtml = product.specs ? `
      <table class="specs-table">
        <tbody>
          ${Object.entries(product.specs).map(([key, val]) => `
            <tr>
              <td>${key}</td>
              <td>${val}</td>
            </tr>
          `).join('')}
          ${product.dimensions ? `<tr><td>Габариты изделия</td><td>${product.dimensions}</td></tr>` : ''}
          <tr><td>Артикул производителя</td><td><code>${product.sku}</code></td></tr>
        </tbody>
      </table>
    ` : '';

    modalContent.innerHTML = `
      <div class="modal-gallery-wrap">
        <div class="modal-gallery-main">
          <img id="modal-main-image" src="${currentImg}" alt="${product.title}">
        </div>
      </div>

      <div class="modal-info">
        <div class="card-meta" style="margin-bottom: 8px;">
          <span>Категория: <strong>${product.category}</strong></span>
          <span class="card-rating">★ ${product.rating} (${product.reviewsCount} отзывов)</span>
        </div>
        <h2 class="modal-product-title">${product.title}</h2>
        <div class="modal-meta-row">
          <span class="badge-stock ${product.stock.includes('наличии') ? 'badge-stock-in' : 'badge-stock-order'}">${product.stock}</span>
          ${product.dimensions ? `<span class="badge-dim">📏 ${product.dimensions}</span>` : ''}
        </div>

        <div class="modal-price-row">
          <span class="modal-price" id="modal-price-val">${formatMoney(currentPrice)}</span>
          ${product.oldPrice ? `<span class="card-old-price">${formatMoney(product.oldPrice)}</span>` : ''}
        </div>

        <p class="card-desc" style="-webkit-line-clamp: unset; margin-bottom: 18px;">${product.description}</p>

        <!-- S-10 Variations -->
        ${variationsHtml}

        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 8px;">Характеристики и габариты</h4>
        ${specsHtml}

        <div class="modal-buy-actions">
          <div class="quantity-control">
            <button class="quantity-btn" onclick="window.app.changeModalQty(-1)">−</button>
            <span class="quantity-value" id="modal-qty-val">${state.modalQuantity}</span>
            <button class="quantity-btn" onclick="window.app.changeModalQty(1)">+</button>
          </div>
          <button class="btn btn-primary btn-lg btn-block" onclick="window.app.addCurrentModalToCart()">
            Добавить в корзину • <span id="modal-buy-price">${formatMoney(currentPrice * state.modalQuantity)}</span>
          </button>
        </div>
      </div>
    `;
  }

  function selectVariation(index) {
    if (!state.currentModalProduct || !state.currentModalProduct.variations) return;
    const v = state.currentModalProduct.variations[index];
    if (!v) return;

    state.selectedVariation = v;
    renderProductModal();
  }

  function changeModalQty(delta) {
    const next = state.modalQuantity + delta;
    if (next >= 1 && next <= 99) {
      state.modalQuantity = next;
      const currentPrice = state.selectedVariation ? state.selectedVariation.price : state.currentModalProduct.price;
      const qtyElem = document.getElementById('modal-qty-val');
      const buyPriceElem = document.getElementById('modal-buy-price');
      if (qtyElem) qtyElem.innerText = state.modalQuantity;
      if (buyPriceElem) buyPriceElem.innerText = formatMoney(currentPrice * state.modalQuantity);
    }
  }

  // --- Cart Operations (S-08) ---
  function quickAddToCart(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const variation = (product.variations && product.variations.length > 0) ? product.variations[0] : null;
    addToCart(product, variation, 1);
  }

  function addCurrentModalToCart() {
    if (!state.currentModalProduct) return;
    addToCart(state.currentModalProduct, state.selectedVariation, state.modalQuantity);
    closeModal('product-modal-backdrop');
  }

  function addToCart(product, variation, quantity = 1) {
    const varName = variation ? variation.name : 'Базовый';
    const varPrice = variation ? variation.price : product.price;
    const varImg = variation ? variation.image : product.image;
    const cartId = `${product.id}_${varName}`;

    const existingIndex = state.cart.findIndex(item => item.cartId === cartId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        cartId: cartId,
        productId: product.id,
        title: product.title,
        category: product.category,
        sku: product.sku,
        variationName: varName,
        price: varPrice,
        image: varImg,
        dimensions: product.dimensions,
        quantity: quantity
      });
    }

    saveCart();
    updateCartUI();
    showToast(`«${product.title}» (${varName}) добавлен в корзину`, 'success');
  }

  function updateCartItemQty(cartId, delta) {
    const item = state.cart.find(i => i.cartId === cartId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.cartId !== cartId);
    }

    saveCart();
    updateCartUI();
  }

  function removeCartItem(cartId) {
    state.cart = state.cart.filter(i => i.cartId !== cartId);
    saveCart();
    updateCartUI();
    showToast('Товар удален из корзины');
  }

  function saveCart() {
    localStorage.setItem('tumba_cart', JSON.stringify(state.cart));
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

    const badge = document.getElementById('cart-count');
    const headerTotal = document.getElementById('cart-header-total');
    if (badge) badge.innerText = totalCount;
    if (headerTotal) headerTotal.innerText = formatMoney(subtotal);

    const itemsContainer = document.getElementById('cart-items-container');
    const cartFooter = document.getElementById('cart-footer');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');

    if (!itemsContainer) return;

    if (state.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-state" style="border: none; padding: 40px 10px;">
          <div class="empty-icon">🛋️</div>
          <h4>Ваша корзина пуста</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">Выберите диван, стол или тумбу в нашем каталоге</p>
          <button class="btn btn-primary" onclick="window.app.closeModal('cart-drawer-backdrop'); window.app.scrollToCatalog();">Перейти к покупкам</button>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = 'none';
    } else {
      if (cartFooter) cartFooter.style.display = 'block';
      if (cartSubtotal) cartSubtotal.innerText = formatMoney(subtotal);
      if (cartTotal) cartTotal.innerText = formatMoney(subtotal);

      itemsContainer.innerHTML = `
        <div class="cart-items-list">
          ${state.cart.map(item => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.title}" class="cart-item-img">
              <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-var">${item.variationName}</div>
                <div class="cart-item-price">${formatMoney(item.price)}</div>
                <div class="cart-item-actions">
                  <div class="quantity-control" style="height: 32px;">
                    <button class="quantity-btn" style="height: 30px; width: 28px;" onclick="window.app.updateCartItemQty('${item.cartId}', -1)">−</button>
                    <span class="quantity-value" style="width: 28px; font-size: 0.85rem;">${item.quantity}</span>
                    <button class="quantity-btn" style="height: 30px; width: 28px;" onclick="window.app.updateCartItemQty('${item.cartId}', 1)">+</button>
                  </div>
                  <button class="cart-item-remove" onclick="window.app.removeCartItem('${item.cartId}')">Удалить</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // --- Checkout Operations (S-09 & CR-03) ---
  function openCheckout() {
    if (state.cart.length === 0) {
      showToast('Корзина пуста', 'error');
      return;
    }

    closeModal('cart-drawer-backdrop');

    // Auto-fill user if logged in
    if (state.currentUser) {
      const nameInput = document.getElementById('order-fullname');
      const emailInput = document.getElementById('order-email');
      const phoneInput = document.getElementById('order-phone');
      const addrInput = document.getElementById('order-address');

      if (nameInput) nameInput.value = state.currentUser.fullName || '';
      if (emailInput) emailInput.value = state.currentUser.email || '';
      if (phoneInput) phoneInput.value = state.currentUser.phone || '';
      if (addrInput) addrInput.value = state.currentUser.address || 'г. Москва, ул. Профсоюзная, д. 12';
    }

    renderCheckoutSummary();
    openModal('checkout-modal-backdrop');
  }

  function renderCheckoutSummary() {
    const previewContainer = document.getElementById('checkout-items-preview');
    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const subtotalElem = document.getElementById('checkout-subtotal');
    const totalElem = document.getElementById('checkout-total');

    if (subtotalElem) subtotalElem.innerText = formatMoney(subtotal);
    if (totalElem) totalElem.innerText = formatMoney(subtotal);

    if (previewContainer) {
      previewContainer.innerHTML = state.cart.map(i => `
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px;">
          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 170px;">
            ${i.title} (${i.variationName}) × ${i.quantity}
          </span>
          <span style="font-weight: 600;">${formatMoney(i.price * i.quantity)}</span>
        </div>
      `).join('');
    }
  }

  function updateDeliveryOption(type) {
    const addrGroup = document.getElementById('delivery-address-group');
    if (addrGroup) {
      addrGroup.style.display = type === 'pickup' ? 'none' : 'block';
    }
  }

  async function submitOrder(e) {
    e.preventDefault();

    const fullName = document.getElementById('order-fullname').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const email = document.getElementById('order-email').value.trim();
    const address = document.getElementById('order-address').value.trim();
    const comment = document.getElementById('order-comment').value.trim();
    const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked').value;
    const cardNumber = document.getElementById('card-number').value.trim();

    if (!fullName || !phone || !email) {
      showToast('Заполните контактные данные', 'error');
      return;
    }

    const subtotal = state.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const orderData = {
      items: [...state.cart],
      totalAmount: subtotal,
      customer: {
        userId: state.currentUser ? state.currentUser.id : null,
        fullName: fullName,
        phone: phone,
        email: email
      },
      delivery: {
        method: deliveryMethod === 'courier' ? 'Курьер Tumba' : 'Самовывоз из салона',
        address: address,
        comment: comment
      },
      payment: {
        method: 'Банковская карта (эмуляция MVP)',
        cardMask: cardNumber ? `**** ${cardNumber.slice(-4)}` : '**** 4242'
      }
    };

    const submitBtn = document.getElementById('submit-order-btn');
    submitBtn.disabled = true;
    submitBtn.innerText = 'Обработка оплаты...';

    try {
      let createdOrder = null;
      try {
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData)
        });
        if (res.ok) {
          const resp = await res.json();
          createdOrder = resp.order;
        }
      } catch (err) {
        // Fallback offline creation
      }

      if (!createdOrder) {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        createdOrder = {
          orderNumber: `TUMBA-2026-${randomNum}`,
          createdAt: new Date().toISOString(),
          status: 'Принят в обработку',
          totalAmount: subtotal,
          items: [...state.cart],
          customer: orderData.customer,
          delivery: orderData.delivery
        };
      }

      // Save to local user orders
      saveLocalOrder(createdOrder);

      // Clear cart
      state.cart = [];
      saveCart();
      updateCartUI();

      closeModal('checkout-modal-backdrop');

      // Open Success Modal
      document.getElementById('success-order-number').innerText = `#${createdOrder.orderNumber}`;
      document.getElementById('success-order-details').innerHTML = `
        <p><strong>Получатель:</strong> ${createdOrder.customer.fullName}</p>
        <p><strong>Телефон:</strong> ${createdOrder.customer.phone}</p>
        <p><strong>Способ доставки:</strong> ${createdOrder.delivery.method}</p>
        <p><strong>Сумма заказа:</strong> <strong style="color: var(--primary);">${formatMoney(createdOrder.totalAmount)}</strong></p>
        <p><strong>Статус оплаты:</strong> <span class="badge-fz">Оплачено (тестовый платеж)</span></p>
        <p style="margin-top: 8px; font-size: 0.8rem; color: var(--text-muted);">
          Уведомление и чек отправлены на <code>${createdOrder.customer.email}</code>. Менеджер свяжется с вами для согласования даты доставки.
        </p>
      `;

      openModal('success-modal-backdrop');
      showToast(`Заказ #${createdOrder.orderNumber} оформлен!`, 'success');

    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = 'Подтвердить и оплатить заказ';
    }
  }

  function saveLocalOrder(order) {
    const orders = JSON.parse(localStorage.getItem('tumba_orders') || '[]');
    orders.unshift(order);
    localStorage.setItem('tumba_orders', JSON.stringify(orders));
  }

  // --- Auth & 152-ФЗ Handlers (S-05, S-06, S-07) ---
  function switchAuthTab(tab) {
    const loginBtn = document.getElementById('tab-login-btn');
    const regBtn = document.getElementById('tab-register-btn');
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');

    if (tab === 'login') {
      loginBtn.classList.add('active');
      regBtn.classList.remove('active');
      loginForm.style.display = 'block';
      regForm.style.display = 'none';
    } else {
      loginBtn.classList.remove('active');
      regBtn.classList.add('active');
      loginForm.style.display = 'none';
      regForm.style.display = 'block';
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        state.currentUser = data.user;
        state.token = data.token;
        localStorage.setItem('tumba_user', JSON.stringify(data.user));
        localStorage.setItem('tumba_token', data.token);
        closeModal('auth-modal-backdrop');
        updateUserUI();
        showToast(`Добро пожаловать, ${data.user.fullName}!`, 'success');
      } else {
        showToast(data.error || 'Ошибка авторизации', 'error');
      }
    } catch (err) {
      // Offline fallback for demo user
      if (email === 'demo@tumba.ru' && password === 'password123') {
        const demoUser = {
          id: 'usr_demo',
          fullName: 'Иванов Иван Иванович',
          email: 'demo@tumba.ru',
          phone: '+7 (999) 123-45-67',
          address: 'г. Москва, ул. Ленина, д. 10',
          consent152fz: { granted: true, grantedAt: '2026-11-03 10:00:00', ip: '127.0.0.1', docVersion: '2.0-2026' }
        };
        state.currentUser = demoUser;
        localStorage.setItem('tumba_user', JSON.stringify(demoUser));
        closeModal('auth-modal-backdrop');
        updateUserUI();
        showToast('Вход выполнен (демо-режим)', 'success');
      } else {
        showToast('Пользователь не найден', 'error');
      }
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    const fullName = document.getElementById('reg-name').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const consent = document.getElementById('reg-consent-152fz').checked;

    // CRITICAL 152-ФЗ CHECK
    if (!consent) {
      alert('В соответствии с Федеральным законом РФ № 152-ФЗ регистрация на сайте возможна только при подтверждении согласия на обработку персональных данных!');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone, email, password, consent152fz: true })
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        state.currentUser = data.user;
        state.token = data.token;
        localStorage.setItem('tumba_user', JSON.stringify(data.user));
        localStorage.setItem('tumba_token', data.token);
        closeModal('auth-modal-backdrop');
        updateUserUI();
        showToast('Регистрация успешна! Согласие 152-ФЗ сохранено в аудит-логе.', 'success');
      } else {
        showToast(data.error || 'Ошибка при регистрации', 'error');
      }
    } catch (err) {
      // Offline fallback
      const newUser = {
        id: `usr_${Date.now()}`,
        fullName: fullName,
        phone: phone,
        email: email,
        consent152fz: { granted: true, grantedAt: new Date().toISOString(), ip: '127.0.0.1', docVersion: '2.0-2026' }
      };
      state.currentUser = newUser;
      localStorage.setItem('tumba_user', JSON.stringify(newUser));
      closeModal('auth-modal-backdrop');
      updateUserUI();
      showToast('Регистрация завершена успешно!', 'success');
    }
  }

  function handleLogout() {
    state.currentUser = null;
    state.token = null;
    localStorage.removeItem('tumba_user');
    localStorage.removeItem('tumba_token');
    closeModal('profile-modal-backdrop');
    updateUserUI();
    showToast('Вы вышли из профиля');
  }

  function updateUserUI() {
    const authBtnLabel = document.getElementById('auth-btn-label');
    if (state.currentUser) {
      const firstName = state.currentUser.fullName.split(' ')[0] || 'Кабинет';
      if (authBtnLabel) authBtnLabel.innerText = firstName;
    } else {
      if (authBtnLabel) authBtnLabel.innerText = 'Войти';
    }
  }

  function openProfileOrAuth() {
    if (state.currentUser) {
      // Render profile
      document.getElementById('profile-fullname').innerText = state.currentUser.fullName;
      document.getElementById('profile-email').innerText = state.currentUser.email;
      document.getElementById('profile-phone').innerText = state.currentUser.phone || 'Телефон не указан';

      const initials = state.currentUser.fullName.split(' ').map(n => n[0]).join('').slice(0, 2);
      document.getElementById('profile-avatar').innerText = initials || 'У';

      if (state.currentUser.consent152fz) {
        document.getElementById('profile-consent-date').innerText =
          `Зафиксировано в реестре согласий: ${state.currentUser.consent152fz.grantedAt || '2026-11-03'} (IP: ${state.currentUser.consent152fz.ip || '127.0.0.1'}, версия: 2.0-2026)`;
      }

      renderProfileOrders();
      openModal('profile-modal-backdrop');
    } else {
      openModal('auth-modal-backdrop');
    }
  }

  function renderProfileOrders() {
    const list = document.getElementById('profile-orders-list');
    const localOrders = JSON.parse(localStorage.getItem('tumba_orders') || '[]');

    if (localOrders.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 20px 0; color: var(--text-muted); font-size: 0.85rem;">
          У вас пока нет оформленных заказов
        </div>
      `;
      return;
    }

    list.innerHTML = localOrders.map(o => `
      <div class="order-history-card">
        <div class="order-history-header">
          <span class="order-history-id">#${o.orderNumber}</span>
          <span class="order-history-status">${o.status}</span>
        </div>
        <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 6px;">
          ${new Date(o.createdAt).toLocaleDateString('ru-RU')} • ${o.items ? o.items.length : 1} поз.
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.9rem;">
          <span>Итого:</span>
          <span style="color: var(--primary);">${formatMoney(o.totalAmount)}</span>
        </div>
      </div>
    `).join('');
  }

  function closeSuccessAndOpenProfile() {
    closeModal('success-modal-backdrop');
    openProfileOrAuth();
  }

  // --- Modal Helpers ---
  function openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openPolicyModal(e) {
    if (e) e.preventDefault();
    openModal('policy-modal-backdrop');
  }

  function openConsentModal(e) {
    if (e) e.preventDefault();
    openModal('consent-modal-backdrop');
  }

  // --- Filter Actions ---
  function filterByCategory(category) {
    state.selectedCategory = category;
    renderCategories();
    renderProducts();
    scrollToCatalog();
  }

  function resetFilters() {
    state.selectedCategory = 'Все';
    state.searchQuery = '';
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear-btn');
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';

    renderCategories();
    renderProducts();
  }

  function clearSearch() {
    state.searchQuery = '';
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear-btn');
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    renderProducts();
  }

  function scrollToCatalog() {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // --- Phone Mask Formatter (CR-03) ---
  function initPhoneMask(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.addEventListener('input', function (e) {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      if (!x[2]) {
        e.target.value = x[1] ? `+7 (${x[1]}` : '';
      } else {
        e.target.value = !x[3] ? `+7 (${x[2]}` : `+7 (${x[2]}) ${x[3]}` + (x[4] ? `-${x[4]}` : '') + (x[5] ? `-${x[5]}` : '');
      }
    });
  }

  // --- Initializer & Event Listeners ---
  document.addEventListener('DOMContentLoaded', function () {
    loadProducts();

    // Search events
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear-btn');

    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        state.searchQuery = e.target.value;
        if (searchClear) searchClear.style.display = state.searchQuery ? 'block' : 'none';
        renderProducts();
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', clearSearch);
    }

    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', function (e) {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    // Header buttons
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', function () {
        openModal('cart-drawer-backdrop');
      });
    }

    const authBtn = document.getElementById('auth-btn');
    if (authBtn) {
      authBtn.addEventListener('click', openProfileOrAuth);
    }

    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', resetFilters);
    }

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', function (e) {
        if (e.target === this) {
          closeModal(this.id);
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(el => closeModal(el.id));
      }
    });

    // Phone masks
    initPhoneMask('order-phone');
    initPhoneMask('reg-phone');
  });

  // --- Expose Public API to Window ---
  window.app = {
    filterByCategory,
    resetFilters,
    clearSearch,
    scrollToCatalog,
    openProductModal,
    selectVariation,
    changeModalQty,
    addCurrentModalToCart,
    quickAddToCart,
    updateCartItemQty,
    removeCartItem,
    openCheckout,
    updateDeliveryOption,
    submitOrder,
    closeSuccessAndOpenProfile,
    switchAuthTab,
    handleLogin,
    handleRegister,
    handleLogout,
    openProfileOrAuth,
    openModal,
    closeModal,
    openPolicyModal,
    openConsentModal
  };

})();
