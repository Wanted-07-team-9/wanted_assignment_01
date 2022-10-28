import React from 'react';
import tw from 'tailwind-styled-components';

const InputBox = props => {
  return (
    <div className="mt-2">
      <InputBoxComponent {...props}></InputBoxComponent>
    </div>
  );
};

const InputBoxComponent = tw.input`
${p => (p.$fullWidth ? 'w-full ' : 'w-60')}
  border-2 
  border-slate-400 
  rounded-md 
  pl-2
  `;

export default InputBox;
