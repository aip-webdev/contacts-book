import { createTheme } from "@mui/material/styles";
import colors from "../utils/enums/colors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs:0,
      sm:320,
      md:640,
      lg:1040,
      xl:1440
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden',
          fontWeight: '400',
          color: colors.pistachioLT,
          backgroundColor: colors.pistachio,
          width: '100vw',
          overflow: 'hidden'
        },
      }
    }
  },
});

export default theme;
