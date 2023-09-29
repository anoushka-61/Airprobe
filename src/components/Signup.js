import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Reducer/AuthReducer'; // Make sure this import is correct
import { Button, TextField, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { SignupUser } from '../Reducer/SignupReducer';
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    // Create a new user object
    const newUser = {
      username,
      email,
      password,
      registrationDate: new Date(), // Serialize to timestamp
      loginCount: 1,
    };
    

    
      // Dispatch the action to register the user
      dispatch(SignupUser(newUser));
  
      // Redirect to the login page
      navigate('/login');
     
  };

  return (
    <div className="login" style={{ height: '110vh' }}>
      <Header  Homepage={false} />
      <div className="LoginForm" style={{ marginTop: '50px', borderRadius: '30px', marginBottom: '10px' }}>
        <Card className='LoginCard'>
          <CardContent>
            <div className='Login_Components'>
              <h2>Signup</h2>
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
                id="email"
                name="email"
                label="Email"
                variant="standard"
                type='email'
                style={{ margin: '10px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <Button variant="contained" onClick={handleSignup}>Signup</Button>

              <p>Already a user?<a href='/login'>Login</a></p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
