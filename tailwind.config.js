/* global module */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#53B175 ',
        text50: '##7C7C7C',
        text100: '##4C4F4D',
        text150: '##181725',
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
