import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/theme";

const useStyles = makeStyles( {
    button: {
        padding: '10px 18px 10px 10px !important',
        color: `${colors.pistachioLT} !important`,
        border: `1.5px ${colors.pistachioLT} solid !important`,
        '&:hover': {
            color: `${colors.pistachioL} !important`,
            border: `1.7px ${colors.pistachioL} solid !important`,
        },
        [theme.breakpoints.up('md')]: {
            padding: '10px 20px !important',
            minWidth: '108px !important',
        },

    }
})

export default useStyles;
