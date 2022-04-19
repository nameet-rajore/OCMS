import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#fff',
                color: '#000',
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: 'Montserrat',
    },
    spacing: 8,
});