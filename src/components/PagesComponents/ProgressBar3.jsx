import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBar3() {
  const now = "REACT&JS";
  return <ProgressBar variant="warning" animated now={70} label={`${now}`} />
  }
  
export default ProgressBar3;