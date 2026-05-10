import { createContext, useContext, useState } from 'react'

const ProgressContext = createContext()

export const useProgress = () => useContext(ProgressContext)

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(1);
  const [serviceSelected, setServiceSelected] = useState("");

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };
  
  const updateSeletedService = (newService) => {
    setServiceSelected(newService);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, serviceSelected, updateSeletedService  }} >
      {children}
    </ProgressContext.Provider>
  );
};
