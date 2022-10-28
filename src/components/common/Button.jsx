import React from 'react';
import tw from 'tailwind-styled-components';

const Button = ({ children, className, $fullWidth = false, disabled }) => {
  return (
    <ButtonComponent className={className} $fullWidth={$fullWidth} disabled={disabled}>
      {children}
    </ButtonComponent>
  );
};

//기본 설정만 되어있는 컴포넌트, 설정을 추가,변경 하려한다면 클래스네임에 덮어씌워줄수있습니다.
//color는 직접 설정 해주도록 해야합니다.
const ButtonComponent = tw.button`
${p => (p.$fullWidth ? 'w-full ' : 'w-20')}

disabled:text-red 
flex
justify-center
items-center
h-10
py-[8px] 
rounded-lg
border-white
border-1

disabled:text-red-500 '
disabled:cursor-not-allowed

hover:cursor-pointer
`;

export default Button;
