import { useState } from "react";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  FormControlLabel,
  Switch,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LightMode as Sun,
  DarkMode as Moon,
  Home,
  Work,
  Email,
  AccountCircle,
  Route,
} from "@mui/icons-material";
import Link from "next/link";
import NavigationDrawer from "../NavigationDrawer";

interface Props {
   mode: boolean,
   toggleMode: () => void
}

const NavBar = (props: Props) => {
  // console.log(props);

  const { mode, toggleMode } = props;
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(theme.palette);
  const { primary, secondary } = theme.palette
  

  const Routes = [
    { name: "Inicio", link: "/#", icon: <Home /> },
    { name: "Acerca de mi", link: "/#about", icon: <AccountCircle /> },
    { name: "Portafolio", link: "/#portfolio", icon: <Work /> },
    { name: "Contacto", link: "/#contacto", icon: <Email /> },
  ];

  return (
    <Box component="section">
      <AppBar elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
              component="span"
            >
              Ibra Cardozo 👨‍💻
            </Typography>
            <Box sx={{ display: "flex" }}>
              {isMobile ? (
                <IconButton
                  size="large"
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  <MenuIcon 
                  fontSize="large"
                  sx= {{
                     color: mode ? secondary.main : primary.contrastText
                  }}
                   />
                </IconButton>
              ) : (
                <>
                  {Routes.map((elem) => (
                    <Link href={elem.link} key={elem.name}>
                      <Button
                        variant="text"
                        color={mode ? "secondary" : "inherit"}
                      >
                        {elem.name}
                      </Button>
                    </Link>
                  ))}
                  <FormControlLabel
                    control={
                      <Switch
                        checked={mode}
                        onChange={toggleMode}
                        color="secondary"
                      />
                    }
                    label={
                      mode ? (
                        <Sun sx={{ display: "flex" }} />
                      ) : (
                        <Moon sx={{ display: "flex" }} />
                      )
                    }
                    labelPlacement="start"
                  />
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {isMobile && <NavigationDrawer
         routes={Routes}
         open={openDrawer}
         onClose={() => {setOpenDrawer(!openDrawer)}}
         mode={mode}
         toggleMode={toggleMode}
      /> }
    </Box>
  );
};

export default NavBar;
