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
          '&::-webkit-scrollbar': {
            paddingRight: '10px',
            width: '7px',
            height: '4px',
            zIndex: '100',
            backgroundColor: colors.pistachioLT,
          },

          '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.4)',
            backgroundColor: colors.pistachioL,
          },

          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.4)',
            backgroundColor: colors.pistachioLT,
          },

          '&::-webkit-scrollbar-thumb:hover': {
            borderRadius: '3px',
            backgroundColor: colors.pine
          },
          'a': {
            textDecoration: "none",
            color: 'rgba(18, 69, 89, 0.8)'
          }
        },
      }
    }
  },
});

export default theme;
