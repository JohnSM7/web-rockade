/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta REAL extraída de rockade.es (Elementor global tokens)
        rockade: {
          bg: '#1F1F1F',          // fondo principal real del sitio
          bgDeep: '#141414',      // variante más oscura para profundidad
          surface: '#262626',     // tarjetas / surfaces
          surfaceAlt: '#2E2E2E',
          // Cyan/Turquesa neon real
          cyan: '#04BCBC',
          cyanDeep: '#04848C',
          // Magenta/Fucsia neon real
          magenta: '#D800BD',
          magentaDeep: '#A0008C',
          magentaSoft: '#D500BA',
          // Textos reales
          text: '#F0F0F0',
          textMuted: '#D1D1D1',
          textDim: '#7A7A7A',
          line: '#3A3A3A',
        },
      },
      fontFamily: {
        // Tipografías REALES detectadas en el CSS de producción
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Gothic A1"', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
        slab: ['"Roboto Slab"', 'serif'],
      },
      boxShadow: {
        neonCyan:
          '0 0 6px #04BCBC, 0 0 22px rgba(4,188,188,0.55), 0 0 60px rgba(4,188,188,0.30)',
        neonMagenta:
          '0 0 6px #D800BD, 0 0 22px rgba(216,0,189,0.55), 0 0 60px rgba(216,0,189,0.30)',
        neonDual:
          '0 0 18px rgba(216,0,189,0.45), 0 0 40px rgba(4,188,188,0.35)',
        card:
          '0 8px 30px rgba(0,0,0,0.55), 0 0 0 1px rgba(4,188,188,0.08) inset',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow:
              '0 0 4px #fff, 0 0 11px #04BCBC, 0 0 19px #04BCBC, 0 0 40px #04BCBC, 0 0 80px #04BCBC',
            opacity: '1',
          },
          '20%, 24%, 55%': { textShadow: 'none', opacity: '0.55' },
        },
        glow: {
          '0%, 100%': {
            textShadow:
              '0 0 6px rgba(4,188,188,0.85), 0 0 18px rgba(4,188,188,0.55), 0 0 32px rgba(216,0,189,0.45)',
          },
          '50%': {
            textShadow:
              '0 0 10px rgba(216,0,189,0.95), 0 0 24px rgba(216,0,189,0.65), 0 0 40px rgba(4,188,188,0.55)',
          },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        coinSpin: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        flicker: 'flicker 4.5s infinite',
        glow: 'glow 3.5s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        scanline: 'scanline 7s linear infinite',
        marquee: 'marquee 32s linear infinite',
        slideUp: 'slideUp 0.8s ease-out both',
        coin: 'coinSpin 2.4s linear infinite',
      },
      backgroundImage: {
        'rockade-gradient':
          'radial-gradient(circle at 18% 18%, rgba(216,0,189,0.28), transparent 42%), radial-gradient(circle at 82% 30%, rgba(4,188,188,0.28), transparent 45%), radial-gradient(circle at 50% 95%, rgba(160,0,140,0.20), transparent 55%)',
      },
    },
  },
  plugins: [],
};
