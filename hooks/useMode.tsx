import { useState } from "react"
import { createTheme } from "@mui/material"
import { blueGrey, cyan, teal, purple } from "@mui/material/colors"

const useMode = () => {

    const [mode, setMode] = useState(true)
    const toggleMode = () => setMode(!mode)
    const theme = createTheme({
        palette: {
            mode: mode ? "dark" : "light",
            primary: blueGrey,
            secondary: cyan
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
    })

    return {
        mode,
        toggleMode,
        theme
    }
}

export default useMode