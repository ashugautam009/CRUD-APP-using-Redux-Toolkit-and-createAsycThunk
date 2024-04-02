import React from 'react'
import './CustomModal.css'
import { useSelector } from 'react-redux';
const CustomModal = ({id,popup,Setpopup}) => {
  // console.log('id is in modal page is',id);
  // console.log('pop up in modal page is ',popup);
  // console.log('setpupup value is ',Setpopup);

  const allUser= useSelector((state)=>state.app.user);
  
  const singleUser=allUser.filter((ele)=>ele.id === id);
  
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button>Close</button>
            <h2>{singleUser.name}</h2>
        </div>
    </div>
  )
}

export default CustomModal