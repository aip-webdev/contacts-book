import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles( {
    formControl: {
        minWidth: '140px !important',
        margin: '0 auto 0 0 !important',
        position: 'relative',
        minHeight: '50px',
    },
    textField: {
        '& .MuiInputLabel-root, .MuiOutlinedInput-root': {
            color: colors.pistachioLT,
            '&.Mui-focused': {
                color: colors.pistachioL,
                borderColor: colors.pistachioLT,
            }
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {
            color: `${colors.pistachioLT} !important`,
            borderColor: `${colors.pistachioLT} !important`,
            borderWidth: '1.5px !important',
            '&:-webkit-autofill': {
                '-webkit-box-shadow': `0 0 0 100px ${colors.pine} inset`,
                '-webkit-text-fill-color': `${colors.pistachioLT} !important`,
            }
        },
        '& input:webkit-autofill': {
            color: `${colors.pistachioL} !important`
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline, fieldset, .MuiOutlinedInput-input': {
            color: `${colors.pistachioL} !important`,
            borderColor: `${colors.pistachioL} !important`,
            borderWidth: '1.7px',
        },
        '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
            color: `${colors.pistachioL} !important`,
            borderColor: `${colors.pistachioL} !important`,
            borderWidth: '1.7px'
        },
        '& .MuiOutlinedInput-input': {
            paddingRight: '35px'
        }
    },
    searchIcon: {
        color:colors.pistachioLT,
        position: 'absolute',
        right: '5%',
        top: '50%',
        transform: 'translateY(-50%)'
    },
})

export default useStyles;
