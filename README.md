# 🕹️ Rockade — Landing Page

> **Un bar con alma de recreativa y corazón rockero.**

Landing page basada en la **investigación real de [rockade.es](https://rockade.es/)**: paleta, tipografías, fotos, copy, direcciones, teléfonos y horarios extraídos del sitio original.

## 🎯 Brand Identity (extraída del sitio real)

### Paleta de color
Tomada del CSS de Elementor de rockade.es (`/wp-content/uploads/elementor/css/post-51.css`):

| Token                | Color       | Uso                              |
| -------------------- | ----------- | -------------------------------- |
| `rockade-bg`         | `#1F1F1F`   | Fondo principal (oscuro real)    |
| `rockade-cyan`       | `#04BCBC`   | Acento primario — turquesa neón  |
| `rockade-cyanDeep`   | `#04848C`   | Variante oscura cyan             |
| `rockade-magenta`    | `#D800BD`   | Acento secundario — fucsia neón  |
| `rockade-magentaDeep`| `#A0008C`   | Variante oscura magenta          |
| `rockade-text`       | `#F0F0F0`   | Texto principal                  |
| `rockade-textMuted`  | `#D1D1D1`   | Texto secundario                 |

### Tipografías
Las **mismas** que carga la web original:
- **Bebas Neue** — display, headlines (condensada, mayúsculas)
- **Gothic A1** — sans secundario
- **Roboto** — body / cuerpo

### Imágenes
Se usan directamente las imágenes oficiales de `rockade.es/wp-content/uploads/`:
- Logo: `2025/07/logo_rockade.webp`
- Cócteles hero: `2025/07/ROCKADE-COCTELES-2.png`
- Galería de ambiente: `2025/08/IMAGENES-WEB-ROCKADE-{5,6,7,8}-768x960.webp`
- Diseño street food: `2025/08/Diseno-sin-titulo-*.webp`

### Datos reales

| Local              | Dirección                                       | Teléfono           |
| ------------------ | ----------------------------------------------- | ------------------ |
| Rockade La Latina  | Calle del Almendro, 9, 28005 Madrid             | +34 618 31 94 02   |
| Rockade Malasaña   | Calle del Marqués de Sta. Ana, 11, 28004 Madrid | +34 699 15 94 46   |
| Rockade Bilbao     | Alameda de Recalde, 11, 48009 Bilbao            | +34 623 46 47 44   |

Navegación real: `Inicio · Carta · Eventos · Sobre nosotros · Contacto · Reserva`

CTAs reales: `HAZ TU RESERVA · VER CARTA · VER EL MENÚ · CONTÁCTANOS`

## ⚡ Stack

- **Astro 6** — SSG, cero JS por defecto
- **Tailwind CSS 3** — utility-first + tokens neón reales
- **TypeScript** — strict mode
- **Google Fonts** — Bebas Neue · Gothic A1 · Roboto

## 🚀 Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run preview
```

## 🗂️ Estructura

```
src/
├── components/
│   ├── Navbar.astro              · menú real + CTA "Haz tu reserva"
│   ├── Hero.astro                · slogan real + img cócteles oficial
│   ├── FeatureCard.astro
│   ├── ExperienciaArcade.astro   · sección "Quiénes somos" + marquee
│   ├── CartaSection.astro        · tabs por local (Bilbao/Latina/Malasaña)
│   ├── EventosSection.astro      · cumpleaños / reuniones / teambuilding
│   ├── SedeCard.astro            · tarjeta con horarios y WhatsApp
│   ├── SedesSection.astro        · 3 locales con datos reales
│   └── Footer.astro
├── layouts/Layout.astro          · SEO + Schema.org Restaurant
├── pages/index.astro
├── styles/global.css             · tokens neón cyan/magenta + scanlines
└── env.d.ts
```

## 🧠 Notas

- Las URLs de imágenes apuntan directamente al CDN de rockade.es. Antes de producción conviene descargarlas a `/public/images/` y migrar a `<Image>` de Astro para optimización (AVIF/WebP automático).
- Los emails y redes sociales no se publican en el sitio original, por lo que están omitidos del footer.
- Los items de carta son representativos del estilo del local (street food + cervezas + cócteles); la carta real debe pegarse cuando el cliente la facilite.
