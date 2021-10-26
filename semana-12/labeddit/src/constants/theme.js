import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor, tertiaryColor } from './colors';

const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText: "white"
    },
    secondary: {
        main: secondaryColor,
        contrastText: "white",
    },
    tertiary: {
        main: tertiaryColor,
        contrastText:"white",
    },
    text:{
        primary:"white"
    }
 } });

 export default theme