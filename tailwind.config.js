/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/lib/esm/**/*.js',
 ],
  theme: {
    extend: {
      fontFamily: {
        "ibm" : ['IBM Plex Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

