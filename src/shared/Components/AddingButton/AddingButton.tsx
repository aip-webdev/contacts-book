import React from 'react';
import {Check} from "@mui/icons-material";
import useStyles from "./styles";

interface IAddingButton {
  onClickAddingBtn: () => void
}

export function AddingButton({onClickAddingBtn}: IAddingButton) {
  const classes = useStyles()
  return (
      <button
          type='button'
          className={classes.addingBtn}
          onClick={onClickAddingBtn}
      >
        <Check/>
      </button>
  )
}
