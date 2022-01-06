import {makeStyles} from "@mui/styles";
import colors from "../../../../utils/enums/colors";


const useStyles = makeStyles({
    addingTab: {
        padding: '0 29px !important',
        color: `${colors.pine} !important`,
        opacity: '1 !important',
    },
    tabInput: {
        width: 'auto',
        minWidth: '100%',
        maxWidth: '100%',
        opacity: '1',
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
        '& input:-internal-autofill-selected': {
            color: `${colors.pistachioL} !important`,
            backgroundColor: `transparent !important`,
        },
        '& input[placeholder]': {
            color: `${colors.pine} !important`,
            backgroundColor: `transparent !important`,
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
