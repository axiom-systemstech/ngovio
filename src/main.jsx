import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
  X
} from "lucide-react";
import { buy } from "./gumroad";
import "./styles.css";

// ------------------------------------------------------------
// DATA — los 17 productos de la suite NGOVIO
// ------------------------------------------------------------
const PRODUCTS = [
  { id: "01", title: "Web Starter Pack", desc: "5 plantillas web listas para usar", cat: "Templates" },
  { id: "02", title: "Landing Page Pack", desc: "10 plantillas de alta conversión", cat: "Templates" },
  { id: "03", title: "100 Web AI Prompts", desc: "Biblioteca de prompts profesionales", cat: "AI" },
  { id: "04", title: "AI Creator Prompt Pack", desc: "Prompts para creadores de contenido", cat: "AI" },
  { id: "05", title: "Modern UI Kit", desc: "Componentes UI modulares", cat: "UI" },
  { id: "06", title: "App UI Starter Kit", desc: "Maquetación móvil completa", cat: "UI" },
  { id: "07", title: "CV + Portfolio Pack", desc: "CV + portfolio profesional", cat: "Career" },
  { id: "08", title: "Social Media Creator Pack", desc: "Hooks, carruseles y vídeo", cat: "Creator" },
  { id: "09", title: "Build With AI PDF Guide", desc: "Guía práctica + protocolo 24h", cat: "Launch" },
  { id: "10", title: "NGOVIO Ultimate Bundle", desc: "Productos 01–09 completos", cat: "Bundle" },
  { id: "11", title: "SaaS Starter Boilerplate", desc: "Estructura SaaS completa", cat: "SaaS" },
  { id: "12", title: "Email Marketing Pack", desc: "Plantillas + secuencias de email", cat: "Marketing" },
  { id: "13", title: "MicroSaaS Ideas Vault", desc: "50 ideas validadas de Micro-SaaS", cat: "SaaS" },
  { id: "14", title: "Ecommerce CRO Pack", desc: "Componentes CRO + checklist", cat: "CRO" },
  { id: "15", title: "Notion Productivity Hub", desc: "Sistema P.A.R.A. completo", cat: "Productivity" },
  { id: "16", title: "Vibe Coding Masterclass", desc: "Guía de desarrollo con IA", cat: "AI" },
  { id: "17", title: "Enterprise SaaS Bundle", desc: "Licencia máster + suite completa", cat: "Enterprise" }
];

const CATEGORIES = [
  "Todos", "Templates", "AI", "UI", "Creator", "SaaS", "Marketing",
  "CRO", "Productivity", "Bundle", "Enterprise", "Career", "Launch"
];

const REVIEWS = [
  { quote: "La sensación es de comprar un sistema completo, no una colección de archivos.", name: "Alex · Indie Builder" },
  { quote: "La estructura de los productos me ahorró semanas de trabajo inicial.", name: "Marta · Product Designer" },
  { quote: "Visualmente tiene exactamente el nivel premium que buscaba para mi marca.", name: "Daniel · SaaS Founder" }
];

