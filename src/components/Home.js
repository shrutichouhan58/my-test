import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import '../App.css'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
  
    // Convert JSON data to FormData
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("confirm-password", formData.confirmPassword);
  
    try {
      const apiUrl = 'http://13.50.172.202:3001/v0/registrationForWeb';
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert('Registration successful!');
        localStorage.setItem('signup', true);
        setFormData({
          name: '',
          gender: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: ''
        });
        setPasswordError(''); 
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again later.');
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Register</h2>
        <Form onSubmit={handleSubmit} style={{margin:'auto'}}>
         <div style={{margin:"10px"}}>
         <Form.Group as={Col} md="6" controlId="formBasicName" className='form-controller'>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicGender" className='form-controller'>
            <Form.Control
              type="text"
              placeholder="Enter gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicEmail" className='form-controller'>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicPhoneNumber" className='form-controller'>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicPassword" className='form-controller'>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicConfirmPassword" className='form-controller'>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
          </Form.Group>

          <Button variant="primary" type="submit" className='btn-signup'>
            Submit
          </Button>
         </div>
        </Form>
      </div>
    </div>
  );
};

export default Home;
