import {makeStyles} from "@mui/styles";
import colors from "../../../../utils/enums/colors";

const useStyles = makeStyles({
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
    stack: {
        display: 'flex !important',
        margin: '0 1em 1em 0',
        justifyContent: 'space-between !important',
        flexFlow: 'row nowrap !important',
        alignItems: 'baseline !important',
        alignSelf: 'center',
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
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '1rem',
            lineHeight: '1.5',
        }
    }
})

export default useStyles;
