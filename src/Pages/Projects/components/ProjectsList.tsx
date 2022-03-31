import Devcon from '../../../assets/img/devcon.png';
import Weather from '../../../assets/img/weather.png';
import Starbucks from '../../../assets/img/starbucks.png';
import Python from '../../../assets/img/python.png';

export const ProjectsList = [
  {
    name: 'Developer Connector',
    shortDescription: 'Social network for developers',
    description:
      'Social network to help employers find developers, connect with other developrers, featuring Node.js backend, React/Redux frontend.',
    github: 'https://github.com/ViktorSheverdin/devNetwork',
    demoURL: 'https://protected-river-13776.herokuapp.com/',
    img: Devcon,
    technologies: ['React', 'Node.js', 'Python'],
  },
  {
    name: 'Weather forecast',
    shortDescription: 'Classical weather forecast project',
    description:
      'Weather forecast based on your location or search. Utilizes free weather API.',
    github: 'https://github.com/ViktorSheverdin/weather_application',
    demoURL: 'https://yetanotherweatherapp.herokuapp.com/',
    img: Weather,
    technologies: ['React'],
  },
  {
    name: 'Starbucks Clone',
    shortDescription: 'Starbucks Clone',
    description:
      'Group project for one of the courses at post-secondary. Website that copies Starbucks application, featuring usage of autocomplete, Google Maps, as well as saving favoirite locations.',
    github: 'https://github.com/ViktorSheverdin/StarbucksApp',
    demoURL: 'https://starbuckscloneapp.herokuapp.com/',
    img: Starbucks,
    technologies: ['JavaScript', 'Node.js'],
  },
  {
    name: 'Stocks Monitor',
    shortDescription:
      'Program that lets you monitor your selected quotes and emails you on stock change',
    description:
      'Projects that was build to study stock market and help monitoring stocks from the wishlist. Program will email you with changes about stock fluctuation for a specified percentage amount.',
    github: 'https://github.com/ViktorSheverdin/stocks_monitor',
    demoURL: '',
    img: Python,
    technologies: ['Python'],
  },
];
