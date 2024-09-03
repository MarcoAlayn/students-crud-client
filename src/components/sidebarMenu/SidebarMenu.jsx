import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Text from "../text/Text";
import colors from "../../utils/colors";

const drawerWidth = 240;

export default function SidebarMenu({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: (theme) =>
              theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            ERP Escolar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='persistent'
        anchor='left'
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Text textTemplate={"subtitle"} tooltipText={"Lista de Modulos"}>
            Modulos
          </Text>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {/*  */}
          <ListItem disablePadding>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <ListItemButton>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <Text
                  textTemplate={"moduleTitle"}
                  tooltipText={"Modulo de estudiantes"}
                >
                  Estudiantes
                </Text>
              </ListItemButton>
            </Link>
          </ListItem>
          {/*  */}
          <ListItem disablePadding>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <Text
                  textTemplate={"moduleTitle"}
                  tooltipText={"Modulo de profesores"}
                >
                  Profesores
                </Text>
              </ListItemButton>
            </Link>
          </ListItem>
          {/*  */}
          <ListItem disablePadding>
            <ListItemButton component='a' href='/home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Inicio' />
            </ListItemButton>
            {/*  */}
          </ListItem>
        </List>
      </Drawer>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: `-${drawerWidth}px`,
          ...(open && {
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            marginLeft: 0,
          }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
