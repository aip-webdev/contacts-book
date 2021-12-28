import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles( {
    button: {
        color: colors.pistachioLT,
        borderColor: colors.pistachioLT,
        '&:hover': {
            color: colors.pistachioL,
            borderColor: colors.pistachioL
        }
    }
})

export default useStyles;
