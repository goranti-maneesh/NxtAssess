module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.js",
  ],
  theme: {
    fontSize: {
      'fs12_lh16': ['12px', {lineHeight: '16px'}],
      'fs14_lh24': ['14px', {lineHeight: '24px'}],
      'fs16_lh28': ['16px', {lineHeight: '28px'}],
      'fs18_lh24': ['18px', {lineHeight: '24px'}],
      'fs24_lh24': ['24px', {lineHeight: '24px'}],
      'fs32_lh24': ['32px', {lineHeight: '24px'}],
    },
    borderRadius: {
      '2px': '2px',
      '4px': '4px',
      '8px': '8px'
    },
    fontFamily: {
      serif: ['Futura Md BT', 'serif'],
      sans: ['Roboto']
    },
    extend: {
      spacing: {
        'Neg_2px': '-2px',
        '3px': '3px',
        '6px': '6px',
        '38px': '38px',
        '49px': '49px',
        '77px': '77px',
        '88px': '88px',
        '96px': '96px',
        '360px': '360px',
        '566px': '566px',
        '568px': '568px',
        '631px': '631px',
        '1440px': '1440px',
        '90vh': '90vh'
      },
      colors: {
        'Oslo-Gray': '#7E858E',
        'Astronaut': '#263868',
        'Selago': '#FAFBFE',
        'Flamingo': '#EF4444',
        'White': '#ffffff',
        'ChathamsBlue': '#164687',
        'Bismark': '#496387',
        'Porcelain': '#F5F6F7'
      },
      boxShadow: {
        'loginPageCard': '0px 4px 16px 0px rgba(123, 135, 148, 0.16)',
        'homePage': '0px 4px 16px 0px rgba(123, 135, 148, 0.16);'
      }
    },
  },
  plugins: [],
}
