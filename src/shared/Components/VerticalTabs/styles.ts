import {makeStyles} from "@mui/styles";
import colors from "../../../utils/enums/colors";

const useStyles = makeStyles( {
    box: {
        flexGrow: '1',
        backgroundColor: colors.pistachio,
        display: 'flex',
        height: '93vh'
    },
    tabs: {
        borderRight: 1,
        borderColor: colors.pine,
        minWidth: '20vw',
        '& .Mui-selected': {
          color: colors.pine,
            borderColor: colors.pine,
        },
        '& .MuiTabs-indicator': {
          backgroundColor: colors.pine07
        },
    }
})

export default useStyles;
