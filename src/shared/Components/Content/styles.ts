import {makeStyles} from "@mui/styles"
import theme from "../../../styles/theme";
const useStyles = makeStyles({
    content: {
        padding: '6vh 0 0 0',

        minWidth: ' 320px',
        maxWidth: '320px',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
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
    }
})

export default useStyles;

