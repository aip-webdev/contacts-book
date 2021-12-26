const styles = {
    container: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0d4379',
        padding: '70px',
        borderRadius: '3%',
        width: '344px',
        height: '460px',
        boxShadow: '0 0 12px rgb(0 0 0 / 50%)',
    },
    input: {
        marginBottom: '2rem',
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
        '& .MuiOutlinedInput-input:focus': {
            borderColor: 'rgba(214, 209, 209, 1)',
            borderWidth: '1.7px',
        }
    },
}

export default styles
