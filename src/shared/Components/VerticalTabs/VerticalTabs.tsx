import React from 'react';
import useStyles from "./styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabPanel} from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles()
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <Box className={classes.box}>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
        >
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Contacts" {...a11yProps(1)} />

        </Tabs>
        <TabPanel value={value} index={0}>
          My profile
        </TabPanel>
        <TabPanel value={value} index={1}>
          My contacts
        </TabPanel>

      </Box>
  );
}
