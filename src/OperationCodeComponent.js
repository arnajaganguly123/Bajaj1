// Your form component
import React, { useState } from 'react';
import { postUserData } from './api';

const FormComponent = () => {
  const [userData, setUserData] = useState({});
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postUserData(userData);
      setResponse(result);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Add form input fields for user data */}
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <p>Status: {response.is_success ? 'Success' : 'Failure'}</p>
          {/* Display other response data here */}
        </div>
      )}
    </div>
  );
};

export default FormComponent;
