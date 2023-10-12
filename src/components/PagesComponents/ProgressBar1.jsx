import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBar1() {
  const now = "BOOTSTRAP";
  return <ProgressBar variant="warning" animated now={60} label={`${now}`} />
  }
  
export default ProgressBar1;