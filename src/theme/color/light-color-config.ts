const LightColorsConfig = {
  primary: {
    light: '#F0F0F1',
    main: 'black',
    dark: '#282E31',
  },
  secondary: {
    main: '#DFD5C6',
  },
  info: {
    main: '#947267',
  },
  success: {
    main: '#4FB26B',
  },
  error: {
    main: '#EC5656',
  },
  grey: {
    50: '#D3C7C4',
    100: '#B5B5B7',
    200: '#F0F0F1',
    300: '#6B6C70',
  },
  text: {
    primary: '#474D51',
    dark: '#F6F5F3',
  },
  actions: {
    selected: '#6D4141',
    hover: '#A8937D',
  },
  background: {
    light: '#FFFFFF',
    dark: '#0b0b0d',
    default: '#ececea',
  },
  button: {
    text: '#FFFFFF',
    background: '#B29873',
    hover: '#A8937D',
    selected: '#6D4141',
  },
}

export type LightColorsConfigType = typeof LightColorsConfig
export default LightColorsConfig
