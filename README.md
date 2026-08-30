# NGOVIO React Store — v2 (corregida)

Storefront premium orientada a conversión, con las 17 tarjetas de productos,
filtros por categoría, sección de bundle/pricing, reseñas, FAQ acordeón y
barra flotante de compra.

## Qué se corrigió respecto al ZIP original
- `src/main.jsx` usaba sintaxis de tuplas tipo Python (`('01', 'Título', ...)`)
  para la lista de productos, que **no es JavaScript válido** y rompía el build.
  Se reemplazó por un array de objetos (`{ id, title, desc, cat }`).
- Faltaba `vite.config.js` con el plugin de React (necesario para JSX y Fast Refresh).
- El componente se dividió en piezas (`Header`, `Hero`, `Stats`, `ProductsSection`,
  `BundleSection`, `ReviewsSection`, `FaqSection`, `Footer`, `StickyBuy`) para que
  sea más fácil de mantener y editar por secciones.
- Versiones de dependencias fijadas (antes usaban `"latest"`, lo que puede romper
  el build en el futuro sin previo aviso).

## Stack
React 18 + Vite 5 + lucide-react. CSS propio, sin Tailwind/Bootstrap.

## Arranque local
```bash
npm install
npm run dev
```

## Producción
```bash
npm run build
```
Publica la carpeta `dist/` en tu hosting (Vercel, Netlify, Cloudflare Pages, etc.).

## Gumroad — único paso pendiente
Abre `src/gumroad.js` y sustituye los 17 valores `"https://YOUR-GUMROAD-DOMAIN/PRODUCT-XX"`
por tus URLs reales de Gumroad. Todos los botones "Comprar" de la tienda (header,
hero, tarjetas de producto, bundle y barra flotante) leen de ese único archivo —
no hace falta tocar ningún componente. Revisa `GUMROAD-MAP.md` para ver qué
producto corresponde a cada id.

Si olvidas reemplazar algún enlace, el botón mostrará una alerta en vez de
llevar a una URL rota.

## Nota comercial
Las cifras de clientes, descargas, valoración, precio de ejemplo (€199) y
testimonios son placeholders visuales del diseño. Sustitúyelos por datos
reales antes de publicar.
