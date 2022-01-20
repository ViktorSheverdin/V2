import { useState } from 'react';
import { Box, Stack, Typography, Tabs, Tab } from '@mui/material';
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
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='All' {...a11yProps(0)} />
              <Tab
                label='React'
                {...a11yProps(1)}
                sx={{ marginLeft: '2.8rem' }}
              />
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
            <ProjectsGrid filters={[]} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProjectsGrid filters={['React']} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ProjectsGrid filters={['Python']} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ProjectsGrid filters={['Flutter']} />
          </TabPanel>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Projects;
