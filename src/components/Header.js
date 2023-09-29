import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
function Header({Homepage}) {
    const navigate = useNavigate()
  return (
    <div className='Header'>
    <div style={{marginLeft:'5vh'}}>
     <h3>Airprobe</h3>
     </div>
  {Homepage &&(  
    <div className='navRight' style={{marginRight:'5vh', cursor:'pointer'}}> 
    <div><h3 onClick={()=>{navigate('/userlist')}}>User List</h3></div>
    <div> <h3 onClick={()=>{navigate('/')}}>Logout</h3></div>
    
   
    </div>)}
  
    
    </div>
  )
}

export default Header