import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import './UserList.css'
const UserList = () => {
  // Use a selector to get the list of users from your Redux store
  const users = useSelector((state) => state.signup.users) || [];

  // Convert the users object to an array
  const usersArray = Object.values(users);

  console.log('Users from useSelector:', usersArray);
  
  return (
    <div>
      <Header Homepage={true}/>
      <h1>User List</h1>
      <table>
        <thead>
          <tr className='tablerow'>
            <th>Username</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Login Count</th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map((user, index) => (
            <tr key={user.username} className='tablerow'>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate.toLocaleString()}</td>
              <td>{index+1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
