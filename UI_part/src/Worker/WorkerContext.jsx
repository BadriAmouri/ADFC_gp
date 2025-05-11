import React, { createContext, useContext, useState } from "react";

const WorkerContext = createContext();

export const WorkerProvider = ({ children }) => {
  const [isWorkerWorkspace, setIsWorkerWorkspace] = useState(0);

  const setWorkerWorkspace = (value) => {
    setIsWorkerWorkspace(value === 1 ? 1 : 0);
  };

  return (
    <WorkerContext.Provider value={{ isWorkerWorkspace, setWorkerWorkspace }}>
      {children}
    </WorkerContext.Provider>
  );
};

export const useWorker = () => useContext(WorkerContext);
