import React from 'react';
import { useAuth } from '../../context/AuthContext';
import tw from 'tailwind-styled-components';
import Button from './Button';

const Nav = () => {
  const { authState, signOut } = useAuth();

  return (
    <NavWrapper>
      <NavConatiner>
        {authState ? (
          <Button className="bg-slate-300 border-black mr-10" onClick={signOut}>
            sign out
          </Button>
        ) : (
          <Button className="bg-slate-300 border-black mr-10 ">sign In</Button>
        )}
      </NavConatiner>
    </NavWrapper>
  );
};

const NavWrapper = tw.div`
absolute 
w-screen h-14
bg-slate-700
border-b-2
border-b-slate-400
`;

const NavConatiner = tw.div`
flex 
h-full 
items-center 
justify-end
`;

export default Nav;
