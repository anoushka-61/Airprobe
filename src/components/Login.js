import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, updateUser } from '../Reducer/AuthReducer'; // Make sure this import is correct
import { Button, TextField, Card, CardContent } from '@mui/material';
import './Login.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.signup.users); // Assuming you store user data in SignupReducer
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Find the user with the matching username
    const userData = users.find((user) => user.username === username);

    if (userData && userData.password === password) {
      // Successful login, dispatch an action to update user data (assuming it's correctly implemented)
      const updatedUserData = {
        ...userData,
        loginCount: userData.loginCount + 1,
        lastLogin: new Date(),
      };
      dispatch(updateUser(updatedUserData));

      // Navigate to the next page
      navigate('/MapView');
    } else {
      // Invalid credentials, show an error message
      window.alert('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <Header Homepage={false} />
      <div className="LoginForm">
        <Card className='LoginCard' style={{ marginTop: '50px', borderRadius: '10px' }}>
          <CardContent>
            <div className='Login_Components'>
              <h2>Login</h2>
              <TextField
                id="username"
                name="username"
                label="Username"
                variant="standard"
                style={{ margin: '10px' }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="standard"
                type='password'
                style={{ margin: '10px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="contained" onClick={handleLogin}>Login</Button>

              <p>New user?<a href='/'>Signup</a></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
