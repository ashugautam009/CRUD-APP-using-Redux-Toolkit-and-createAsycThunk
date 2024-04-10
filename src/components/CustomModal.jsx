import React from 'react'
import './CustomModal.css'
import { useSelector } from 'react-redux';

const CustomModal = ({id,popup,Setpopup}) => {
  console.log('id is in modal page is',id);
  console.log('pop up in modal page is ',popup);
  console.log('setpupup value is ',Setpopup);

  const allUser= useSelector((state)=>state.app.user);
  console.log('******',allUser);
  const singleUser= allUser.filter((c)=>c.id === id);
  console.log('singleuser is -->',singleUser)
  console.log('single user',singleUser);
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={()=>Setpopup(false)}> Close</button>
            <h2>{singleUser[0].name}</h2>
            <h3>{singleUser[0].age}</h3>
            <h3>{singleUser[0].email}</h3>
        </div>
    </div>
  )
}

export default CustomModal