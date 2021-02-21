import { typographyVariants } from "./typographyVariants";



const colors = {
    background: {
        light:{
            color: '#FFFFFF',
        },
    
    },
    borders: {
        main: {
            color: '#E9C46A',
        },
    },
    primary:{
        main: {
            color: '#FFF8E6',
            contrastText: '#fff',
        },
    },
    secondary: {
        main: {
            color: 'E9C46A',
        },
    },
    tertiary: {
        main: {
            color: '#000000',
            contrastText: '#fff',
        },
    },
}

export const breakpoints = {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  };
export default {
    colors, 
    typographyVariants,
    breakpoints,
    borderRadius: '12px',
    fontFamily: '\'Fira Sans\', Condensed',
    transition: '200ms ease-in-out',

}