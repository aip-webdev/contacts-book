import {makeStyles} from "@mui/styles";

import theme from "../../../styles/theme";

const useStyles = makeStyles({
    modalBack: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        display: 'grid',
        placeItems: 'center',
        zIndex: '10000',
        height: 'max-content',
        [theme.breakpoints.up('md')]: {
            height: '100%',
            paddingTop: '190px',
        }
    },
    modal: {
        backgroundColor: 'white',
        minWidth: '320px',
        maxWidth: '320px',
        padding: '45px 25px',
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            maxWidth: '1024px',
        },
        @include
        media -desktop
{
    maxWidth: '1540px',
}
}
