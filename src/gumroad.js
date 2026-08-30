// ============================================================
// GUMROAD — ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA LAS COMPRAS
// ============================================================
// Sustituye los placeholders por las URLs reales.
// No inventes URLs: copia las URLs directamente desde Gumroad.
// ============================================================
export const GUMROAD = {
  "01": "https://manuelaxiomsystems.gumroad.com/l/ckxslt",
  "02": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-02",
  "03": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-03",
  "04": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-04",
  "05": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-05",
  "06": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-06",
  "07": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-07",
  "08": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-08",
  "09": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-09",
  "10": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-10",
  "11": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-11",
  "12": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-12",
  "13": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-13",
  "14": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-14",
  "15": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-15",
  "16": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-16",
  "17": "https://YOUR-GUMROAD-DOMAIN/PRODUCT-17"
};

export function buy(id) {
  const url = GUMROAD[id];
  if (url && !url.includes("YOUR-GUMROAD-DOMAIN")) {
    window.location.href = url;
    return;
  }
  alert(`Añade la URL real de Gumroad para el producto ${id} en src/gumroad.js`);
}
