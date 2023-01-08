import React, { useContext } from 'react';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/styles';

import { MainContext } from '../@types';
import { DRAWER_WIDTH } from '../constants';
import { Typography } from '@mui/material';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MainDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(MainContext);

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <DrawerHeader>
        <ListItem disablePadding onClick={handleCloseDrawer}>
          <ListItemButton>
            <ListItemIcon>
              {<HomeIcon color='primary' />}
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
      </DrawerHeader>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon color='primary' /> : <MailIcon color='primary' />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: '16px'
        }}
      >
        <Typography>MIT License</Typography>
        <Typography>2023</Typography>
      </Box>

    </Drawer>
  );
};

export default MainDrawer;
