/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: '#232129',
    background: '#fff',
    backgroundWithAlpha: 'rgba(255, 255, 255, 0.925)',
    primary: '#0175d8',
    secondary: 'red',
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: '1.45',
    heading: '1.1',
  },
  sizes: {
    container: 960,
    containerMax: 1080,
  },
  breakpoints: ['768px', '991px', '1280px'],
  styles: {
    Layout: {
      backgroundColor: 'background',
      color: 'text',
      fontFamily: 'default',
      fontSize: 1,
      lineHeight: 'text',

      a: {
        color: '#0175d8',
        textDecoration: 'none',
        boxShadow: 'inset 0 -2px 0 0 #0175d8',
        transition: 'all 125ms cubic-bezier(.4,0,.2,1)',
      },
      'a:hover': {
        color: '#fff',
        boxShadow: 'inset 0 -20px 0 0 #0175d8',
      },
    },
    Header: {
      backgroundColor: 'backgroundWithAlpha',
      boxShadow:
        '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      position: 'fixed',
      display: 'flex',
      width: '100%',
      height: '3.5rem',
      zIndex: 3,
      color: 'background',
      fontWeight: 'bold',
      margin: 0,

      '.header-container': {
        margin: '0 auto',
        paddingLeft: '1.05rem',
        paddingRight: '1.05rem',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },

      '.logo': {
        height: '56px',
        width: '56px',
        marginBottom: 0,
        marginRight: '0.5rem',
      },

      h1: {
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        fontSize: '1rem',
      },

      a: {
        color: 'text',
        textDecoration: 'none',
        marginRight: '0.7rem',
        boxShadow: 'none',
      },

      'a:hover': {
        color: 'primary',
        boxShadow: 'none',
      },
    },
    Main: {
      margin: '0 auto',
      maxWidth: ['container', 'container', 'containerMax'],
      paddingLeft: [0, '15rem'],
      paddingTop: '0.5rem',
    },
    Container: {
      padding: 3,
      paddingBottom: 3,
    },
    Footer: {
      display: 'block',
      paddingLeft: [0, '15rem'],
      minHeight: '3.5rem',
      paddingBottom: '3rem',
      textAlign: 'center',
      lineHeight: 'heading',
      fontSize: 1,
      fontWeight: 700,
    },
    h1: {
      color: 'text',
      fontSize: 5,
      lineHeight: 'heading',
    },
  },
}
