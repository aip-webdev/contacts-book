import { createTheme } from "@mui/material/styles";
import colors from "../utils/enums/colors";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontWeight: '400',
          color: colors.pistachioLT,
          backgroundColor: colors.pineLight,
        },
      }
    }
  }
});

export default theme;
