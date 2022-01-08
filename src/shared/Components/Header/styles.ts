import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/theme";

const useStyles = makeStyles({
    '& .MuiPaper-root': {
        backgroundColor: colors.pine,
        height: '7vh',
        position: 'fixed',
        width: '100vw',
    },
    appBar: {
        backgroundColor: `${colors.pine} !important`,
        height: '7vh',
        // @ts-ignore
        position: 'fixed !important',
        width: '100vw',
        zIndex: 1000
    },
    link: {
        textDecoration: 'none',
    },
    toolbar: {
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '320px',
        padding: '0 10px !important',
        width: '100vw',
        margin: '0 auto',
        [theme.breakpoints.up('xl')]: {
            width: '1400px',
        },
    },
    title: {
        color: colors.pistachioLT,
        fontSize: '1.35rem !important',
        fontWeight: '500 !important',
        letterSpacing: '0.08em !important',
        minWidth: '20vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'none',
    },
    title__icon: {
        marginRight: '5px'
    }
})

export default useStyles;
