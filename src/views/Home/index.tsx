import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {StyledView, Title} from './style';

const Home = () => {
  const count = useSelector((state: RootState) => state.count.value);

  return (
    <StyledView>
      <Title>Count: {count}</Title>
    </StyledView>
  );
};

export default Home;
