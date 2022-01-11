import { Stack, Typography } from '@mui/material';
const AboutMyself = () => {
  return (
    <Stack direction='column'>
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
          fontSize: '1.6rem',
          color: 'primary.600',
          fontWeight: '400',
          lineHeight: '2.2rem',
          whiteSpace: 'pre-line',
        }}
      >
        {`
              I have been a system administrator for the past three years with a
              diploma on Computer Information Technology from BCIT. Throughout
              the years, I have worked with Houle's IT team deploying various
              custom scripts and application to automate tasks and enhance
              business processes. I am passionate about automation of tasks,
              building complex structures, learning and implementing new
              technologies. I am very proficient with SCCM and Carbon Black
              security systems and end-user support.
              
              Lately, I have been
              dedicating majority of my time on furthering my knowledge on MERN
              stack (MongoDB, Express, React.js, Node,js), Full-Stack
              development focusing my interest mainly on Front-End development
              and intend to use this knowledge to serve as a valuable asset for
              Front-End developer. I am a detailed-oriented, hardworking and
              skilled professional that aspires to work with clean, easy to
              maintain code, knowledge of MVC model, and experience with lastest
              JS ES6 functionality such as arrow functions and object
              destructuring.`}
      </Typography>
    </Stack>
  );
};

export default AboutMyself;
