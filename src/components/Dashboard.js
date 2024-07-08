import React, { useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  useEffect(() => {
    axios.post('http://13.50.172.202:3001/v0/getUser')
      .then((res) => {
        console.log(res.data); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      hello
    </div>
  );
};

export default Dashboard;
