# Proyecto Final: Página & Taza

> Cafetería librería · Proyecto Final — Desarrollo Web  
> Universidad Autónoma de Querétaro · Facultad de Informática
> 
> Cristofer Ramón Ballesteros González

---

##  Nombre del proyecto y temática

**Página & Taza** es un sitio web para una cafetería librería ubicada en el Centro Histórico de Querétaro. El negocio combina 
café de especialidad con origen mexicano y una librería curada de más de 500 títulos, ofreciendo un espacio para leer, conectar y disfrutar.

El sitio incluye:
- Página principal con **carruseles** y presentación del negocio
- Sección de **Cafetería** con carta de bebidas y proceso de preparación
- Sección de **Librería** con géneros, títulos destacados y eventos culturales
- **Catálogo dinámico** con búsqueda y filtros en tiempo real
- Página de **Contacto** con formulario "funcional"
- Páginas legales: Aviso de Privacidad y Términos y Condiciones

---

## Paleta de colores

| Nombre | HEX | Uso |
|---|---|---|
| Café oscuro | `#2C1A0E` | Header, footer, fondos de hero |
| Café medio | `#5C3D2E` | Gradientes, hover de botones |
| Café suave | `#7A5C44` | Texto secundario, descripciones |
| Terracota | `#C4622D` | Color de acento — botones, precios, bordes activos |
| Terracota claro | `#D9845A` | Hover del buscador, etiquetas |
| Crema | `#F5ECD7` | Texto sobre fondos oscuros, fondos de secciones |
| Crema oscura | `#EAD9BE` | Bordes de tarjetas, separadores |
| Blanco cálido | `#FDFAF5` | Fondo general del sitio |
| Texto oscuro | `#1E110A` | Color base del texto corrido |

---

##  Tipografías

| Fuente | Uso | Pesos cargados |
|---|---|---|
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Títulos, logo, botones, precios | 400 · 700 · 900 |
| [Lora](https://fonts.google.com/specimen/Lora) | Texto corrido, párrafos, formularios | 400 · 500 · 600 |

Ambas fuentes se cargan desde **Google Fonts** con la siguiente importación en el CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
```

---

##  Estructura de carpetas

```
pagina-y-taza/
├── index.html
├── cafeteria.html
├── libreria.html
├── catalogo.html
├── contacto.html
├── privacidad.html
├── terminos.html
├── style.css
├── css/
│   ├── index.css
│   ├── cafeteria.css
│   ├── catalogo.css
│   ├── contacto.css
│   └── legal.css
|   └── libreria.css
├── js/
│   ├── global.js
│   └── catalogo.js
├── img/
    └── catalogo/
```

---

## Cómo usar el filtro de la página de productos

La página **Catálogo** (`catalogo.html`) permite buscar y filtrar los 24 productos del negocio en tiempo real sin recargar la página.

### Panel de filtros (columna izquierda)

**1. Buscador por nombre**  
Escribe cualquier palabra en el campo "Buscar" y el catálogo se actualiza automáticamente mostrando solo los productos cuyo nombre o descripción coincidan.

**2. Filtro por categoría**  
Activa o desactiva las casillas para mostrar u ocultar categorías:
- 📚 **Libros** — títulos disponibles en la librería
- ☕ **Bebidas** — carta de cafetería
- 🥐 **Repostería** — alimentos y postres

Puedes combinar varias categorías al mismo tiempo.

**3. Precio máximo**  
Desliza el control para definir el precio máximo. Solo se mostrarán productos con precio igual o menor al valor seleccionado.

**4. Ordenar por**  
Usa el menú desplegable para cambiar el orden de los resultados:
- **Predeterminado** — orden original del catálogo
- **Precio: menor a mayor**
- **Precio: mayor a menor**
- **Nombre A–Z**

**5. Limpiar filtros**  
El botón **Limpiar filtros** restablece todos los controles a su estado inicial y muestra los 24 productos.

### Tarjetas de producto

Cada tarjeta muestra imagen, categoría, nombre, descripción y precio. Al hacer clic en **+ Info** se abre un modal con la descripción completa del producto y un enlace directo a la página de contacto.

---

## Despliegue

El sitio está desplegado en **GitHub Pages** y puede visitarse en:

```
https://cachramn.github.io/proyecto_final_Pagina_Y_Cafe/
```

---

Proyecto desarrollado como entrega final de la materia **Desarrollo Web**  
Facultad de Informática · Universidad Autónoma de Querétaro · 2026
