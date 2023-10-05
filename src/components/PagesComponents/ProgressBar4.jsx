import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBar4() {
  const now = "WEB DESIGN";
  return <ProgressBar variant="warning" animated now={25} label={`${now}`} />
  }
  
export default ProgressBar4;