import React, { useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


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
        <div className='dashboard'>
            <div className='sidemenu'>

                <div className='img'>
                    <img src='https://media.istockphoto.com/id/1159212661/photo/portrait-of-successful-young-asian-businesswoman%C3%A2%C2%A0at-office-colleagues-in-background.jpg?s=612x612&w=0&k=20&c=iXO5_SFF7aEj2x7zLqdhW1ZxzEoPpkSYVo-xs6uAh-k=' height={100} width={100} />
                    <h3>Samantha</h3>
                    <h6>Samantha@gmail.com</h6>
                    <Navbar variant="dark" className='nav-bar'>
                        <Container>
                            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar variant="dark" className='nav-bar'>
                        <Container>
                            <Navbar.Brand>Expenseces</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar variant="dark" className='nav-bar'>
                        <Container>
                            <Navbar.Brand>Wallets</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar variant="dark" className='nav-bar'>
                        <Container>
                            <Navbar.Brand>Summary</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar variant="dark" className='nav-bar'>
                        <Container>
                            <Navbar.Brand>Accounts</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar variant="dark" className='nav-bar'>
                        <Container>
                            <Navbar.Brand>Settings</Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                </div>
            </div>
            <div className='main-content'>
                Expenseces
            </div>
        </div>
    );
};

export default Dashboard;
