import { Box, Button, Container, Grid, useTheme,ImageList,ImageListItem} from "@mui/material"
import Link from "next/link"
import Title from "../components/Title"

const Home = () => {

    const {palette} = useTheme()

    return (
        <Box component="section" id="home">
            <Container sx={{minHeight: '100vh',display: 'flex',}}
                maxWidth='md'>
                <Grid container>
                    <Grid item xs={12} md={9} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            py: 20,
                        }} alignItems="center" >
                        <Title
                            size={2}
                            title={[
                                "Hola! Mi nombre es ",
                                "Xavier Ibra Cardozo",
                                "y soy un ",
                                "Full Stack Developer",
                            ]}
                        />
                    </Grid>
                    <Grid item container xs={12} md={3} spacing={3} >
                    <Grid item xs={12}
                            sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <Link href="#portfolio">
                                <Button
                                    fullWidth
                                    color={palette.mode !== 'dark'
                                        ? "primary" : "secondary"}
                                    variant="contained">
                                    Ver portafolio
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Link href="#contactme">
                                <Button
                                    fullWidth
                                    color={palette.mode !== 'dark'
                                        ? "primary" : "secondary"}
                                    variant="outlined">
                                    Ver contactos
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Home