import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/theme";

const useStyles = makeStyles({
    title: {
        color: colors.pine08,
        fontSize: '1rem !important',
        fontWeight: '600 !important',
        letterSpacing: '0.015em  !important',
        margin: '0 0 1px 0 !important',
        alignSelf: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.1rem !important',
            fontWeight: '500  !important',
            letterSpacing: '0.015em  !important',
        },
    },

})

export default useStyles;
