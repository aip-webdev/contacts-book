import React from 'react';
import useStyles from './styles';
import {CancelPresentation} from "@mui/icons-material";
import {Button} from "@mui/material";

interface IRemoveButton {
  onClickRemoveBtn: () => void
}

export function RemoveButton({onClickRemoveBtn}: IRemoveButton) {

  const classes = useStyles()
  return (
      <Button type='button' className={classes.removeBtn} onClick={onClickRemoveBtn} startIcon={<CancelPresentation/>}/>
  );
}
