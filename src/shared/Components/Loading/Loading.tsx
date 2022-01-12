import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import {Modal} from "../Modal";

export const Loading = React.memo(() => {
    return (
        <Modal>
            <CircularProgress disableShrink/>
        </Modal>
    )
})

