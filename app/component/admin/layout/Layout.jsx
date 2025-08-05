'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { styled, useTheme } from '@mui/material/styles';
//import { useRouter } from 'next/navigation';
import { 
  Box, Drawer, CssBaseline, Toolbar, List, 
  Typography, Divider, IconButton, ListItem, 
  ListItemButton, ListItemIcon, ListItemText,
  AppBar as MuiAppBar,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ShoppingCart as ProductsIcon,
  Receipt as OrdersIcon,
  Settings as SettingsIcon,
  Assessment as ReportsIcon,
  Analytics as AnalyticsIcon,
  ExitToApp as LogoutIcon ,
  Description as DescriptionIcon,
  MenuBook as MenuBookIcon,
  Category  as CategoryIcon ,
  GraphicEq as AudioIcon
} from '@mui/icons-material';
import Link from 'next/link';
import ProtectedRouteAdmin from '../../route/ProtectedRouteAdmin';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
 const logout= ()=> {
  return 'yes';
 }
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DLayout({ children }) {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(!isMobile);
  //  const router = useRouter();
     
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
 // const getToken = localStorage.getItem('auth-token');
  //const getRole = localStorage.getItem('user-role');
 
  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: <DashboardIcon />, 
      href: '/admin/dashboard' 
    },
    { 
      text: 'Category', 
      icon: <CategoryIcon />,  // MUI's blog-like icon
      href: '/admin/category' 
    },
    { 
      text: 'Blog', 
      icon: <DescriptionIcon />,  // MUI's blog-like icon
      href: '/admin/blog' 
    },
    { 
      text: 'Testimonial', 
      icon: <MenuBookIcon />,  // MUI's book icon
      href: '/admin/testimonial' 
    },
    { 
      text: 'Technology', 
      icon: <AudioIcon />,  // MUI's book icon
      href: '/admin/technology' 
    },
    { 
      text: 'Portfolio', 
      icon: <PeopleIcon />, 
      href: '/admin/portfolio' 
    },
    { 
      text: 'Products', 
      icon: <ProductsIcon />, 
      href: '/admin/products' 
    },
    { 
      text: 'Orders', 
      icon: <OrdersIcon />, 
      href: '/admin/orders' 
    },
    { 
      text: 'Settings', 
      icon: <SettingsIcon />, 
      href: '/admin/settings' 
    }
  ];

  const secondaryItems = [
    { text: 'Reports', icon: <ReportsIcon />, href: '/admin/reports' },
    { text: 'Analytics', icon: <AnalyticsIcon />, href: '/admin/analytics' },
    { 
      text: 'Logout', 
      icon: <LogoutIcon />,
      action: logout
    }
  ];

  return (
   <ProtectedRouteAdmin>
     <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body2">
            Welcome back, Admin!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <DrawerHeader sx={{ bgcolor: theme.palette.primary.main, color: 'white' }}>
          <Typography variant="h6" sx={{ flexGrow: 1, pl: 2 }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle} color="inherit">
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                component={Link} 
                href={item.href}
                selected={pathname === item.href}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.action.selected,
                    '&:hover': {
                      backgroundColor: theme.palette.action.selected,
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: pathname === item.href ? theme.palette.primary.main : theme.palette.text.secondary }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{
                    fontWeight: pathname === item.href ? 'medium' : 'normal',
                    color: pathname === item.href ? 'text.primary' : 'text.secondary'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {secondaryItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={item.href ? Link : 'div'}
                href={item.href || null}
                onClick={item.action || undefined}
                selected={item.href ? pathname === item.href : false}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.action.selected,
                    '&:hover': {
                      backgroundColor: theme.palette.action.selected,
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: item.href && pathname === item.href ? theme.palette.primary.main : theme.palette.text.secondary }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{
                    fontWeight: item.href && pathname === item.href ? 'medium' : 'normal',
                    color: item.href && pathname === item.href ? 'text.primary' : 'text.secondary'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open} sx={{ 
        p: 3,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh'
      }}>
        <DrawerHeader />
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 3,
            minHeight: 'calc(100vh - 64px - 48px)'
          }}
        >
          {children}
        </Box>
      </Main>
    </Box>
   </ProtectedRouteAdmin>
  );
}