import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import { MainAppBar, CustomSnackbar } from '../components';
import { MainContext, DEFAULT_SNACKBAR_OPTIONS, SnackbarOptions } from '../@types';
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
  const [snackbar, setSnackbar] = useState<SnackbarOptions>(DEFAULT_SNACKBAR_OPTIONS);

  return (
    <>
      <MainContext.Provider
        value={{
          isDrawerOpen: isDrawerOpen,
          setIsDrawerOpen: setIsDrawerOpen,
          snackbar: snackbar,
          setSnackbar: setSnackbar,
        }}
      >
        <MainAppBar />
        <MainContent open={isDrawerOpen}>
          <AppRoutes />
        </MainContent>
        <CustomSnackbar
          open={snackbar.open}
          handleClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          message={snackbar.message}
          type={snackbar.type}
          duration={snackbar.duration}
        />
      </MainContext.Provider>
    </>
  );
};

export default Main;
