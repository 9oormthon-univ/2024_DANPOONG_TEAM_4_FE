function Spacing({ size, direction = 'vertical', backgroundColor }) {
  const spacingStyle = {
    ...(direction === 'vertical'
      ? {
          marginTop: `${size}px`,
          marginBottom: `${size}px`,
          width: '100%',
          height: '2px',
        }
      : { marginLeft: `${size}px`, marginRight: `${size}px` }),
    backgroundColor: backgroundColor || 'transparent',
  };

  return <div style={spacingStyle} />;
}

export default Spacing;
