/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    borderRadius: {
      none: "0px",
      xs: "2px",
      full: "50%",
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      padding: {
        "safe-top": "env(safe-area-inset-top)",
      },
      gridTemplateColumns: {
        cartCard: "minmax(60px, 120px) 152px minmax(60px, 120px) 80px",
        addition:
          "80px minmax(280px, 496px) minmax(180px, 286px) minmax(180px, 286px)",
        "addition-lg": "minmax(250px, 392px) 80px minmax(270px,440px)",
        "addition-md": "minmax(100px, 276px) 40px minmax(170px,340px)",
        "collections-lg":
          "minmax(200px, 288px) minmax(200px, 280px) minmax(250px, 344px)",
        "collections-md":
          "minmax(100px, 288px) minmax(40px, 80px) minmax(140px, 288px)",
        "instagram-lg":
          "minmax(200px, 288px) minmax(200px, 288px) 30px minmax(200px, 288px)",
        "instagram-md":
          "minmax(150px, 240px) minmax(130px, 240px) 30px minmax(50px, 160px)",
        aboutProducts:
          "minmax(320px, 392px) 80px minmax(200px, 288px) minmax(130px, 184px) minmax(130px, 184px)",
        aboutProductsLg:
          "minmax(150px, 212px) minmax(130px, 184px) 80px minmax(330px, 416px)",
        aboutHistory: "minmax(400px,728px) minmax(200px,472px)",
        aboutReviews:
          "minmax(300px, 424px) minmax(300px, 424px) minmax(100px, 128px)",
        aboutReviewsLg: "minmax(300px, 424px) 72px minmax(300px, 424px)",
        partnersChoose:
          "minmax(250px, 348px) minmax(20px, 132px) minmax(130px, 216px) minmax(20px, 132px) minmax(250px, 348px)",
        partnersChooseLg:
          "minmax(250px, 296px) 0px minmax(130px, 296px) 0px minmax(250px, 296px)",
        partnersSuggestFirst:
          "minmax(220px, 288px) minmax(220px, 288px) minmax(50px, 128px) minmax(200px, 264px) minmax(120px, 184px)",
        partnersSuggestSecond:
          "minmax(220px, 296px) minmax(50px, 128px) minmax(212px, 280px) minmax(300px, 448px)",
      },
      gridTemplateRows: {
        addition: "408px 232px",
        "addition-lg": "repeat(2, 640px)",
        "addition-md": "480px 376px",
        "collections-lg": "272px 174px 226px 40px",
        "collections-md": "440px 136px 272px 304px",
        "collections-sm": "288px 64px 230px 152px",
        "instagram-lg": "288px 288px 312px",
        "instagram-md": "168px 240px 288px",
        aboutProducts: "264px 104px 280px",
        aboutProductsLg: "640px 264px 94px",
        aboutReviews: "repeat(4, 120px)",
        aboutReviewsLg: "repeat(2, 272px)",
      },
      cursor: {
        default: "url('/icons/system/cursor-arrow.svg') 2 2, default",
        pointer: "url('/icons/system/cursor-pointer.svg') 2 2, default",
      },
      zIndex: {
        "behind-header": "50",
        "behind-header-2": "60",
        header: "100",
        110: "110",
        120: "120",
        130: "130",
        140: "140",
        "over-header": "150",
      },
      boxShadow: {
        header: "0px 2px 10px 0px rgba(15, 25, 40, 0.2)",
        around: "0px 0px 70px -30px rgba(0, 0, 0, 1)",
        feature:
          " 0px -2px 10px 0px rgba(255, 255, 255, 0.3) inset, 0px 20px 30px 0px rgba(48, 48, 48, 0.25)",
        value: "0px 0px 20px -6px rgba(17, 17, 18, 0.2)",
        choose: "inset 0 0 120px rgba(255, 255, 255, 0.2)",
        "elevation-1": "0px 4px 4px 0px rgba(17, 17, 18, 0.2)",
        "elevation-2": "0px 4px 8px 0px rgba(37, 40, 43, 0.2)",
        "elevation-3": "0px 8px 16px 0px rgba(17, 17, 18, 0.2)",
        "elevation-4":
          "0px 8px 20px 8px rgba(17, 17, 18, 0.16), 0px -8px 20px -8px rgba(17, 17, 18, 0.16)",
        "elevation-5": "0px 20px 30px 0px rgba(0, 0, 0, 0.1)",
        "elevation-6": "0px 6px 12px 0px rgba(0, 0, 0, 0.1)",
      },
      blur: {
        xs: "2px",
        lg: "16px",
      },
      backgroundImage: {
        "cookie-gradient":
          "linear-gradient(360deg, #111112 0%, rgba(17, 17, 18, 0.5) 210.44%)",
        "choose-gradient":
          "linear-gradient(180deg, rgba(17, 17, 18, 0) 0%, #111112 72.14%)",
        "partnership-banner":
          "linear-gradient(250.2deg, rgba(252, 252, 255, 0) 61.39%, #FCFCFF 70.12%),linear-gradient(179.99deg, rgba(252, 252, 255, 0) 76.85%, #FCFCFF 122.87%);",
        banner:
          "linear-gradient(0deg, rgba(17, 17, 18, 0.6), rgba(17, 17, 18, 0.6)),linear-gradient(180deg, rgba(17, 17, 18, 0) 0%, #111112 100%);",
        "radial-gradient":
          "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        "gradient-4":
          "linear-gradient(180deg, #FCFCFF8D -22.24%, rgba(0, 0, 0, 0) 100%)",
        "gradient-7": "linear-gradient(360deg, #111112 0%, #F0F0F3 98.1%)",
        "account-breadcrumbs":
          "linear-gradient(90deg,rgba(17, 17, 18, 1) 0%, rgba(17, 17, 18, 1) 60%, rgba(17, 17, 18, .75) 75%, rgba(17, 17, 18, 1) 100%)",
        "order-card-help":
          "linear-gradient(180deg, rgba(243, 243, 244, 0) 0%, rgba(228, 231, 235, 0.6) 100%)",
        "footer-texture": "url('/img/footer-texture.png')",
        "help-gradient":
          "linear-gradient(-90deg, rgba(0, 0, 0, 0.442308) 31.8%, #000000 61.72%)",
        "checkout-order-gradient":
          "linear-gradient(90deg, rgba(243, 243, 244, 0) 32.98%, #E4E7EB 100%)",
        "checkout-login-suggest-gradient":
          "linear-gradient(180deg, rgba(17, 17, 18, 0.3) 0%, rgba(17, 17, 18, 0.6) 100%)",
        "about-main-gradient":
          "linear-gradient(180.38deg, rgba(0, 0, 0, 0) 1.92%, #000000 98.38%);",
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
        akira: ["var(--font-akira)"],
      },
      colors: {
        main: "#111112",
        white: {
          DEFAULT: "#FCFCFF",
          secondary: "#DEDEE9",
        },
        red: "#F93232",
        yellow: "#FFB82E",
        green: "#439F6E",
        "light-disabled": "#F0F0F3",
        "dark-disabled": "#CACED4",
        gray: {
          DEFAULT: "#9EA4AE",
          dark: "#3F4753",
          middle: "#6F757E",
          light: "#E4E7EB",
        },
        bg: {
          glass: "rgba(255, 255, 255, 0.3)",
        },
        button: {
          primary: {
            bg: {
              DEFAULT: "#111112",
              hover: "#3F4753",
              focused: "#6F757E",
              active: "#27303E",
              click: "#0F1928",
            },
            text: {
              DEFAULT: "#FCFCFF",
              hover: "#EBEBF1",
              focused: "#FCFCFF",
              active: "#FCFCFF",
              click: "#FFFFFF",
            },
          },
          secondary: {
            bg: {
              hover: "#111112",
              focused: "#E5E8EE",
              active: "#E5E8EE",
              click: "#27303E",
            },
            text: {
              DEFAULT: "#111112",
              hover: "#FCFCFF",
              focused: "#111112",
              active: "#111112",
              click: "#F3F3F4",
            },
          },
          tertiary: {
            bg: {
              hover: "#111112",
              focused: "#E5E8EE",
              active: "#E5E8EE",
              click: "#9FA3A9",
            },
            text: {
              DEFAULT: "#111112",
              hover: "#E5E5E6",
              focused: "#111112",
              active: "#111112",
              click: "#27303E",
            },
          },
          bg: {
            disabled: "#F3F3F4",
          },
          text: {
            disabled: "#CFD1D4",
          },
        },
        status: {
          success: "#439F6E",
          warning: "#FFB82E",
          error: "#F93232",
          "muted-error": "#FDE6E6",
          "muted-warning": "#FFFBF4",
          "muted-success": "#F1FFF4",
        },
        stroke: {
          black: "#111112",
          grey: "#9FA3A9",
          success: "#C0ECD4",
          warning: "#FFEAC1",
          error: "#FF7E7E",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundColor:
        '({ theme }) => ({\\n        ...theme("colors.bg"),\\n        ...theme("colors.button.primary.bg"),\\n      })',
      textColor:
        '({ theme }) => ({\\n        ...theme("colors.text"),\\n        ...theme("colors.button.primary.text"),\\n      })',
      borderColor:
        '({ theme }) => ({\\n        ...theme("colors.stroke"),\\n        ...theme("colors.button.primary.stroke"),\\n      })',
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "collapsible-down": {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: 0,
          },
        },
        "accordion-down": {
          "0%": {
            height: "0",
          },
          "100%": {
            flexShrink: "1",
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      transitionDuration: {
        5000: "5000ms",
      },
      animation: {
        "collapsible-down": "collapsible-down 0.3s ease-out",
        "collapsible-up": "collapsible-up 0.3s ease-out",
        "accordion-down":
          "accordion-down 0.2s ease-out, shrink-from-0-to-1 0.2s ease-out 0.2s forwards",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addComponents, theme }) {
      addComponents({
        ".text-h1": {
          fontSize: "64px",
          lineHeight: "76.8px",
          fontWeight: "700",
          [`@media (max-width: ${theme("screens.lg")})`]: {
            fontSize: "48px",
            lineHeight: "56px",
          },
          // [`@media (max-width: ${theme("screens.sm")})`]: {
          //   fontSize: "40px",
          //   lineHeight: "48px",
          // },
        },

        ".text-h1-table": {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: "600",
        },

        // Text/Headlines

        ".text-h1Akira": {
          fontFamily: "var(--font-akira)",
          fontWeight: "700",
          fontSize: "96px",
          lineHeight: "104px",

          [`@media (max-width: ${theme("screens.lg")})`]: {
            fontSize: "62px",
            lineHeight: "62px",
          },
          [`@media (max-width: ${theme("screens.sm")})`]: {
            fontSize: "40px",
            lineHeight: "48px",
          },
        },
        ".text-h2": {
          fontSize: "48px",
          lineHeight: "56px",
          fontWeight: "700",
          textTransform: "uppercase",

          [`@media (max-width: ${theme("screens.lg")})`]: {
            fontSize: "32px",
            lineHeight: "40px",
          },
          [`@media (max-width: ${theme("screens.sm")})`]: {
            fontSize: "24px",
            lineHeight: "32px",
          },
        },
        ".text-h2Akira": {
          fontFamily: "var(--font-akira)",
          fontWeight: "700",
          fontSize: "48px",
          lineHeight: "56px",
        },
        ".text-h3": {
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: "600",
          textTransform: "uppercase",

          [`@media (max-width: ${theme("screens.lg")})`]: {
            fontSize: "24px",
            lineHeight: "32px",
          },

          [`@media (max-width: ${theme("screens.sm")})`]: {
            fontSize: "18px",
            lineHeight: "28px",
          },
        },
        ".text-h3Akira": {
          fontFamily: "var(--font-akira)",
          fontWeight: "800",
          fontSize: "112px",
          lineHeight: "120px",

          [`@media (max-width: ${theme("screens.lg")})`]: {
            fontSize: "72px",
            lineHeight: "72px",
          },

          [`@media (max-width: ${theme("screens.sm")})`]: {
            fontSize: "40px",
            lineHeight: "48px",
          },
        },
        ".text-h4": {
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "600",
          textTransform: "uppercase",

          [`@media (max-width: ${theme("screens.lg")})`]: {
            fontSize: "20px",
            lineHeight: "28px",
          },

          [`@media (max-width: ${theme("screens.sm")})`]: {
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        ".text-h5": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "600",
          textTransform: "uppercase",

          [`@media (max-width: ${theme("screens.sm")})`]: {
            fontSize: "14px",
            lineHeight: "24px",
          },
        },
        ".text-h5-italic": {
          fontSize: "18px",
          fontStyle: "italic",
          lineHeight: "24px",
          fontWeight: "600",
        },

        // Text/Body

        ".text-body1": {
          fontSize: "16px",
          lineHeight: "24px",
          textTransform: "uppercase",
        },
        ".text-body2": {
          fontSize: "16px",
          lineHeight: "24px",
        },

        // Text/Fields

        ".text-title": {
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
        },
        ".text-title-em": {
          fontWeight: 400,
          fontSize: "1em",
          lineHeight: "1.5em",
        },
        ".text-description": {
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
        },
        ".text-placeholder": {
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
        },

        // Text/Button

        ".text-button-large": {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: 500,
          textTransform: "uppercase",
        },
        ".text-button-normal": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
          textTransform: "uppercase",
        },
        ".text-button-medium": {
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 500,
          textTransform: "uppercase",
        },
        ".text-button-small": {
          fontSize: "14px",
          lineHeight: "16px",
          textTransform: "uppercase",
        },
        ".text-button-xs": {
          fontSize: "14px",
          lineHeight: "16px",
        },

        // Table
        ".text-table-header": {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: 600,
          textTransform: "uppercase",
        },

        ".text-table-cell": {
          fontSize: "14px",
          lineHeight: "16px",
        },

        // Button/Hover

        ".primary-svg-hover": {
          "& svg": {
            fill: theme("colors.button.primary.text.hover"),
          },
        },
        ".primary-svg-focused": {
          "& svg": {
            fill: theme("colors.button.primary.text.focused"),
          },
        },
        ".primary-svg-active": {
          "& svg": {
            fill: theme("colors.button.primary.text.active"),
          },
        },

        ".secondary-svg-hover": {
          "& svg": {
            fill: theme("colors.button.secondary.text.hover"),
          },
        },
        ".secondary-svg-focused": {
          "& svg": {
            fill: theme("colors.button.secondary.text.focused"),
          },
        },
        ".secondary-svg-active": {
          "& svg": {
            fill: theme("colors.button.secondary.text.active"),
          },
        },

        ".tertiary-svg-hover": {
          "& svg": {
            fill: theme("colors.button.tertiary.text.hover"),
          },
        },
        ".tertiary-svg-focused": {
          "& svg": {
            fill: theme("colors.button.tertiary.text.focused"),
          },
        },
        ".tertiary-svg-active": {
          "& svg": {
            fill: theme("colors.button.tertiary.text.active"),
          },
        },
        ".svg-disabled": {
          "& svg": {
            fill: theme("colors.button.text.disabled"),
          },
        },

        // Other

        ".my-section": {
          marginTop: "136px",
          marginBottom: "136px",

          [`@media (max-width: ${theme("screens.xl")})`]: {
            marginTop: "96px",
            marginBottom: "96px",
          },
          [`@media (max-width: ${theme("screens.md")})`]: {
            marginTop: "64px",
            marginBottom: "64px",
          },
          [`@media (max-width: ${theme("screens.sm")})`]: {
            marginTop: "48px",
            marginBottom: "48px",
          },
        },

        ".mt-section": {
          marginTop: "136px",

          [`@media (max-width: ${theme("screens.xl")})`]: {
            marginTop: "96px",
          },
          [`@media (max-width: ${theme("screens.sm")})`]: {
            marginTop: "48px",
          },
        },

        ".mb-section": {
          marginBottom: "136px",

          [`@media (max-width: ${theme("screens.xl")})`]: {
            marginBottom: "96px",
          },
          [`@media (max-width: ${theme("screens.sm")})`]: {
            marginBottom: "48px",
          },
        },

        ".header-hover": {
          borderBottom: 0,
          boxShadow: "none",
        },

        ".gradient-border": {
          border: "1px solid",
          borderImageSource:
            "linear-gradient(225deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))",
          borderImageSlice: "1",
        },

        ".icon-glass-hover": {
          background: theme("colors.bg.glass"),
          borderRadius: "3px",
        },
      });
    },
  ],
};
