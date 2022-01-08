import {makeStyles} from "@mui/styles";
import colors from "../../../../utils/enums/colors";
import theme from "../../../../styles/theme";

const useStyles = makeStyles({
    addingBtn: {
        backgroundColor: 'transparent',
        border: 'none',
        color: `${colors.pine} !important`,
        width: '50px',
        // @ts-ignore
        position: 'absolute !important',
        bottom: '0 !important',
        right: '30% !important',
        [theme.breakpoints.up('md')]: {
            marginLeft: '10px',
            position: 'relative !important',
            bottom: 'initial !important',
            right: 'initial !important',
            '&:hover': {
                backgroundColor: colors.black03,
                borderRadius: '50% !important',
            }
        },
    },
    openInputFieldsButton: {
        color: `${colors.pine08} !important`,
        minWidth: '40px !important',
        border: `2.5px ${colors.pine08} solid !important`,
        borderRadius: '50% !important',
        height: '40px',
        fontWeight: '700 !important',
        padding: '0 !important',
        textAlign: 'center',
        lineHeight: '40px !important',
        margin: '0 !important',
        transition: 'all 0.25s linear !important',
        '&:hover': {
            border: `12.5px transparent solid !important`,
        },

    },
    removeBtn: {
        // @ts-ignore
        position: 'absolute !important',
        bottom: '4% !important',
        left: '24% !important',
        [theme.breakpoints.up('md')]: {
            position: 'relative !important',
            bottom: 'initial !important',
            left: 'initial !important',
        },
        lineHeight: '40px',
        border: 'none !important',
        margin: '0 !important',
        padding: '0 !important',
        color: `${colors.pine} !important`,
        backgroundColor: `transparent !important`,
        textAlign:"center",
        '&:hover': {
            color: `${colors.red} !important`,
        },

    },
    stack: {
        display: 'flex !important',
        position: 'relative',
        margin: '0 1em 0 0',
        paddingBottom: '3em',
        flexFlow: 'column wrap !important',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            margin: '0 1em 1em 0',
            justifyContent: 'space-between !important',
            flexFlow: 'row nowrap !important',
            alignItems: 'baseline !important',
            alignSelf: 'center',
        },
    },

    tabInput: {
        backgroundImage: 'none !important',
        backgroundColor: 'transparent!important',
        color: `${colors.pine} !important`,
        opacity: '1',
        '& .MuiOutlinesInput-root': {
            opacity: '1',
        },
        '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {
            color: colors.pine,
            border: 'none',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '1rem',
            height: '1rem',
            lineHeight: '1.5',
            padding: '0',
        },
        '& input[placeholder]': {
            color: colors.pine,
            margin: '0 0 0.5em 0',
            [theme.breakpoints.up('md')]: {
                textAlign: 'center',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '700',
                fontSize: '1rem',
                lineHeight: '1.5',
                margin: '0',
            },
        }
    }
})

export default useStyles;
