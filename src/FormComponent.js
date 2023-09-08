// Your component to display the operation code
import React, { useState, useEffect } from 'react';
import { getOperationCode } from './api';

const OperationCodeComponent = () => {
  const [operationCode, setOperationCode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const code = await getOperationCode();
        setOperationCode(code);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Operation Code: {operationCode}</p>
    </div>
  );
};

export default OperationCodeComponent;
