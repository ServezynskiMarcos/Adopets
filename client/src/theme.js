import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
export default extendTheme({
  colors: {
    primary: "#5271FF",
    secondary: "#FF5168",
    tertiary: "#607cff",
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode("gray.200", "gray.800")(props),
      },
    }),
  },
  fonts: {
    primary: `'Cabin Condensed', sans-serif`,
    secondary: `'Palanquin', sans-serif`,
    tertiary: `'Poppins', sans-serif`,
    
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 9999,
      },
      sizes: {
        lg: {
          fontSize: "sm",
          width: "200px",
          height: "40px"
        },
      },
      variants: {
        solid: (props) => ({
          backgroundColor: `secondary`,
          color: mode("white", undefined)(props),
          _hover: {
            backgroundColor: `white`,
            color: "secondary",
          },
        }),
      },
    },
  },
});
