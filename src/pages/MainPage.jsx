import React from 'react';
import Background from '../components/common/Background';
import Nav from '../components/common/Nav';
import MainContainer from '../container/MainContainer';

const MainPage = () => {
  return (
    <Background>
      <Nav />
      <MainContainer />
    </Background>
  );
};

export default MainPage;
