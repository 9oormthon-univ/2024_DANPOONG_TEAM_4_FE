/* global module */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('./assets/images/auth-background.png')",
      },
      colors: {
        primary: '#53B175',
        text10: '#FFFFFF',
        text20: '#FFF9FF',
        text30: '#FCFCFCB2',
        text50: '#B3B3B3',
        text100: '#7C7C7C',
        text150: '#4C4F4D',
        text200: '#181725',
        kakao: '#FEE500',
        'kakao-text': '#000000 85%',
      },
      borderRadius: {
        common: '18px',
      },
      maxWidth: {
        mobile: '500px',
      },
      zIndex: {
        footer: '10',
      },
    },
  },
  plugins: [],
};
