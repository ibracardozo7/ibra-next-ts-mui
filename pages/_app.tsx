import { CssBaseline, ThemeProvider } from '@mui/material'
import NavBar from '../components/Layout/NavBar'
import Particles from '../components/Particles'
import useMode from '../hooks/useMode'

export default function App({ Component, pageProps }) {
  const {mode, toggleMode, theme} = useMode()
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Particles />
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Component {...pageProps} />
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </>
  )
}
