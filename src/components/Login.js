import React, { useState } from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const navigate = useNavigate()
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const apiUrl = 'http://13.50.172.202:3001/v0/login';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const res = localStorage.getItem('signup')
                if (res == true) {
                    alert('Login successful!');
                    setFormData({
                        email: '',
                        password: '',
                    });
                    navigate('/dashboard')
                }
                else{
                    navigate('/')
                }
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Registration failed. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h2>Login</h2>
                <Form onSubmit={handleSubmit} style={{ margin: 'auto' }}>
                    <div style={{ margin: "10px" }}>
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

                        <Button variant="primary" type="submit" className='btn-signup'>
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
