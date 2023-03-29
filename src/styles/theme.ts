export default {
    grid: {
        container: '136.6rem',

        gutter: '1.6rem'
    },

    border: {
        radius: '0.4rem'
    },

    font: {
        family: '"Open Sans", sans-serif',

        light: 300,

        normal: 400,

        semiBold: 600,

        bold: 700,

        extraBold: 800,

        sizes: {
            hxx: '5.2rem',

            hx: '3.6rem',

            h1: '2.4rem',

            h2: '2rem',

            h3: '1.6rem',

            body: '1.6rem',

            button: '1.4rem',

            caption: '1.2rem'
        }
    },

    colors: {
        primary: {
            500: '#2B45D4',

            default: '#0050E5'
        },

        secondary: {
            600: '#E59500',
            500: '#FFCC00',
            400: '#f7ebd1'
        },

        octopus: {
            primary: {
                light: '#00446B',

                default: '#002439',

                dark: '#00101A',

                opacity: 'rgba(45, 162, 170, 0.04)',

                '40': 'rgba(45, 162, 170, 0.4)'
            },

            secondary: {
                light: '#34BBC4',

                default: '#2DA2AA',

                dark: '#268B91'
            }
        },

        ihealth: {
            primary: {
                default: '#2B45D4'
            }
        },

        maida: {
            primary: {
                light: '#0066EE',

                default: '#0050E5',

                dark: '#0044CC',

                opacity: 'rgba(0, 80, 229, 0.04)',

                '40': 'rgba(0, 80, 229, 0.4)'
            },

            secondary: {
                light: '#66AAFF',

                default: '#4499FF',

                dark: '#4488DD'
            }
        },

        bodyColor: {
            white: '#FFFFFF',

            grey: '#F6F6F6'
        },

        pink: {
            primary: {
                default: '#FF0073',

                dark: '#FF0073'
            }
        },

        black: {
            '04': 'rgba(0, 0, 0, 0.04)',

            '08': 'rgba(0, 0, 0, 0.08)',

            '16': 'rgba(0,0,0,0.16)',

            '40': 'rgba(0, 0, 0, 0.4)',

            '56': 'rgba(0, 0, 0, 0.56)',

            '88': 'rgba(0, 0, 0, 0.88)'
        },

        white: {
            bg: '#FAFAFA',

            '100': '#FFFFFF'
        },

        info: {
            light: '#CFE5F3',

            medium: '#008AD2',

            dark: '#0079B8'
        },

        success: {
            light: '#40CF54',

            medium: '#38B449',

            dark: '#309C3F',

            '40': '#d8ebdd'
        },

        alert: {
            light: '#FFC61A',

            medium: '#FFCC00',

            dark: '#E5A100'
        },

        danger: {
            light: '#FF584C',

            medium: '#F44336',

            dark: '#DB3C31',

            '40': '#f6d9d4'
        },
        noColor: {
            transparent: 'transparent'
        }
    },

    spacings: {
        xxsmall: '0.8rem',

        xsmall: '1.6rem',

        sp20: '2.0rem',

        small: '2.4rem',

        medium: '3.2rem',

        large: '4.0rem',

        xlarge: '4.8rem',

        xxlarge: '5.6rem'
    },

    layers: {
        base: 10,

        menu: 20,

        overlay: 30,

        modal: 40,

        alwaysOnTop: 50
    }
} as const
