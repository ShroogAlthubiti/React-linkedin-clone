import React from 'react' 
import './Sidebar.css'
import { Avatar } from '@mui/material';
import  { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
function Sidebar() {
 const user = useSelector(selectUser);
   const recentItem = (topic) =>(
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>

   );
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1458929526027-052f5d6a3c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
            <Avatar src={user.photo} className='sidebar__avatar'/>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className='sidebar__stats'>
            
        </div>
        <div className='sidebar__bottom'>
          <div className='sidebar__stats'>
            <p>Who viewd you</p>
            <p className='sidebar__stat'>100</p>
            </div>
            <div className='sidebar__stats'>
              <p>Views on post</p>
            <p className='sidebar__stat'>3,000</p>
            </div>
        </div>

 <div className='sidebar__recent'>
    <p>Recent</p>
    {recentItem('reactjs')}
    {recentItem('php')}
    {recentItem('nextjs')}
    {recentItem('developer')}

 </div>
    </div>
  )
}

export default Sidebar