const FAQS = [
  {
    q: "¿Qué recibo después de comprar?",
    a: "El producto digital correspondiente según la ficha de Gumroad: archivos, templates y documentación incluidos en ese producto."
  },
  {
    q: "¿Puedo usar los recursos comercialmente?",
    a: "Depende de la licencia del producto. El bundle incluye una licencia definida en sus archivos; revisa sus condiciones antes de redistribuir."
  },
  {
    q: "¿Necesito React para usar NGOVIO?",
    a: "No para los productos base. Esta storefront está construida con React + Vite; los assets de la suite se mantienen independientes."
  },
  {
    q: "¿Cómo funcionan los enlaces de compra?",
    a: "Todos los CTA están centralizados en src/gumroad.js. Pegas las 17 URLs de Gumroad una sola vez y toda la tienda queda conectada."
  }
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// ------------------------------------------------------------
// HEADER
// ------------------------------------------------------------
function Header({ menu, setMenu }) {
  const links = [
    { id: "products", label: "Productos" },
    { id: "bundle", label: "Bundles" },
    { id: "reviews", label: "Opiniones" },
    { id: "faq", label: "FAQ" }
  ];
  return (
    <header className="nav">
      <div className="wrap navin">
        <a className="logo" href="#">
          <span>◆</span> NGOVIO
        </a>
        <nav className={menu ? "navlinks open" : "navlinks"}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                scrollTo(l.id);
                setMenu(false);
              }}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="navactions">
          <button className="client">Acceso clientes</button>
          {/* 🔗 GUMROAD: bundle completo (header) — configurado en src/gumroad.js, id "17" */}
          <button className="buytop" onClick={() => buy("17")}>
            Comprar bundle completo
          </button>
        </div>
        <button className="hamb" onClick={() => setMenu(!menu)} aria-label="Menú">
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

// ------------------------------------------------------------
// HERO
// ------------------------------------------------------------
function Hero() {
  return (
    <section className="hero wrap">
      <div className="heroCopy">
        <div className="pill">
          <span></span> LA SUITE DIGITAL PARA BUILDERS
        </div>
        <h1>
          17 productos.
          <br />
          Un solo objetivo:
          <br />
          <em>Lanzar. Vender. Escalar.</em>
        </h1>
        <p>
          Todo lo que necesitas para crear productos digitales con IA, diseño
          moderno y sistemas preparados para convertir.
        </p>
        <div className="heroBtns">
          <button className="primary" onClick={() => scrollTo("products")}>
            Ver todos los productos <ArrowRight />
          </button>
          {/* 🔗 GUMROAD: Ultimate Bundle (hero) — id "10" */}
          <button className="ghost" onClick={() => buy("10")}>
            Ver Ultimate Bundle <Sparkles />
          </button>
        </div>
        <div className="benefits">
          <div>
            <Zap />
            <b>+500h</b>
            <span>ahorradas creando desde cero</span>
          </div>
          <div>
            <Sparkles />
            <b>17 sistemas</b>
            <span>listos para personalizar</span>
          </div>
          <div>
            <ShieldCheck />
            <b>Uso comercial</b>
            <span>según licencia elegida</span>
          </div>
        </div>
      </div>
      <div className="heroVisual">
        <div className="glow"></div>
        <div className="pedestal"></div>
        <div className="box back b1">
          <small>02</small>
          <strong>
            LANDING
            <br />
            PAGE PACK
          </strong>
        </div>
        <div className="box back b2">
          <small>03</small>
          <strong>
            AI PROMPTS
            <br />
            LIBRARY
          </strong>
        </div>
        <div className="box mainbox">
          <small>NG</small>
          <div className="mark">◆</div>
          <strong>NGOVIO</strong>
          <b>
            ULTIMATE
            <br />
            <span>BUNDLE</span>
          </b>
          <small>17 PRODUCTOS</small>
        </div>
        <div className="box back b3">
          <small>05</small>
          <strong>
            MODERN
            <br />
            UI KIT
          </strong>
        </div>
        <div className="phone">
          <div className="phoneTop">NGOVIO</div>
          <b>
            APP UI
            <br />
            <span>STARTER KIT</span>
          </b>
          <div className="miniCards"></div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------
// STATS
// ------------------------------------------------------------
function Stats() {
  const items = [
    { b: "10.000+", s: "Builders" },
    { b: "4.9/5", s: "Valoración" },
    { b: "500K+", s: "Assets descargados" },
    { b: "Lifetime", s: "Actualizaciones" },
    { b: "24/7", s: "Soporte" }
  ];
  return (
    <section className="stats">
      <div className="wrap statgrid">
        {items.map((it) => (
          <div key={it.s}>
            <b>{it.b}</b>
            <span>{it.s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ------------------------------------------------------------
// PRODUCT CARD
// ------------------------------------------------------------
function Product({ p }) {
  const bundle = p.id === "10" || p.id === "17";
  return (
    <article className={"product " + (bundle ? "featured" : "")}>
      <div className="productTop">
        <span className="num">{p.id}</span>
        <span className="cat">{p.cat}</span>
      </div>
      <div className="icon">✦</div>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="productBottom">
        <span>{bundle ? "Bundle" : p.cat}</span>
        {/* 🔗 GUMROAD: producto individual — id p.id, configurado en src/gumroad.js */}
        <button onClick={() => buy(p.id)}>
          Comprar <ArrowRight />
        </button>
      </div>
    </article>
  );
}

// ------------------------------------------------------------
// PRODUCTS GRID + FILTERS
// ------------------------------------------------------------
function ProductsSection() {
  const [filter, setFilter] = useState("Todos");
  const visible = useMemo(
    () => (filter === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter)),
    [filter]
  );

  return (
    <section id="products" className="section wrap">
      <div className="sectionHead">
        <div>
          <div className="eyebrow">01 — 17</div>
          <h2>
            Productos diseñados para <em>resultados reales.</em>
          </h2>
          <p>Elige exactamente lo que necesitas o llévate la suite completa.</p>
        </div>
        <button className="outline" onClick={() => setFilter("Todos")}>
          Ver todos <ArrowRight />
        </button>
      </div>
      <div className="filters">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={filter === c ? "active" : ""}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="productGrid">
        {visible.map((p) => (
          <Product key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

// ------------------------------------------------------------
// BUNDLE / PRICING
// ------------------------------------------------------------
function BundleSection() {
  const perks = [
    "17 productos completos",
    "Licencia comercial incluida",
    "Actualizaciones de por vida",
    "Documentación y archivos editables"
  ];
  return (
    <section id="bundle" className="bundle wrap">
      <div className="bundleGlow"></div>
      <div className="bundleText">
        <div className="eyebrow">LA OFERTA INTELIGENTE</div>
        <h2>
          ¿Por qué comprar uno
          <br />
          si puedes tener <em>los 17?</em>
        </h2>
        <p>
          Accede a toda la suite NGOVIO desde un único bundle y evita comprar
          herramientas una por una.
        </p>
        <ul>
          {perks.map((x) => (
            <li key={x}>
              <Check />
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div className="priceCard">
        <span className="popular">MÁS VENDIDO</span>
        <div className="old">Valor individual: €1.200+</div>
        <div className="price">
          €<b>199</b>
        </div>
        <div className="once">Pago único · acceso inmediato</div>
        {/* 🔗 GUMROAD: bundle completo (pricing) — id "17" */}
        <button className="primary wide" onClick={() => buy("17")}>
          Quiero el bundle completo <ArrowRight />
        </button>
        <div className="guarantee">
          <ShieldCheck /> Compra segura · revisa la licencia antes de vender
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------
// REVIEWS
// ------------------------------------------------------------
function ReviewsSection() {
  return (
    <section id="reviews" className="section wrap">
      <div className="center">
        <div className="eyebrow">SOCIAL PROOF</div>
        <h2>
          Menos tiempo construyendo.
          <br />
          <em>Más tiempo lanzando.</em>
        </h2>
      </div>
      <div className="reviewGrid">
        {REVIEWS.map((r) => (
          <article className="review" key={r.name}>
            <div className="stars">★★★★★</div>
            <p>“{r.quote}”</p>
            <b>{r.name}</b>
          </article>
        ))}
      </div>
    </section>
  );
}

// ------------------------------------------------------------
// FAQ
// ------------------------------------------------------------
function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="section wrap faq">
      <div className="center">
        <div className="eyebrow">FAQ</div>
        <h2>Antes de comprar</h2>
      </div>
      {FAQS.map((f, i) => (
        <div className="faqrow" key={f.q}>
          <button onClick={() => setOpen(open === i ? null : i)}>
            <span>{f.q}</span>
            <ChevronDown className={open === i ? "rot" : ""} />
          </button>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </section>
  );
}

// ------------------------------------------------------------
// FOOTER + STICKY BUY BAR
// ------------------------------------------------------------
function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <a className="logo" href="#">
            <span>◆</span> NGOVIO
          </a>
          <p>Digital assets for modern builders.</p>
        </div>
        <div>
          <b>Suite</b>
          <a href="#products">Productos</a>
          <a href="#bundle">Bundles</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <b>Comprar</b>
          {/* 🔗 GUMROAD: ids "10" y "17" */}
          <button onClick={() => buy("10")}>Ultimate Bundle</button>
          <button onClick={() => buy("17")}>Enterprise Bundle</button>
        </div>
      </div>
    </footer>
  );
}

function StickyBuy() {
  return (
    <div className="stickyBuy">
      <span>
        <b>NGOVIO Bundle</b> · 17 productos
      </span>
      {/* 🔗 GUMROAD: id "17" */}
      <button onClick={() => buy("17")}>
        Comprar €199 <ArrowRight />
      </button>
    </div>
  );
}

// ------------------------------------------------------------
// APP
// ------------------------------------------------------------
function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <main>
        <Hero />
        <Stats />
        <ProductsSection />
        <BundleSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyBuy />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
