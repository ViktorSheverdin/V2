import { useState } from 'react';
import { Box, Grid, Stack, Typography, Tabs, Tab } from '@mui/material';
import ProjectsGrid from './components/ProjectsGrid';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: '2.8rem' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const projects = [
    { name: 'Developer Connector' },
    { name: 'Developer Connector' },
  ];

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.200',
        paddingY: '12rem',
      }}
    >
      <Stack sx={{ width: '70%', justifyContent: 'center' }}>
        <Stack sx={{ width: '100%', alignItems: 'center' }}>
          <Typography>My latest featured projects</Typography>
          {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='All' {...a11yProps(0)} />
              {/* <Tab label='Item One' /> */}
              <Tab
                label='React'
                {...a11yProps(1)}
                sx={{ marginLeft: '2.8rem' }}
              />
              {/* <Tab label='Item Two' /> */}
              <Tab
                label='Python'
                {...a11yProps(2)}
                sx={{ marginLeft: '2.8rem' }}
              />
              <Tab
                label='Flutter'
                {...a11yProps(3)}
                sx={{ marginLeft: '2.8rem' }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ProjectsGrid filters={'React'} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item four
          </TabPanel>
          {/* <Grid container>
        <Grid item>
          <Stack>
            <Typography>Developer Connector</Typography>
          </Stack>
        </Grid>
      </Grid> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Projects;
