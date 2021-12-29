import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/theme";

const useStyles = makeStyles( {
    button: {
        padding: '10px 18px 10px 10px;',
        color: colors.pistachioLT,
        border: `1.5px ${colors.pistachioLT} solid`,
        '&:hover': {
            color: colors.pistachioL,
            border: `1.7px ${colors.pistachioL} solid`,
        },
        [theme.breakpoints.up('md')]: {
            mpadding: '10px 20px',
            minWidth: '108px',
        },

    }
})

export default useStyles;
