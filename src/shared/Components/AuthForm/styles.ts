import colors from "../../../utils/enums/colors";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles( {
    container: {
        display: 'grid !important',
        placeItems: 'center',
        height: '100vh',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.pine,
        padding: '70px',
        borderRadius: '3%',
        fontWeight: '500',
        width: '344px',
        height: '460px',
        boxShadow: '0 0 12px rgb(0 0 0 / 50%)',
    },
    input: {
        marginBottom: '2rem !important',
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
    },
})

export default useStyles;
