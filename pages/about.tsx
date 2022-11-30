import {
    Box,
    Button,
    useTheme,
    useMediaQuery,
    Container,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { aboutMe, skill } from "../components/Consts";
import Title from "../components/Title";
import Skill from "../components/Skill";

const AboutMe = () => {
  const { breakpoints, palette } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("md"));
  const mode = palette.mode === "dark";

  return (
    <Box component="section" sx={{py: 10, px: 2}} id="about" >
      <Container>
        <Grid container direction="column" justifyContent="space-between" spacing={12}>
          <Grid container item spacing={4}>
            <Grid item xs={12} md={3} alignItems="center">
              <Title title="Acerca de mi" size={2.5} />
            </Grid>
            <Grid container item xs={12} md={9} spacing={2} justifyContent='center' >
              <List>
                {aboutMe.map((elem) => (
                  <ListItem key={elem}>
                    <ListItemIcon>
                      <ChevronRight color={mode ? "primary" : "secondary"} />
                    </ListItemIcon>
                    <ListItemText primary={elem} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
          {/* Skill */}
          <Grid container item spacing={4}>
            <Grid item xs={12} md={3} alignItems="center">
              <Title title="Habilidades" size={2.5} />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={9}
              spacing={2.1}
              justifyContent="center"
            >
              {skill.map((elem) => (
                <Grid key={elem.name} item>
                    {
                        isMobile ? <Skill icon={elem.icon} name={elem.name} />
                        :
                        <Link href={elem.url} target="_blank" rel="noreferrer">
                            <Skill icon={elem.icon} name={elem.name} />
                        </Link>
                    }
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
