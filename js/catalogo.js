/* ── CATALOGO.JS ── con imágenes reales + fallback a emoji ── */

/*
  CONVENCIÓN DE IMÁGENES
  ──────────────────────
  Carpeta:  imagenes/catalogo/
  Formato:  .webp  (usa .jpg como alternativa)
  Tamaño:   800×600 px mínimo (proporción 4:3)
  Nombre:   minúsculas, sin espacios ni acentos, con guiones
            Ej: "Cien Años de Soledad" → cien-anos-soledad.webp
*/

const IMG_BASE = 'img/catalogo/'; 

const productos = [
  //  LIBROS  
  {
    id: 1,
    nombre:    'Temporada de Huracanes',
    categoria: 'libro',
    precio:    290,
    desc:      'Fernanda Melchor · Novela',
    imagen:    'temporada-huracanes.webp',
    emoji:     '📗',                        // fallback si la imagen no carga
    color:     '#1a3a2a',                   // fallback color de fondo
  },
  {
    id: 2,
    nombre:    'Cien Años de Soledad',
    categoria: 'libro',
    precio:    320,
    desc:      'Gabriel García Márquez · Clásico',
    imagen:    'cien-anos-soledad.webp',
    emoji:     '📘',
    color:     '#1a2a3a',
  },
  {
    id: 3,
    nombre:    'El Libro de los Abrazos',
    categoria: 'libro',
    precio:    210,
    desc:      'Eduardo Galeano · Cuentos',
    imagen:    'el-libro-de-los-abrazos.webp',
    emoji:     '📙',
    color:     '#3a2a1a',
  },
  {
    id: 4,
    nombre:    'Palinuro de México',
    categoria: 'libro',
    precio:    350,
    desc:      'Fernando del Paso · Novela',
    imagen:    'palinuro-de-mexico.webp',
    emoji:     '📕',
    color:     '#3a1a1a',
  },
  {
    id: 5,
    nombre:    'Los Detectives Salvajes',
    categoria: 'libro',
    precio:    380,
    desc:      'Roberto Bolaño · Novela',
    imagen:    'los-detectives-salvajes.webp',
    emoji:     '📓',
    color:     '#2a1a3a',
  },
  {
    id: 6,
    nombre:    'Balún Canán',
    categoria: 'libro',
    precio:    195,
    desc:      'Rosario Castellanos · Novela',
    imagen:    'balun-canan.webp',
    emoji:     '📔',
    color:     '#1a3a3a',
  },
  {
    id: 7,
    nombre:    'La Casa en Mango Street',
    categoria: 'libro',
    precio:    175,
    desc:      'Sandra Cisneros · Narrativa',
    imagen:    'la-casa-en-mango-street.webp',
    emoji:     '📒',
    color:     '#1a3a1a',
  },
  {
    id: 8,
    nombre:    'Kafka en la Orilla',
    categoria: 'libro',
    precio:    340,
    desc:      'Haruki Murakami · Novela',
    imagen:    'kafka-en-la-orilla.webp',
    emoji:     '📗',
    color:     '#2a3a1a',
  },
  {
    id: 9,
    nombre:    'El Aleph',
    categoria: 'libro',
    precio:    160,
    desc:      'Jorge Luis Borges · Cuentos',
    imagen:    'el-aleph.webp',
    emoji:     '📘',
    color:     '#1a2a1a',
  },
  {
    id: 10,
    nombre:    'Beloved',
    categoria: 'libro',
    precio:    295,
    desc:      'Toni Morrison · Novela',
    imagen:    'beloved.webp',
    emoji:     '📙',
    color:     '#2a1a2a',
  },

  // ── BEBIDAS ─────────────────────────────────────────────────────────────────
  {
    id: 11,
    nombre:    'Espresso Doble',
    categoria: 'bebida',
    precio:    55,
    desc:      'Grano de Veracruz, tostado oscuro',
    imagen:    'espresso-doble.webp',
    emoji:     '☕',
    color:     '#2C1A0E',
  },
  {
    id: 12,
    nombre:    'Capuchino Artesanal',
    categoria: 'bebida',
    precio:    72,
    desc:      'Espresso + leche vaporizada + espuma',
    imagen:    'capuchino-artesanal.webp',
    emoji:     '☕',
    color:     '#5C3D2E',
  },
  {
    id: 13,
    nombre:    'Cold Brew Premium',
    categoria: 'bebida',
    precio:    85,
    desc:      'Infusión 18h en frío, Chiapas',
    imagen:    'cold-brew-premium.webp',
    emoji:     '🧊',
    color:     '#1a2a3a',
  },
  {
    id: 14,
    nombre:    'Matcha Latte',
    categoria: 'bebida',
    precio:    82,
    desc:      'Matcha ceremonial + leche de avena',
    imagen:    'matcha-latte.webp',
    emoji:     '🍵',
    color:     '#1a3a1a',
  },
  {
    id: 15,
    nombre:    'Chai Latte Especiado',
    categoria: 'bebida',
    precio:    78,
    desc:      'Té negro + especias + leche entera',
    imagen:    'chai-latte-especiado.webp',
    emoji:     '🌿',
    color:     '#3a2a1a',
  },
  {
    id: 16,
    nombre:    'Limonada de Frutos Rojos',
    categoria: 'bebida',
    precio:    72,
    desc:      'Limón, frambuesa, menta fresca',
    imagen:    'limonada-frutos-rojos.webp',
    emoji:     '🍓',
    color:     '#3a1a1a',
  },
  {
    id: 17,
    nombre:    'Frappé de Café',
    categoria: 'bebida',
    precio:    92,
    desc:      'Café helado, crema, caramelo',
    imagen:    'frappe-de-cafe.webp',
    emoji:     '🧋',
    color:     '#4a3a2a',
  },

  // ── REPOSTERÍA ───────────────────────────────────────────────────────────────
  {
    id: 18,
    nombre:    'Croissant de Mantequilla',
    categoria: 'reposteria',
    precio:    55,
    desc:      'Horneado cada mañana, crujiente',
    imagen:    'croissant-mantequilla.webp',
    emoji:     '🥐',
    color:     '#C4622D',
  },
  {
    id: 19,
    nombre:    'Cheesecake de Guayaba',
    categoria: 'reposteria',
    precio:    78,
    desc:      'Base de galleta, relleno cremoso',
    imagen:    'cheesecake-guayaba.webp',
    emoji:     '🍰',
    color:     '#D9845A',
  },
  {
    id: 20,
    nombre:    'Muffin de Arándano',
    categoria: 'reposteria',
    precio:    48,
    desc:      'Con arándanos frescos, sin conserv.',
    imagen:    'muffin-arandano.webp',
    emoji:     '🧁',
    color:     '#8B5E3C',
  },
  {
    id: 21,
    nombre:    'Pastel de Zanahoria',
    categoria: 'reposteria',
    precio:    68,
    desc:      'Con betún de queso crema y nuez',
    imagen:    'pastel-zanahoria.webp',
    emoji:     '🎂',
    color:     '#A0522D',
  },
  {
    id: 22,
    nombre:    'Granola con Yogurt',
    categoria: 'reposteria',
    precio:    72,
    desc:      'Granola artesanal + yogurt griego',
    imagen:    'granola-con-yogurt.webp',
    emoji:     '🥣',
    color:     '#7A5C44',
  },
  {
    id: 23,
    nombre:    'Tostada Francesa',
    categoria: 'reposteria',
    precio:    88,
    desc:      'Con maple de agave y frutos rojos',
    imagen:    'tostada-francesa.webp',
    emoji:     '🍞',
    color:     '#9C6B4E',
  },
  {
    id: 24,
    nombre:    'Cookie de Chispas de Chocolate',
    categoria: 'reposteria',
    precio:    42,
    desc:      'Receta secreta de la casa',
    imagen:    'cookie-chispas-chocolate.webp',
    emoji:     '🍪',
    color:     '#6B4226',
  },
];

