import { ThemeProvider } from '@mui/material'
import NavBar from '../components/Layout/NavBar'
import Particles from '../components/Particle'
import useMode from '../hooks/useMode'

export default function App({ Component, pageProps }) {
  const {mode, toggleMode, theme} = useMode()
  return (
    <>
      <ThemeProvider theme={theme}>
        <Particles/>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Component {...pageProps} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
