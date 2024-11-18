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
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '18px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '21px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        xl: ['20px', '30px'],
        '2xl': [
          '24px',
          {
            lineHeight: '36px',
            letterSpacing: '0',
            fontWeight: '700',
          },
        ],
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
