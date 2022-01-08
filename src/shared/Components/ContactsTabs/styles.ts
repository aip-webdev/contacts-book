import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/theme";

const useStyles = makeStyles({
    box: {
        backgroundColor: colors.pistachioL,
        display: 'flex',
        flexDirection: 'column',
        height: '93vh',
        flexGrow: '1',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',


        },

    },
    closeTabButton: {
        top: '50%',
        color: '#124559 !important',
        right: 0,
        // @ts-ignore
        position: 'absolute !important',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent !important',
        zIndex: 100,
    },
    tabs: {
        borderRight: 1,
        borderColor: colors.pine,
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
    tab: {
        position: 'relative'
    }
})

export default useStyles;
