import React from 'react';
import Box from "@mui/material/Box";
import useStyles from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
      <div
          className={classes.tabPanel}
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
      >
        {value === index && (
            <Box className={classes.box}>
              {children}
            </Box>
        )}
      </div>
  )
}
