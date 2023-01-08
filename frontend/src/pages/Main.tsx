import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import { MainAppBar } from '../components';
import { MainContext } from '../@types';
import { DRAWER_WIDTH } from '../constants';
import { AppRoutes } from '../navigation';

const MainContent = styled('main')<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `${DRAWER_WIDTH}px`,
  ...(!open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Main = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <>
      <MainContext.Provider
        value={{
          isDrawerOpen: isDrawerOpen,
          setIsDrawerOpen: (value: boolean) => setIsDrawerOpen(value),
        }}
      >
        <MainAppBar />
        <MainContent open={isDrawerOpen}>
          <AppRoutes />
        </MainContent>
      </MainContext.Provider>
    </>
  );
};

export default Main;
