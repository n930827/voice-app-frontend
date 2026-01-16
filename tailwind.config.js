/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 背景色：不是純白，而是像宣紙或石灰牆的顏色
        paper: "#F9F8F6",
        surface: "#FFFFFF",

        // 文字色：避免純黑，使用炭灰或深岩灰
        ink: {
          900: "#2C2C2C", // 標題
          500: "#5F5C58", // 內文
          300: "#A8A29E", // 輔助/提示
        },

        // 主色調：低飽和的泥土/岩石色
        earth: {
          50: "#F5F4F2",
          100: "#E7E5E4",
          200: "#D6D3D1",
          300: "#B5B0AD", // 新增：用於細線邊框
          400: "#96908A", // 新增：用於 hover 狀態
          500: "#78716C",
          600: "#57534E",
          700: "#44403C", // 新增：深色互動
          800: "#292524", // 新增：深色背景
          900: "#1C1917",
        },

        // 點綴色：極淡的枯茶色或霧霾藍（用於狀態）
        accent: "#D4D4D8",
      },
      fontFamily: {
        // 如果能引入 Noto Serif 或文鼎字體更有味道，這裡先用無襯線體保持現代感
        sans: ['"Inter"', '"Noto Sans TC"', "sans-serif"],
      },
      boxShadow: {
        // 極簡陰影：非常擴散、非常淡，甚至沒有
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
