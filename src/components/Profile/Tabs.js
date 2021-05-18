import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Favorites from './Favorites';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 717,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Edit Profile" {...a11yProps(1)} />
        <Tab label="Add Recipe" {...a11yProps(2)} />
        <Tab label="My Recipes" {...a11yProps(3)} />
        <Tab label="Favorites" {...a11yProps(4)} /* onClick={()=>{
                    history.push(`/Tabs/Favorites`)
                }} *//>
        {/* <Tab label="Cooked" {...a11yProps(5)} />
        <Tab label="Ready to Cook" {...a11yProps(6)} />
        <Tab label="My Fridge" {...a11yProps(7)} /> */}
          </Tabs>
      <TabPanel value={value} index={0}>
        <Profile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EditProfile/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      Add Recipe
      </TabPanel>
      <TabPanel value={value} index={3}>
      My Recipes
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Favorites/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Faded>Cooked</Faded>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Faded>Ready to Cook</Faded>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <Faded>My Fridge</Faded>
      </TabPanel>
    </div>
  );
}

const Faded = styled.div`
  color: red;
  text-transform: bold;
`