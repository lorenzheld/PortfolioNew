/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                highlight: "#6366f1",
                textSide: "#ffffff",
                textMain: "#111827",
                background: "#0f172a"
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"]
            }
        }
    },
    plugins: [],
}
