export const theme = Object.freeze({
  colors: {
    black: '#000000',
    grey: '#aab1bb',
    white: '#FFFFFF',
    backgroundGrey: '#F4F6F9',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 16,
    m: 22,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    main: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  },
});
