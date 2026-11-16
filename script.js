// Данные каталога мебели для 1-й итерации (10 товаров)
const productsData = [
  {
    id: 1,
    title: "Диван прямой «Осло»",
    category: "Диваны",
    price: 48900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
    description: "Трехместный скандинавский диван с независимым пружинным блоком. Удобен для ежедневного сна.",
    specs: [
      "Габариты: 220 × 95 × 85 см",
      "Спальное место: 145 × 195 см",
      "Механизм: Пантограф (Тик-так)",
      "Каркас: Массив сосны, фанера",
      "Бельевой ящик: Есть"
    ]
  },
  {
    id: 2,
    title: "Диван угловой «Честер»",
    category: "Диваны",
    price: 74500,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
    description: "Вместительный угловой диван с глубокой посадкой и мягкими приспинными подушками.",
    specs: [
      "Габариты: 280 × 175 × 90 см",
      "Спальное место: 155 × 225 см",
      "Механизм: Дельфин",
      "Каркас: Брус хвойных пород"
    ]
  },
  {
    id: 3,
    title: "Обеденный стол «Лофт»",
    category: "Столы",
    price: 26900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=600&q=80",
    description: "Обеденный стол со столешницей из массива дуба и металлическими ножками.",
    specs: [
      "Габариты: 160 × 90 × 75 см",
      "Материал: Массив дуба 40 мм",
      "Подстолье: Стальной профиль",
      "Вместимость: до 8 человек"
    ]
  },
  {
    id: 4,
    title: "Письменный стол «Сканди»",
    category: "Столы",
    price: 19400,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
    description: "Удобный рабочий стол с двумя выдвижными ящиками для документов и ноутбука.",
    specs: [
      "Габариты: 120 × 60 × 76 см",
      "Материал: МДФ + ножки из ясеня",
      "Ящики: 2 шт. с доводчиками"
    ]
  },
  {
    id: 5,
    title: "Шкаф трехдверный «Нордик»",
    category: "Шкафы",
    price: 52000,
    stock: "Под заказ (5 дней)",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
    description: "Вместительный шкаф для одежды со штангой, полками и выдвижными ящиками.",
    specs: [
      "Габариты: 150 × 60 × 220 см",
      "Материал: ЛДСП Egger 16 мм",
      "Петли: С плавным закрыванием"
    ]
  },
  {
    id: 6,
    title: "Кресло мягкое «Хюгге»",
    category: "Кресла",
    price: 21500,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    description: "Уютное кресло с высокой спинкой для отдыха и чтения книг.",
    specs: [
      "Габариты: 85 × 80 × 95 см",
      "Каркас: Фанера, ножки из бука",
      "Обивка: Износостойкий велюр"
    ]
  },
  {
    id: 7,
    title: "Стул обеденный «Эймс» (2 шт.)",
    category: "Стулья",
    price: 11900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
    description: "Комплект из 2 дизайнерских обеденных стульев на деревянных ножках.",
    specs: [
      "Комплект: 2 стула",
      "Габариты: 46 × 53 × 82 см",
      "Материал: Пластик, ножки бук",
      "Нагрузка: до 120 кг"
    ]
  },
  {
    id: 8,
    title: "Тумба под ТВ «Линейка»",
    category: "Тумбы",
    price: 18700,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=600&q=80",
    description: "Низкая тумба под телевизор диагональю до 65 дюймов с реечными фасадами.",
    specs: [
      "Габариты: 180 × 40 × 50 см",
      "Материал: Шпон дуба, металл",
      "Отверстия под кабели: Есть"
    ]
  },
  {
    id: 9,
    title: "Прикроватная тумба «Мини»",
    category: "Тумбы",
    price: 7800,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=600&q=80",
    description: "Компактная тумбочка для спальни с открытой полкой и ящиком.",
    specs: [
      "Габариты: 45 × 40 × 48 см",
      "Материал: Массив березы, эмаль",
      "Ящик: Направляющие с доводчиком"
    ]
  },
  {
    id: 10,
    title: "Кровать двуспальная «Сканди»",
    category: "Кровати",
    price: 38900,
    stock: "В наличии",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    description: "Двуспальная кровать с мягким изголовьем и ортопедическим основанием.",
    specs: [
      "Спальное место: 160 × 200 см",
      "Основание: Металл с ламелями",
      "Обивка: Рогожка"
    ]
  }
];

