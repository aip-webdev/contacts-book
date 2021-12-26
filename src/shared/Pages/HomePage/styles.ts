import colors from '../../../utils/enums/colors';

const styles = {
    total: {
        marginBottom: '5rem',
        color: colors.darkGray,
        alignSelf: 'center'
    },
    appBar: {
        backgroundColor: '#0d4379'
    },
    box: {
        display: 'grid',
        placeItems: 'center',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    button: {
        color: 'rgba(214, 209, 209, 0.85)',
        borderColor: 'rgba(214, 209, 209, 0.85)',
        '&:hover': {
            color: 'rgba(214, 209, 209, 1)',
            borderColor: 'rgba(214, 209, 209, 1)'
        }
    },
    formControl: {
        width: '20vw',
        margin: '0',
        position: 'relative'
    },
    searchIcon: {
        color:'rgba(214, 209, 209, 0.75)',
        position: 'absolute',
        right: '5%',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    textField: {
        '& .MuiInputLabel-root': {
            color: 'rgba(214, 209, 209, 0.75)',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            color: 'rgba(214, 209, 209, 0.75)',
            borderColor: 'rgba(214, 209, 209, 0.75)',
            borderWidth: '1.5px'
        },
        '& .Mui-focused *': {
            color: 'rgba(214, 209, 209, 1)',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(214, 209, 209, 1)',
            borderWidth: '1.7px',
        },
        '& .Mui-focused .MuiInputBase-root': {
            borderColor: 'rgba(214, 209, 209, 1)',
            borderWidth: '1.7px',
        },
        '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(214, 209, 209, 1)',
            borderWidth: '1.7px',
        },
        '& .MuiOutlinedInput-input': {
            paddingRight: '35px'
        }
    },
    toolbar: {
        padding: '1% 10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}

export default styles;
