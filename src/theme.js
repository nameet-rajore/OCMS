import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
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
        fontFamily: 'Roboto'
    },
    spacing: 8,
});