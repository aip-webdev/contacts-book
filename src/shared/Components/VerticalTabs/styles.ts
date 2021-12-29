import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles({
    box: {
        flexGrow: '1',
        backgroundColor: colors.pistachioL,
        display: 'flex',
        height: '94vh'
    },
    tabs: {
        borderRight: 1,
        borderColor: colors.pine,
        minWidth: '20vw',
        '& .Mui-selected': {
            color: colors.pine,
            borderColor: colors.pine,
        },
        '& .MuiTabs-indicator': {
            backgroundColor: colors.pine07
        },
        '& .MuiButtonBase-root': {
            fontWeight: '700',
            fontSize: ' 1rem',
            lineHeight: '1.5'
        }
    }
})

export default useStyles;
