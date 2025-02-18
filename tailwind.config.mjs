/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pageSection/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          heading: "#222222",
          subheading: "#403D39",
          text: "#555555",
          bannerBgColor: "#F3F2EB",

          button: "#BDBD34",
          dashboardBg: "#2746DD",
        },
      },
    },
  },
  plugins: [],
};
