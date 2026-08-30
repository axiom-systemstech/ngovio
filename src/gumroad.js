// ============================================================
// 🔗 ENLACES DE GUMROAD — ÚNICO LUGAR QUE NECESITAS EDITAR
// ============================================================
// Sustituye cada valor por la URL real de tu producto en Gumroad.
// Todos los botones "Comprar" de la tienda (header, hero, grid de
// productos, bundle y sticky bar) leen de aquí. No hace falta tocar
// ningún componente de React.
//
// Ejemplo: "01": "https://ngovio.gumroad.com/l/web-starter-pack"
// ============================================================

export const GUMROAD = {
  "01": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-01", // Web Starter Pack
  "02": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-02", // Landing Page Pack
  "03": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-03", // 100 Web AI Prompts
  "04": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-04", // AI Creator Prompt Pack
  "05": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-05", // Modern UI Kit
  "06": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-06", // App UI Starter Kit
  "07": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-07", // CV + Portfolio Pack
  "08": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-08", // Social Media Creator Pack
  "09": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-09", // Build With AI PDF Guide
  "10": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-10", // NGOVIO Ultimate Bundle (01-09)
  "11": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-11", // SaaS Starter Boilerplate
  "12": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-12", // Email Marketing Pack
  "13": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-13", // MicroSaaS Ideas Vault
  "14": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-14", // Ecommerce CRO Pack
  "15": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-15", // Notion Productivity Hub
  "16": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-16", // Vibe Coding Masterclass
  "17": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-17"  // Enterprise SaaS Bundle (máster)
};

/**
 * Navega al producto de Gumroad correspondiente.
 * Si el enlace todavía es el placeholder, avisa en vez de romper la navegación.
 */
export function buy(id) {
  const url = GUMROAD[id];
  if (url && !url.includes("YOUR-GUMROAD-DOMAIN")) {
    window.location.href = url;
  } else {
    alert(`Añade la URL real de Gumroad para el producto ${id} en src/gumroad.js`);
  }
}
