import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero":"url('/ball.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },      keyframes:{
        slidedown:{
          from:{
            opacity:'0',
            transform: 'translateY(-50px)' 
          },
          to:{
opacity:'1',
transform: 'translateY(0)' 
          }
        },slideup:{
          from:{
            opacity:'0',
            transform: 'translateY(50px)' 
          },
          to:{
opacity:'1',
transform: 'translateY(0)' 
          }
        },
        slideleft:{
          from:{
            opacity:'0',
            transform: 'translateX(1000px)' 
          },
          to:{
opacity:'1',
transform: 'translateX(0)' 
          }
        },
        slideright:{
          from:{
            opacity:'0',
            transform: 'translateX(-1000px)' 
          },
          to:{
opacity:'1',
transform: 'translateX(0)' 
          }
        }


      },


      animation:{
        'slidein1':'slidedown 2s ease forwards',
        'slidein2':'slidedown 4s ease forwards',
        'slidein3':'slideup 6s ease forwards',
        'slideL':'slideleft 2s ease forwards ',
        'slideR':'slideright 2s ease forwards'
      }
    },
  },
  plugins: [],
};
export default config;
