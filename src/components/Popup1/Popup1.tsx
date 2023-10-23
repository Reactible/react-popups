// src/components/Popup1/Popup1.tsx

import React from 'react';
import './Popup1.css';

interface Popup1Props {
  darkBackground?: boolean;
  /* exitIntent?: boolean;
  scrollPercentTrigger?: number;
  inactivityTime?: number;
  alignment?: 'top' | 'center' | 'bottom';
  optinPanel?: 'left' | 'right';
  triggerType?: 'click' | 'load'; */
}

function Popup1(props: Popup1Props, children: React.ReactNode) {
  const { darkBackground } = props;
  return (
    <div className={`popup ${darkBackground ? 'dark-background' : ''}`}>
      {children}
    </div>
  );
}

// Default props for Popup1
Popup1.defaultProps = {
  darkBackground: false,
};

export default Popup1;
