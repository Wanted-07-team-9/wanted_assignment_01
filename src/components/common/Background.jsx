import React from 'react';
import tw from 'tailwind-styled-components';

const Background = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = tw.div`
w-screen
min-h-screen 
h-auto
bg-slate-600 
`;

export default Background;
