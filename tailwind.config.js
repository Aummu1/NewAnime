/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // ค่าของ --background ควรมีการกำหนดใน CSS
        foreground: "var(--foreground)",  // ค่าของ --foreground ควรมีการกำหนดใน CSS
      },
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],  // ฟอนต์สำรองที่ควรระบุ
      serif: ['ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      display: ['Oswald', 'sans-serif'],  // การกำหนดฟอนต์ที่ต้องการใช้
      body: ['"Open Sans"', 'sans-serif'],  // ฟอนต์หลักของเนื้อหา
    },
  },
  plugins: [],
};
