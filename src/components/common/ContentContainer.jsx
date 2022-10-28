import React from 'react';
import tw from 'tailwind-styled-components';

const ContentsContainer = ({ children }) => {
  return (
    <ContentWrapper>
      <Container>{children}</Container>
    </ContentWrapper>
  );
};

const ContentWrapper = tw.div`
flex 
justify-center
items-center 
w-full 
h-full
`;

const Container = tw.div`
flex 
justify-center
items-center 
w-[720px] 
h-full 
bg-slate-500 
min-h-screen
`;

export default ContentsContainer;
