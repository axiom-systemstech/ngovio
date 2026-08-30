import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { buy } from "./gumroad";
import "./styles.css";

const PRODUCTS = [
  { id:"01", title:"Web Starter Pack", desc:"5 plantillas web editables para empezar un proyecto sin partir de cero.", cat:"Crear", tag:"Templates", audience:"Founders, freelancers y builders" },
  { id:"02", title:"Landing Page Pack", desc:"10 estructuras de landing pensadas para presentar ofertas con claridad.", cat:"Vender", tag:"Templates", audience:"Marketers y founders" },
  { id:"03", title:"100 Web AI Prompts", desc:"Biblioteca de prompts para idear, diseñar y construir webs con IA.", cat:"IA", tag:"AI", audience:"Builders y diseñadores" },
  { id:"04", title:"AI Creator Prompt Pack", desc:"Prompts para acelerar ideas, guiones, contenido y piezas para redes.", cat:"IA", tag:"AI", audience:"Creadores y marketers" },
  { id:"05", title:"Modern UI Kit", desc:"Componentes UI modulares para crear interfaces consistentes más rápido.", cat:"Crear", tag:"UI", audience:"Diseñadores y developers" },
  { id:"06", title:"App UI Starter Kit", desc:"Base visual para maquetar productos y experiencias móviles.", cat:"Crear", tag:"UI", audience:"Product teams y developers" },
  { id:"07", title:"CV + Portfolio Pack", desc:"Sistema visual para presentar tu experiencia y proyectos con aspecto profesional.", cat:"Crear", tag:"Career", audience:"Freelancers y profesionales" },
  { id:"08", title:"Social Media Creator Pack", desc:"Hooks, carruseles y estructuras de vídeo para publicar con más velocidad.", cat:"Vender", tag:"Creator", audience:"Creadores y marcas" },
  { id:"09", title:"Build With AI PDF Guide", desc:"Guía práctica para convertir una idea en un proyecto con IA en 24 horas.", cat:"Lanzar", tag:"Launch", audience:"Emprendedores y builders" },
  { id:"10", title:"NGOVIO Ultimate Bundle", desc:"Bundle de los productos 01–09 para quienes quieren una base amplia para crear y lanzar.", cat:"Bundle", tag:"Bundle", audience:"Builders" },
  { id:"11", title:"SaaS Starter Boilerplate", desc:"Estructura inicial para acelerar el desarrollo de un producto SaaS.", cat:"Construir", tag:"SaaS", audience:"Founders y developers" },
  { id:"12", title:"Email Marketing Pack", desc:"Plantillas y secuencias para convertir interés en conversaciones y ventas.", cat:"Vender", tag:"Marketing", audience:"Marketers y founders" },
  { id:"13", title:"MicroSaaS Ideas Vault", desc:"50 ideas de Micro-SaaS para explorar oportunidades de producto.", cat:"Lanzar", tag:"SaaS", audience:"Indie hackers y founders" },
  { id:"14", title:"Ecommerce CRO Pack", desc:"Componentes y checklist para detectar fricción y mejorar conversión.", cat:"Vender", tag:"CRO", audience:"Ecommerce teams" },
  { id:"15", title:"Notion Productivity Hub", desc:"Sistema P.A.R.A. para organizar proyectos, recursos y trabajo.", cat:"Organizar", tag:"Productivity", audience:"Solopreneurs y equipos" },
  { id:"16", title:"Vibe Coding Masterclass", desc:"Guía para aprender a construir software apoyándote en herramientas de IA.", cat:"IA", tag:"AI", audience:"Builders y no-code/low-code makers" },
  { id:"17", title:"Enterprise SaaS Bundle", desc:"Suite orientada a proyectos SaaS con licencia y alcance definidos en la oferta.", cat:"Bundle", tag:"Enterprise", audience:"Teams y proyectos SaaS" }
];

const CATEGORIES = ["Todos", "Crear", "Lanzar", "Vender", "IA", "Construir", "Organizar", "Bundle"];

