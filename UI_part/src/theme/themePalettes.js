import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: "#FF8800", // Updated primary color to orange
    },
    mainColor: "#1A0F05", // Darker shade for contrast
    accent: {
      orangish: "#FFA726", // A bright accent orange
      yellowish: "#FFC107", // A soft complementary yellow
      reddish: "#FF7043", // A warm red-orange shade
    },
    sidebar: {
      background: "#FFF3E0", // Darker burnt orange for sidebar
      hoverBg: "#7A3E14", // A brighter hover background
      hoverMobile: "#9C5A2C", // Complementary shade for mobile
      textColor: "#FFDBB5", // Softer text color for contrast
    },
    status: {
      red: "#E64A19", // Deep red for errors
      orange: "#FF9800", // Strong orange for warnings
      green: "#FFB74D", // Warmer yellow-orange green alternative
    },

    ...(mode === "light"
      ? {
          // Palette values for light mode
          background: {
            default: "#F8F8F8", // Soft warm orange background
            paper: "#FFFFFF", // Neutral paper
          },
          text: {
            primary: "#8D4A00", // Dark orange for readability
            secondary: grey[700],
          },
          divider: "rgba(255, 136, 0, 0.1)", // Soft orange divider
          chatBox: "#FFE0B2", // Muted orange for chat box
        }
      : {
          // Palette values for dark mode
          background: {
            default: "#F8F8F8", // Darker burnt orange background
            paper: "#FFFFFF", // Paper with orange tones
          },
          text: {
            primary: "#8D4A00", // Adjusted for dark mode readability
            secondary: "grey[700]",
          },
          divider: "rgba(255, 136, 0, 0.1)", // Stronger orange divider
          chatBox: "#FFE0B2", // Darker chat box for dark mode
        }),
  },
});
