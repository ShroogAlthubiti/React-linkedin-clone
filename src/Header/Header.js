import React from 'react'
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../Feed/firebase';
function Header() {
 const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () =>{
    dispatch(logout()) 
    auth.signOut();
  };
  return (
    <div className='header'>
        
        <div className='header__left'>
        <img src='https://img.icons8.com/fluency/48/linkedin.png'/>    
        <div className='header__search'>
        <SearchIcon/>
        <input placeholder='Search' type='text'/>
        </div>
        </div>
        <div className='header__right'>

            <HeaderOption title='Home' Icon={HomeIcon}/>
            <HeaderOption title='My Notwork' Icon={SupervisorAccountRoundedIcon}/>
            <HeaderOption title='Jobs' Icon={WorkIcon}/>
            <HeaderOption title='Messaging' Icon={MessageRoundedIcon}/>
            <HeaderOption title='Notifications' Icon={NotificationsRoundedIcon}/>
            <HeaderOption   avater={user?.photo } title='logout'onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header