const FAQS = [
  ["¿Qué es NGOVIO?", "NGOVIO reúne plantillas, recursos, sistemas y herramientas digitales para ayudarte a crear, lanzar, vender y hacer crecer proyectos online."],
  ["¿Tengo que comprar los 17 productos?", "No. Puedes comprar productos individuales según lo que necesites. La oferta completa sólo tiene sentido si quieres acceder a una parte amplia de la suite."],
  ["¿Qué recibo después de comprar?", "Recibes el producto digital correspondiente según su página de Gumroad: archivos, templates, documentación y materiales incluidos en esa oferta."],
  ["¿Puedo usar los recursos en proyectos comerciales?", "Depende de la licencia de cada producto. Antes de publicar o redistribuir un recurso, revisa las condiciones de licencia incluidas en la oferta."],
  ["¿Puedo modificar los archivos?", "La posibilidad de editar y adaptar los archivos depende del producto y de su licencia. La página de cada producto debe indicar las condiciones aplicables."],
  ["¿Necesito saber programar?", "No para toda la suite. Algunos productos son visuales o de contenido; otros, como los recursos SaaS, sí requieren conocimientos técnicos para aprovecharlos plenamente."],
  ["¿Hay actualizaciones?", "Sólo cuando estén incluidas explícitamente en la oferta del producto. No mostramos 'lifetime updates' como promesa general hasta que exista esa condición comercial."],
  ["¿Dónde se realiza la compra?", "Los botones de compra llevan a la página correspondiente de Gumroad. Las URLs se gestionan en un único archivo: src/gumroad.js."]
];

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });

function Header({ menu, setMenu }) {
  const links = [["products","Productos"],["how","Cómo funciona"],["bundle","Completo"],["faq","FAQ"]];
  return (
    <header className="nav">
      <div className="wrap navin">
        <a className="logo" href="#" aria-label="NGOVIO"><span>◆</span> NGOVIO</a>
        <nav className={menu ? "navlinks open" : "navlinks"}>
          {links.map(([id,label]) => (
            <button key={id} onClick={() => { scrollTo(id); setMenu(false); }}>{label}</button>
          ))}
        </nav>
        <div className="navactions">
          <button className="buytop" onClick={() => buy("17")}>Ver NGOVIO Complete <ArrowRight /></button>
        </div>
        <button className="hamb" onClick={() => setMenu(!menu)} aria-label={menu ? "Cerrar menú" : "Abrir menú"}>
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap">
      <div className="heroCopy">
        <div className="pill"><span /> LA SUITE DIGITAL PARA BUILDERS</div>
        <h1>17 productos.<br />Un solo objetivo:<br /><em>crear y crecer más rápido.</em></h1>
        <p className="heroLead">
          Plantillas, recursos de IA, UI, marketing, SaaS y productividad para construir, lanzar y hacer crecer tus proyectos online sin empezar cada pieza desde cero.
        </p>
        <div className="heroBtns">
          <button className="primary" onClick={() => scrollTo("products")}>Explorar los 17 productos <ArrowRight /></button>
          <button className="ghost" onClick={() => buy("17")}>Ver NGOVIO Complete <Sparkles /></button>
        </div>
        <div className="proofStrip">
          <span>17 productos</span><i /> <span>Pago único por producto</span><i /> <span>Acceso digital</span>
        </div>
      </div>

      <div className="heroVisual" aria-hidden="true">
        <div className="glow" />
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="heroPanel panelBack p1"><small>02</small><strong>LANDING<br />PAGE PACK</strong><span>CONVERT</span></div>
        <div className="heroPanel panelBack p2"><small>03</small><strong>AI PROMPTS<br />LIBRARY</strong><span>CREATE</span></div>
        <div className="heroPanel mainPanel">
          <small>NG</small><div className="mark">◆</div><strong>NGOVIO</strong><b>COMPLETE<br /><span>SUITE</span></b><em>17 PRODUCTOS</em>
        </div>
        <div className="heroPanel panelBack p3"><small>11</small><strong>SAAS<br />BOILERPLATE</strong><span>BUILD</span></div>
        <div className="heroPhone"><div>NGOVIO</div><strong>BUILD<br /><span>FASTER</span></strong><small>CREATE · LAUNCH · GROW</small></div>
      </div>
    </section>
  );
}

