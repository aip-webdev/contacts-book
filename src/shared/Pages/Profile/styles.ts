import colors from '../../../utils/enums/colors';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles( {
    total: {
        marginBottom: '5rem',
        color: colors.pistachioLT,
        alignSelf: 'center'
    },
    appBar: {
        backgroundColor: colors.pine,
        height: '7vh'
    },
    box: {
        color: colors.black,
        fontWeight: '500'
    },

    toolbar: {
        padding: '1% 10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default useStyles;
