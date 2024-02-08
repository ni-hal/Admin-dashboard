import React from 'react';

import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
 <div>
  Bar
 </div>
  );
};

export default Bar;
