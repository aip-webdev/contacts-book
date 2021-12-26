const styles = {
  block: {
    display: 'flex',
    flexDirection: 'column',
  },
  firstButton: {
    color: '#0d4379',
    backgroundColor: 'rgba(214, 209, 209, 0.75)',
    '&:hover': {
      backgroundColor: 'rgba(214, 209, 209, 0.75)',
      boxShadow: '0px 1px 1px -1px rgba(150, 150, 150, 0.84), 0px 1px 1px 0px rgba(214, 209, 209, 1), 0px 1px 1px 0px rgba(179, 172, 172, 0.67)',
    }
  },
  secondButton: {
    color: 'rgba(214, 209, 209, 0.85)',
    borderColor: 'rgba(214, 209, 209, 0.85)',
    '&:hover': {
      color: 'rgba(214, 209, 209, 1)',
      borderColor: 'rgba(214, 209, 209, 1)'
    },
    padding: '6px 0',
    width: '100%',
  },
  span: {
    fontSize: '1 rem',
    color: 'rgba(214, 209, 209, 0.75)',
    margin: '15px auto 7px',
  }
}

export default styles;