/*  FUNCIÓN: construir el HTML de la imagen del producto
   Usa <img> real con fallback a emoji via onerror */
function buildImagenHTML(p) {
  const ruta  = IMG_BASE + p.imagen;
  const alt   = p.nombre;

  /*
    onerror en línea: si la imagen falla, ocultamos el <img> y mostramos
    el contenedor de fallback con el emoji y el color de fondo del producto.
    this.parentElement hace referencia a .producto-imagen.
  */
  return `
    <img
      src="${ruta}"
      alt="${alt}"
      class="producto-img"
      loading="lazy"
      onerror="this.style.display='none';
               this.parentElement.classList.add('img-fallback');
               this.parentElement.style.background='${p.color}30';
               this.parentElement.querySelector('.producto-emoji-fallback').style.display='flex';"
    >
    <div class="producto-emoji-fallback" aria-hidden="true">
      ${p.emoji}
    </div>
  `;
}

/* FUNCIÓN: renderizar la lista de productos en el grid */
function renderProductos(lista) {

  const grid  = document.getElementById('productos-grid');
  const cont  = document.getElementById('contador-productos');
  const noRes = document.getElementById('no-resultados');

  grid.innerHTML = '';

  if (lista.length === 0) {
    noRes.style.display = 'block';
    cont.innerHTML = 'Mostrando <strong>0</strong> productos';
    return;
  }

  noRes.style.display = 'none';
  cont.innerHTML = `Mostrando <strong>${lista.length}</strong> productos`;

  lista.forEach((p, i) => {

    const card = document.createElement('div');
    card.className = 'producto-card';
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      <div class="producto-imagen producto-open-modal">
        ${buildImagenHTML(p)}
      </div>

      <div class="producto-info">

        <span class="producto-cat">${catLabel(p.categoria)}</span>

        <div class="producto-nombre">
          ${p.nombre}
        </div>

        <div class="producto-desc">
          ${p.desc}
        </div>

        <div class="producto-footer">
          <span class="producto-precio">
            $${p.precio}
          </span>

          <button class="producto-btn producto-open-modal">
            + Info
          </button>
        </div>
      </div>
    `;

    const modalTriggers = card.querySelectorAll('.producto-open-modal');

    modalTriggers.forEach(el => {
      el.addEventListener('click', () => {
        abrirModalProducto(p);
      });
    });

    grid.appendChild(card);
  });
}

/* UTILIDADES */
function catLabel(cat) {
  const m = {
    libro:      '📚 Libro',
    bebida:     '☕ Bebida',
    reposteria: '🥐 Repostería',
  };
  return m[cat] || cat;
}

function aplicarFiltros() {
  const busqueda    = document.getElementById('filtro-busqueda').value.toLowerCase().trim();
  const catsChecked = [...document.querySelectorAll('.filtro-cat:checked')].map(c => c.value);
  const precioMax   = parseInt(document.getElementById('filtro-precio').value);
  const orden       = document.getElementById('filtro-orden').value;

  let lista = productos.filter(p => {
    const matchCat      = catsChecked.includes(p.categoria);
    const matchPrecio   = p.precio <= precioMax;
    const matchBusqueda = busqueda === ''
      || p.nombre.toLowerCase().includes(busqueda)
      || p.desc.toLowerCase().includes(busqueda);
    return matchCat && matchPrecio && matchBusqueda;
  });

  if (orden === 'precio-asc')  lista.sort((a, b) => a.precio - b.precio);
  if (orden === 'precio-desc') lista.sort((a, b) => b.precio - a.precio);
  if (orden === 'nombre')      lista.sort((a, b) => a.nombre.localeCompare(b.nombre));

  renderProductos(lista);
}

function limpiarFiltros() {
  document.getElementById('filtro-busqueda').value = '';
  document.querySelectorAll('.filtro-cat').forEach(c => c.checked = true);
  document.getElementById('filtro-precio').value = 500;
  document.getElementById('precio-val').textContent = 500;
  document.getElementById('filtro-orden').value = 'default';
  renderProductos(productos);
}

/* EVENT LISTENERS */
document.getElementById('filtro-precio').addEventListener('input', function () {
  document.getElementById('precio-val').textContent = this.value;
  aplicarFiltros();
});

document.getElementById('filtro-busqueda').addEventListener('input', aplicarFiltros);
document.querySelectorAll('.filtro-cat').forEach(c => c.addEventListener('change', aplicarFiltros));
document.getElementById('filtro-orden').addEventListener('change', aplicarFiltros);

// Render inicial
renderProductos(productos);

//Modal Producto

const modalOverlay = document.querySelector('[data-modal-overlay]');
const modalClose   = document.querySelector('[data-modal-close]');

if (!modalOverlay || !modalClose) {
  console.error('No se encontró el modal en el HTML');
}

function abrirModalProducto(producto) {

  const modalImage       = document.querySelector('[data-modal-image]');
  const modalCategory    = document.querySelector('[data-modal-category]');
  const modalTitle       = document.querySelector('[data-modal-title]');
  const modalDescription = document.querySelector('[data-modal-description]');
  const modalDetails     = document.querySelector('[data-modal-details]');
  const modalPrice       = document.querySelector('[data-modal-price]');

  modalCategory.textContent = catLabel(producto.categoria);
  modalTitle.textContent = producto.nombre;
  modalDescription.textContent = producto.desc;
  modalPrice.textContent = `$${producto.precio}`;

  modalDetails.innerHTML = '';

  const detalles = producto.extras || [
    'Producto disponible en sucursal',
    'Calidad premium',
    'Consulta disponibilidad'
  ];

  detalles.forEach(detalle => {

    const li = document.createElement('li');
    li.textContent = detalle;
    modalDetails.appendChild(li);
  });

  modalImage.innerHTML = `
    <img
      src="img/catalogo/${producto.imagen}"
      alt="${producto.nombre}"
      onerror="this.parentElement.innerHTML='<div class=&quot;catalogo-modal-fallback&quot; style=&quot;background:${producto.color}&quot;>${producto.emoji}</div>'"
    >
  `;

  document.body.style.overflow = 'hidden';
  modalOverlay.classList.add('active');
}

function cerrarModalProducto() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', cerrarModalProducto);

modalOverlay.addEventListener('click', function(e) {

  if (e.target === modalOverlay) {
    cerrarModalProducto();
  }
});

window.addEventListener('keydown', function(e) {

  if (e.key === 'Escape') {
    cerrarModalProducto();
  }
});