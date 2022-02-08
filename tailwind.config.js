module.exports = {
  content: [
    "./apps/**/src/**/**",
    "./libs/**/src/**/**",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f51b5",
        secondary: "#0000003b",
        positive: "#1AAE5F",
        negative: '#E22D20',
        warning: '#FFC423',
        lightgray: '#F9F9F9',
        darkgray: '#E8EAEF'
      },
      fontSize: {
        'size-inherit': 'inherit'
      }
    },
    fontFamily: {
      'primary-regular': ['NotoSansGeorgian-Regular', 'Montserrat-Regular'],
      'primary-medium': ['NotoSansGeorgian-Medium', 'Montserrat-Medium'],
      'primary-bold': ['NotoSansGeorgian-Bold', 'Montserrat-Bold'],
      'inherit': 'inherit'
    }
  },
  plugins: [],
}