function ValueSection() {
  const items = [
    ["01","CREAR","Empieza con bases editables en lugar de construir cada pieza desde cero.","Templates · UI · Career"],
    ["02","LANZAR","Convierte una idea en una oferta y ponla delante de tus primeros usuarios.","Launch · SaaS"],
    ["03","VENDER","Mejora tu mensaje, contenido, email y experiencia de compra.","Marketing · CRO · Creator"],
    ["04","IA","Acelera ideación, contenido y desarrollo con recursos preparados.","Prompts · Guides · Vibe Coding"],
    ["05","ORGANIZAR","Centraliza procesos y recursos para trabajar con menos fricción.","Productivity"]
  ];
  return (
    <section id="how" className="valueSection wrap">
      <div className="sectionHead">
        <div><div className="eyebrow">POR QUÉ NGOVIO</div><h2>No es una colección de archivos.<br /><em>Es un punto de partida.</em></h2></div>
        <p className="headCopy">Elige la pieza que necesitas hoy y vuelve a la suite cuando tu proyecto necesite el siguiente paso.</p>
      </div>
      <div className="valueGrid">
        {items.map(([n,t,d,tags]) => <article className="valueCard" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><small>{tags}</small></article>)}
      </div>
    </section>
  );
}

function ProductsSection() {
  const [filter,setFilter] = useState("Todos");
  const visible = useMemo(() => filter === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter), [filter]);
  return (
    <section id="products" className="section wrap">
      <div className="sectionHead">
        <div><div className="eyebrow">01 — 17</div><h2>Elige por objetivo,<br /><em>no por tecnología.</em></h2><p>Explora la suite según lo que quieres conseguir ahora.</p></div>
        <span className="count">{visible.length} {visible.length === 1 ? "producto" : "productos"}</span>
      </div>
      <div className="filters" role="tablist" aria-label="Filtrar productos">
        {CATEGORIES.map(c => <button key={c} className={filter===c ? "active":""} onClick={() => setFilter(c)}>{c}</button>)}
      </div>
      <div className="productGrid">
        {visible.map(p => <Product key={p.id} p={p} />)}
      </div>
    </section>
  );
}

function Product({ p }) {
  const bundle = p.id === "10" || p.id === "17";
  return (
    <article className={"product " + (bundle ? "featured":"")}>
      <div className="productTop"><span className="num">{p.id}</span><span className="cat">{p.tag}</span></div>
      <div className="icon">✦</div>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="audience"><b>Ideal para</b><span>{p.audience}</span></div>
      <div className="productBottom"><span>{bundle ? "BUNDLE" : p.cat.toUpperCase()}</span><button onClick={() => buy(p.id)}>Ver producto <ArrowRight /></button></div>
    </article>
  );
}

