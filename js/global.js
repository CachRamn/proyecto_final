/* ── GLOBAL.JS ── Funciones compartidas en todas las páginas ── */

/* --- CARRUSEL
   Uso:
     moveSlide('trackId', 'dotsId', dirección)
     jumpToSlide('trackId', 'dotsId', índice) --- */

function getSlides(trackId) {
  return document.querySelectorAll(`#${trackId} .carousel-slide`);
}

function getCurrentIndex(trackId) {
  const slides = getSlides(trackId);
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains('active')) return i;
  }
  return 0;
}

function goToSlide(trackId, dotsId, index) {
  const slides = getSlides(trackId);
  const dots   = document.querySelectorAll(`#${dotsId} .dot`);

  if (!slides.length) return;

  const n = slides.length;
  const target = ((index % n) + n) % n;

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[target].classList.add('active');
  if (dots[target]) dots[target].classList.add('active');

  // Anima el track desplazándose
  const track = document.getElementById(trackId);
  if (track) track.style.transform = `translateX(-${target * 100}%)`;
}

function moveSlide(trackId, dotsId, direction) {
  const current = getCurrentIndex(trackId);
  const n       = getSlides(trackId).length;
  goToSlide(trackId, dotsId, (current + direction + n) % n);
}

function jumpToSlide(trackId, dotsId, index) {
  goToSlide(trackId, dotsId, index);
}

/* ──────────────────────────────────────────────
   AUTO-AVANCE DE CARRUSELES
        <section class="carousels-section">
            <div class="page-container">
                <div class="section-title">
                    <h2>Lo que encontrarás aquí</h2>
                    <p>Una experiencia que combina el aroma del café con el mundo de los libros</p>
                    <div class="linea-deco"></div>
                </div>
                <div class="carousel-wrapper">

                    <!-- Carrusel 1: Cafetería -->
                    <div class="carousel-group">
                        <h3 class="carousel-label">☕ Nuestro Café</h3>
                        <div class="carousel-container">
                            <div class="carousel-track" id="track1">

                                <div class="carousel-slide active">
                                    <img src="img/cafe/espresso.jpg" alt="Espresso de Especialidad" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Espresso de Especialidad</span>
                                    </div>
                                </div>

                                <div class="carousel-slide">
                                    <img src="img/cafe/latte.jpg" alt="Latte con Arte" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Latte con Arte</span>
                                    </div>
                                </div>

                                <div class="carousel-slide">
                                    <img src="img/cafe/coldbrew.jpg" alt="Cold Brew de Origen" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Cold Brew de Origen</span>
                                    </div>
                                </div>

                                <div class="carousel-slide">
                                    <img src="img/cafe/matcha.jpg" alt="Matcha Ceremonial" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Matcha Ceremonial</span>
                                    </div>
                                </div>

                            </div>
                            <button class="carousel-btn prev" onclick="moveSlide('track1','dots1',-1)">&#10094;</button>
                            <button class="carousel-btn next" onclick="moveSlide('track1','dots1',1)">&#10095;</button>
                            <div class="carousel-indicators" id="dots1">
                                <span class="dot active" onclick="jumpToSlide('track1','dots1',0)"></span>
                                <span class="dot" onclick="jumpToSlide('track1','dots1',1)"></span>
                                <span class="dot" onclick="jumpToSlide('track1','dots1',2)"></span>
                                <span class="dot" onclick="jumpToSlide('track1','dots1',3)"></span>
                            </div>
                        </div>
                    </div>

                    <!-- Carrusel 2: Librería -->
                    <div class="carousel-group">
                        <h3 class="carousel-label">📚 Nuestros Libros</h3>
                        <div class="carousel-container">
                            <div class="carousel-track" id="track2">

                                <div class="carousel-slide active">
                                    <img src="img/libros/latinoamerica.jpg" alt="Literatura Latinoamericana" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Literatura Latinoamericana</span>
                                    </div>
                                </div>

                                <div class="carousel-slide">
                                    <img src="img/libros/clasicos.jpg" alt="Clásicos Universales" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Clásicos Universales</span>
                                    </div>
                                </div>

                                <div class="carousel-slide">
                                    <img src="img/libros/ensayo.jpg" alt="Ensayo y No Ficción" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Ensayo y No Ficción</span>
                                    </div>
                                </div>

                                <div class="carousel-slide">
                                    <img src="img/libros/arte.jpg" alt="Libros de Arte" class="carousel-img">
                                    <div class="carousel-caption">
                                        <span>Libros de Arte</span>
                                    </div>
                                </div>

                            </div>
                            <button class="carousel-btn prev" onclick="moveSlide('track2','dots2',-1)">&#10094;</button>
                            <button class="carousel-btn next" onclick="moveSlide('track2','dots2',1)">&#10095;</button>
                            <div class="carousel-indicators" id="dots2">
                                <span class="dot active" onclick="jumpToSlide('track2','dots2',0)"></span>
                                <span class="dot" onclick="jumpToSlide('track2','dots2',1)"></span>
                                <span class="dot" onclick="jumpToSlide('track2','dots2',2)"></span>
                                <span class="dot" onclick="jumpToSlide('track2','dots2',3)"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
   ────────────────────────────────────────────── */
(function autoplay() {
  // Detecta todos los pares track/dots en la página
  const tracks = document.querySelectorAll('.carousel-track');
  tracks.forEach(track => {
    const trackId = track.id;
    // Infiere dotsId reemplazando "track" por "dots"
    const dotsId = trackId.replace('track', 'dots');
    setInterval(() => {
      const n = track.querySelectorAll('.carousel-slide').length;
      if (n > 1) moveSlide(trackId, dotsId, 1);
    }, 4000);
  });
})();

/* --- BÚSQUEDA GLOBAL (navbar) --- */
const globalSearch = document.querySelector('.header .search-bar');
if (globalSearch) {
  globalSearch.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
      window.location.href = `catalogo.html?q=${encodeURIComponent(this.value.trim())}`;
    }
  });
}

/* ---PARÁMETRO ?q= en catálogo (pre-rellena búsqueda) --- */
window.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q) {
    const input = document.getElementById('filtro-busqueda');
    if (input) {
      input.value = q;
      // Dispara el filtro si la función existe
      if (typeof aplicarFiltros === 'function') aplicarFiltros();
    }
  }
});
