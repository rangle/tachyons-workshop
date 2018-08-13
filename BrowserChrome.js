import React from 'react';

export default props => (
  <div
    style={{
      borderRadius: 3,
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        background: '#dcdcdc',
        height: '1rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '0.25rem',
          height: '0.25rem',
          borderRadius: '50%',
          backgroundColor: '#FC645d',
          marginLeft: '0.5rem',
          marginRight: '0.25rem',
        }}
      />
      <div
        style={{
          width: '0.25rem',
          height: '0.25rem',
          borderRadius: '50%',
          backgroundColor: '#fdbe41',
          marginRight: '0.25rem',
        }}
      />
      <div
        style={{
          width: '0.25rem',
          height: '0.25rem',
          borderRadius: '50%',
          backgroundColor: '#35cb4b',
        }}
      />
    </div>
    {props.children}
  </div>
);
