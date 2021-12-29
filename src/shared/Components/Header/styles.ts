import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";
import theme from "../../../styles/theme";

const useStyles = makeStyles({
    appBar: {
        backgroundColor: colors.pine,
        height: '6vh',
        position: 'fixed',
        width: '100%',
    },
    toolbar: {
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: ' 320px',
        maxWidth: '320px',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            padding: '0',
            minWidth: '640px',
            maxWidth: '640px',
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: '1000px',
            maxWidth: '1000px',
        },
        [theme.breakpoints.up('xl')]: {
            minWidth: '1400px',
            maxWidth: '1400px',
        }
    },
    title: {
        color: colors.pistachioLT,
        fontSize: '1.35rem',
        fontWeight: '500',
        letterSpacing: '0.08em',
        minWidth: '20vw',
        textAlign: 'center'
    }
})

export default useStyles;