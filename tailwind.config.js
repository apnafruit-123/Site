/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Headline & Brand Fonts
        archivo: ['Archivo Black', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],

        // Modern UI / Body Fonts
        manrope: ['Manrope', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],

        // Semantic aliases (KEEPING YOUR INTENT)
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },

      colors: {
        // Brand Color Palette - Premium Fresh Fruit & Juice
        'brand-primary': '#1A8F4E',
        'brand-soft': '#34C759',
        'brand-deep': '#0F3D2E',
        'fruit-yellow': '#F5C518',
        'yellow-soft': '#FFF6D8',

        // Neutrals
        'pure-white': '#FFFFFF',
        'off-white': '#FAFAF7',
        'text-gray': '#4A4A4A',

        // Card & UI Accents
        'card-hover': '#E6F4EA',
        'link-light': '#DFF5E8',

        // WhatsApp
        'whatsapp-green': '#25D366',
        'whatsapp-dark': '#1EBE5D',

        // Secondary greens for transitions
        'green-dark': '#157A42',
        'yellow-dark': '#E0B400',

        // Legacy colors
        brand: {
          DEFAULT: '#1A8F4E',
          dark: '#157A42',
        },
        forest: {
          DEFAULT: '#0F3D2E',
          dark: '#0A2820',
        },
        herbal: {
          DEFAULT: '#34C759',
          light: '#5a9369',
          dark: '#2a8f47',
        },
        sage: {
          DEFAULT: '#E6F4EA',
          light: '#f0f7f2',
        },
        cream: {
          DEFAULT: '#FAFAF7',
        },
        gold: {
          DEFAULT: '#F5C518',
          light: '#f5d43f',
          dark: '#E0B400',
        },
        stone: {
          DEFAULT: '#4A4A4A',
        },
        'bright-white': {
          DEFAULT: '#FFFFFF',
        },
      },

      letterSpacing: {
        luxury: '0.02em',
      },

      boxShadow: {
        premium: '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        glow: '0 0 20px rgba(26, 143, 78, 0.3)',
        'green-glow': '0 0 20px rgba(26, 143, 78, 0.25)',
        'gold-glow': '0 0 20px rgba(245, 197, 24, 0.3)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
