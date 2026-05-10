const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm_mobile: '300px',
      lg_mobile: '350px',
      xl_mobile: '420px',
      sm_tablet: '600px',
      md_tablet: '750px',
      lg_tablet: '992px',
      sm_desktop: '1206px',
      md_desktop: '1350px',
      xm_desktop: '1500px',
      lg_desktop: '1900px'
    },
    extend: {
      fontFamily: {
        "Onest": ['Onest', 'sans-serif'],
      }

    },
  },
  plugins: [
    flowbite.plugin()
  ],
}
