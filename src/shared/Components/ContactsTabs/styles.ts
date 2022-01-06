import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/theme";

const useStyles = makeStyles({
    box: {
        flexGrow: '1',
        backgroundColor: colors.pistachioL,
        display: 'flex',
        height: '93vh'
    },
    tabs: {
        borderRight: 1,
        borderColor: colors.pine,
        minWidth: '150px',
        maxWidth: '150px',
        [theme.breakpoints.up('md')]: {
            minWidth: '180px',
            maxWidth: '180px',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '230px',
            maxWidth: '260px',
        },
        [theme.breakpoints.up('xl')]: {
            minWidth: '260px',
            maxWidth: '260px',
        },
        '& .Mui-selected': {
            color: `${colors.pine} !important`,
            borderColor: `${colors.pine} !important`,
        },
        '& .MuiTabs-indicator': {
            backgroundColor: colors.pine07
        },
        '& .MuiButtonBase-root': {
            color: `${colors.pine} !important`,
            fontWeight: '700 !important',
            fontSize: ' 1rem !important',
            lineHeight: '1.5 !important',
            display: 'inline-flex',
            flexDirection: 'row',
            '& .MuiOutlinedInput-root': {
                opacity: '1',
                color: `${colors.pistachioL} !important`,
                backgroundColor: `transparent !important`,
            },

        }
    },
})

export default useStyles;
