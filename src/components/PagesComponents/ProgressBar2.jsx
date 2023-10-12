import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBar2() {
  const now = "HTML&CSS";
  return <ProgressBar variant="warning" animated now={90} label={`${now}`} />
  }
  
export default ProgressBar2;