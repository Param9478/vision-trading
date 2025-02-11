/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,ts,tsx}'];
export const theme = {
  extend: {
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out',
    },
  },
};
export const plugins = [];
