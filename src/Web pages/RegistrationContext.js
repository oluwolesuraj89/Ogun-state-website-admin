// RegistrationContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [isReg, setIsReg] = useState(false);

  const retrieveRegStatus = async () => {
    try {
      const regStatus = await AsyncStorage.getItem('isComplete');
      setIsReg(regStatus === 'true');
    } catch (error) {
      console.error('Error retrieving registration status:', error);
    }
  };

  useEffect(() => {
    retrieveRegStatus();
  }, []);

  return (
    <RegistrationContext.Provider value={{ isReg, setIsReg, retrieveRegStatus }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
