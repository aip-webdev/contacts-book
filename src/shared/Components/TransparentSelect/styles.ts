import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles({
    formControl: {
        color: colors.pine,
        flex: '0 1 auto',
        '& #demo-simple-select-standard-label': {
            color: colors.pine,
        },
    }
})

export default useStyles;