// Список категорий для фильтрации
const categories = ["Все", "Диваны", "Столы", "Шкафы", "Кресла", "Стулья", "Тумбы", "Кровати"];
let currentCategory = "Все";

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryButtons();
  renderProducts(productsData);
});

// Форматирование цены (например, 48 900 руб.)
function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб.";
}

// Отрисовка кнопок фильтров
function renderCategoryButtons() {
  const container = document.getElementById("filters-container");
  container.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === currentCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
      ${cat}
    </button>
  `).join("");
}

// Фильтрация товаров по категории
function selectCategory(category) {
  currentCategory = category;
  renderCategoryButtons();

  if (category === "Все") {
    renderProducts(productsData);
  } else {
    const filtered = productsData.filter(item => item.category === category);
    renderProducts(filtered);
  }
}

// Отрисовка карточек товаров в каталоге
function renderProducts(items) {
  const container = document.getElementById("products-list");
  
  if (items.length === 0) {
    container.innerHTML = "<p>В данной категории товаров пока нет.</p>";
    return;
  }

  container.innerHTML = items.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.title}" class="product-img">
      </div>
      <div class="product-category">${p.category}</div>
      <div class="product-title">${p.title}</div>
      <div class="product-desc">${p.description}</div>
      <div class="product-stock">${p.stock}</div>
      <div class="product-price">${formatPrice(p.price)}</div>
      <button class="btn-details" onclick="openProductModal(${p.id})">Посмотреть описание</button>
    </div>
  `).join("");
}

// Открытие модального окна товара
function openProductModal(id) {
  const product = productsData.find(p => p.id === id);
  if (!product) return;

  document.getElementById("modal-title").innerText = product.title;
  document.getElementById("modal-image").src = product.image;
  document.getElementById("modal-price").innerText = formatPrice(product.price);
  document.getElementById("modal-category").innerText = "Категория: " + product.category + " | " + product.stock;
  document.getElementById("modal-description").innerText = product.description;

  const specsList = document.getElementById("modal-specs-list");
  specsList.innerHTML = product.specs.map(s => `<li>${s}</li>`).join("");

  document.getElementById("product-modal").style.display = "block";
}

// Закрытие модального окна товара
function closeProductModal() {
  document.getElementById("product-modal").style.display = "none";
}

// Открытие документов 152-ФЗ
function openPolicy(e) {
  if (e) e.preventDefault();
  document.getElementById("legal-title").innerText = "Политика обработки персональных данных (152-ФЗ)";
  document.getElementById("legal-body").innerHTML = `
    <h4>1. Общие положения</h4>
    <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных ООО «Тумба».</p>
    <h4>2. Категории собираемых данных</h4>
    <p>Оператор обрабатывает следующие персональные данные: Фамилия, Имя, Отчество; контактный телефон; адрес электронной почты; адрес доставки товара.</p>
    <h4>3. Цели обработки</h4>
    <p>Сбор данных осуществляется исключительно для обработки заказов, консультирования клиентов и выполнения обязательств по доставке мебели.</p>
    <h4>4. Права субъекта</h4>
    <p>Пользователь имеет право в любой момент отозвать свое согласие, направив письменный запрос на электронную почту администрации магазина.</p>
  `;
  document.getElementById("legal-modal").style.display = "block";
}

function openConsent(e) {
  if (e) e.preventDefault();
  document.getElementById("legal-title").innerText = "Согласие на обработку персональных данных";
  document.getElementById("legal-body").innerHTML = `
    <p>Настоящим пользователь сайта интернет-магазина «Tumba», действуя свободно, своей волей и в своем интересе, дает согласие ООО «Тумба» на автоматизированную и неавтоматизированную обработку своих персональных данных (ФИО, телефон, email, адрес доставки).</p>
    <p>Обработка включает: сбор, запись, систематизацию, хранение, уточнение (обновление), использование, передачу курьерским службам для вручения заказов, удаление.</p>
    <p>Настоящее согласие действует бессрочно до момента его отзыва в установленном законом порядке.</p>
  `;
  document.getElementById("legal-modal").style.display = "block";
}

function closeLegalModal() {
  document.getElementById("legal-modal").style.display = "none";
}

// Закрытие по клику вне модалки
window.onclick = function(event) {
  const prodModal = document.getElementById("product-modal");
  const legalModal = document.getElementById("legal-modal");
  if (event.target === prodModal) {
    closeProductModal();
  }
  if (event.target === legalModal) {
    closeLegalModal();
  }
};
