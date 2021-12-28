import colors from "../../../utils/enums/colors";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles( {
    container: {
        display: 'grid',
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
        marginBottom: '2rem',
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
    },
})

export default useStyles;
