/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{'sm':'640px', 'md': '768px', 'lg': '1024px'},
    extend: {
      colors: { 
        Royal:'#00B2CB',Royal1:'#98D6DF' ,Brown:'#CB907C', Brown1:'#EBD0C3' 
    },
   
  },
  plugins: [],
}
}

