import { Stack, Typography } from '@mui/material';
const AboutMyself = () => {
  return (
    <Stack direction='column' sx={{ alignItems: 'center' }}>
      <Typography
        sx={{
          fontFamily: 'Heebo ,sans-serif',
          fontSize: '3.6rem',
          marginBottom: '1.8rem',
          textTransform: 'uppercase',
          lineHeight: '3.8rem',
        }}
      >
        About myself
      </Typography>
      <Typography
        sx={{
          fontSize: '1.8rem',
          color: 'primary.600',
          fontWeight: '400',
          lineHeight: '2.8rem',
          whiteSpace: 'pre-line',
          width: '70%',
        }}
      >
        Originally from a SysAdmin/DevOps field, but for the last several years,
        I have found my passion in web application architecture and development.
        Currently working for Elpha Secure - New-York based cyber security
        company as a Front-End Engineer.
      </Typography>
      <Typography
        sx={{
          fontSize: '1.8rem',
          color: 'primary.600',
          fontWeight: '400',
          lineHeight: '2.8rem',
          whiteSpace: 'pre-line',
          marginTop: '2rem',
          width: '70%',
        }}
      >
        My strong skills of creating powerful and dynamic web applications
        maintains clean code which lets me create scalable projects and
        features. Being a Front-End engineer, I am using bleeding edge
        technologies and increasing my skill set, which helps me build faster,
        more dynamic, and more secure projects with better user experience.
      </Typography>
    </Stack>
  );
};

export default AboutMyself;
