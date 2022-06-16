export const globalStyles = {
  colors: {
    brand: {
      100: "#204F4F",//green
      200: "#000000",//black
      300: "#FFFFFF", //white
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: "linear-gradient(90deg, #ffffff, #FFE8CC)",
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "orange.500",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
