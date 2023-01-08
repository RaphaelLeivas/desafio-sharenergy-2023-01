import React, { useEffect, useContext } from 'react';
import { MainContext } from '../@types';


const Clients = () => {
  const { setSnackbar } = useContext(MainContext);

  useEffect(() => {
    setSnackbar((prev) => ({
      ...prev,
      message: 'Teste Snackbar error',
      type: 'error',
      open: true,
    }));

  }, [setSnackbar]);

  return <h1>Clients</h1>;
};

export default Clients;
