/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    transform: true,
  },
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        darkBackground: "#121212", // Sfondo scuro
        heroBackground: "#141414", // Sfondo meno scuro
        lightText: "#E0E0E0", // Testo chiaro
        // primary: "#915EFE", // Colore principale (link, pulsanti)
        primary: "#8A62FF", // Colore principale (link, pulsanti)
        // primaryHover: "#7C4DFF", // Hover per link/pulsanti
        primaryHover: "#6A4CFE", // Hover per link/pulsanti
        // error: "#F44336", //? Colore errore
        // success: "#4CAF50", //? Colore successo
      },
      transform: {
        "rotate-45": "rotate(45deg)",
        "-rotate-45": "rotate(-45deg)",
      },
    },
    perspective: {
      "2500px": "2500px",
      "900px": "900px",
    },
    translate: {
      "z-0": "translateZ(0)",
      "z-100px": "translateZ(100px)",
      "y--5%": "-5%",
    },
    rotate: {
      "x-25": "rotateX(25deg)",
    },
    boxShadow: {
      custom: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
    },
  },
  plugins: [],
};
