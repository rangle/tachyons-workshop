import styled from 'styled-components';
import { color } from 'styled-system';

const BgBlue = styled.div(
  [],
  {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      color: '#fff',
    },
  },
  color,
);

BgBlue.defaultProps = {
  color: '#fff',
  bg: '#0336ff',
};

export default BgBlue;
