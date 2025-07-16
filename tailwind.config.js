/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry : ['zentry', 'sanf-serif'],
        general : ['general', 'sanf-serif'],
        'circular-web' : ['circular-web', 'sanf-serif'],
        'robert-medium' : ['robert-medium', 'sanf-serif'],
        'robert-regular' : ['robert-regular', 'sanf-serif'],
        
        colors: {
          blue: {
            50 : '#DFDFF0',
            75 : '#DFDFF2',
            100: '#F0F2FA',
            200: '#010101',
            300: '#4FB7DD',
          },

          violet: {
            300 : '#5724FF',
          },

          yellow : {
            100 : '#8E983F',
            300 : '#EDFF66',
          },
    },
  },
  plugins: [],
}

}
}