import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material';
function HeaderOption({ avater , Icon, title  , onClick }) {
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
       {avater && 
       <Avatar className='headerOption__avatar' src={avater}/>
       }
       <h3 className='headerOptions__title'>{title}</h3> 
        </div>
  )
}

export default HeaderOption