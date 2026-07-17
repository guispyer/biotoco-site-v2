import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--biotoco-canvas)',
        surface: 'var(--biotoco-surface)',
        surfaceStrong: 'var(--biotoco-surface-strong)',
        fg: 'var(--biotoco-text)',
        fgMuted: 'var(--biotoco-text-muted)',
        borderSubtle: 'var(--biotoco-border-subtle)',
        accent: 'var(--biotoco-accent)',
        biotoco: {
          azul_profundo: '#174059',
          verde_vital: '#61A657',
          cinza_apoio: '#8F99A6',
          verde_escuro: '#547342',
          off_white: '#EDEBDE',
          off_white_claro: '#F5F3EA',
          areia: '#E5E0D0',
          azul_texto: '#3D5468',
          azul_texto_2: '#54626F',
          bege_terra: '#B09E80',
          terracota: '#BF5C4A',
          marrom_profundo: '#73403B',
        },
        hairline: 'rgb(23 64 89 / .12)',
        'hairline-dark': 'rgb(237 235 222 / .18)',
      },
      fontFamily: {
        display: ['Kufam', 'Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        biotocoSm: '6px',
        biotocoMd: '10px',
        biotocoLg: '14px',
        biotocoXl: '20px',
      },
      boxShadow: {
        biotoco1: '0 0 0 1px rgba(143,153,166,0.25)',
        biotoco2: '0 4px 20px rgba(23,64,89,0.10)',
        biotoco3: '0 10px 30px rgba(23,64,89,0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
