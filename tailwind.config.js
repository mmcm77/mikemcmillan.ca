import daisyUI from "daisyui";

const config = {
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      daisyui: {
        themes: [
          {
            mytheme: {
              // theme name
              primary: "#ff0000", // primary color
              "primary-focus": "#ff0000", // primary color - focus
              "primary-content": "#ffffff", // primary color - content
              secondary: "#000000", // secondary color
              "secondary-focus": "#000000", // secondary color - focus
              "secondary-content": "#ffffff", // secondary color - content
              base: "#000000", // base color
            },
          },
        ],
      },
    },
  },
  plugins: [daisyUI],
};

export default config;
