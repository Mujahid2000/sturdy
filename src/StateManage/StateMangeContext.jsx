import  { createContext, useState } from 'react';

const MyContext = createContext();

const StateManageMent = ({ children }) => {
    const [downArrow, setDownArrow] = useState(true);

  return (
    <MyContext.Provider value={{ downArrow, setDownArrow }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, StateManageMent };
