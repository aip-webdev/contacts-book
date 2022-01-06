import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles({
    addingBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        color: colors.pine,
        marginLeft: '10px',
        width: '50px',
        '&:hover': {
            backgroundColor: colors.black03,
            borderRadius: '50%',
        }
    },
})

export default useStyles;
