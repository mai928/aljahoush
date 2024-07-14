/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	
  ],
  theme: {
    extend: {
      fontFamily:{
        'Outfit':['Outfit','sans-serif'],
        'IntoLightTw0':['Shadows-Into-Light-Two','cursive'],
        'QuickSand':["Quicksand", 'sans-serif']
       
      },
      colors:{
        primary_color:'#f7c35f',
        secondary_color:"#49a760",
        color_heading:'#04000b',
        dark_Green:'#1f4e3d',
        paragraph_color:'#666666',

      }
    },
  },
  plugins: [],
}

