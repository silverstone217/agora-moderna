import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: '#0d1117',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
            },
            code: {
              fontFamily: 'monospace',
              fontWeight: 'normal',
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
