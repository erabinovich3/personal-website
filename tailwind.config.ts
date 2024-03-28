import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0378a6",
                    secondary: "#049dbf",
                    accent: "#f2b705",
                    neutral: "#202426",
                    "base-100": "#ffffff",
                    info: "#0891b2",
                    success: "#5C8B5D",
                    warning: "#FDD26C",
                    error: "#E94601",
                },
            },
        ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
