import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles( {
    formControl: {
        minWidth: '140px',
        margin: '0',
        position: 'relative',
        marginRight: '40px',
    },
    textField: {
        '& .MuiInputLabel-root, .MuiOutlinedInput-root': {
            color: colors.pistachioLT,
            '&.Mui-focused': {
                color: colors.pistachioL,
            }
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-input': {
            color: colors.pistachioLT,
            borderColor: colors.pistachioLT,
            borderWidth: '1.5px',
            '&:-webkit-autofill': {
                '-webkit-box-shadow': `0 0 0 100px ${colors.pine} inset`,
                '-webkit-text-fill-color': colors.pistachioLT
            }
        },
        '& input:webkit-autofill': {
            color: `${colors.pistachioLT} !important`
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline, fieldset, .MuiOutlinedInput-input': {
            color: colors.pistachioL,
            borderColor: colors.pistachioL,
            borderWidth: '1.7px',
        },
        '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
            color: colors.pistachioL,
            borderColor: colors.pistachioL,
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
