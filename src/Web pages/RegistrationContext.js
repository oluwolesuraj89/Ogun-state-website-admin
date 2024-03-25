// RegistrationContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [isReg, setIsReg] = useState(false);
  const [isGrant, setIsGrant] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const retrieveRegStatus = async () => {
    try {
      const regStatus = await AsyncStorage.getItem('isLoan');
      setIsReg(regStatus === "1");
    //   console.log(isReg, "cont");
    } catch (error) {
      console.error('Error retrieving registration status:', error);
    }
  };

  const retrieveGrantStatus = async () => {
    try {
      const grantStatus = await AsyncStorage.getItem('isGrant');
      setIsGrant(grantStatus === "1");
    } catch (error) {
      console.error('Error retrieving grant status:', error);
    }
  };

  const retrieveHomeStatus = async () => {
    try {
        const homeApp = await AsyncStorage.getItem('isCompleted');
        setIsHome(homeApp === null);
        console.log(isHome, "he1");
    } catch (error) {
        console.error('Error retrieving grant status:', error);
    }
};

  

  useEffect(() => {
    retrieveRegStatus();
  }, []);

  useEffect(() => {
    retrieveGrantStatus();
  }, []);

  useEffect(() => {
    retrieveHomeStatus();
  }, []);

  return (
    <RegistrationContext.Provider value={{ isReg, setIsReg, isGrant, isHome, setIsHome, setIsGrant, retrieveRegStatus, retrieveGrantStatus, retrieveHomeStatus }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
