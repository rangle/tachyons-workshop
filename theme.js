import { hack } from 'mdx-deck/themes';
import syntaxTheme from 'react-syntax-highlighter/styles/prism/ghcolors';

const green = '#42ff71';

export default {
  ...hack,
  fontSizes: [16, 24, 32, 48, 64, 96, 128],
  colors: {
    text: '#fff',
    background: '#212121',
    link: green,
    pre: '#212121',
    preBackground: '#fff',
    code: '#fff',
    codeBackground: '#fff',
  },
  css: {
    ...hack.css,
    '& .Slide > div': {
      minWidth: '80vw',
    },
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    '& li:before': {
      content: '"— "',
    },
  },
  li: {
    marginBottom: '1em',
    lineHeight: '1.5',
  },
  p: {
    lineHeight: '1.5',
    maxWidth: '30em',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  prism: {
    style: syntaxTheme,
  },
};
