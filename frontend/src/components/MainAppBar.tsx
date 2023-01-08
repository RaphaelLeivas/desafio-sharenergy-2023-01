import React, { useState, useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { styled, useTheme } from '@mui/styles';

import logoCompany from '../assets/logo-company.png';
import { useNavigation } from '../navigation';
import { AuthService } from '../services';
import { MainContext } from '../@types';
import { DRAWER_WIDTH } from '../constants';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MainAppBar = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { isDrawerOpen, setIsDrawerOpen } = useContext(MainContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };


  const handleLogout = () => {
    setAnchorEl(null);
    AuthService.logout();
    navigation('/login');
  };

  const CustomMenuItem = ({ name, onClick }: { name: string; onClick: () => void }) => (
    <MenuItem
      onClick={onClick}
      sx={{
        '&:hover': {
          background: theme.palette.primary.dark,
          transition: '0.2s',
        },
      }}
    >
      <Typography color="black">{name}</Typography>
    </MenuItem>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: `calc(100% - ${isDrawerOpen ? DRAWER_WIDTH : 0}px)`,
          ml: `${isDrawerOpen ? DRAWER_WIDTH : 0}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Link href="/">
            <Box
              component="img"
              sx={{
                maxHeight: { xs: 30 },
                maxWidth: { xs: 200, md: 750 },
              }}
              alt="Logo da Sharenergy"
              src={logoCompany}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton size="large" onClick={handleOpenMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <CustomMenuItem name="Meu Perfil" onClick={handleCloseMenu} />
              <CustomMenuItem name="Sair" onClick={handleLogout} />
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
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
      </Drawer>
    </>
  );
};

export default MainAppBar;