function BundleSection() {
  const perks = ["17 productos en una sola oferta","Archivos y documentación según cada producto","Condiciones de licencia visibles en cada oferta","Acceso digital tras la compra"];
  return (
    <section id="bundle" className="bundle wrap">
      <div className="bundleGlow" />
      <div className="bundleText">
        <div className="eyebrow">NGOVIO COMPLETE</div>
        <h2>Si quieres la suite,<br /><em>llévatela completa.</em></h2>
        <p>Una sola oferta para acceder a los 17 productos de NGOVIO. Sin inventar métricas ni promesas: lo que incluye la oferta queda definido en la página de compra y su licencia.</p>
        <ul>{perks.map(x => <li key={x}><Check />{x}</li>)}</ul>
      </div>
      <div className="priceCard">
        <span className="popular">OFERTA COMPLETA</span>
        <div className="priceLabel">Precio actual</div>
        <div className="price">€<b>199</b></div>
        <div className="once">Pago único · precio sujeto a configuración de Gumroad</div>
        <button className="primary wide" onClick={() => buy("17")}>Quiero NGOVIO Complete <ArrowRight /></button>
        <div className="guarantee"><ShieldCheck /> Revisa el contenido y licencia de la oferta antes de comprar.</div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="proofSection wrap">
      <div className="proofIntro"><div className="eyebrow">HECHO PARA BUILDERS</div><h2>Menos tiempo buscando.<br /><em>Más tiempo haciendo.</em></h2><p>NGOVIO está pensado para que puedas pasar de la idea a la ejecución con materiales concretos y reutilizables.</p></div>
      <div className="proofList">
        {[
          ["01","Empieza con una base","Elige una plantilla, sistema, guía o kit que encaje con tu objetivo."],
          ["02","Adáptalo a tu proyecto","Edita, combina y personaliza el recurso según las condiciones de su licencia."],
          ["03","Pasa al siguiente nivel","Cuando tu proyecto crezca, vuelve a la suite y añade la pieza que necesitas."]
        ].map(([n,t,d]) => <div className="proofItem" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
      </div>
    </section>
  );
}

function FaqSection() {
  const [open,setOpen] = useState(null);
  return (
    <section id="faq" className="section wrap faq">
      <div className="center"><div className="eyebrow">FAQ</div><h2>Antes de comprar</h2><p>Las respuestas importantes, sin letra pequeña escondida.</p></div>
      {FAQS.map(([q,a],i) => <div className="faqrow" key={q}><button onClick={() => setOpen(open===i?null:i)} aria-expanded={open===i}><span>{q}</span><ChevronDown className={open===i?"rot":""}/></button>{open===i && <p>{a}</p>}</div>)}
    </section>
  );
}

function FinalCta() {
  return <section className="finalCta wrap"><div><div className="eyebrow">TU SIGUIENTE PASO</div><h2>Deja de empezar<br /><em>desde cero.</em></h2><p>Explora los productos y elige la pieza que tu proyecto necesita ahora.</p></div><div className="finalActions"><button className="primary" onClick={() => scrollTo("products")}>Explorar productos <ArrowRight /></button><button className="ghost" onClick={() => buy("17")}>Ver NGOVIO Complete <Sparkles /></button></div></section>;
}

function Footer() {
  return <footer><div className="wrap foot"><div><a className="logo" href="#"><span>◆</span> NGOVIO</a><p>Digital tools for modern builders.</p></div><div><b>Explorar</b><a href="#products">Productos</a><a href="#how">Cómo funciona</a><a href="#bundle">NGOVIO Complete</a><a href="#faq">FAQ</a></div><div><b>Comprar</b><button onClick={() => buy("17")}>NGOVIO Complete</button><button onClick={() => buy("10")}>Ultimate Bundle</button></div><div><b>Legal</b><span>Licencia según producto</span><span>Términos y reembolsos</span><span>Privacidad</span></div></div><div className="wrap footBottom"><span>© {new Date().getFullYear()} NGOVIO. Todos los derechos reservados.</span><span>Las condiciones comerciales definitivas deben coincidir con las ofertas publicadas.</span></div></footer>;
}

function StickyBuy() {
  return <div className="stickyBuy"><span><b>NGOVIO Complete</b><small> · 17 productos</small></span><button onClick={() => buy("17")}>Ver oferta €199 <ArrowRight /></button></div>;
}

function App() {
  const [menu,setMenu] = useState(false);
  return <div><Header menu={menu} setMenu={setMenu}/><main><Hero/><ValueSection/><ProductsSection/><BundleSection/><ProofSection/><FaqSection/><FinalCta/></main><Footer/><StickyBuy/></div>;
}

createRoot(document.getElementById("root")).render(<App />);
